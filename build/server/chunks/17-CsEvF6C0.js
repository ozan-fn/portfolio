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
const component = async () => component_cache ??= (await import("./_page.svelte-DefYHYVg.js")).default;
const server_id = "src/routes/(protected)/dashboard/certificates/+page.server.ts";
const imports = [
	"_app/immutable/nodes/17.Dh0ePh7V.js",
	"_app/immutable/chunks/DYrfgn9M.js",
	"_app/immutable/chunks/Bh5jNQlZ.js",
	"_app/immutable/chunks/DtUMkQvv.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/DzYGiR35.js",
	"_app/immutable/chunks/D_FjJ9w8.js",
	"_app/immutable/chunks/2ETS7oeh.js",
	"_app/immutable/chunks/bm6DNqyk2.js",
	"_app/immutable/chunks/B52btV-K.js",
	"_app/immutable/chunks/C1vG9HRy.js",
	"_app/immutable/chunks/io5Y9osX.js",
	"_app/immutable/chunks/Chc5zS1J.js",
	"_app/immutable/chunks/Shq8r7Wz.js",
	"_app/immutable/chunks/DQyEH0JF.js",
	"_app/immutable/chunks/DBGQ-2FZ.js",
	"_app/immutable/chunks/DkW1acqd.js",
	"_app/immutable/chunks/D1VRbIGe.js",
	"_app/immutable/chunks/C6I5xvkh.js",
	"_app/immutable/chunks/CDVgqPVU.js",
	"_app/immutable/chunks/GbeH5Min.js",
	"_app/immutable/chunks/CQB7-Eml.js",
	"_app/immutable/chunks/B2fV9SZe.js",
	"_app/immutable/chunks/CTcmsQUE.js",
	"_app/immutable/chunks/CJIvDuSN.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=17-CsEvF6C0.js.map