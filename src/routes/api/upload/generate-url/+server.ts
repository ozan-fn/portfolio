import { json, error } from '@sveltejs/kit';
import { getPresignedUploadUrl } from '$lib/storage';
import prisma from '$lib/prisma';
import { randomBytes } from 'crypto';

export async function POST({ request }) {
  try {
    const {
      filename,
      originalFilename,
      fileSize,
      mimeType,
      expiryTime,
      password,
      customFilename
    } = await request.json();

    // Validasi input
    if (!filename || !fileSize || !mimeType) {
      throw error(400, 'Missing required fields');
    }

    // Generate unique upload URL slug
    const uploadUrl = `temp-${randomBytes(8).toString('hex')}-${filename}`;

    // Calculate expiry datetime
    const getExpiryMs = (expiry: string): number => {
      switch (expiry) {
        case '1h': return 3600000;
        case '24h': return 24 * 3600000;
        case '7d': return 7 * 24 * 3600000;
        case '30d': return 30 * 24 * 3600000;
        default: return 24 * 3600000;
      }
    };

    const expiresAt = new Date(Date.now() + getExpiryMs(expiryTime || '24h'));

    // Generate presigned URL for direct upload to S3
    const presignedUrl = await getPresignedUploadUrl(uploadUrl, mimeType);

    // Save file metadata to database
    const fileRecord = await prisma.temporaryFile.create({
      data: {
        filename: customFilename || filename,
        originalFilename,
        filePath: uploadUrl, // This will be the S3 key
        fileSize,
        mimeType,
        expiryTime: expiryTime || '24h',
        password: password || null,
        uploadUrl,
        expiresAt,
      },
    });

    return json({
      success: true,
      presignedUrl,
      uploadUrl,
      fileId: fileRecord.id,
      expiresAt: fileRecord.expiresAt,
    });

  } catch (err) {
    console.error('Error generating upload URL:', err);
    throw error(500, 'Failed to generate upload URL');
  }
}