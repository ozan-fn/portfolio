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
const component = async () => component_cache ??= (await import("./_page.svelte-CUPvXOCB.js")).default;
const server_id = "src/routes/(app)/projects/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/10.0uwjFWHs.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/bLQMTAO9.js",
	"_app/immutable/chunks/BrgG1I03.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/ITt6zO0N.js",
	"_app/immutable/chunks/DtwFGpNi.js",
	"_app/immutable/chunks/lfX5A_YH.js",
	"_app/immutable/chunks/Lx8YHk-i.js",
	"_app/immutable/chunks/BtOj0yJ_.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=10-BqQkV2te.js.map