import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
import { a as redirect, n as fail, t as error } from "./exports-kBK34q0P.js";
import { n as uploadImage, t as deleteFile } from "./storage-Dtct7ClG.js";
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
	update: async ({ params, request }) => {
		const formData = await request.formData();
		const title = formData.get("title");
		const description = formData.get("description");
		const content = formData.get("content");
		const thumbnailFile = formData.get("thumbnail");
		const githubUrl = formData.get("githubUrl");
		const demoUrl = formData.get("demoUrl");
		const env = formData.get("env");
		const status = formData.get("status");
		const techStackString = formData.get("techStack");
		if (!title || !description) return fail(400, { message: "Title and description are required" });
		const techStack = techStackString ? techStackString.split(",").map((item) => item.trim()).filter((item) => item !== "") : [];
		try {
			const existingProject = await prisma.project.findUnique({
				where: { id: params.id },
				select: { thumbnail: true }
			});
			let thumbnail = void 0;
			if (thumbnailFile && thumbnailFile.size > 0) {
				thumbnail = await uploadImage(Buffer.from(await thumbnailFile.arrayBuffer()), "projects", thumbnailFile.type);
				if (existingProject?.thumbnail) await deleteFile(existingProject.thumbnail);
			}
			await prisma.project.update({
				where: { id: params.id },
				data: {
					title,
					description,
					content,
					...thumbnail && { thumbnail },
					githubUrl,
					demoUrl,
					env,
					status,
					techStack
				}
			});
		} catch (err) {
			console.error("Update project error:", err);
			return fail(500, { message: "Failed to update project" });
		}
		throw redirect(303, "/dashboard/projects");
	},
	delete: async ({ params }) => {
		try {
			const project = await prisma.project.findUnique({
				where: { id: params.id },
				select: { thumbnail: true }
			});
			if (project?.thumbnail) await deleteFile(project.thumbnail);
			await prisma.project.delete({ where: { id: params.id } });
		} catch (err) {
			console.error("Delete project error:", err);
			return fail(500, { message: "Failed to delete project" });
		}
		throw redirect(303, "/dashboard/projects");
	}
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/22.js
const index = 22;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-DuKC5VSI.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/22.Dr0MsnGz.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/Dr_zM3p0.js",
	"_app/immutable/chunks/Cw5cvJPR.js",
	"_app/immutable/chunks/DZbCXLBc.js",
	"_app/immutable/chunks/e11Tx_iV.js",
	"_app/immutable/chunks/BQkCsZss.js",
	"_app/immutable/chunks/BKntPBgS.js",
	"_app/immutable/chunks/PMFTZqdj.js",
	"_app/immutable/chunks/Clz0Wp70.js",
	"_app/immutable/chunks/6aY7LGuk.js",
	"_app/immutable/chunks/DKGcMd31.js",
	"_app/immutable/chunks/CZFnYrdz.js",
	"_app/immutable/chunks/BxeYG_Uu.js",
	"_app/immutable/chunks/qinMVjST.js",
	"_app/immutable/chunks/B9WTJlVd.js",
	"_app/immutable/chunks/8okcUSwY.js",
	"_app/immutable/chunks/DvOG7n1n.js",
	"_app/immutable/chunks/CCnBCYaM.js",
	"_app/immutable/chunks/DudHFfjW.js",
	"_app/immutable/chunks/BmL9q_GQ.js",
	"_app/immutable/chunks/Cno8UwTT.js",
	"_app/immutable/chunks/CpE6MGa8.js",
	"_app/immutable/chunks/_U6fiQKz.js",
	"_app/immutable/chunks/Du-oe5kA.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=22-Dnd6gL17.js.map