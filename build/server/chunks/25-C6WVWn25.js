import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-CP5mV9z4.js";
import { r as uploadImage, t as deleteFile } from "./storage-DPitLlQb.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/settings/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
var load = async ({ locals }) => {
	return { user: locals.user };
};
var actions = {
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
//#region .svelte-kit/adapter-bun/nodes/25.js
const index = 25;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-BaBSmobQ.js")).default;
const server_id = "src/routes/(protected)/dashboard/settings/+page.server.ts";
const imports = [
	"_app/immutable/nodes/25.CTEBT6e5.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/DvK-pzR52.js",
	"_app/immutable/chunks/BrgG1I03.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/DUDAWf8x.js",
	"_app/immutable/chunks/Djsqfsva.js",
	"_app/immutable/chunks/Cjk2neuu.js",
	"_app/immutable/chunks/BuhVy8Hz2.js",
	"_app/immutable/chunks/CJR0yioS.js",
	"_app/immutable/chunks/tpCMofHw.js",
	"_app/immutable/chunks/CRnF3_Wm.js",
	"_app/immutable/chunks/D_D-TXRd.js",
	"_app/immutable/chunks/_GW2ySG0.js",
	"_app/immutable/chunks/Lx8YHk-i.js",
	"_app/immutable/chunks/CTBJwqr_.js",
	"_app/immutable/chunks/CWOK_54O.js",
	"_app/immutable/chunks/BA9jlg-s2.js",
	"_app/immutable/chunks/Cwjh7MkQ.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=25-C6WVWn25.js.map