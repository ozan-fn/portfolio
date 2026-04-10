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
const component = async () => component_cache ??= (await import("./_page.svelte-Sr-ZnT3W.js")).default;
const server_id = "src/routes/(protected)/dashboard/categories/+page.server.ts";
const imports = [
	"_app/immutable/nodes/15.Dg2NeMuy.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/Dr_zM3p0.js",
	"_app/immutable/chunks/Cw5cvJPR.js",
	"_app/immutable/chunks/DZbCXLBc.js",
	"_app/immutable/chunks/e11Tx_iV.js",
	"_app/immutable/chunks/B9WTJlVd.js",
	"_app/immutable/chunks/BmL9q_GQ.js",
	"_app/immutable/chunks/BQkCsZss.js",
	"_app/immutable/chunks/BKntPBgS.js",
	"_app/immutable/chunks/PMFTZqdj.js",
	"_app/immutable/chunks/Clz0Wp70.js",
	"_app/immutable/chunks/C6sHDagH.js",
	"_app/immutable/chunks/CZp4nuAZ.js",
	"_app/immutable/chunks/CZFnYrdz.js",
	"_app/immutable/chunks/DKGcMd31.js",
	"_app/immutable/chunks/59hhIa2w.js",
	"_app/immutable/chunks/BFYBl3xJ.js",
	"_app/immutable/chunks/CPDRzexl.js",
	"_app/immutable/chunks/Cno8UwTT.js",
	"_app/immutable/chunks/BSI_SiHu.js",
	"_app/immutable/chunks/BfXCNAi6.js",
	"_app/immutable/chunks/CCnBCYaM.js",
	"_app/immutable/chunks/DudHFfjW.js",
	"_app/immutable/chunks/DDdMp1MP.js",
	"_app/immutable/chunks/qinMVjST.js",
	"_app/immutable/chunks/Du-oe5kA.js",
	"_app/immutable/chunks/2brbi_ah.js",
	"_app/immutable/chunks/BXY7cfkw.js",
	"_app/immutable/chunks/DvOG7n1n.js",
	"_app/immutable/chunks/BcEHo6wA.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=15-BC3NAztk.js.map