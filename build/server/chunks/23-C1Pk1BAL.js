import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { a as redirect, n as fail, t as error } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
import { r as uploadImage, t as deleteFile } from "./storage-DPitLlQb.js";
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
		const slug = formData.get("slug");
		const description = formData.get("description");
		const content = formData.get("content");
		const thumbnailFile = formData.get("thumbnail");
		const githubUrl = formData.get("githubUrl");
		const demoUrl = formData.get("demoUrl");
		const env = formData.get("env");
		const status = formData.get("status");
		const featured = formData.get("featured") === "on";
		const order = parseInt(formData.get("order")) || 0;
		const techStackString = formData.get("techStack");
		if (!title || !slug || !description) return fail(400, { message: "Title, slug, and description are required" });
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
					slug,
					description,
					content,
					...thumbnail && { thumbnail },
					githubUrl,
					demoUrl,
					env,
					status,
					techStack,
					featured,
					order
				}
			});
		} catch (err) {
			console.error("Update project error:", err);
			return fail(500, { message: "Failed to update project. Ensure slug is unique." });
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
const component = async () => component_cache ??= (await import("./_page.svelte-DeX_gP4C.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/23.BjuS59a5.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/BSKNDFSG.js",
	"_app/immutable/chunks/BrgG1I03.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/DUDAWf8x.js",
	"_app/immutable/chunks/wmgTPKIH.js",
	"_app/immutable/chunks/DdwMZYMk.js",
	"_app/immutable/chunks/DKdtCtjd.js",
	"_app/immutable/chunks/C2LYAyyJ.js",
	"_app/immutable/chunks/Lx8YHk-i.js",
	"_app/immutable/chunks/DXK3kwy8.js",
	"_app/immutable/chunks/D_D-TXRd.js",
	"_app/immutable/chunks/_GW2ySG0.js",
	"_app/immutable/chunks/CzMvIaps.js",
	"_app/immutable/chunks/ITt6zO0N.js",
	"_app/immutable/chunks/BA9jlg-s2.js",
	"_app/immutable/chunks/Cwjh7MkQ.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=23-C1Pk1BAL.js.map