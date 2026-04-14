import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { a as redirect, n as fail } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
import { r as uploadImage } from "./storage-DPitLlQb.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/new/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ actions: () => actions });
var actions = { create: async ({ request }) => {
	const formData = await request.formData();
	const title = formData.get("title");
	const slug = formData.get("slug");
	const issuer = formData.get("issuer");
	const issueDateStr = formData.get("issueDate");
	const expiryDateStr = formData.get("expiryDate");
	const thumbnailFile = formData.get("thumbnail");
	const verifyUrl = formData.get("verifyUrl");
	const order = parseInt(formData.get("order")) || 0;
	const featured = formData.get("featured") === "on";
	if (!title || !slug || !issuer || !issueDateStr) return fail(400, { message: "Title, slug, issuer and issue date are required" });
	try {
		let thumbnail = null;
		if (thumbnailFile && thumbnailFile.size > 0) thumbnail = await uploadImage(Buffer.from(await thumbnailFile.arrayBuffer()), "certificates", thumbnailFile.type);
		await prisma.certificate.create({ data: {
			title,
			slug,
			issuer,
			issueDate: new Date(issueDateStr),
			expiryDate: expiryDateStr ? new Date(expiryDateStr) : null,
			thumbnail,
			verifyUrl,
			order,
			featured
		} });
	} catch (err) {
		console.error("Create certificate error:", err);
		return fail(500, { message: "Failed to create certificate. Ensure slug is unique." });
	}
	throw redirect(303, "/dashboard/certificates");
} };
//#endregion
//#region .svelte-kit/adapter-bun/nodes/18.js
const index = 18;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-Drly1BkN.js")).default;
const server_id = "src/routes/(protected)/dashboard/certificates/new/+page.server.ts";
const imports = [
	"_app/immutable/nodes/18.Dco1zzJU.js",
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

//# sourceMappingURL=18-Mm0fEVTx.js.map