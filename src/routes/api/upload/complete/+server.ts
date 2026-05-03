import { json, error } from '@sveltejs/kit';
import prisma from '$lib/prisma';

export async function POST({ request }) {
  try {
    const { fileId } = await request.json();

    if (!fileId) {
      throw error(400, 'File ID is required');
    }

    // Update file record to mark as uploaded
    const fileRecord = await prisma.temporaryFile.update({
      where: { id: fileId },
      data: {
        updatedAt: new Date(),
      },
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
    console.error('Error completing upload:', err);
    throw error(500, 'Failed to complete upload');
  }
}