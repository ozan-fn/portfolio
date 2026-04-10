import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
import { n as fail } from "./exports-kBK34q0P.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/categories/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
const load = async () => {
	return { categories: await prisma.category.findMany({
		include: { _count: { select: { posts: true } } },
		orderBy: { name: "asc" }
	}) };
};
const actions = {
	create: async ({ request }) => {
		const name = (await request.formData()).get("name");
		if (!name || name.length < 2) return fail(400, { message: "Category name must be at least 2 characters" });
		const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
		try {
			await prisma.category.create({ data: {
				name,
				slug
			} });
			return { success: true };
		} catch (err) {
			console.error(err);
			return fail(500, { message: "Failed to create category (name might already exist)" });
		}
	},
	update: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get("id");
		const name = formData.get("name");
		if (!id || !name || name.length < 2) return fail(400, { message: "Invalid category data" });
		const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
		try {
			await prisma.category.update({
				where: { id },
				data: {
					name,
					slug
				}
			});
			return { success: true };
		} catch (err) {
			console.error(err);
			return fail(500, { message: "Failed to update category" });
		}
	},
	delete: async ({ request }) => {
		const id = (await request.formData()).get("id");
		if (!id) return fail(400, { message: "ID is required" });
		try {
			const category = await prisma.category.findUnique({
				where: { id },
				include: { _count: { select: { posts: true } } }
			});
			if (category?._count.posts && category._count.posts > 0) return fail(400, { message: "Cannot delete category that has blog posts" });
			await prisma.category.delete({ where: { id } });
			return { success: true };
		} catch (err) {
			console.error(err);
			return fail(500, { message: "Failed to delete category" });
		}
	}
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/15.js
const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-BDSdmYZ0.js")).default;
const server_id = "src/routes/(protected)/dashboard/categories/+page.server.ts";
const imports = [
	"_app/immutable/nodes/15.B7TX3aO0.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/COJEdS0d.js",
	"_app/immutable/chunks/Czy_XTH7.js",
	"_app/immutable/chunks/CkNGqTXG.js",
	"_app/immutable/chunks/CYTOpgq_.js",
	"_app/immutable/chunks/BHCixpY4.js",
	"_app/immutable/chunks/CRRNmWFo.js",
	"_app/immutable/chunks/Dqlc-nSA.js",
	"_app/immutable/chunks/Dxk3ACRs.js",
	"_app/immutable/chunks/Dp8XMXav.js",
	"_app/immutable/chunks/BAbGFpV-.js",
	"_app/immutable/chunks/BcNBi2Kp.js",
	"_app/immutable/chunks/DUDe5kkv.js",
	"_app/immutable/chunks/D4bx8ejP.js",
	"_app/immutable/chunks/DF4J2jId.js",
	"_app/immutable/chunks/CKEPu5Bg.js",
	"_app/immutable/chunks/rcgDbsqO.js",
	"_app/immutable/chunks/C4rnVyuu.js",
	"_app/immutable/chunks/BHETGD_j.js",
	"_app/immutable/chunks/B3j_9PW7.js",
	"_app/immutable/chunks/eH8bvPBN.js",
	"_app/immutable/chunks/CXTc4z71.js",
	"_app/immutable/chunks/DrUL6D9l.js",
	"_app/immutable/chunks/CUnQHe78.js",
	"_app/immutable/chunks/DQfJ99m4.js",
	"_app/immutable/chunks/CsraHWEC.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=15-B_K_yfDh.js.map