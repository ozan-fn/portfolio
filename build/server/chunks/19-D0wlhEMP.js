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
const component = async () => component_cache ??= (await import("./_page.svelte-B74OGWCZ.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/+page.server.ts";
const imports = [
	"_app/immutable/nodes/19.DXSQuYyc.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/COJEdS0d.js",
	"_app/immutable/chunks/Czy_XTH7.js",
	"_app/immutable/chunks/CkNGqTXG.js",
	"_app/immutable/chunks/CYTOpgq_.js",
	"_app/immutable/chunks/BHCixpY4.js",
	"_app/immutable/chunks/CRRNmWFo.js",
	"_app/immutable/chunks/Dqlc-nSA.js",
	"_app/immutable/chunks/Dxk3ACRs.js",
	"_app/immutable/chunks/Dp8XMXav.js",
	"_app/immutable/chunks/BAbGFpV-.js",
	"_app/immutable/chunks/DUDe5kkv.js",
	"_app/immutable/chunks/D4bx8ejP.js",
	"_app/immutable/chunks/DF4J2jId.js",
	"_app/immutable/chunks/rcgDbsqO.js",
	"_app/immutable/chunks/BcNBi2Kp.js",
	"_app/immutable/chunks/CsraHWEC.js",
	"_app/immutable/chunks/eH8bvPBN.js",
	"_app/immutable/chunks/B2pYV11g.js",
	"_app/immutable/chunks/B3j_9PW7.js",
	"_app/immutable/chunks/CXTc4z71.js",
	"_app/immutable/chunks/Ct-HddVD.js",
	"_app/immutable/chunks/ORqH_Cfx.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=19-D0wlhEMP.js.map