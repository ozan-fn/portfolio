import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { a as redirect, n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
import { r as uploadImage } from "./storage-DPitLlQb.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/new/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ actions: () => actions });
var actions = { default: async ({ request }) => {
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
	if (!title || !slug || !description) return fail(400, {
		message: "Title, slug, and description are required",
		data: {
			title,
			slug,
			description,
			content,
			githubUrl,
			demoUrl,
			env,
			status,
			techStackString,
			featured,
			order
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
			slug,
			description,
			content,
			thumbnail,
			githubUrl,
			demoUrl,
			env,
			status,
			techStack,
			featured,
			order
		} });
	} catch (error) {
		console.error("Create project error:", error);
		return fail(500, {
			message: "Could not create project. Ensure slug is unique.",
			data: {
				title,
				slug,
				description,
				content,
				githubUrl,
				demoUrl,
				env,
				status,
				techStackString,
				featured,
				order
			}
		});
	}
	throw redirect(303, "/dashboard/projects");
} };
//#endregion
//#region .svelte-kit/adapter-bun/nodes/22.js
const index = 22;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-B1kA1GFt.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/new/+page.server.ts";
const imports = [
	"_app/immutable/nodes/22.CdgI9uyi.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/wmgTPKIH.js",
	"_app/immutable/chunks/BrgG1I03.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/DUDAWf8x.js",
	"_app/immutable/chunks/DdwMZYMk.js",
	"_app/immutable/chunks/DKdtCtjd.js",
	"_app/immutable/chunks/C2LYAyyJ.js",
	"_app/immutable/chunks/Lx8YHk-i.js",
	"_app/immutable/chunks/D_D-TXRd.js",
	"_app/immutable/chunks/_GW2ySG0.js",
	"_app/immutable/chunks/CzMvIaps.js",
	"_app/immutable/chunks/ITt6zO0N.js",
	"_app/immutable/chunks/BA9jlg-s2.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=22-B1tmUcvn.js.map