import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/categories/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
var load = async () => {
	return { categories: await prisma.category.findMany({
		include: { _count: { select: { posts: true } } },
		orderBy: { name: "asc" }
	}) };
};
var actions = {
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
//#region .svelte-kit/adapter-bun/nodes/16.js
const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-CIKaC_JV.js")).default;
const server_id = "src/routes/(protected)/dashboard/categories/+page.server.ts";
const imports = [
	"_app/immutable/nodes/16.CNuQIUd_.js",
	"_app/immutable/chunks/D1w_RFSq.js",
	"_app/immutable/chunks/Be3d-_on.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/DImwKZpG.js",
	"_app/immutable/chunks/DyNC1g6Y.js",
	"_app/immutable/chunks/CS5xi4bw.js",
	"_app/immutable/chunks/C50TGYaA2.js",
	"_app/immutable/chunks/Dg5EqJvS.js",
	"_app/immutable/chunks/CX9oClow.js",
	"_app/immutable/chunks/D1oRABRN.js",
	"_app/immutable/chunks/CvDZ79mX.js",
	"_app/immutable/chunks/DVnAbSuA.js",
	"_app/immutable/chunks/C66M96YJ.js",
	"_app/immutable/chunks/BpXTdvfo.js",
	"_app/immutable/chunks/BDn0HoeJ.js",
	"_app/immutable/chunks/Dl2HO6Ng.js",
	"_app/immutable/chunks/BoeiBBw1.js",
	"_app/immutable/chunks/CiqMIqt7.js",
	"_app/immutable/chunks/CYm7iPyV.js",
	"_app/immutable/chunks/D4IVV97f.js",
	"_app/immutable/chunks/COlBZsny.js",
	"_app/immutable/chunks/Bi3eUg9r2.js",
	"_app/immutable/chunks/Cv_PKljf.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=16-lhs8eBta.js.map