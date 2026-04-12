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
const component = async () => component_cache ??= (await import("./_page.svelte-DeD4UM6n.js")).default;
const server_id = "src/routes/(protected)/dashboard/certificates/+page.server.ts";
const imports = [
	"_app/immutable/nodes/17.D8g-3Jvn.js",
	"_app/immutable/chunks/D1w_RFSq.js",
	"_app/immutable/chunks/CCrHD_Ia.js",
	"_app/immutable/chunks/Be3d-_on.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/B9qLrmkk.js",
	"_app/immutable/chunks/DyNC1g6Y.js",
	"_app/immutable/chunks/CS5xi4bw.js",
	"_app/immutable/chunks/C0AjNIIs.js",
	"_app/immutable/chunks/CXSH-D7G.js",
	"_app/immutable/chunks/Dg5EqJvS.js",
	"_app/immutable/chunks/D1oRABRN.js",
	"_app/immutable/chunks/CvDZ79mX.js",
	"_app/immutable/chunks/DVnAbSuA.js",
	"_app/immutable/chunks/C66M96YJ.js",
	"_app/immutable/chunks/BpXTdvfo.js",
	"_app/immutable/chunks/BDn0HoeJ.js",
	"_app/immutable/chunks/Dl2HO6Ng.js",
	"_app/immutable/chunks/BoeiBBw1.js",
	"_app/immutable/chunks/CiqMIqt7.js",
	"_app/immutable/chunks/CYm7iPyV.js",
	"_app/immutable/chunks/COlBZsny.js",
	"_app/immutable/chunks/Bi3eUg9r2.js",
	"_app/immutable/chunks/Cv_PKljf.js",
	"_app/immutable/chunks/fpRipbV0.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=17-iAuf-xqC.js.map