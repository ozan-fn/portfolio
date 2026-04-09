import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ load: () => load });
const load = async () => {
	return { projects: await prisma.project.findMany({ orderBy: { createdAt: "desc" } }) };
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/19.js
const index = 19;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-CuHzKYVL.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/+page.server.ts";
const imports = [
	"_app/immutable/nodes/19.BnxlyYQ3.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/COJEdS0d.js",
	"_app/immutable/chunks/Czy_XTH7.js",
	"_app/immutable/chunks/CkNGqTXG.js",
	"_app/immutable/chunks/CYTOpgq_.js",
	"_app/immutable/chunks/BHCixpY4.js",
	"_app/immutable/chunks/CRRNmWFo.js",
	"_app/immutable/chunks/DFzKG_Ko.js",
	"_app/immutable/chunks/CZfYni6s.js",
	"_app/immutable/chunks/Dp8XMXav.js",
	"_app/immutable/chunks/BfKQhCba.js",
	"_app/immutable/chunks/DKgSZTNY.js",
	"_app/immutable/chunks/D4bx8ejP.js",
	"_app/immutable/chunks/eFZXOa0J.js",
	"_app/immutable/chunks/HZaXPH-x.js",
	"_app/immutable/chunks/BwQiK-Z1.js",
	"_app/immutable/chunks/B0xGDxMp.js",
	"_app/immutable/chunks/MO0rGlZ3.js",
	"_app/immutable/chunks/DMNpyLDr.js",
	"_app/immutable/chunks/CBSzjL62.js",
	"_app/immutable/chunks/BX6S9r25.js",
	"_app/immutable/chunks/BNYN6qA2.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=19-BzFE1gpy.js.map