import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { i as redirect, n as fail } from "./exports-B42uMcC-.js";
import { t as prisma } from "./prisma-BXY-hGZz.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/new/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ actions: () => actions });
const actions = { default: async ({ request }) => {
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
		await prisma.project.create({ data: {
			title,
			description,
			content,
			thumbnail,
			githubUrl,
			demoUrl,
			status: status || "COMPLETED",
			techStack
		} });
	} catch (err) {
		console.error(err);
		return fail(500, { error: "Failed to create project" });
	}
	throw redirect(303, "/dashboard/projects");
} };
//#endregion
//#region .svelte-kit/adapter-bun/nodes/18.js
const index = 18;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-B9CIJAMx.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/new/+page.server.ts";
const imports = [
	"_app/immutable/nodes/18.lPSO5wKX.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/VvJ03jQm.js",
	"_app/immutable/chunks/aMc0A5rF.js",
	"_app/immutable/chunks/CrSlENNL.js",
	"_app/immutable/chunks/Djhkul0P.js",
	"_app/immutable/chunks/DQtFMUgL.js",
	"_app/immutable/chunks/Bjwghsge.js",
	"_app/immutable/chunks/C4APV2ih.js",
	"_app/immutable/chunks/BiW6gY5k.js",
	"_app/immutable/chunks/Eg2tcwNS.js",
	"_app/immutable/chunks/6QoXeyAT.js",
	"_app/immutable/chunks/0GSJgK-F.js",
	"_app/immutable/chunks/DHAhW4pc.js",
	"_app/immutable/chunks/DPwYecWG.js",
	"_app/immutable/chunks/CpB61uSw.js",
	"_app/immutable/chunks/Dcpp0Cf0.js",
	"_app/immutable/chunks/D79W2KkM.js",
	"_app/immutable/chunks/ujjKYITF.js",
	"_app/immutable/chunks/wDDnU9Kk.js",
	"_app/immutable/chunks/DCbJqxLu.js",
	"_app/immutable/chunks/LBiaOXUj.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=18-CV7-6xEt.js.map