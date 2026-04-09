import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { n as fail } from "./exports-B42uMcC-.js";
import { t as prisma } from "./prisma-BXY-hGZz.js";
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
const component = async () => component_cache ??= (await import("./_page.svelte-DmUbjphy.js")).default;
const server_id = "src/routes/(protected)/dashboard/categories/+page.server.ts";
const imports = [
	"_app/immutable/nodes/15.XUaGpoed.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/VvJ03jQm.js",
	"_app/immutable/chunks/Djhkul0P.js",
	"_app/immutable/chunks/aMc0A5rF.js",
	"_app/immutable/chunks/Bjwghsge.js",
	"_app/immutable/chunks/0GSJgK-F.js",
	"_app/immutable/chunks/DCbJqxLu.js",
	"_app/immutable/chunks/DPwYecWG.js",
	"_app/immutable/chunks/CpB61uSw.js",
	"_app/immutable/chunks/Dcpp0Cf0.js",
	"_app/immutable/chunks/DQtFMUgL.js",
	"_app/immutable/chunks/CrSlENNL.js",
	"_app/immutable/chunks/C4APV2ih.js",
	"_app/immutable/chunks/BiW6gY5k.js",
	"_app/immutable/chunks/Eg2tcwNS.js",
	"_app/immutable/chunks/6QoXeyAT.js",
	"_app/immutable/chunks/D7ca1Gcz.js",
	"_app/immutable/chunks/ujjKYITF.js",
	"_app/immutable/chunks/ckv5DO_L.js",
	"_app/immutable/chunks/wDDnU9Kk.js",
	"_app/immutable/chunks/LBiaOXUj.js",
	"_app/immutable/chunks/DK-0CHpV.js",
	"_app/immutable/chunks/CUdxX0no.js",
	"_app/immutable/chunks/D58AuCh5.js",
	"_app/immutable/chunks/B19OPWr1.js",
	"_app/immutable/chunks/D79W2KkM.js",
	"_app/immutable/chunks/BkBtMdJi.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=15-B1bY2DIY.js.map