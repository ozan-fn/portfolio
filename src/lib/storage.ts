import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from "$env/dynamic/private";

// Konfigurasi S3 Client untuk Tigris/S3 Compatible
const s3Client = new S3Client({
  region: "auto",
  endpoint: env.AWS_ENDPOINT_URL || "https://t3.storage.dev",
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY || "",
  },
});

const BUCKET_NAME = env.AWS_BUCKET_NAME || "zan68";

/**
 * Helper untuk menghapus file dari storage berdasarkan Key.
 * Mengembalikan false kalau gagal, supaya pemanggil bisa membatalkan
 * penghapusan record DB dan file tidak jadi orphan.
 */
export async function deleteFile(key: string | null | undefined): Promise<boolean> {
  if (!key) return true;

  try {
    let finalKey = key;

    // Jika yang dikirim URL lengkap, ekstrak Key-nya saja
    if (key.startsWith("http")) {
      const url = new URL(key);
      finalKey = url.pathname.substring(1);
    }

    if (!finalKey) return true;

    const command = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: finalKey,
    });

    await s3Client.send(command);
    return true;
  } catch (error) {
    console.error("Gagal hapus file di storage dek:", error);
    return false;
  }
}

/** Cek apakah objek benar-benar ada (dipakai sebelum dedupe / setelah upload). */
export async function headObject(key: string): Promise<{ exists: boolean; size: number | null }> {
  try {
    const res = await s3Client.send(new HeadObjectCommand({ Bucket: BUCKET_NAME, Key: key }));
    return { exists: true, size: res.ContentLength ?? null };
  } catch (error) {
    const name = (error as { name?: string }).name;
    if (name === "NotFound" || name === "NoSuchKey") return { exists: false, size: null };
    throw error;
  }
}

/** Stream an object from storage (used to serve private/temporary files). */
export async function getObject(key: string) {
  return await s3Client.send(
    new GetObjectCommand({ Bucket: BUCKET_NAME, Key: key }),
  );
}

/**
 * Helper untuk upload file langsung ke S3/Tigris dari server-side
 * Mengembalikan KEY file saja, bukan full URL.
 */
export async function uploadFile(file: Buffer | Uint8Array, fileName: string, contentType: string) {
  try {
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fileName,
      Body: file,
      ContentType: contentType,
    });

    await s3Client.send(command);

    // SEKARANG: Hanya mengembalikan Key (misal: "profile/123.jpg")
    // Full URL dihandle oleh getFileUrl() agar migrasi bucket lebih gampang dek.
    return fileName;
  } catch (error) {
    console.error("Gagal upload ke storage dek:", error);
    throw new Error("Upload failed");
  }
}

/**
 * Helper untuk generate Presigned URL jika ingin upload langsung dari browser
 */
export async function getPresignedUploadUrl(fileName: string, contentType: string) {
  try {
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fileName,
      ContentType: contentType,
    });

    return await getSignedUrl(s3Client, command, { expiresIn: 3600 });
  } catch (error) {
    console.error("Gagal bikin presigned URL dek:", error);
    throw new Error("Presigned URL generation failed");
  }
}

/**
 * Helper khusus untuk upload gambar (blog, profile, projects, certificates)
 * Extension otomatis diambil dari contentType biar nggak ribet dek.
 */
export async function uploadImage(file: Buffer | Uint8Array, type: "blog" | "profile" | "projects" | "certificates", contentType: string) {
  const extension = contentType.split("/").pop()?.split("+")[0] || "jpg";
  const fileName = `${type}/${Date.now()}-${Math.random().toString(36).substring(7)}.${extension}`;

  return await uploadFile(file, fileName, contentType);
}

export default s3Client;
