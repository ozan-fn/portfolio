import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
import { t as error } from "./exports-kBK34q0P.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/projects/_id_/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ load: () => load });
const load = async ({ params }) => {
	const project = await prisma.project.findUnique({ where: { id: params.id } });
	if (!project) throw error(404, { message: "Project not found" });
	return { project };
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/9.js
const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-D904sshh.js")).default;
const server_id = "src/routes/(app)/projects/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/9.BgLpS2uK.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/COJEdS0d.js",
	"_app/immutable/chunks/Czy_XTH7.js",
	"_app/immutable/chunks/CkNGqTXG.js",
	"_app/immutable/chunks/CYTOpgq_.js",
	"_app/immutable/chunks/BHCixpY4.js",
	"_app/immutable/chunks/OR8vJziY.js",
	"_app/immutable/chunks/BfKQhCba.js",
	"_app/immutable/chunks/eFZXOa0J.js",
	"_app/immutable/chunks/D4bx8ejP.js",
	"_app/immutable/chunks/HZaXPH-x.js",
	"_app/immutable/chunks/BTbF8K-2.js",
	"_app/immutable/chunks/B0xGDxMp.js",
	"_app/immutable/chunks/B_CSQMnr.js",
	"_app/immutable/chunks/BX6S9r25.js",
	"_app/immutable/chunks/BNYN6qA2.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=9-CXRs1OB3.js.map