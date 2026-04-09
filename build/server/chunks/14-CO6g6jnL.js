import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
import { a as redirect, n as fail, t as error } from "./exports-kBK34q0P.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/blog/_id_/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
const load = async ({ params }) => {
	const post = await prisma.blogPost.findUnique({
		where: { id: params.id },
		include: { category: true }
	});
	if (!post) throw error(404, "Blog post not found");
	return {
		post,
		categories: await prisma.category.findMany({ orderBy: { name: "asc" } })
	};
};
const actions = {
	update: async ({ request, params }) => {
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
			const finalSlug = await prisma.blogPost.findFirst({ where: {
				slug,
				NOT: { id: params.id }
			} }) ? `${slug}-${Math.floor(Math.random() * 1e3)}` : slug;
			await prisma.blogPost.update({
				where: { id: params.id },
				data: {
					title,
					slug: finalSlug,
					content,
					image,
					published,
					categoryId
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { error: "Failed to update blog post" });
		}
		throw redirect(303, "/dashboard/blog");
	},
	delete: async ({ params }) => {
		try {
			await prisma.blogPost.delete({ where: { id: params.id } });
		} catch (err) {
			console.error(err);
			return fail(500, { error: "Failed to delete blog post" });
		}
		throw redirect(303, "/dashboard/blog");
	}
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/14.js
const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-BJkdSAtX.js")).default;
const server_id = "src/routes/(protected)/dashboard/blog/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/14.SEgAey5K.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/COJEdS0d.js",
	"_app/immutable/chunks/Czy_XTH7.js",
	"_app/immutable/chunks/CkNGqTXG.js",
	"_app/immutable/chunks/CYTOpgq_.js",
	"_app/immutable/chunks/BHCixpY4.js",
	"_app/immutable/chunks/DFzKG_Ko.js",
	"_app/immutable/chunks/CZfYni6s.js",
	"_app/immutable/chunks/Dp8XMXav.js",
	"_app/immutable/chunks/BfKQhCba.js",
	"_app/immutable/chunks/07TKbenM.js",
	"_app/immutable/chunks/D4bx8ejP.js",
	"_app/immutable/chunks/eFZXOa0J.js",
	"_app/immutable/chunks/DTTAFL8b.js",
	"_app/immutable/chunks/B_CSQMnr.js",
	"_app/immutable/chunks/B0xGDxMp.js",
	"_app/immutable/chunks/DXYtPGel.js",
	"_app/immutable/chunks/BWhQr65l.js",
	"_app/immutable/chunks/XWCh-Jz1.js",
	"_app/immutable/chunks/CRRNmWFo.js",
	"_app/immutable/chunks/BSo7qp4u.js",
	"_app/immutable/chunks/0ZUX-y0G.js",
	"_app/immutable/chunks/BzwK6zww.js",
	"_app/immutable/chunks/MO0rGlZ3.js",
	"_app/immutable/chunks/CBSzjL62.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=14-CO6g6jnL.js.map