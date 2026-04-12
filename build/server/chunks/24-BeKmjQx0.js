import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { t as error } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/_id_/view/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ load: () => load });
var load = async ({ params }) => {
	const project = await prisma.project.findUnique({ where: { id: params.id } });
	if (!project) throw error(404, "Project not found");
	return { project };
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/24.js
const index = 24;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-DwRIVT6A.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/[id]/view/+page.server.ts";
const imports = [
	"_app/immutable/nodes/24.8LxhTkE3.js",
	"_app/immutable/chunks/DYrfgn9M.js",
	"_app/immutable/chunks/DtUMkQvv.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/CIo5--lu.js",
	"_app/immutable/chunks/B5f4VDsd2.js",
	"_app/immutable/chunks/rmv1O06p.js",
	"_app/immutable/chunks/D6AeGxxS.js",
	"_app/immutable/chunks/C_OwI1yw.js",
	"_app/immutable/chunks/DDpRRu19.js",
	"_app/immutable/chunks/CRbo0P3k.js",
	"_app/immutable/chunks/D_FjJ9w8.js",
	"_app/immutable/chunks/GbeH5Min.js",
	"_app/immutable/chunks/z70b_DCL.js",
	"_app/immutable/chunks/ZIxaEaUC.js",
	"_app/immutable/chunks/B7FfXJl4.js",
	"_app/immutable/chunks/C3s63ttY.js",
	"_app/immutable/chunks/CJIvDuSN.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=24-BeKmjQx0.js.map