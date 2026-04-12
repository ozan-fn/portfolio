import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
import { n as uploadImage, t as deleteFile } from "./storage-BUBCCRO1.js";
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
const component = async () => component_cache ??= (await import("./_page.svelte-5ADQXuNs.js")).default;
const server_id = "src/routes/(protected)/dashboard/settings/+page.server.ts";
const imports = [
	"_app/immutable/nodes/25.C07mgGMO.js",
	"_app/immutable/chunks/D1w_RFSq.js",
	"_app/immutable/chunks/DvK-pzR52.js",
	"_app/immutable/chunks/Be3d-_on.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/DImwKZpG.js",
	"_app/immutable/chunks/BO4m1HcR.js",
	"_app/immutable/chunks/CXSH-D7G.js",
	"_app/immutable/chunks/BBxKeQmi2.js",
	"_app/immutable/chunks/D1oRABRN.js",
	"_app/immutable/chunks/CvDZ79mX.js",
	"_app/immutable/chunks/DVnAbSuA.js",
	"_app/immutable/chunks/D4IVV97f.js",
	"_app/immutable/chunks/Dl2HO6Ng.js",
	"_app/immutable/chunks/CYm7iPyV.js",
	"_app/immutable/chunks/COlBZsny.js",
	"_app/immutable/chunks/CvyFHFpo.js",
	"_app/immutable/chunks/Bi3eUg9r2.js",
	"_app/immutable/chunks/fpRipbV0.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=25-B-kFU_ha.js.map