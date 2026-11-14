import { json, error, isHttpError } from '@sveltejs/kit';
import { verifyUploadToken } from '$lib/upload-token';
import { env } from '$env/dynamic/private';
import prisma from '$lib/prisma';
import { headObject } from '$lib/storage';

export async function POST({ request, locals }) {
  const body = await request.json().catch(() => null);
  if (!body) throw error(400, 'Invalid JSON body');

  const { fileId, deleteToken } = body;
  if (!fileId) throw error(400, 'File ID is required');

  const ownsFile =
    !!locals.user ||
    verifyUploadToken(fileId, deleteToken, env.BETTER_AUTH_SECRET || '');
  if (!ownsFile) throw error(403, 'Not allowed to complete this upload');

  try {
    const record = await prisma.temporaryFile.findUnique({ where: { id: fileId } });
    if (!record) throw error(404, 'File not found');

    // Verifikasi ke storage: tanpa ini, upload yang gagal (mis. 403 dari
    // penyedia) tetap menghasilkan link yang mati.
    const object = await headObject(record.filePath);
    if (!object.exists) {
      await prisma.temporaryFile.delete({ where: { id: fileId } });
      throw error(409, 'File tidak ditemukan di storage setelah upload. Cek izin/kredensial storage.');
    }

    if (object.size !== null && object.size !== record.fileSize) {
      await prisma.temporaryFile.delete({ where: { id: fileId } });
      throw error(400, 'Ukuran file di storage tidak cocok dengan yang dikirim');
    }

    const fileRecord = await prisma.temporaryFile.update({
      where: { id: fileId },
      data: { updatedAt: new Date() },
    });

    return json({
      success: true,
      file: {
        id: fileRecord.id,
        filename: fileRecord.filename,
        uploadUrl: fileRecord.uploadUrl,
        expiresAt: fileRecord.expiresAt,
      },
    });
  } catch (err) {
    if (isHttpError(err)) throw err;
    console.error('Error completing upload:', err);
    throw error(500, 'Failed to complete upload');
  }
}
