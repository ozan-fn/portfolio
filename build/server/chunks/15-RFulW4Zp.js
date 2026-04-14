import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { a as redirect, n as fail, t as error } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
import { n as uploadFile } from "./storage-DPitLlQb.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/blog/_id_/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
var load = async ({ params }) => {
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
var actions = {
	update: async ({ request, params }) => {
		const formData = await request.formData();
		const title = formData.get("title");
		const slug = formData.get("slug");
		const content = formData.get("content");
		const imageFile = formData.get("image");
		const categoryId = formData.get("categoryId");
		const tags = formData.get("tags");
		const published = formData.get("published") === "true";
		const featured = formData.get("featured") !== null;
		if (!title || !content || !categoryId || !slug) return fail(400, { error: "Title, slug, content, and category are required" });
		try {
			const currentPost = await prisma.blogPost.findUnique({ where: { id: params.id } });
			if (!currentPost) return fail(404, { error: "Blog post not found" });
			let imageUrl = currentPost.image;
			if (imageFile && imageFile.size > 0) {
				imageUrl = await uploadFile(Buffer.from(await imageFile.arrayBuffer()), `blog/${slug}-${Date.now()}.${imageFile.name.split(".").pop()}`, imageFile.type);
				if (currentPost.image) await deleteFile(currentPost.image);
			}
			let finalSlug = slug;
			if (await prisma.blogPost.findFirst({ where: {
				slug: finalSlug,
				NOT: { id: params.id }
			} })) finalSlug = `${slug}-${Math.floor(Math.random() * 1e3)}`;
			await prisma.blogPost.update({
				where: { id: params.id },
				data: {
					title,
					slug: finalSlug,
					content,
					image: imageUrl,
					tags,
					published,
					featured,
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
			const post = await prisma.blogPost.findUnique({
				where: { id: params.id },
				select: { image: true }
			});
			if (post?.image) await deleteFile(post.image);
			await prisma.blogPost.delete({ where: { id: params.id } });
		} catch (err) {
			console.error(err);
			return fail(500, { error: "Failed to delete blog post" });
		}
		throw redirect(303, "/dashboard/blog");
	}
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/15.js
const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-CMkei3GM.js")).default;
const server_id = "src/routes/(protected)/dashboard/blog/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/15.Bgg-605W.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/DKdtCtjd.js",
	"_app/immutable/chunks/BSKNDFSG.js",
	"_app/immutable/chunks/BrgG1I03.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/l4C-Yizf.js",
	"_app/immutable/chunks/BIMWzBCj.js",
	"_app/immutable/chunks/DUDAWf8x.js",
	"_app/immutable/chunks/Djsqfsva.js",
	"_app/immutable/chunks/Bsg-dgPe.js",
	"_app/immutable/chunks/wmgTPKIH.js",
	"_app/immutable/chunks/DdwMZYMk.js",
	"_app/immutable/chunks/C2LYAyyJ.js",
	"_app/immutable/chunks/Lx8YHk-i.js",
	"_app/immutable/chunks/SCwF5009.js",
	"_app/immutable/chunks/DXK3kwy8.js",
	"_app/immutable/chunks/CqYyBGaW.js",
	"_app/immutable/chunks/D_D-TXRd.js",
	"_app/immutable/chunks/_GW2ySG0.js",
	"_app/immutable/chunks/CzMvIaps.js",
	"_app/immutable/chunks/ITt6zO0N.js",
	"_app/immutable/chunks/BtOj0yJ_.js",
	"_app/immutable/chunks/BA9jlg-s2.js",
	"_app/immutable/chunks/Cwjh7MkQ.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=15-RFulW4Zp.js.map