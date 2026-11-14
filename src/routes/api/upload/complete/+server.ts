import { json, error, isHttpError } from '@sveltejs/kit';
import { verifyUploadToken } from '$lib/upload-token';
import { env } from '$env/dynamic/private';
import prisma from '$lib/prisma';

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
