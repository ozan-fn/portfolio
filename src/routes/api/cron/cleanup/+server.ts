import { json, error, type RequestHandler } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import { deleteFile } from '$lib/storage';
import { rateLimit } from '$lib/rate-limit';

// Tanpa auth, jadi dibatasi per IP supaya tidak bisa dipakai buat DoS.
const LIMIT = 30;
const WINDOW_MS = 60 * 60 * 1000;
// Satu kali jalan menghapus maksimal sekian file; sisanya dijalankan berikutnya.
const BATCH = 200;

const run: RequestHandler = async (event) => {
  const ip = clientIp(event);
  const limited = rateLimit(`cron-cleanup:${ip}`, LIMIT, WINDOW_MS);

  if (!limited.ok) {
    return json(
      { success: false, message: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(limited.retryAfterSeconds) } },
    );
  }

  try {
    const now = new Date();
    const expired = await prisma.temporaryFile.findMany({
      where: { expiresAt: { lt: now } },
      take: BATCH,
      select: { id: true, filePath: true },
    });

    const paths = [...new Set(expired.map((file) => file.filePath))];

    // Satu objek bisa dipakai beberapa record (file identik). Jangan hapus
    // objek yang masih dipakai record yang belum expired.
    const stillUsed = paths.length
      ? await prisma.temporaryFile.findMany({
          where: { filePath: { in: paths }, expiresAt: { gt: now } },
          select: { filePath: true },
        })
      : [];
    const protectedPaths = new Set(stillUsed.map((row) => row.filePath));

    const deletedIds: string[] = [];
    const handledPaths = new Set<string>();
    let failed = 0;

    for (const file of expired) {
      // Hapus objek di Tigris dulu (sekali per path); kalau gagal, record
      // dibiarkan untuk run berikutnya.
      if (!protectedPaths.has(file.filePath) && !handledPaths.has(file.filePath)) {
        handledPaths.add(file.filePath);
        if (!(await deleteFile(file.filePath))) {
          failed += 1;
          continue;
        }
      }
      deletedIds.push(file.id);
    }

    if (deletedIds.length > 0) {
      await prisma.temporaryFile.deleteMany({ where: { id: { in: deletedIds } } });
    }

    return json({
      success: true,
      checked: expired.length,
      deleted: deletedIds.length,
      failed,
      hasMore: expired.length === BATCH,
    });
  } catch (err) {
    console.error('Cron cleanup error:', err);
    throw error(500, 'Cleanup failed');
  }
};

export const GET = run;
export const POST = run;

function clientIp(event: Parameters<RequestHandler>[0]): string {
  try {
    return event.getClientAddress();
  } catch {
    return 'unknown';
  }
}
