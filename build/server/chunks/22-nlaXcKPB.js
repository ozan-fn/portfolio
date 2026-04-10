import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
import { t as error } from "./exports-kBK34q0P.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/_id_/view/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ load: () => load });
const load = async ({ params }) => {
	const project = await prisma.project.findUnique({ where: { id: params.id } });
	if (!project) throw error(404, "Project not found");
	return { project };
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/22.js
const index = 22;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-Cnm7lHV4.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/[id]/view/+page.server.ts";
const imports = [
	"_app/immutable/nodes/22.SP00Mb6A.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/COJEdS0d.js",
	"_app/immutable/chunks/Czy_XTH7.js",
	"_app/immutable/chunks/CkNGqTXG.js",
	"_app/immutable/chunks/CYTOpgq_.js",
	"_app/immutable/chunks/BHCixpY4.js",
	"_app/immutable/chunks/BAbGFpV-.js",
	"_app/immutable/chunks/DF4J2jId.js",
	"_app/immutable/chunks/D4bx8ejP.js",
	"_app/immutable/chunks/rcgDbsqO.js",
	"_app/immutable/chunks/eH8bvPBN.js",
	"_app/immutable/chunks/CI2d_w3T.js",
	"_app/immutable/chunks/BbZVTF4t.js",
	"_app/immutable/chunks/ORqH_Cfx.js",
	"_app/immutable/chunks/B3j_9PW7.js",
	"_app/immutable/chunks/Ct-HddVD.js",
	"_app/immutable/chunks/MGjciyDJ.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=22-nlaXcKPB.js.map