import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
import { t as deleteFile } from "./storage-DPitLlQb.js";
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
const component = async () => component_cache ??= (await import("./_page.svelte-BS4L1vNr.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/+page.server.ts";
const imports = [
	"_app/immutable/nodes/21.DpN3OqfM.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/BrgG1I03.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/BZy1t6m8.js",
	"_app/immutable/chunks/bLQMTAO9.js",
	"_app/immutable/chunks/DtwFGpNi.js",
	"_app/immutable/chunks/lfX5A_YH.js",
	"_app/immutable/chunks/BSKNDFSG.js",
	"_app/immutable/chunks/BYIp8FB3.js",
	"_app/immutable/chunks/DpwOKFmC.js",
	"_app/immutable/chunks/Bsg-dgPe.js",
	"_app/immutable/chunks/SCwF5009.js",
	"_app/immutable/chunks/DXK3kwy8.js",
	"_app/immutable/chunks/DdwMZYMk.js",
	"_app/immutable/chunks/DKdtCtjd.js",
	"_app/immutable/chunks/C2LYAyyJ.js",
	"_app/immutable/chunks/Lx8YHk-i.js",
	"_app/immutable/chunks/CTBJwqr_.js",
	"_app/immutable/chunks/BtOj0yJ_.js",
	"_app/immutable/chunks/BA9jlg-s2.js",
	"_app/immutable/chunks/DJaUH-bm.js",
	"_app/immutable/chunks/Cwjh7MkQ.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=21-beN_hJ4j.js.map