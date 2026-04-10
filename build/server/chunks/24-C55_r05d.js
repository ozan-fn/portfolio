import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
import { n as fail } from "./exports-kBK34q0P.js";
import { n as uploadImage, t as deleteFile } from "./storage-Dtct7ClG.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/settings/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
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
//#region .svelte-kit/adapter-bun/nodes/24.js
const index = 24;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-4KC9bsUD.js")).default;
const server_id = "src/routes/(protected)/dashboard/settings/+page.server.ts";
const imports = [
	"_app/immutable/nodes/24.BJNFkTVt.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/Dr_zM3p0.js",
	"_app/immutable/chunks/Cw5cvJPR.js",
	"_app/immutable/chunks/DZbCXLBc.js",
	"_app/immutable/chunks/e11Tx_iV.js",
	"_app/immutable/chunks/BmL9q_GQ.js",
	"_app/immutable/chunks/BQkCsZss.js",
	"_app/immutable/chunks/BKntPBgS.js",
	"_app/immutable/chunks/PMFTZqdj.js",
	"_app/immutable/chunks/Clz0Wp70.js",
	"_app/immutable/chunks/CZFnYrdz.js",
	"_app/immutable/chunks/BVIwtvWp.js",
	"_app/immutable/chunks/DKGcMd31.js",
	"_app/immutable/chunks/D_xzolrM.js",
	"_app/immutable/chunks/WmFGqyHH.js",
	"_app/immutable/chunks/DV9cdH3R.js",
	"_app/immutable/chunks/CCnBCYaM.js",
	"_app/immutable/chunks/DudHFfjW.js",
	"_app/immutable/chunks/Cno8UwTT.js",
	"_app/immutable/chunks/DQO-p9jb.js",
	"_app/immutable/chunks/C6sHDagH.js",
	"_app/immutable/chunks/CpE6MGa8.js",
	"_app/immutable/chunks/qinMVjST.js",
	"_app/immutable/chunks/B9WTJlVd.js",
	"_app/immutable/chunks/DvOG7n1n.js",
	"_app/immutable/chunks/eq5xT-5j.js",
	"_app/immutable/chunks/BF1_reaH.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=24-C55_r05d.js.map