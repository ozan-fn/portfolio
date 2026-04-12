import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { a as redirect, n as fail, t as error } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
import { n as uploadImage, t as deleteFile } from "./storage-BUBCCRO1.js";
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
const component = async () => component_cache ??= (await import("./_page.svelte-BUt_QX3K.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/23.Dwnl8Bk0.js",
	"_app/immutable/chunks/D1w_RFSq.js",
	"_app/immutable/chunks/B9qLrmkk.js",
	"_app/immutable/chunks/Be3d-_on.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/DImwKZpG.js",
	"_app/immutable/chunks/UzVvPweq.js",
	"_app/immutable/chunks/D1oRABRN.js",
	"_app/immutable/chunks/CvDZ79mX.js",
	"_app/immutable/chunks/DVnAbSuA.js",
	"_app/immutable/chunks/CYm7iPyV.js",
	"_app/immutable/chunks/Dg5EqJvS.js",
	"_app/immutable/chunks/D4IVV97f.js",
	"_app/immutable/chunks/Dl2HO6Ng.js",
	"_app/immutable/chunks/Bd4fEQuX.js",
	"_app/immutable/chunks/Bjdk1uRX.js",
	"_app/immutable/chunks/Bi3eUg9r2.js",
	"_app/immutable/chunks/fpRipbV0.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=23-CwXA7Hi5.js.map