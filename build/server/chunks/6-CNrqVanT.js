import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/certificates/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ load: () => load });
var load = async ({ setHeaders }) => {
	setHeaders({ "Cache-Control": "public, max-age=300" });
	return { certificates: await prisma.certificate.findMany({ orderBy: [
		{ featured: "desc" },
		{ order: "asc" },
		{ issueDate: "desc" }
	] }) };
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/6.js
const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-BrrSF0GG.js")).default;
const server_id = "src/routes/(app)/certificates/+page.server.ts";
const imports = [
	"_app/immutable/nodes/6.Fjlq6Dfx.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/CIlUzoMK.js",
	"_app/immutable/chunks/BrgG1I03.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/bLQMTAO9.js",
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

//# sourceMappingURL=6-CNrqVanT.js.map