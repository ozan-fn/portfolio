import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
import { t as error } from "./exports-kBK34q0P.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/_id_/view/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ load: () => load });
const load = async ({ params }) => {
	const certificate = await prisma.certificate.findUnique({ where: { id: params.id } });
	if (!certificate) throw error(404, "Certificate not found");
	return { certificate };
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/19.js
const index = 19;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-DxHhc83r.js")).default;
const server_id = "src/routes/(protected)/dashboard/certificates/[id]/view/+page.server.ts";
const imports = [
	"_app/immutable/nodes/19.BMgp90K0.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/Dr_zM3p0.js",
	"_app/immutable/chunks/Cw5cvJPR.js",
	"_app/immutable/chunks/DZbCXLBc.js",
	"_app/immutable/chunks/e11Tx_iV.js",
	"_app/immutable/chunks/DKGcMd31.js",
	"_app/immutable/chunks/Clz0Wp70.js",
	"_app/immutable/chunks/CZFnYrdz.js",
	"_app/immutable/chunks/CR4NlZIO.js",
	"_app/immutable/chunks/B9WTJlVd.js",
	"_app/immutable/chunks/6aY7LGuk.js",
	"_app/immutable/chunks/BxeYG_Uu.js",
	"_app/immutable/chunks/qinMVjST.js",
	"_app/immutable/chunks/BVIwtvWp.js",
	"_app/immutable/chunks/D_xzolrM.js",
	"_app/immutable/chunks/WmFGqyHH.js",
	"_app/immutable/chunks/BCbphwue.js",
	"_app/immutable/chunks/BF1_reaH.js",
	"_app/immutable/chunks/xiGlzjJQ.js",
	"_app/immutable/chunks/eU5splNC.js",
	"_app/immutable/chunks/oYLjuyUT.js",
	"_app/immutable/chunks/DCWOGaiU.js",
	"_app/immutable/chunks/DDdMp1MP.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=19-ew2ZHu7W.js.map