import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { t as prisma } from "./prisma-BXY-hGZz.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ load: () => load });
const load = async () => {
	return { projects: await prisma.project.findMany({ orderBy: { createdAt: "desc" } }) };
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/17.js
const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-CWdbMZ3x.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/+page.server.ts";
const imports = [
	"_app/immutable/nodes/17.COd2GW7p.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/VvJ03jQm.js",
	"_app/immutable/chunks/Djhkul0P.js",
	"_app/immutable/chunks/aMc0A5rF.js",
	"_app/immutable/chunks/Bjwghsge.js",
	"_app/immutable/chunks/0GSJgK-F.js",
	"_app/immutable/chunks/DCbJqxLu.js",
	"_app/immutable/chunks/DPwYecWG.js",
	"_app/immutable/chunks/CpB61uSw.js",
	"_app/immutable/chunks/Dcpp0Cf0.js",
	"_app/immutable/chunks/DQtFMUgL.js",
	"_app/immutable/chunks/D7ca1Gcz.js",
	"_app/immutable/chunks/BiW6gY5k.js",
	"_app/immutable/chunks/C4APV2ih.js",
	"_app/immutable/chunks/ckv5DO_L.js",
	"_app/immutable/chunks/BkBtMdJi.js",
	"_app/immutable/chunks/6QoXeyAT.js",
	"_app/immutable/chunks/DDcjaDo3.js",
	"_app/immutable/chunks/DK-0CHpV.js",
	"_app/immutable/chunks/CUdxX0no.js",
	"_app/immutable/chunks/D2M3plr2.js",
	"_app/immutable/chunks/BQsPnCUD.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=17-1Tg94rrg.js.map