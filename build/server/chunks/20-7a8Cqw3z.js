import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { t as error } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/_id_/view/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ load: () => load });
var load = async ({ params }) => {
	const certificate = await prisma.certificate.findUnique({ where: { id: params.id } });
	if (!certificate) throw error(404, "Certificate not found");
	return { certificate };
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/20.js
const index = 20;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-CxZWKTbR.js")).default;
const server_id = "src/routes/(protected)/dashboard/certificates/[id]/view/+page.server.ts";
const imports = [
	"_app/immutable/nodes/20.CcV2v6_7.js",
	"_app/immutable/chunks/D1w_RFSq.js",
	"_app/immutable/chunks/Be3d-_on.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/C_VH4dm5.js",
	"_app/immutable/chunks/BDvYflSV.js",
	"_app/immutable/chunks/dr9K7QjM.js",
	"_app/immutable/chunks/BXPti-Gk.js",
	"_app/immutable/chunks/CI_811MJ.js",
	"_app/immutable/chunks/DyNC1g6Y.js",
	"_app/immutable/chunks/CXSH-D7G.js",
	"_app/immutable/chunks/CYm7iPyV.js",
	"_app/immutable/chunks/Bd4fEQuX.js",
	"_app/immutable/chunks/Bjdk1uRX.js",
	"_app/immutable/chunks/CzJXDAXw.js",
	"_app/immutable/chunks/CvyFHFpo.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=20-7a8Cqw3z.js.map