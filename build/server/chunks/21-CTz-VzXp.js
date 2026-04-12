import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
import { t as deleteFile } from "./storage-BUBCCRO1.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
var load = async () => {
	return { projects: await prisma.project.findMany({ orderBy: { createdAt: "desc" } }) };
};
var actions = { delete: async ({ request }) => {
	const id = (await request.formData()).get("id");
	if (!id) return fail(400, { message: "Project ID is required" });
	try {
		const project = await prisma.project.findUnique({
			where: { id },
			select: { thumbnail: true }
		});
		if (project?.thumbnail) await deleteFile(project.thumbnail);
		await prisma.project.delete({ where: { id } });
		return { success: true };
	} catch (error) {
		console.error("Delete project error:", error);
		return fail(500, { message: "Failed to delete project" });
	}
} };
//#endregion
//#region .svelte-kit/adapter-bun/nodes/21.js
const index = 21;
let component_cache;
const component = async () => component_cache ??= (await import("./_page2.svelte-D_YgBUr2.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/+page.server.ts";
const imports = [
	"_app/immutable/nodes/21.B0NaTBow.js",
	"_app/immutable/chunks/D1w_RFSq.js",
	"_app/immutable/chunks/Be3d-_on.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/CCrHD_Ia.js",
	"_app/immutable/chunks/BDvYflSV.js",
	"_app/immutable/chunks/DPx01_bb.js",
	"_app/immutable/chunks/BXPti-Gk.js",
	"_app/immutable/chunks/B9qLrmkk.js",
	"_app/immutable/chunks/B0t0mRrZ.js",
	"_app/immutable/chunks/DyNC1g6Y.js",
	"_app/immutable/chunks/CS5xi4bw.js",
	"_app/immutable/chunks/C0AjNIIs.js",
	"_app/immutable/chunks/Dg5EqJvS.js",
	"_app/immutable/chunks/D1oRABRN.js",
	"_app/immutable/chunks/CvDZ79mX.js",
	"_app/immutable/chunks/DVnAbSuA.js",
	"_app/immutable/chunks/CYm7iPyV.js",
	"_app/immutable/chunks/COlBZsny.js",
	"_app/immutable/chunks/CzJXDAXw.js",
	"_app/immutable/chunks/Bi3eUg9r2.js",
	"_app/immutable/chunks/Cv_PKljf.js",
	"_app/immutable/chunks/fpRipbV0.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=21-CTz-VzXp.js.map