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
const component = async () => component_cache ??= (await import("./_page.svelte-CNHe_V-y.js")).default;
const server_id = "src/routes/(protected)/dashboard/blog/new/+page.server.ts";
const imports = [
	"_app/immutable/nodes/14.DRh2n_cD.js",
	"_app/immutable/chunks/D1w_RFSq.js",
	"_app/immutable/chunks/AUbo_TU-.js",
	"_app/immutable/chunks/Be3d-_on.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/BO4m1HcR.js",
	"_app/immutable/chunks/UzVvPweq.js",
	"_app/immutable/chunks/DImwKZpG.js",
	"_app/immutable/chunks/D1oRABRN.js",
	"_app/immutable/chunks/CvDZ79mX.js",
	"_app/immutable/chunks/DVnAbSuA.js",
	"_app/immutable/chunks/CYm7iPyV.js",
	"_app/immutable/chunks/D4IVV97f.js",
	"_app/immutable/chunks/Dl2HO6Ng.js",
	"_app/immutable/chunks/Bd4fEQuX.js",
	"_app/immutable/chunks/Bjdk1uRX.js",
	"_app/immutable/chunks/Bi3eUg9r2.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=14-DK7Pp_N5.js.map