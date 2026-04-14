import { t as private_env } from "./shared-server-D--cyMsO.js";
import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
//#region .svelte-kit/adapter-bun/chunks/storage.js
var s3Client = new S3Client({
	region: "auto",
	endpoint: private_env.AWS_ENDPOINT_URL || "https://t3.storage.dev",
	credentials: {
		accessKeyId: private_env.AWS_ACCESS_KEY_ID || "",
		secretAccessKey: private_env.AWS_SECRET_ACCESS_KEY || ""
	}
});
var BUCKET_NAME = private_env.AWS_BUCKET_NAME || "zan68";
/**
* Helper untuk menghapus file dari storage berdasarkan Key
* Biar gak numpuk sampah di bucket dek.
*/
async function deleteFile(key) {
	if (!key) return;
	try {
		let finalKey = key;
		if (key.startsWith("http")) finalKey = new URL(key).pathname.substring(1);
		if (!finalKey) return;
		const command = new DeleteObjectCommand({
			Bucket: BUCKET_NAME,
			Key: finalKey
		});
		await s3Client.send(command);
	} catch (error) {
		console.error("Gagal hapus file di storage dek:", error);
	}
}
/**
* Helper untuk upload file langsung ke S3/Tigris dari server-side
* Mengembalikan KEY file saja, bukan full URL.
*/
async function uploadFile(file, fileName, contentType) {
	try {
		const command = new PutObjectCommand({
			Bucket: BUCKET_NAME,
			Key: fileName,
			Body: file,
			ContentType: contentType
		});
		await s3Client.send(command);
		return fileName;
	} catch (error) {
		console.error("Gagal upload ke storage dek:", error);
		throw new Error("Upload failed");
	}
}
/**
* Helper khusus untuk upload gambar (blog, profile, projects, certificates)
* Extension otomatis diambil dari contentType biar nggak ribet dek.
*/
async function uploadImage(file, type, contentType) {
	const extension = contentType.split("/").pop()?.split("+")[0] || "jpg";
	return await uploadFile(file, `${type}/${Date.now()}-${Math.random().toString(36).substring(7)}.${extension}`, contentType);
}
//#endregion
export { uploadFile as n, uploadImage as r, deleteFile as t };

//# sourceMappingURL=storage-DPitLlQb.js.map