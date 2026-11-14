import { json, error, isHttpError } from '@sveltejs/kit';
import { verifyUploadToken } from '$lib/upload-token';
import { env } from '$env/dynamic/private';
import prisma from '$lib/prisma';
import { deleteFile } from '$lib/storage';

export async function DELETE({ params, request, locals }) {
  const { fileId } = params;
  if (!fileId) throw error(400, 'File ID is required');

  const ownsFile =
    !!locals.user ||
    verifyUploadToken(
      fileId,
      request.headers.get('x-upload-token'),
      env.BETTER_AUTH_SECRET || '',
    );
  if (!ownsFile) throw error(403, 'Not allowed to delete this file');

  try {
    const fileRecord = await prisma.temporaryFile.findUnique({ where: { id: fileId } });
    if (!fileRecord) throw error(404, 'File not found');

    // Kalau S3 gagal, record DB dibiarkan supaya file tidak jadi orphan.
    if (!(await deleteFile(fileRecord.filePath))) {
      throw error(502, 'Failed to delete file from storage');
    }

    await prisma.temporaryFile.delete({ where: { id: fileId } });

    return json({ success: true, message: 'File deleted successfully' });
  } catch (err) {
    if (isHttpError(err)) throw err;
    console.error('Error deleting file:', err);
    throw error(500, 'Failed to delete file');
  }
}
