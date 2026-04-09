import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { t as error } from "./exports-B42uMcC-.js";
import { t as prisma } from "./prisma-BXY-hGZz.js";
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
const component = async () => component_cache ??= (await import("./_page.svelte-CdTRS-RL.js")).default;
const server_id = "src/routes/(app)/projects/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/9.BYDg6cn4.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/VvJ03jQm.js",
	"_app/immutable/chunks/Djhkul0P.js",
	"_app/immutable/chunks/aMc0A5rF.js",
	"_app/immutable/chunks/Bjwghsge.js",
	"_app/immutable/chunks/0GSJgK-F.js",
	"_app/immutable/chunks/BlEVukNd.js",
	"_app/immutable/chunks/DQtFMUgL.js",
	"_app/immutable/chunks/C4APV2ih.js",
	"_app/immutable/chunks/BiW6gY5k.js",
	"_app/immutable/chunks/ckv5DO_L.js",
	"_app/immutable/chunks/DUnKheq_.js",
	"_app/immutable/chunks/6QoXeyAT.js",
	"_app/immutable/chunks/Eg2tcwNS.js",
	"_app/immutable/chunks/D2M3plr2.js",
	"_app/immutable/chunks/BQsPnCUD.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=9-2-4Kmob0.js.map