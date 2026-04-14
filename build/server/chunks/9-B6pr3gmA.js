import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/projects/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ load: () => load });
var load = async ({ setHeaders }) => {
	setHeaders({ "Cache-Control": "public, max-age=300" });
	return { projects: await prisma.project.findMany({ orderBy: [
		{ featured: "desc" },
		{ order: "asc" },
		{ createdAt: "desc" }
	] }) };
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/9.js
const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-1XXL4DCf.js")).default;
const server_id = "src/routes/(app)/projects/+page.server.ts";
const imports = [
	"_app/immutable/nodes/9.Bsl8nO1c.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/BrgG1I03.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/DyMM1RYU.js",
	"_app/immutable/chunks/lfX5A_YH.js",
	"_app/immutable/chunks/D1suYT_W.js",
	"_app/immutable/chunks/_GW2ySG0.js",
	"_app/immutable/chunks/Lx8YHk-i.js",
	"_app/immutable/chunks/CWOK_54O.js",
	"_app/immutable/chunks/Cwjh7MkQ.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=9-B6pr3gmA.js.map