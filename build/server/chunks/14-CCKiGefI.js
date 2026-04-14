import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { a as redirect, n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-CP5mV9z4.js";
import { r as uploadImage } from "./storage-DPitLlQb.js";
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
	const slug = formData.get("slug");
	const content = formData.get("content");
	const imageFile = formData.get("image");
	const categoryId = formData.get("categoryId");
	const tags = formData.get("tags");
	const published = formData.get("published") === "true";
	const featured = formData.get("featured") === "on";
	if (!title || !slug || !content || !categoryId) return fail(400, {
		error: "Title, slug, content, and category are required",
		values: {
			title,
			slug,
			content,
			categoryId,
			tags,
			published,
			featured
		}
	});
	let image = null;
	if (imageFile && imageFile.size > 0) try {
		image = await uploadImage(Buffer.from(await imageFile.arrayBuffer()), "blog", imageFile.type);
	} catch (error) {
		console.error("Upload image error:", error);
	}
	try {
		await prisma.blogPost.create({ data: {
			title,
			slug,
			content,
			image,
			tags,
			published,
			featured,
			categoryId
		} });
	} catch (err) {
		console.error(err);
		return fail(500, { error: "Failed to create blog post. Ensure slug is unique." });
	}
	throw redirect(303, "/dashboard/blog");
} };
//#endregion
//#region .svelte-kit/adapter-bun/nodes/14.js
const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-Cq2naXRl.js")).default;
const server_id = "src/routes/(protected)/dashboard/blog/new/+page.server.ts";
const imports = [
	"_app/immutable/nodes/14.BF1FFgM-.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/BByLDg6l.js",
	"_app/immutable/chunks/DwRZD-OF.js",
	"_app/immutable/chunks/BrgG1I03.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/l4C-Yizf.js",
	"_app/immutable/chunks/DUDAWf8x.js",
	"_app/immutable/chunks/Djsqfsva.js",
	"_app/immutable/chunks/Bsg-dgPe.js",
	"_app/immutable/chunks/DCamZPAQ.js",
	"_app/immutable/chunks/C2qLTuDr.js",
	"_app/immutable/chunks/sZixMsS5.js",
	"_app/immutable/chunks/Lx8YHk-i.js",
	"_app/immutable/chunks/CqYyBGaW.js",
	"_app/immutable/chunks/D_D-TXRd.js",
	"_app/immutable/chunks/_GW2ySG0.js",
	"_app/immutable/chunks/CzMvIaps.js",
	"_app/immutable/chunks/ITt6zO0N.js",
	"_app/immutable/chunks/BtOj0yJ_.js",
	"_app/immutable/chunks/CIiMOl332.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=14-CCKiGefI.js.map