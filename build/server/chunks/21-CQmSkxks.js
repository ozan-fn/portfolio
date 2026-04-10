import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
import { a as redirect, n as fail, t as error } from "./exports-kBK34q0P.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/_id_/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
const load = async ({ params }) => {
	const project = await prisma.project.findUnique({ where: { id: params.id } });
	if (!project) throw error(404, "Project not found");
	return { project };
};
const actions = {
	update: async ({ request, params }) => {
		const formData = await request.formData();
		const title = formData.get("title");
		const description = formData.get("description");
		const content = formData.get("content");
		const thumbnail = formData.get("thumbnail");
		const githubUrl = formData.get("githubUrl");
		const demoUrl = formData.get("demoUrl");
		const status = formData.get("status");
		const techStackString = formData.get("techStack");
		if (!title || !description) return fail(400, {
			error: "Title and description are required",
			values: {
				title,
				description,
				content,
				thumbnail,
				githubUrl,
				demoUrl,
				status,
				techStackString
			}
		});
		const techStack = techStackString ? techStackString.split(",").map((s) => s.trim()).filter(Boolean) : [];
		try {
			await prisma.project.update({
				where: { id: params.id },
				data: {
					title,
					description,
					content,
					thumbnail,
					githubUrl,
					demoUrl,
					status: status || "COMPLETED",
					techStack
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { error: "Failed to update project" });
		}
		throw redirect(303, "/dashboard/projects");
	},
	delete: async ({ params }) => {
		try {
			await prisma.project.delete({ where: { id: params.id } });
		} catch (err) {
			console.error(err);
			return fail(500, { error: "Failed to delete project" });
		}
		throw redirect(303, "/dashboard/projects");
	}
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/21.js
const index = 21;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-CtAsSlgr.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/21.B1GUGZmP.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/COJEdS0d.js",
	"_app/immutable/chunks/CkNGqTXG.js",
	"_app/immutable/chunks/CYTOpgq_.js",
	"_app/immutable/chunks/Dqlc-nSA.js",
	"_app/immutable/chunks/Dxk3ACRs.js",
	"_app/immutable/chunks/Dp8XMXav.js",
	"_app/immutable/chunks/Czy_XTH7.js",
	"_app/immutable/chunks/BAbGFpV-.js",
	"_app/immutable/chunks/CmGAKbIB.js",
	"_app/immutable/chunks/DF4J2jId.js",
	"_app/immutable/chunks/D4bx8ejP.js",
	"_app/immutable/chunks/BbZVTF4t.js",
	"_app/immutable/chunks/eH8bvPBN.js",
	"_app/immutable/chunks/BHCixpY4.js",
	"_app/immutable/chunks/DQfJ99m4.js",
	"_app/immutable/chunks/CKEPu5Bg.js",
	"_app/immutable/chunks/C4rnVyuu.js",
	"_app/immutable/chunks/CRRNmWFo.js",
	"_app/immutable/chunks/BHETGD_j.js",
	"_app/immutable/chunks/B2pYV11g.js",
	"_app/immutable/chunks/CXTc4z71.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=21-CQmSkxks.js.map