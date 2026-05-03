import { json, error } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import { deleteFile } from '$lib/storage';

export async function DELETE({ params }) {
  try {
    const { fileId } = params;

    if (!fileId) {
      throw error(400, 'File ID is required');
    }

    // Find file record
    const fileRecord = await prisma.temporaryFile.findUnique({
      where: { id: fileId },
    });

    if (!fileRecord) {
      throw error(404, 'File not found');
    }

    // Delete from S3 storage
    await deleteFile(fileRecord.filePath);

    // Delete from database
    await prisma.temporaryFile.delete({
      where: { id: fileId },
    });

    return json({
      success: true,
      message: 'File deleted successfully',
    });

  } catch (err) {
    console.error('Error deleting file:', err);
    throw error(500, 'Failed to delete file');
  }
}