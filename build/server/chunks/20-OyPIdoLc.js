import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
import { n as fail } from "./exports-kBK34q0P.js";
import { t as deleteFile } from "./storage-Dtct7ClG.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
const load = async () => {
	return { projects: await prisma.project.findMany({ orderBy: { createdAt: "desc" } }) };
};
const actions = { delete: async ({ request }) => {
	const id = (await request.formData()).get("id");
	if (!id) return fail(400, { message: "Project ID is required" });
	try {
		const project = await prisma.project.findUnique({
			where: { id },
			select: { thumbnail: true }
		});
		if (project?.thumbnail) await deleteFile(project.thumbnail);
		await prisma.project.delete({ where: { id } });
		return { success: true };
	} catch (error) {
		console.error("Delete project error:", error);
		return fail(500, { message: "Failed to delete project" });
	}
} };
//#endregion
//#region .svelte-kit/adapter-bun/nodes/20.js
const index = 20;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-Ss9RFXp2.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/+page.server.ts";
const imports = [
	"_app/immutable/nodes/20.DnP55Zzs.js",
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
	"_app/immutable/chunks/CR4NlZIO.js",
	"_app/immutable/chunks/CCnBCYaM.js",
	"_app/immutable/chunks/C6sHDagH.js",
	"_app/immutable/chunks/CpE6MGa8.js",
	"_app/immutable/chunks/BcEHo6wA.js",
	"_app/immutable/chunks/qinMVjST.js",
	"_app/immutable/chunks/BaiRr2ZE.js",
	"_app/immutable/chunks/DDtgbht9.js",
	"_app/immutable/chunks/pH-7xSE8.js",
	"_app/immutable/chunks/xiGlzjJQ.js",
	"_app/immutable/chunks/_U6fiQKz.js",
	"_app/immutable/chunks/DDdMp1MP.js",
	"_app/immutable/chunks/Du-oe5kA.js",
	"_app/immutable/chunks/CYy6qRW6.js",
	"_app/immutable/chunks/DCWOGaiU.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=20-OyPIdoLc.js.map