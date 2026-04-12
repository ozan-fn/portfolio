import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { t as error } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/projects/_id_/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ load: () => load });
var load = async ({ params }) => {
	const project = await prisma.project.findUnique({ where: { id: params.id } });
	if (!project) throw error(404, { message: "Project not found" });
	return { project };
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/10.js
const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-B8FHkg9M.js")).default;
const server_id = "src/routes/(app)/projects/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/10.Cm4KSBLi.js",
	"_app/immutable/chunks/D1w_RFSq.js",
	"_app/immutable/chunks/BDvYflSV.js",
	"_app/immutable/chunks/Be3d-_on.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/Bjdk1uRX.js",
	"_app/immutable/chunks/DPx01_bb.js",
	"_app/immutable/chunks/BXPti-Gk.js",
	"_app/immutable/chunks/CYm7iPyV.js",
	"_app/immutable/chunks/CzJXDAXw.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=10-BRGUy4aK.js.map