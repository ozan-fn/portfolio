import { t as private_env } from "./shared-server-lzo45p9O.js";
import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
//#region .svelte-kit/adapter-bun/chunks/storage.js
const s3Client = new S3Client({
	region: "auto",
	endpoint: private_env.AWS_ENDPOINT_URL || "https://t3.storage.dev",
	credentials: {
		accessKeyId: private_env.AWS_ACCESS_KEY_ID || "",
		secretAccessKey: private_env.AWS_SECRET_ACCESS_KEY || ""
	}
});
const BUCKET_NAME = private_env.AWS_BUCKET_NAME || "zan68";
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
async function uploadImage(file, type, contentType) {
	const extension = contentType.split("/").pop()?.split("+")[0] || "jpg";
	return await uploadFile(file, `${type}/${Date.now()}-${Math.random().toString(36).substring(7)}.${extension}`, contentType);
}
//#endregion
export { uploadImage as n, deleteFile as t };

//# sourceMappingURL=storage-Dtct7ClG.js.map