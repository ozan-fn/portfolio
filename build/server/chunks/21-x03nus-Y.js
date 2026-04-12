import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
import { t as deleteFile } from "./storage-BdsIAvCS.js";
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
const component = async () => component_cache ??= (await import("./_page.svelte-Cq9RCvvf.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/+page.server.ts";
const imports = [
	"_app/immutable/nodes/21.maVBFxcg.js",
	"_app/immutable/chunks/DYrfgn9M.js",
	"_app/immutable/chunks/DtUMkQvv.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/Bh5jNQlZ.js",
	"_app/immutable/chunks/B5f4VDsd2.js",
	"_app/immutable/chunks/rmv1O06p.js",
	"_app/immutable/chunks/D6AeGxxS.js",
	"_app/immutable/chunks/DzYGiR35.js",
	"_app/immutable/chunks/CRbo0P3k.js",
	"_app/immutable/chunks/D_FjJ9w8.js",
	"_app/immutable/chunks/2ETS7oeh.js",
	"_app/immutable/chunks/bm6DNqyk2.js",
	"_app/immutable/chunks/C1vG9HRy.js",
	"_app/immutable/chunks/io5Y9osX.js",
	"_app/immutable/chunks/Chc5zS1J.js",
	"_app/immutable/chunks/Shq8r7Wz.js",
	"_app/immutable/chunks/GbeH5Min.js",
	"_app/immutable/chunks/CQB7-Eml.js",
	"_app/immutable/chunks/B7FfXJl4.js",
	"_app/immutable/chunks/B2fV9SZe.js",
	"_app/immutable/chunks/CTcmsQUE.js",
	"_app/immutable/chunks/CJIvDuSN.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=21-x03nus-Y.js.map