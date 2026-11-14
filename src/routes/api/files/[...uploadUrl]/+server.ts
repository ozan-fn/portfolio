import { error, isHttpError, redirect } from '@sveltejs/kit';
import { Readable } from 'node:stream';
import prisma from '$lib/prisma';
import { getObject } from '$lib/storage';
import { getFileUrl } from '$lib/storage.client';
import { verifyPassword } from '$lib/password';

// Catch-all karena key S3 berbentuk `tmp/temp-xxx.ext`.
export async function GET({ params, url }) {
  const { uploadUrl } = params;
  if (!uploadUrl) throw error(400, 'Upload URL is required');

  let fileRecord;
  try {
    fileRecord = await prisma.temporaryFile.findUnique({ where: { uploadUrl } });
  } catch (err) {
    console.error('Error reading file record:', err);
    throw error(500, 'Failed to read file');
  }

  if (!fileRecord) throw error(404, 'File not found');
  if (new Date() > fileRecord.expiresAt) throw error(410, 'File has expired');

  if (fileRecord.password && !verifyPassword(url.searchParams.get('password') ?? '', fileRecord.password)) {
    return passwordPrompt();
  }

  // File biasa diambil langsung dari Tigris, tidak lewat aplikasi.
  // File ber-password tetap di-stream di sini, kalau di-redirect proteksinya hilang.
  if (!fileRecord.password) throw redirect(302, getFileUrl(fileRecord.filePath));

  try {
    const object = await getObject(fileRecord.filePath);
    if (!object.Body) throw error(502, 'Empty file');

    return new Response(Readable.toWeb(object.Body as Readable) as ReadableStream, {
      headers: {
        'Content-Type': object.ContentType ?? fileRecord.mimeType,
        'Content-Length': String(object.ContentLength ?? fileRecord.fileSize),
        'Content-Disposition': `inline; filename="${safeFilename(fileRecord.filename)}"`,
        'Cache-Control': 'private, max-age=0, must-revalidate',
      },
    });
  } catch (err) {
    if (isHttpError(err)) throw err;
    if ((err as { name?: string }).name === 'NoSuchKey') throw error(404, 'File not found');
    console.error('Error streaming file:', err);
    throw error(500, 'Failed to access file');
  }
}

function safeFilename(name: string): string {
  return name.replace(/[^\w.\- ]/g, '_');
}

function passwordPrompt() {
  return new Response(
    `<!DOCTYPE html>
<html>
<head>
  <title>Password Required</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f5f5f5; }
    .container { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); max-width: 400px; width: 100%; }
    .form-group { margin-bottom: 1rem; }
    label { display: block; margin-bottom: 0.5rem; font-weight: bold; }
    input { width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
    button { width: 100%; padding: 0.75rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
    button:hover { background: #0056b3; }
  </style>
</head>
<body>
  <div class="container">
    <h2>&#128274; Password Protected File</h2>
    <p>This file requires a password to access.</p>
    <form method="GET">
      <div class="form-group">
        <label for="password">Enter Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button type="submit">Access File</button>
    </form>
  </div>
</body>
</html>`,
    { status: 401, headers: { 'Content-Type': 'text/html' } },
  );
}
