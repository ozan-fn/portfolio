import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { a as redirect, n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
import { n as uploadImage } from "./storage-BUBCCRO1.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/new/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ actions: () => actions });
var actions = { default: async ({ request }) => {
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
	if (!title || !description) return fail(400, {
		message: "Title and description are required",
		data: {
			title,
			description,
			content,
			githubUrl,
			demoUrl,
			env,
			status,
			techStackString
		}
	});
	let thumbnail = null;
	if (thumbnailFile && thumbnailFile.size > 0) try {
		thumbnail = await uploadImage(Buffer.from(await thumbnailFile.arrayBuffer()), "projects", thumbnailFile.type);
	} catch (error) {
		console.error("Upload thumbnail error:", error);
	}
	const techStack = techStackString ? techStackString.split(",").map((item) => item.trim()).filter((item) => item !== "") : [];
	try {
		await prisma.project.create({ data: {
			title,
			description,
			content,
			thumbnail,
			githubUrl,
			demoUrl,
			env,
			status,
			techStack
		} });
	} catch (error) {
		console.error("Create project error:", error);
		return fail(500, {
			message: "Could not create project",
			data: {
				title,
				description,
				content,
				githubUrl,
				demoUrl,
				env,
				status,
				techStackString
			}
		});
	}
	throw redirect(303, "/dashboard/projects");
} };
//#endregion
//#region .svelte-kit/adapter-bun/nodes/22.js
const index = 22;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-midjkV5h.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/new/+page.server.ts";
const imports = [
	"_app/immutable/nodes/22.HKWd2dpO.js",
	"_app/immutable/chunks/D1w_RFSq.js",
	"_app/immutable/chunks/UzVvPweq.js",
	"_app/immutable/chunks/Be3d-_on.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/DImwKZpG.js",
	"_app/immutable/chunks/D1oRABRN.js",
	"_app/immutable/chunks/CvDZ79mX.js",
	"_app/immutable/chunks/DVnAbSuA.js",
	"_app/immutable/chunks/CYm7iPyV.js",
	"_app/immutable/chunks/D4IVV97f.js",
	"_app/immutable/chunks/Dl2HO6Ng.js",
	"_app/immutable/chunks/Bd4fEQuX.js",
	"_app/immutable/chunks/Bjdk1uRX.js",
	"_app/immutable/chunks/Bi3eUg9r2.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=22-zF1CghGi.js.map