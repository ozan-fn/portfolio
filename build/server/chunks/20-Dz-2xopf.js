import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { t as error } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-CP5mV9z4.js";
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
const component = async () => component_cache ??= (await import("./_page.svelte-DjTVDDaB.js")).default;
const server_id = "src/routes/(protected)/dashboard/certificates/[id]/view/+page.server.ts";
const imports = [
	"_app/immutable/nodes/20.DgCmXpLY.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/BrgG1I03.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/vD4RCSxE.js",
	"_app/immutable/chunks/bLQMTAO9.js",
	"_app/immutable/chunks/5Tb_yKbT.js",
	"_app/immutable/chunks/lfX5A_YH.js",
	"_app/immutable/chunks/Dr2_a7Ef.js",
	"_app/immutable/chunks/DpwOKFmC.js",
	"_app/immutable/chunks/Cjk2neuu.js",
	"_app/immutable/chunks/Lx8YHk-i.js",
	"_app/immutable/chunks/CzMvIaps.js",
	"_app/immutable/chunks/ITt6zO0N.js",
	"_app/immutable/chunks/BtOj0yJ_.js",
	"_app/immutable/chunks/CWOK_54O.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=20-Dz-2xopf.js.map