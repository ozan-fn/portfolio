import { json, error, redirect } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import { getFileUrl } from '$lib/storage.client';

export async function GET({ params, url, request }) {
  try {
    const { uploadUrl } = params;
    const password = url.searchParams.get('password');

    if (!uploadUrl) {
      throw error(400, 'Upload URL is required');
    }

    // Find file record
    const fileRecord = await prisma.temporaryFile.findUnique({
      where: { uploadUrl },
    });

    if (!fileRecord) {
      throw error(404, 'File not found');
    }

    // Check if file has expired
    if (new Date() > fileRecord.expiresAt) {
      throw error(410, 'File has expired');
    }

    // Check password if required
    if (fileRecord.password && fileRecord.password !== password) {
      // Return password prompt page
      return new Response(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Password Required</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f5f5f5; }
            .container { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); max-width: 400px; width: 100%; }
            .form-group { margin-bottom: 1rem; }
            label { display: block; margin-bottom: 0.5rem; font-weight: bold; }
            input { width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; }
            button { width: 100%; padding: 0.75rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
            button:hover { background: #0056b3; }
            .error { color: #dc3545; margin-bottom: 1rem; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>🔒 Password Protected File</h2>
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
        </html>
      `, {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    // Generate download URL from S3
    const downloadUrl = getFileUrl(fileRecord.filePath);

    // Redirect to the actual file
    throw redirect(302, downloadUrl);

  } catch (err) {
    if (err.status) {
      throw err; // Re-throw SvelteKit errors
    }
    console.error('Error accessing file:', err);
    throw error(500, 'Failed to access file');
  }
}