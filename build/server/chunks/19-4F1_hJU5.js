import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { i as redirect, n as fail, t as error } from "./exports-B42uMcC-.js";
import { t as prisma } from "./prisma-BXY-hGZz.js";
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
//#region .svelte-kit/adapter-bun/nodes/19.js
const index = 19;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-CN9qLyLM.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/19.DkpZyy1P.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/VvJ03jQm.js",
	"_app/immutable/chunks/aMc0A5rF.js",
	"_app/immutable/chunks/Bjwghsge.js",
	"_app/immutable/chunks/DPwYecWG.js",
	"_app/immutable/chunks/CpB61uSw.js",
	"_app/immutable/chunks/Dcpp0Cf0.js",
	"_app/immutable/chunks/Djhkul0P.js",
	"_app/immutable/chunks/DQtFMUgL.js",
	"_app/immutable/chunks/CrSlENNL.js",
	"_app/immutable/chunks/C4APV2ih.js",
	"_app/immutable/chunks/BiW6gY5k.js",
	"_app/immutable/chunks/Eg2tcwNS.js",
	"_app/immutable/chunks/6QoXeyAT.js",
	"_app/immutable/chunks/0GSJgK-F.js",
	"_app/immutable/chunks/DHAhW4pc.js",
	"_app/immutable/chunks/D79W2KkM.js",
	"_app/immutable/chunks/ujjKYITF.js",
	"_app/immutable/chunks/wDDnU9Kk.js",
	"_app/immutable/chunks/DCbJqxLu.js",
	"_app/immutable/chunks/LBiaOXUj.js",
	"_app/immutable/chunks/DDcjaDo3.js",
	"_app/immutable/chunks/CUdxX0no.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=19-4F1_hJU5.js.map