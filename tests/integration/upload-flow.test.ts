import { afterAll, describe, expect, it } from "vitest";
import prisma from "$lib/prisma";
import { deleteFile } from "$lib/storage";
import { sha256Hex } from "$lib/upload-file";
import { POST as generateUrl } from "../../src/routes/api/upload/generate-url/+server";
import { POST as complete } from "../../src/routes/api/upload/complete/+server";
import { DELETE as deleteUpload } from "../../src/routes/api/upload/[fileId]/+server";
import { GET as filesRoute } from "../../src/routes/api/files/[...uploadUrl]/+server";

// Alur temp file end-to-end. Record & objek yang dibuat selalu dihapus lagi,
// jadi tidak meninggalkan data.
const enabled = !!process.env.INTEGRATION && !!process.env.AWS_ACCESS_KEY_ID;

const cleanup: { id?: string; key?: string } = {};

afterAll(async () => {
  if (cleanup.id) await prisma.temporaryFile.deleteMany({ where: { id: cleanup.id } });
  if (cleanup.key) await deleteFile(cleanup.key);
  await prisma.$disconnect();
});

describe.skipIf(!enabled)("alur temp file end-to-end", () => {
  it("upload → verifikasi → akses langsung ke Tigris → hapus", async () => {
    const content = `integration-${Date.now()}`;
    const fileHash = await sha256Hex(new Blob([content]));
    const filename = `IT ${Date.now()}.txt`;

    // 1. minta presigned URL
    const genRes = await generateUrl({
      request: new Request("http://localhost/api/upload/generate-url", {
        method: "POST",
        body: JSON.stringify({
          filename,
          originalFilename: filename,
          fileSize: content.length,
          mimeType: "text/plain",
          expiryTime: "1h",
          fileHash,
        }),
      }),
    } as any);
    const generated = await genRes.json();

    expect(genRes.status).toBe(200);
    expect(generated.deduped).toBe(false);
    // key storage mengikuti nama upload + hash
    expect(generated.uploadUrl).toMatch(/^tmp\/it-\d+-[a-f0-9]{8}\.txt$/);

    const record = await prisma.temporaryFile.findUnique({ where: { id: generated.fileId } });
    expect(record).not.toBeNull();
    cleanup.id = generated.fileId;
    cleanup.key = record!.filePath;
    expect(record!.filePath).toMatch(/^tmp\/it-\d+-[a-f0-9]{8}\.txt$/);
    expect(record!.fileHash).toBe(fileHash);

    // 2. upload ke Tigris lewat presigned URL
    const put = await fetch(generated.presignedUrl, {
      method: "PUT",
      headers: { "Content-Type": "text/plain" },
      body: content,
    });
    expect(put.status).toBe(200);

    // 3. verifikasi server (objek ada + ukuran cocok)
    const completeRes = await complete({
      request: new Request("http://localhost/api/upload/complete", {
        method: "POST",
        body: JSON.stringify({ fileId: generated.fileId, deleteToken: generated.deleteToken }),
      }),
      locals: {},
    } as any);
    expect(completeRes.status).toBe(200);

    // 4. akses: redirect langsung ke Tigris, lalu isinya benar
    const redirect = await filesRoute({
      params: { uploadUrl: generated.uploadUrl },
      url: new URL(`http://localhost/api/files/${generated.uploadUrl}`),
    } as any).then(
      () => null,
      (err: any) => err,
    );
    expect(redirect?.status).toBe(302);

    const direct = await fetch(redirect.location);
    expect(direct.status).toBe(200);
    expect(await direct.text()).toBe(content);

    // 5. hapus (pakai token kepemilikan)
    const delRes = await deleteUpload({
      params: { fileId: generated.fileId },
      request: new Request("http://localhost/api/upload/x", {
        method: "DELETE",
        headers: { "x-upload-token": generated.deleteToken },
      }),
      locals: {},
    } as any);

    expect(delRes.status).toBe(200);
    await expect(
      prisma.temporaryFile.findUnique({ where: { id: generated.fileId } }),
    ).resolves.toBeNull();

    const headAfter = await fetch(`https://zan68.t3.tigrisfiles.io/${record!.filePath}`, {
      method: "HEAD",
    });
    expect(headAfter.status).toBe(404);

    cleanup.id = undefined;
    cleanup.key = undefined;
  }, 30_000);
});
