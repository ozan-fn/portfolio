import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { a as redirect, n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/blog/new/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
var load = async () => {
	return { categories: await prisma.category.findMany({ orderBy: { name: "asc" } }) };
};
var actions = { default: async ({ request }) => {
	const formData = await request.formData();
	const title = formData.get("title");
	const content = formData.get("content");
	const image = formData.get("image");
	const categoryId = formData.get("categoryId");
	const published = formData.get("published") === "true";
	if (!title || !content || !categoryId) return fail(400, {
		error: "Title, content, and category are required",
		values: {
			title,
			content,
			image,
			categoryId,
			published
		}
	});
	const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
	try {
		const finalSlug = await prisma.blogPost.findUnique({ where: { slug } }) ? `${slug}-${Math.floor(Math.random() * 1e3)}` : slug;
		await prisma.blogPost.create({ data: {
			title,
			slug: finalSlug,
			content,
			image,
			published,
			categoryId
		} });
	} catch (err) {
		console.error(err);
		return fail(500, { error: "Failed to create blog post" });
	}
	throw redirect(303, "/dashboard/blog");
} };
//#endregion
//#region .svelte-kit/adapter-bun/nodes/14.js
const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-Dm3hiNIa.js")).default;
const server_id = "src/routes/(protected)/dashboard/blog/new/+page.server.ts";
const imports = [
	"_app/immutable/nodes/14.CJDx7XVF.js",
	"_app/immutable/chunks/DYrfgn9M.js",
	"_app/immutable/chunks/C_OwI1yw.js",
	"_app/immutable/chunks/DtUMkQvv.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/DS5uD5jv.js",
	"_app/immutable/chunks/CVFCDIRL.js",
	"_app/immutable/chunks/nRyRQFvZ.js",
	"_app/immutable/chunks/io5Y9osX.js",
	"_app/immutable/chunks/Chc5zS1J.js",
	"_app/immutable/chunks/Shq8r7Wz.js",
	"_app/immutable/chunks/GbeH5Min.js",
	"_app/immutable/chunks/Bh6ZNlic.js",
	"_app/immutable/chunks/D1VRbIGe.js",
	"_app/immutable/chunks/z70b_DCL.js",
	"_app/immutable/chunks/ZIxaEaUC.js",
	"_app/immutable/chunks/B2fV9SZe.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=14-DOVnrjCi.js.map