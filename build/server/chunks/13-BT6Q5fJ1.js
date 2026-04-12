import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
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
const component = async () => component_cache ??= (await import("./_page.svelte-Bnn3kXou.js")).default;
const server_id = "src/routes/(protected)/dashboard/blog/+page.server.ts";
const imports = [
	"_app/immutable/nodes/13.B4tFMWQ7.js",
	"_app/immutable/chunks/D1w_RFSq.js",
	"_app/immutable/chunks/CCrHD_Ia.js",
	"_app/immutable/chunks/Be3d-_on.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/B9qLrmkk.js",
	"_app/immutable/chunks/Dklv07Z22.js",
	"_app/immutable/chunks/AUbo_TU-.js",
	"_app/immutable/chunks/BO4m1HcR.js",
	"_app/immutable/chunks/DyNC1g6Y.js",
	"_app/immutable/chunks/CS5xi4bw.js",
	"_app/immutable/chunks/C0AjNIIs.js",
	"_app/immutable/chunks/C50TGYaA2.js",
	"_app/immutable/chunks/Dg5EqJvS.js",
	"_app/immutable/chunks/D1oRABRN.js",
	"_app/immutable/chunks/CvDZ79mX.js",
	"_app/immutable/chunks/DVnAbSuA.js",
	"_app/immutable/chunks/CYm7iPyV.js",
	"_app/immutable/chunks/COlBZsny.js",
	"_app/immutable/chunks/CzJXDAXw.js",
	"_app/immutable/chunks/Bi3eUg9r2.js",
	"_app/immutable/chunks/Cv_PKljf.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=13-BT6Q5fJ1.js.map