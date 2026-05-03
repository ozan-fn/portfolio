import { json, error } from '@sveltejs/kit';
import prisma from '$lib/prisma';

export async function GET({ url }) {
  try {
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const offset = parseInt(url.searchParams.get('offset') || '0');

    // Get recent uploads that haven't expired
    const files = await prisma.temporaryFile.findMany({
      where: {
        expiresAt: {
          gt: new Date(),
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
      skip: offset,
      select: {
        id: true,
        filename: true,
        originalFilename: true,
        fileSize: true,
        mimeType: true,
        expiryTime: true,
        uploadUrl: true,
        expiresAt: true,
        createdAt: true,
        password: true, // Include to check if protected
      },
    });

    // Format file sizes
    const formattedFiles = files.map(file => ({
      ...file,
      fileSizeFormatted: formatFileSize(file.fileSize),
      isProtected: !!file.password,
    }));

    return json({
      success: true,
      files: formattedFiles,
    });

  } catch (err) {
    console.error('Error fetching upload history:', err);
    throw error(500, 'Failed to fetch upload history');
  }
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}