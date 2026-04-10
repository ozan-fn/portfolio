import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
import { a as redirect, n as fail } from "./exports-kBK34q0P.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/blog/new/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
const load = async () => {
	return { categories: await prisma.category.findMany({ orderBy: { name: "asc" } }) };
};
const actions = { default: async ({ request }) => {
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
//#region .svelte-kit/adapter-bun/nodes/13.js
const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-D8kVQWqc.js")).default;
const server_id = "src/routes/(protected)/dashboard/blog/new/+page.server.ts";
const imports = [
	"_app/immutable/nodes/13.C57jgYum.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/Dr_zM3p0.js",
	"_app/immutable/chunks/Cw5cvJPR.js",
	"_app/immutable/chunks/DZbCXLBc.js",
	"_app/immutable/chunks/B9WTJlVd.js",
	"_app/immutable/chunks/e11Tx_iV.js",
	"_app/immutable/chunks/Clz0Wp70.js",
	"_app/immutable/chunks/6aY7LGuk.js",
	"_app/immutable/chunks/DKGcMd31.js",
	"_app/immutable/chunks/CZFnYrdz.js",
	"_app/immutable/chunks/BxeYG_Uu.js",
	"_app/immutable/chunks/qinMVjST.js",
	"_app/immutable/chunks/8okcUSwY.js",
	"_app/immutable/chunks/BQkCsZss.js",
	"_app/immutable/chunks/BKntPBgS.js",
	"_app/immutable/chunks/PMFTZqdj.js",
	"_app/immutable/chunks/DvOG7n1n.js",
	"_app/immutable/chunks/CCnBCYaM.js",
	"_app/immutable/chunks/DudHFfjW.js",
	"_app/immutable/chunks/BmL9q_GQ.js",
	"_app/immutable/chunks/Cno8UwTT.js",
	"_app/immutable/chunks/DShVOjNy.js",
	"_app/immutable/chunks/eq5xT-5j.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=13-BRU29wtE.js.map