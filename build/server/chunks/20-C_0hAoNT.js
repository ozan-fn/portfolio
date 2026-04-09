import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
import { a as redirect, n as fail } from "./exports-kBK34q0P.js";
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
//#region .svelte-kit/adapter-bun/nodes/20.js
const index = 20;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-C9zB2YG9.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/new/+page.server.ts";
const imports = [
	"_app/immutable/nodes/20.Bw3a83r7.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/COJEdS0d.js",
	"_app/immutable/chunks/CkNGqTXG.js",
	"_app/immutable/chunks/DTTAFL8b.js",
	"_app/immutable/chunks/Czy_XTH7.js",
	"_app/immutable/chunks/BfKQhCba.js",
	"_app/immutable/chunks/CYTOpgq_.js",
	"_app/immutable/chunks/eFZXOa0J.js",
	"_app/immutable/chunks/D4bx8ejP.js",
	"_app/immutable/chunks/B_CSQMnr.js",
	"_app/immutable/chunks/B0xGDxMp.js",
	"_app/immutable/chunks/BHCixpY4.js",
	"_app/immutable/chunks/DXYtPGel.js",
	"_app/immutable/chunks/DFzKG_Ko.js",
	"_app/immutable/chunks/CZfYni6s.js",
	"_app/immutable/chunks/Dp8XMXav.js",
	"_app/immutable/chunks/BWhQr65l.js",
	"_app/immutable/chunks/07TKbenM.js",
	"_app/immutable/chunks/XWCh-Jz1.js",
	"_app/immutable/chunks/CRRNmWFo.js",
	"_app/immutable/chunks/BSo7qp4u.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=20-C_0hAoNT.js.map