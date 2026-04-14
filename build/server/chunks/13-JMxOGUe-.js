import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-CP5mV9z4.js";
import { t as deleteFile } from "./storage-DPitLlQb.js";
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
			const post = await prisma.blogPost.findUnique({
				where: { id },
				select: { image: true }
			});
			if (post?.image) await deleteFile(post.image);
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
const component = async () => component_cache ??= (await import("./_page.svelte-DN-ZpJNh.js")).default;
const server_id = "src/routes/(protected)/dashboard/blog/+page.server.ts";
const imports = [
	"_app/immutable/nodes/13.BJAti9ac.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/BZy1t6m8.js",
	"_app/immutable/chunks/BrgG1I03.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/BSKNDFSG.js",
	"_app/immutable/chunks/B-ZcmriR2.js",
	"_app/immutable/chunks/l4C-Yizf.js",
	"_app/immutable/chunks/Djsqfsva.js",
	"_app/immutable/chunks/DpwOKFmC.js",
	"_app/immutable/chunks/Bsg-dgPe.js",
	"_app/immutable/chunks/SCwF5009.js",
	"_app/immutable/chunks/7vw66YHM2.js",
	"_app/immutable/chunks/DXK3kwy8.js",
	"_app/immutable/chunks/CJR0yioS.js",
	"_app/immutable/chunks/tpCMofHw.js",
	"_app/immutable/chunks/CRnF3_Wm.js",
	"_app/immutable/chunks/Lx8YHk-i.js",
	"_app/immutable/chunks/CTBJwqr_.js",
	"_app/immutable/chunks/BtOj0yJ_.js",
	"_app/immutable/chunks/BA9jlg-s2.js",
	"_app/immutable/chunks/DJaUH-bm.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=13-JMxOGUe-.js.map