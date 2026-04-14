import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-CP5mV9z4.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/categories/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
var load = async () => {
	return { categories: await prisma.category.findMany({
		include: { _count: { select: { posts: true } } },
		orderBy: { order: "desc" }
	}) };
};
var actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const namesString = formData.get("names");
		const singleName = formData.get("singleName");
		const order = parseInt(formData.get("order")) || 0;
		let names = namesString ? namesString.split(",").map((n) => n.trim()) : [];
		if (singleName && singleName.trim()) names.push(singleName.trim());
		names = [...new Set(names)].filter((n) => n.length >= 1);
		if (names.length === 0) return fail(400, { message: "Category name must be at least 1 character" });
		try {
			const failed = (await Promise.allSettled(names.map((name) => {
				const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
				return prisma.category.create({ data: {
					name,
					slug,
					order
				} });
			}))).filter((r) => r.status === "rejected");
			if (failed.length > 0) {
				console.error("Some categories failed to create:", failed);
				if (failed.length === names.length) return fail(500, { message: "All categories failed to create (likely duplicates)" });
				return {
					success: true,
					message: `Created ${names.length - failed.length} categories. Some failed (likely duplicates).`
				};
			}
			return { success: true };
		} catch (err) {
			console.error(err);
			return fail(500, { message: "Failed to create category" });
		}
	},
	update: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get("id");
		const name = formData.get("name");
		const order = parseInt(formData.get("order"));
		if (!id || !name || name.length < 2) return fail(400, { message: "Invalid category data" });
		const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
		try {
			await prisma.category.update({
				where: { id },
				data: {
					name,
					slug,
					order: isNaN(order) ? void 0 : order
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
const component = async () => component_cache ??= (await import("./_page.svelte-CgpqAfLC.js")).default;
const server_id = "src/routes/(protected)/dashboard/categories/+page.server.ts";
const imports = [
	"_app/immutable/nodes/16.YygycMQY.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/DwRZD-OF.js",
	"_app/immutable/chunks/BrgG1I03.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/DUDAWf8x.js",
	"_app/immutable/chunks/DpwOKFmC.js",
	"_app/immutable/chunks/Bsg-dgPe.js",
	"_app/immutable/chunks/BtKYd0rq2.js",
	"_app/immutable/chunks/DXK3kwy8.js",
	"_app/immutable/chunks/CqYyBGaW.js",
	"_app/immutable/chunks/C2qLTuDr.js",
	"_app/immutable/chunks/BByLDg6l.js",
	"_app/immutable/chunks/sZixMsS5.js",
	"_app/immutable/chunks/B3PCanAx.js",
	"_app/immutable/chunks/CfAuaMXW.js",
	"_app/immutable/chunks/B8JBZnUc.js",
	"_app/immutable/chunks/_GW2ySG0.js",
	"_app/immutable/chunks/B0o9XgaC.js",
	"_app/immutable/chunks/DfJzbisG.js",
	"_app/immutable/chunks/Lx8YHk-i.js",
	"_app/immutable/chunks/D_D-TXRd.js",
	"_app/immutable/chunks/CTBJwqr_.js",
	"_app/immutable/chunks/BtOj0yJ_.js",
	"_app/immutable/chunks/CIiMOl332.js",
	"_app/immutable/chunks/DJaUH-bm.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=16-CXbapyBb.js.map