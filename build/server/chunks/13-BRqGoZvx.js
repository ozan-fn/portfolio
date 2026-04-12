import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/blog/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
var load = async () => {
	return { posts: await prisma.blogPost.findMany({
		include: { category: true },
		orderBy: { createdAt: "desc" }
	}) };
};
var actions = {
	delete: async ({ request }) => {
		const id = (await request.formData()).get("id");
		if (!id) return fail(400, { message: "ID is required" });
		try {
			await prisma.blogPost.delete({ where: { id } });
			return { success: true };
		} catch (err) {
			console.error(err);
			return fail(500, { message: "Failed to delete blog post" });
		}
	},
	togglePublish: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get("id");
		const published = formData.get("published") === "true";
		if (!id) return fail(400, { message: "ID is required" });
		try {
			await prisma.blogPost.update({
				where: { id },
				data: { published: !published }
			});
			return { success: true };
		} catch (err) {
			console.error(err);
			return fail(500, { message: "Failed to update post status" });
		}
	}
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/13.js
const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-B_aoHQiH.js")).default;
const server_id = "src/routes/(protected)/dashboard/blog/+page.server.ts";
const imports = [
	"_app/immutable/nodes/13.DIEV8020.js",
	"_app/immutable/chunks/DYrfgn9M.js",
	"_app/immutable/chunks/Bh5jNQlZ.js",
	"_app/immutable/chunks/DtUMkQvv.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/DzYGiR35.js",
	"_app/immutable/chunks/CNcKW8BT2.js",
	"_app/immutable/chunks/C_OwI1yw.js",
	"_app/immutable/chunks/DS5uD5jv.js",
	"_app/immutable/chunks/D_FjJ9w8.js",
	"_app/immutable/chunks/2ETS7oeh.js",
	"_app/immutable/chunks/bm6DNqyk2.js",
	"_app/immutable/chunks/jwhtOkip2.js",
	"_app/immutable/chunks/C1vG9HRy.js",
	"_app/immutable/chunks/io5Y9osX.js",
	"_app/immutable/chunks/Chc5zS1J.js",
	"_app/immutable/chunks/Shq8r7Wz.js",
	"_app/immutable/chunks/GbeH5Min.js",
	"_app/immutable/chunks/CQB7-Eml.js",
	"_app/immutable/chunks/B7FfXJl4.js",
	"_app/immutable/chunks/B2fV9SZe.js",
	"_app/immutable/chunks/CTcmsQUE.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=13-BRqGoZvx.js.map