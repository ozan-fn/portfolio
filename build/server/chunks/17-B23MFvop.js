import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { t as prisma } from "./prisma-CP5mV9z4.js";
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
const component = async () => component_cache ??= (await import("./_page.svelte-DHoS323F.js")).default;
const server_id = "src/routes/(protected)/dashboard/certificates/+page.server.ts";
const imports = [
	"_app/immutable/nodes/17.C1auRs0E.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/BZy1t6m8.js",
	"_app/immutable/chunks/BrgG1I03.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/Dl_5DCgr.js",
	"_app/immutable/chunks/DpwOKFmC.js",
	"_app/immutable/chunks/Bsg-dgPe.js",
	"_app/immutable/chunks/mP6SPwEK.js",
	"_app/immutable/chunks/Cjk2neuu.js",
	"_app/immutable/chunks/DXK3kwy8.js",
	"_app/immutable/chunks/C2qLTuDr.js",
	"_app/immutable/chunks/BByLDg6l.js",
	"_app/immutable/chunks/sZixMsS5.js",
	"_app/immutable/chunks/B3PCanAx.js",
	"_app/immutable/chunks/CfAuaMXW.js",
	"_app/immutable/chunks/B8JBZnUc.js",
	"_app/immutable/chunks/_GW2ySG0.js",
	"_app/immutable/chunks/B0o9XgaC.js",
	"_app/immutable/chunks/DfJzbisG.js",
	"_app/immutable/chunks/Lx8YHk-i.js",
	"_app/immutable/chunks/CTBJwqr_.js",
	"_app/immutable/chunks/CIiMOl332.js",
	"_app/immutable/chunks/DJaUH-bm.js",
	"_app/immutable/chunks/BimGT1nf2.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=17-B23MFvop.js.map