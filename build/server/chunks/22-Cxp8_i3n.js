import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { a as redirect, n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
import { n as uploadImage } from "./storage-BdsIAvCS.js";
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
const component = async () => component_cache ??= (await import("./_page.svelte-BdJdHgwM.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/new/+page.server.ts";
const imports = [
	"_app/immutable/nodes/22.Cbj_k1b_.js",
	"_app/immutable/chunks/DYrfgn9M.js",
	"_app/immutable/chunks/CVFCDIRL.js",
	"_app/immutable/chunks/DtUMkQvv.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/nRyRQFvZ.js",
	"_app/immutable/chunks/io5Y9osX.js",
	"_app/immutable/chunks/Chc5zS1J.js",
	"_app/immutable/chunks/Shq8r7Wz.js",
	"_app/immutable/chunks/GbeH5Min.js",
	"_app/immutable/chunks/Bh6ZNlic.js",
	"_app/immutable/chunks/D1VRbIGe.js",
	"_app/immutable/chunks/z70b_DCL.js",
	"_app/immutable/chunks/ZIxaEaUC.js",
	"_app/immutable/chunks/B2fV9SZe.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=22-Cxp8_i3n.js.map