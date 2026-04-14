import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { t as prisma } from "./prisma-CP5mV9z4.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/_layout.server.ts.js
var _layout_server_ts_exports = /* @__PURE__ */ __exportAll({ load: () => load });
var load = async () => {
	return { user: await prisma.user.findFirst({ select: {
		image: true,
		name: true
	} }) };
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/2.js
const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import("./_layout.svelte-CMxqMvzT.js")).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = [
	"_app/immutable/nodes/2.CiUyBWNF.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/BByLDg6l.js",
	"_app/immutable/chunks/BrgG1I03.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/CIlUzoMK.js",
	"_app/immutable/chunks/DfmeM4-x.js",
	"_app/immutable/chunks/DqR6Ph5D.js",
	"_app/immutable/chunks/_tVjUjAk.js",
	"_app/immutable/chunks/DfJzbisG.js",
	"_app/immutable/chunks/Lx8YHk-i.js",
	"_app/immutable/chunks/BI5tlxzv.js",
	"_app/immutable/chunks/CqYyBGaW.js",
	"_app/immutable/chunks/sZixMsS5.js",
	"_app/immutable/chunks/CqR2cVr1.js",
	"_app/immutable/chunks/NRNR0r6K.js",
	"_app/immutable/chunks/_GW2ySG0.js",
	"_app/immutable/chunks/B0o9XgaC.js",
	"_app/immutable/chunks/DKk9ajPK2.js",
	"_app/immutable/chunks/BtOj0yJ_.js",
	"_app/immutable/chunks/CWOK_54O.js",
	"_app/immutable/chunks/BimGT1nf2.js"
];
const stylesheets = ["_app/immutable/assets/2.ViJR_t9l.css"];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _layout_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=2-B3Zx_e18.js.map