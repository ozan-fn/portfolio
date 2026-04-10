import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
import { a as redirect, n as fail } from "./exports-kBK34q0P.js";
import { n as uploadImage } from "./storage-Dtct7ClG.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/new/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ actions: () => actions });
const actions = { default: async ({ request }) => {
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
//#region .svelte-kit/adapter-bun/nodes/21.js
const index = 21;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-yKy_o60P.js")).default;
const server_id = "src/routes/(protected)/dashboard/projects/new/+page.server.ts";
const imports = [
	"_app/immutable/nodes/21.CdaIhF9C.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/Dr_zM3p0.js",
	"_app/immutable/chunks/DZbCXLBc.js",
	"_app/immutable/chunks/6aY7LGuk.js",
	"_app/immutable/chunks/Cw5cvJPR.js",
	"_app/immutable/chunks/Clz0Wp70.js",
	"_app/immutable/chunks/e11Tx_iV.js",
	"_app/immutable/chunks/DKGcMd31.js",
	"_app/immutable/chunks/CZFnYrdz.js",
	"_app/immutable/chunks/BxeYG_Uu.js",
	"_app/immutable/chunks/qinMVjST.js",
	"_app/immutable/chunks/B9WTJlVd.js",
	"_app/immutable/chunks/8okcUSwY.js",
	"_app/immutable/chunks/BQkCsZss.js",
	"_app/immutable/chunks/BKntPBgS.js",
	"_app/immutable/chunks/PMFTZqdj.js",
	"_app/immutable/chunks/DvOG7n1n.js",
	"_app/immutable/chunks/CCnBCYaM.js",
	"_app/immutable/chunks/DudHFfjW.js",
	"_app/immutable/chunks/BmL9q_GQ.js",
	"_app/immutable/chunks/Cno8UwTT.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=21-DWd4uAWI.js.map