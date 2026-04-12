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
const component = async () => component_cache ??= (await import("./_page.svelte-BS2hdeEa.js")).default;
const server_id = "src/routes/(app)/projects/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/10.Cypr6dln.js",
	"_app/immutable/chunks/DYrfgn9M.js",
	"_app/immutable/chunks/B5f4VDsd2.js",
	"_app/immutable/chunks/DtUMkQvv.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/ZIxaEaUC.js",
	"_app/immutable/chunks/rmv1O06p.js",
	"_app/immutable/chunks/D6AeGxxS.js",
	"_app/immutable/chunks/GbeH5Min.js",
	"_app/immutable/chunks/B7FfXJl4.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=10-BWAF1vc_.js.map