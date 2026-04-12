import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/certificates/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ load: () => load });
var load = async () => {
	const certificates = await prisma.certificate.findMany({ orderBy: { issueDate: "desc" } });
	return { certificates: JSON.parse(JSON.stringify(certificates)) };
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/6.js
const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-DAIbG49f.js")).default;
const server_id = "src/routes/(app)/certificates/+page.server.ts";
const imports = [
	"_app/immutable/nodes/6.DZHxGclN.js",
	"_app/immutable/chunks/D1w_RFSq.js",
	"_app/immutable/chunks/C18sdH7h.js",
	"_app/immutable/chunks/Be3d-_on.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/BDvYflSV.js",
	"_app/immutable/chunks/BXPti-Gk.js",
	"_app/immutable/chunks/BykeofTS.js",
	"_app/immutable/chunks/Dl2HO6Ng.js",
	"_app/immutable/chunks/CYm7iPyV.js",
	"_app/immutable/chunks/CvyFHFpo.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=6-DON5wXlJ.js.map