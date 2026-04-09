import { f as fail } from './index-B2LGyy1l.js';
import { DeleteObjectCommand, S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { p as private_env } from './shared-server-BmU87nph.js';
import { p as prisma } from './prisma-DiHbNsVh.js';
import 'fs';
import 'path';
import 'os';
import 'crypto';
import '@prisma/client';
import '@prisma/adapter-neon';

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
    if (key.startsWith("http")) {
      const url = new URL(key);
      finalKey = url.pathname.substring(1);
    }
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
  const fileName = `${type}/${Date.now()}-${Math.random().toString(36).substring(7)}.${extension}`;
  return await uploadFile(file, fileName, contentType);
}
const load = async ({ locals }) => {
  return {
    user: locals.user
  };
};
const actions = {
  updateProfile: async ({ request, locals }) => {
    if (!locals.user) return fail(401, { message: "Gak ada session, login dulu dek." });
    const formData = await request.formData();
    const name = formData.get("name");
    if (!name || name.trim().length < 2) {
      return fail(400, { message: "Nama kependekan atau kosong tuh dek." });
    }
    try {
      await prisma.user.update({
        where: { id: locals.user.id },
        data: { name: name.trim() }
      });
      return { success: true, message: "Nama berhasil diupdate! Makin tamvan." };
    } catch (e) {
      return fail(500, { message: "DB lagi pusing, coba lagi nanti dek." });
    }
  },
  uploadAvatar: async ({ request, locals }) => {
    if (!locals.user) return fail(401, { message: "Gak ada session, login dulu dek." });
    const formData = await request.formData();
    const avatar = formData.get("avatar");
    if (!avatar || avatar.size === 0) {
      return fail(400, { message: "Mana fotonya dek? Kosong tuh." });
    }
    if (!avatar.type.startsWith("image/")) {
      return fail(400, { message: "Harus gambar ya dek, jangan aneh-aneh." });
    }
    try {
      const buffer = Buffer.from(await avatar.arrayBuffer());
      const newImageKey = await uploadImage(buffer, "profile", avatar.type);
      const oldImageKey = locals.user.image;
      await prisma.user.update({
        where: { id: locals.user.id },
        data: { image: newImageKey }
      });
      if (oldImageKey) {
        await deleteFile(oldImageKey).catch((err) => console.error("S3 Cleanup Error:", err));
      }
      return { success: true, message: "Foto profil diganti! S3 udah bersih dek." };
    } catch (e) {
      return fail(500, { message: "Storage lagi penuh atau meriang dek." });
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 21;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ByIpXOGj.js')).default;
const server_id = "src/routes/(protected)/dashboard/settings/+page.server.ts";
const imports = ["_app/immutable/nodes/21.BF3WKKrE.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/VvJ03jQm.js","_app/immutable/chunks/Djhkul0P.js","_app/immutable/chunks/aMc0A5rF.js","_app/immutable/chunks/Bjwghsge.js","_app/immutable/chunks/DCbJqxLu.js","_app/immutable/chunks/B09lQ2ex.js","_app/immutable/chunks/BUb5hhcM.js","_app/immutable/chunks/Dcpp0Cf0.js","_app/immutable/chunks/DQtFMUgL.js","_app/immutable/chunks/BiW6gY5k.js","_app/immutable/chunks/CXlMI2MO.js","_app/immutable/chunks/C4APV2ih.js","_app/immutable/chunks/D-4t4q5Y.js","_app/immutable/chunks/CDVz0R2P.js","_app/immutable/chunks/ujjKYITF.js","_app/immutable/chunks/wDDnU9Kk.js","_app/immutable/chunks/LBiaOXUj.js","_app/immutable/chunks/D1WYqoB6.js","_app/immutable/chunks/6QoXeyAT.js","_app/immutable/chunks/0GSJgK-F.js","_app/immutable/chunks/D79W2KkM.js","_app/immutable/chunks/dLzUUG9l.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=21-BfbMKB0M.js.map
