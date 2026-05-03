import { json, error } from '@sveltejs/kit';
import { getPresignedUploadUrl } from '$lib/storage';
import { uploadFile } from '$lib/storage';
import prisma from '$lib/prisma';
import { randomBytes } from 'crypto';

export async function POST({ request }) {
  try {
    const formData = await request.formData();

    const file = formData.get('file') as File;
    const filename = formData.get('filename') as string;
    const originalFilename = formData.get('originalFilename') as string;
    const fileSize = parseInt(formData.get('fileSize') as string);
    const mimeType = formData.get('mimeType') as string;
    const expiryTime = formData.get('expiryTime') as string;
    const password = formData.get('password') as string;
    const customFilename = formData.get('customFilename') as string;

    // Validasi input
    if (!file || !filename || !fileSize || !mimeType) {
      throw error(400, 'Missing required fields');
    }

    // Generate unique upload URL slug with tmp/ prefix
    const uploadUrl = `tmp/temp-${randomBytes(8).toString('hex')}-${filename}`;

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

    // Convert file to buffer for upload
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload file to S3 storage
    await uploadFile(buffer, uploadUrl, mimeType);

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
      uploadUrl,
      fileId: fileRecord.id,
      expiresAt: fileRecord.expiresAt,
    });

  } catch (err) {
    console.error('Error uploading file:', err);
    throw error(500, 'Failed to upload file');
  }
}