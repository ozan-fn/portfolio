import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { a as redirect, n as fail, t as error } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
import { n as uploadImage, t as deleteFile } from "./storage-BdsIAvCS.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/_id_/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
var load = async ({ params }) => {
	const project = await prisma.project.findUnique({ where: { id: params.id } });
	if (!project) throw error(404, "Project not found");
	return { project };
};
var actions = {
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
//#region .svelte-kit/adapter-bun/nodes/23.js
const index = 23;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-D5ukzgd4.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/23.DriMKaJ4.js",
	"_app/immutable/chunks/DYrfgn9M.js",
	"_app/immutable/chunks/DzYGiR35.js",
	"_app/immutable/chunks/DtUMkQvv.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/nRyRQFvZ.js",
	"_app/immutable/chunks/CVFCDIRL.js",
	"_app/immutable/chunks/io5Y9osX.js",
	"_app/immutable/chunks/Chc5zS1J.js",
	"_app/immutable/chunks/Shq8r7Wz.js",
	"_app/immutable/chunks/GbeH5Min.js",
	"_app/immutable/chunks/C1vG9HRy.js",
	"_app/immutable/chunks/Bh6ZNlic.js",
	"_app/immutable/chunks/D1VRbIGe.js",
	"_app/immutable/chunks/z70b_DCL.js",
	"_app/immutable/chunks/ZIxaEaUC.js",
	"_app/immutable/chunks/B2fV9SZe.js",
	"_app/immutable/chunks/CJIvDuSN.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=23-BSDyFjQF.js.map