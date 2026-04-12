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
const component = async () => component_cache ??= (await import("./_page.svelte-D-ruRone.js")).default;
const server_id = "src/routes/(app)/certificates/+page.server.ts";
const imports = [
	"_app/immutable/nodes/6.DLSGOGjL.js",
	"_app/immutable/chunks/DYrfgn9M.js",
	"_app/immutable/chunks/X_ROie9W.js",
	"_app/immutable/chunks/DtUMkQvv.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/B5f4VDsd2.js",
	"_app/immutable/chunks/D6AeGxxS.js",
	"_app/immutable/chunks/BjbSKmGJ.js",
	"_app/immutable/chunks/D1VRbIGe.js",
	"_app/immutable/chunks/GbeH5Min.js",
	"_app/immutable/chunks/B7FfXJl4.js",
	"_app/immutable/chunks/C3s63ttY.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=6-DfI8XbOf.js.map