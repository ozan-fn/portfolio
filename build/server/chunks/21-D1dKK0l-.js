import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { n as fail } from "./exports-B42uMcC-.js";
import { t as private_env } from "./shared-server-lzo45p9O.js";
import { t as prisma } from "./prisma-BXY-hGZz.js";
import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/settings/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
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
const load = async ({ locals }) => {
	return { user: locals.user };
};
const actions = {
	updateProfile: async ({ request, locals }) => {
		if (!locals.user) return fail(401, { message: "Gak ada session, login dulu dek." });
		const name = (await request.formData()).get("name");
		if (!name || name.trim().length < 2) return fail(400, { message: "Nama kependekan atau kosong tuh dek." });
		try {
			await prisma.user.update({
				where: { id: locals.user.id },
				data: { name: name.trim() }
			});
			return {
				success: true,
				message: "Nama berhasil diupdate! Makin tamvan."
			};
		} catch (e) {
			return fail(500, { message: "DB lagi pusing, coba lagi nanti dek." });
		}
	},
	uploadAvatar: async ({ request, locals }) => {
		if (!locals.user) return fail(401, { message: "Gak ada session, login dulu dek." });
		const avatar = (await request.formData()).get("avatar");
		if (!avatar || avatar.size === 0) return fail(400, { message: "Mana fotonya dek? Kosong tuh." });
		if (!avatar.type.startsWith("image/")) return fail(400, { message: "Harus gambar ya dek, jangan aneh-aneh." });
		try {
			const newImageKey = await uploadImage(Buffer.from(await avatar.arrayBuffer()), "profile", avatar.type);
			const oldImageKey = locals.user.image;
			await prisma.user.update({
				where: { id: locals.user.id },
				data: { image: newImageKey }
			});
			if (oldImageKey) await deleteFile(oldImageKey).catch((err) => console.error("S3 Cleanup Error:", err));
			return {
				success: true,
				message: "Foto profil diganti! S3 udah bersih dek."
			};
		} catch (e) {
			return fail(500, { message: "Storage lagi penuh atau meriang dek." });
		}
	}
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/21.js
const index = 21;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-DdnYzNgO.js")).default;
const server_id = "src/routes/(protected)/dashboard/settings/+page.server.ts";
const imports = [
	"_app/immutable/nodes/21.BEpSeVpF.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/VvJ03jQm.js",
	"_app/immutable/chunks/Djhkul0P.js",
	"_app/immutable/chunks/aMc0A5rF.js",
	"_app/immutable/chunks/Bjwghsge.js",
	"_app/immutable/chunks/DCbJqxLu.js",
	"_app/immutable/chunks/DPwYecWG.js",
	"_app/immutable/chunks/CpB61uSw.js",
	"_app/immutable/chunks/Dcpp0Cf0.js",
	"_app/immutable/chunks/DQtFMUgL.js",
	"_app/immutable/chunks/BiW6gY5k.js",
	"_app/immutable/chunks/CXlMI2MO.js",
	"_app/immutable/chunks/C4APV2ih.js",
	"_app/immutable/chunks/D-4t4q5Y.js",
	"_app/immutable/chunks/CDVz0R2P.js",
	"_app/immutable/chunks/ujjKYITF.js",
	"_app/immutable/chunks/wDDnU9Kk.js",
	"_app/immutable/chunks/LBiaOXUj.js",
	"_app/immutable/chunks/D1WYqoB6.js",
	"_app/immutable/chunks/6QoXeyAT.js",
	"_app/immutable/chunks/0GSJgK-F.js",
	"_app/immutable/chunks/D79W2KkM.js",
	"_app/immutable/chunks/dLzUUG9l.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=21-D1dKK0l-.js.map