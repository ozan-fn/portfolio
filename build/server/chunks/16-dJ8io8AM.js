import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
const load = async () => {
	return { certificates: await prisma.certificate.findMany({ orderBy: { issueDate: "desc" } }) };
};
const actions = { delete: async ({ request }) => {
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
//#region .svelte-kit/adapter-bun/nodes/16.js
const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-DlmRLuEW.js")).default;
const server_id = "src/routes/(protected)/dashboard/certificates/+page.server.ts";
const imports = [
	"_app/immutable/nodes/16.DFrJiSoc.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/Dr_zM3p0.js",
	"_app/immutable/chunks/Cw5cvJPR.js",
	"_app/immutable/chunks/DZbCXLBc.js",
	"_app/immutable/chunks/e11Tx_iV.js",
	"_app/immutable/chunks/B9WTJlVd.js",
	"_app/immutable/chunks/BmL9q_GQ.js",
	"_app/immutable/chunks/BQkCsZss.js",
	"_app/immutable/chunks/BKntPBgS.js",
	"_app/immutable/chunks/PMFTZqdj.js",
	"_app/immutable/chunks/Clz0Wp70.js",
	"_app/immutable/chunks/CZp4nuAZ.js",
	"_app/immutable/chunks/CZFnYrdz.js",
	"_app/immutable/chunks/DKGcMd31.js",
	"_app/immutable/chunks/59hhIa2w.js",
	"_app/immutable/chunks/BFYBl3xJ.js",
	"_app/immutable/chunks/CPDRzexl.js",
	"_app/immutable/chunks/Cno8UwTT.js",
	"_app/immutable/chunks/BSI_SiHu.js",
	"_app/immutable/chunks/BfXCNAi6.js",
	"_app/immutable/chunks/CCnBCYaM.js",
	"_app/immutable/chunks/C6sHDagH.js",
	"_app/immutable/chunks/CpE6MGa8.js",
	"_app/immutable/chunks/BcEHo6wA.js",
	"_app/immutable/chunks/qinMVjST.js",
	"_app/immutable/chunks/BaiRr2ZE.js",
	"_app/immutable/chunks/BF1_reaH.js",
	"_app/immutable/chunks/DDtgbht9.js",
	"_app/immutable/chunks/_U6fiQKz.js",
	"_app/immutable/chunks/DDdMp1MP.js",
	"_app/immutable/chunks/Du-oe5kA.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=16-dJ8io8AM.js.map