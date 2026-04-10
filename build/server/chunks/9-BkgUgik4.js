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
const component = async () => component_cache ??= (await import("./_page.svelte-BTnIdQKN.js")).default;
const server_id = "src/routes/(app)/projects/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/9.S9kRciXA.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/Dr_zM3p0.js",
	"_app/immutable/chunks/Cw5cvJPR.js",
	"_app/immutable/chunks/DZbCXLBc.js",
	"_app/immutable/chunks/e11Tx_iV.js",
	"_app/immutable/chunks/B9WTJlVd.js",
	"_app/immutable/chunks/CZTnIyoc.js",
	"_app/immutable/chunks/Clz0Wp70.js",
	"_app/immutable/chunks/DKGcMd31.js",
	"_app/immutable/chunks/CZFnYrdz.js",
	"_app/immutable/chunks/CR4NlZIO.js",
	"_app/immutable/chunks/xiGlzjJQ.js",
	"_app/immutable/chunks/qinMVjST.js",
	"_app/immutable/chunks/BxeYG_Uu.js",
	"_app/immutable/chunks/CYy6qRW6.js",
	"_app/immutable/chunks/DCWOGaiU.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=9-BkgUgik4.js.map