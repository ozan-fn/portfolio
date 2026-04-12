import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { a as redirect, n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
import { n as uploadImage } from "./storage-BUBCCRO1.js";
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
const component = async () => component_cache ??= (await import("./_page.svelte-cszpJ2PU.js")).default;
const server_id = "src/routes/(protected)/dashboard/certificates/new/+page.server.ts";
const imports = [
	"_app/immutable/nodes/18.jWtZS0tj.js",
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

//# sourceMappingURL=18-Eh8mSTyB.js.map