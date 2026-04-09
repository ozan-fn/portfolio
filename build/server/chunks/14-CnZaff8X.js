import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { i as redirect, n as fail, t as error } from "./exports-B42uMcC-.js";
import { t as prisma } from "./prisma-BXY-hGZz.js";
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
const component = async () => component_cache ??= (await import("./_page.svelte-v34jmvAx.js")).default;
const server_id = "src/routes/(protected)/dashboard/blog/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/14.DI_tBqf_.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/VvJ03jQm.js",
	"_app/immutable/chunks/Djhkul0P.js",
	"_app/immutable/chunks/aMc0A5rF.js",
	"_app/immutable/chunks/Bjwghsge.js",
	"_app/immutable/chunks/0GSJgK-F.js",
	"_app/immutable/chunks/DPwYecWG.js",
	"_app/immutable/chunks/CpB61uSw.js",
	"_app/immutable/chunks/Dcpp0Cf0.js",
	"_app/immutable/chunks/DQtFMUgL.js",
	"_app/immutable/chunks/ujjKYITF.js",
	"_app/immutable/chunks/BiW6gY5k.js",
	"_app/immutable/chunks/C4APV2ih.js",
	"_app/immutable/chunks/CrSlENNL.js",
	"_app/immutable/chunks/Eg2tcwNS.js",
	"_app/immutable/chunks/6QoXeyAT.js",
	"_app/immutable/chunks/DHAhW4pc.js",
	"_app/immutable/chunks/D79W2KkM.js",
	"_app/immutable/chunks/wDDnU9Kk.js",
	"_app/immutable/chunks/DCbJqxLu.js",
	"_app/immutable/chunks/LBiaOXUj.js",
	"_app/immutable/chunks/B7AiSknQ.js",
	"_app/immutable/chunks/dLzUUG9l.js",
	"_app/immutable/chunks/DDcjaDo3.js",
	"_app/immutable/chunks/CUdxX0no.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=14-CnZaff8X.js.map