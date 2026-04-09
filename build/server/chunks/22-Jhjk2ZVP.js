import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
import { t as error } from "./exports-kBK34q0P.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/_id_/view/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ load: () => load });
const load = async ({ params }) => {
	const project = await prisma.project.findUnique({ where: { id: params.id } });
	if (!project) throw error(404, "Project not found");
	return { project };
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/22.js
const index = 22;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-BTGCvgCl.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/[id]/view/+page.server.ts";
const imports = [
	"_app/immutable/nodes/22.DAxl8w8u.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/COJEdS0d.js",
	"_app/immutable/chunks/Czy_XTH7.js",
	"_app/immutable/chunks/CkNGqTXG.js",
	"_app/immutable/chunks/CYTOpgq_.js",
	"_app/immutable/chunks/BHCixpY4.js",
	"_app/immutable/chunks/BfKQhCba.js",
	"_app/immutable/chunks/eFZXOa0J.js",
	"_app/immutable/chunks/D4bx8ejP.js",
	"_app/immutable/chunks/HZaXPH-x.js",
	"_app/immutable/chunks/B0xGDxMp.js",
	"_app/immutable/chunks/BTbF8K-2.js",
	"_app/immutable/chunks/B_CSQMnr.js",
	"_app/immutable/chunks/BNYN6qA2.js",
	"_app/immutable/chunks/DMNpyLDr.js",
	"_app/immutable/chunks/BX6S9r25.js",
	"_app/immutable/chunks/CW77yZQH.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=22-Jhjk2ZVP.js.map