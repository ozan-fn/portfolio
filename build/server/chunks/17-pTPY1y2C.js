import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
var load = async () => {
	return { certificates: await prisma.certificate.findMany({ orderBy: { issueDate: "desc" } }) };
};
var actions = { delete: async ({ request }) => {
	const id = (await request.formData()).get("id");
	if (!id) return { success: false };
	try {
		await prisma.certificate.delete({ where: { id } });
		return { success: true };
	} catch (err) {
		console.error("Delete certificate error:", err);
		return { success: false };
	}
} };
//#endregion
//#region .svelte-kit/adapter-bun/nodes/17.js
const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-DOshtjrv.js")).default;
const server_id = "src/routes/(protected)/dashboard/certificates/+page.server.ts";
const imports = [
	"_app/immutable/nodes/17.iCrsZiKX.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/BZy1t6m8.js",
	"_app/immutable/chunks/BrgG1I03.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/BSKNDFSG.js",
	"_app/immutable/chunks/DpwOKFmC.js",
	"_app/immutable/chunks/Bsg-dgPe.js",
	"_app/immutable/chunks/SCwF5009.js",
	"_app/immutable/chunks/Cjk2neuu.js",
	"_app/immutable/chunks/DXK3kwy8.js",
	"_app/immutable/chunks/DdwMZYMk.js",
	"_app/immutable/chunks/DKdtCtjd.js",
	"_app/immutable/chunks/C2LYAyyJ.js",
	"_app/immutable/chunks/B3PCanAx.js",
	"_app/immutable/chunks/CfAuaMXW.js",
	"_app/immutable/chunks/B8JBZnUc.js",
	"_app/immutable/chunks/_GW2ySG0.js",
	"_app/immutable/chunks/B0o9XgaC.js",
	"_app/immutable/chunks/DfJzbisG.js",
	"_app/immutable/chunks/Lx8YHk-i.js",
	"_app/immutable/chunks/CTBJwqr_.js",
	"_app/immutable/chunks/BA9jlg-s2.js",
	"_app/immutable/chunks/DJaUH-bm.js",
	"_app/immutable/chunks/Cwjh7MkQ.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=17-pTPY1y2C.js.map