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
const component = async () => component_cache ??= (await import("./_page.svelte-BX5i3rh7.js")).default;
const server_id = "src/routes/(protected)/dashboard/blog/new/+page.server.ts";
const imports = [
	"_app/immutable/nodes/13.CSEkJsoS.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/COJEdS0d.js",
	"_app/immutable/chunks/Czy_XTH7.js",
	"_app/immutable/chunks/CkNGqTXG.js",
	"_app/immutable/chunks/BHCixpY4.js",
	"_app/immutable/chunks/CYTOpgq_.js",
	"_app/immutable/chunks/BfKQhCba.js",
	"_app/immutable/chunks/DTTAFL8b.js",
	"_app/immutable/chunks/eFZXOa0J.js",
	"_app/immutable/chunks/D4bx8ejP.js",
	"_app/immutable/chunks/B_CSQMnr.js",
	"_app/immutable/chunks/B0xGDxMp.js",
	"_app/immutable/chunks/DXYtPGel.js",
	"_app/immutable/chunks/DFzKG_Ko.js",
	"_app/immutable/chunks/CZfYni6s.js",
	"_app/immutable/chunks/Dp8XMXav.js",
	"_app/immutable/chunks/BWhQr65l.js",
	"_app/immutable/chunks/07TKbenM.js",
	"_app/immutable/chunks/XWCh-Jz1.js",
	"_app/immutable/chunks/CRRNmWFo.js",
	"_app/immutable/chunks/BSo7qp4u.js",
	"_app/immutable/chunks/0ZUX-y0G.js",
	"_app/immutable/chunks/BzwK6zww.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=13-fHuWItCc.js.map