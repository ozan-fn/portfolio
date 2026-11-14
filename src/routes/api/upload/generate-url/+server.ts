import { json, error, isHttpError } from '@sveltejs/kit';
import { getPresignedUploadUrl, headObject } from '$lib/storage';
import { hashPassword } from '$lib/password';
import { createUploadToken } from '$lib/upload-token';
import { buildAccessPath, buildStorageKey, extensionOf, HASH_PATTERN, randomStorageKey, suffixDigitsFor, withNumberSuffix } from '$lib/upload-file';
import { env } from '$env/dynamic/private';
import prisma from '$lib/prisma';
import { randomBytes } from 'crypto';

const EXPIRY_MS: Record<string, number> = {
  '1h': 3_600_000,
  '24h': 86_400_000,
  '7d': 604_800_000,
  '30d': 2_592_000_000,
};

export async function POST({ request }) {
  const body = await request.json().catch(() => null);
  if (!body) throw error(400, 'Invalid JSON body');

  const {
    filename,
    originalFilename,
    fileSize,
    mimeType,
    expiryTime = '24h',
    password,
    customFilename,
    fileHash,
  } = body;

  // Validasi di luar try, supaya error 400 tidak tertelan jadi 500.
  if (!filename || typeof filename !== 'string') throw error(400, 'Missing required fields');
  if (!Number.isInteger(fileSize) || fileSize <= 0) throw error(400, 'Invalid file size');
  if (!mimeType || typeof mimeType !== 'string') throw error(400, 'Missing required fields');
  if (!(expiryTime in EXPIRY_MS)) throw error(400, 'Invalid expiry time');

  const hash =
    typeof fileHash === 'string' && fileHash.trim() ? fileHash.trim().toLowerCase() : undefined;
  if (hash && !HASH_PATTERN.test(hash)) throw error(400, 'Invalid file hash');

  const ext = extensionOf(filename);
  const expiresAt = new Date(Date.now() + EXPIRY_MS[expiryTime]);
  const displayName = customFilename || filename;

  try {
    // File identik yang belum expired: URL & masa berlaku baru, tanpa upload ulang.
    // Objeknya harus benar-benar ada, kalau tidak link-nya jadi mati.
    const candidate = hash
      ? await prisma.temporaryFile.findFirst({
          where: { fileHash: hash, expiresAt: { gt: new Date() } },
          orderBy: { createdAt: 'desc' },
        })
      : null;
    const existing = candidate && (await headObject(candidate.filePath)).exists ? candidate : null;

    if (existing) {
      // Panjang angka pada nama mengikuti jumlah duplikat file yang sama.
      const duplicates = await prisma.temporaryFile.count({ where: { fileHash: hash } });
      const duplicate = await prisma.temporaryFile.create({
        data: {
          filename: withNumberSuffix(displayName, suffixDigitsFor(duplicates)),
          originalFilename: originalFilename || filename,
          filePath: existing.filePath,
          fileSize,
          mimeType,
          expiryTime,
          password: password ? hashPassword(String(password)) : null,
          fileHash: hash,
          uploadUrl: buildAccessPath(displayName, randomBytes(4).toString('hex')),
          expiresAt,
        },
      });

      return json({
        success: true,
        deduped: true,
        uploadUrl: duplicate.uploadUrl,
        fileId: duplicate.id,
        deleteToken: createUploadToken(duplicate.id, env.BETTER_AUTH_SECRET || ''),
        expiresAt: duplicate.expiresAt,
      });
    }

    // Key dibuat dari nama file + hash; hanya fallback ke key acak untuk klien lama.
    const storageKey = hash
      ? buildStorageKey(filename, hash)
      : randomStorageKey(ext, () => randomBytes(8).toString('hex'));

    const presignedUrl = await getPresignedUploadUrl(storageKey, mimeType);

    const fileRecord = await prisma.temporaryFile.create({
      data: {
        filename: displayName,
        originalFilename: originalFilename || filename,
        filePath: storageKey,
        fileSize,
        mimeType,
        expiryTime,
        password: password ? hashPassword(String(password)) : null,
        fileHash: hash ?? null,
        uploadUrl: buildAccessPath(displayName, randomBytes(4).toString('hex')),
        expiresAt,
      },
    });

    return json({
      success: true,
      deduped: false,
      presignedUrl,
      uploadUrl: fileRecord.uploadUrl,
      fileId: fileRecord.id,
      deleteToken: createUploadToken(fileRecord.id, env.BETTER_AUTH_SECRET || ''),
      expiresAt: fileRecord.expiresAt,
    });
  } catch (err) {
    if (isHttpError(err)) throw err;
    console.error('Error generating upload URL:', err);
    throw error(500, 'Failed to generate upload URL');
  }
}
