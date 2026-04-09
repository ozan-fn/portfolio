import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { n as fail } from "./exports-B42uMcC-.js";
import { t as prisma } from "./prisma-BXY-hGZz.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/blog/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
const load = async () => {
	return { posts: await prisma.blogPost.findMany({
		include: { category: true },
		orderBy: { createdAt: "desc" }
	}) };
};
const actions = {
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
//#region .svelte-kit/adapter-bun/nodes/12.js
const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-CML4FBEj.js")).default;
const server_id = "src/routes/(protected)/dashboard/blog/+page.server.ts";
const imports = [
	"_app/immutable/nodes/12.CiAwqDph.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/VvJ03jQm.js",
	"_app/immutable/chunks/Djhkul0P.js",
	"_app/immutable/chunks/aMc0A5rF.js",
	"_app/immutable/chunks/Bjwghsge.js",
	"_app/immutable/chunks/0GSJgK-F.js",
	"_app/immutable/chunks/DCbJqxLu.js",
	"_app/immutable/chunks/DPwYecWG.js",
	"_app/immutable/chunks/CpB61uSw.js",
	"_app/immutable/chunks/Dcpp0Cf0.js",
	"_app/immutable/chunks/DQtFMUgL.js",
	"_app/immutable/chunks/D7ca1Gcz.js",
	"_app/immutable/chunks/BiW6gY5k.js",
	"_app/immutable/chunks/C4APV2ih.js",
	"_app/immutable/chunks/ckv5DO_L.js",
	"_app/immutable/chunks/BkBtMdJi.js",
	"_app/immutable/chunks/6QoXeyAT.js",
	"_app/immutable/chunks/C2mAS7Cg.js",
	"_app/immutable/chunks/DDcjaDo3.js",
	"_app/immutable/chunks/DK-0CHpV.js",
	"_app/immutable/chunks/CUdxX0no.js",
	"_app/immutable/chunks/B7AiSknQ.js",
	"_app/immutable/chunks/dLzUUG9l.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=12-D5OAxqKf.js.map