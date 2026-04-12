import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { a as redirect, n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
import { n as uploadImage } from "./storage-BdsIAvCS.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/new/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ actions: () => actions });
var actions = { create: async ({ request }) => {
	const formData = await request.formData();
	const title = formData.get("title");
	const issuer = formData.get("issuer");
	const issueDateStr = formData.get("issueDate");
	const expiryDateStr = formData.get("expiryDate");
	const thumbnailFile = formData.get("thumbnail");
	const verifyUrl = formData.get("verifyUrl");
	if (!title || !issuer || !issueDateStr) return fail(400, { message: "Title, issuer and issue date are required" });
	try {
		let thumbnail = null;
		if (thumbnailFile && thumbnailFile.size > 0) thumbnail = await uploadImage(Buffer.from(await thumbnailFile.arrayBuffer()), "certificates", thumbnailFile.type);
		await prisma.certificate.create({ data: {
			title,
			issuer,
			issueDate: new Date(issueDateStr),
			expiryDate: expiryDateStr ? new Date(expiryDateStr) : null,
			thumbnail,
			verifyUrl
		} });
	} catch (err) {
		console.error("Create certificate error:", err);
		return fail(500, { message: "Failed to create certificate" });
	}
	throw redirect(303, "/dashboard/certificates");
} };
//#endregion
//#region .svelte-kit/adapter-bun/nodes/18.js
const index = 18;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-Ch32i6Jm.js")).default;
const server_id = "src/routes/(protected)/dashboard/certificates/new/+page.server.ts";
const imports = [
	"_app/immutable/nodes/18.Z2WzDzEY.js",
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

//# sourceMappingURL=18-ZbDXEV06.js.map