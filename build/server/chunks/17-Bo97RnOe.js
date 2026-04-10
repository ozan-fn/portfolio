import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
import { a as redirect, n as fail } from "./exports-kBK34q0P.js";
import { n as uploadImage } from "./storage-Dtct7ClG.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/new/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ actions: () => actions });
const actions = { create: async ({ request }) => {
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
//#region .svelte-kit/adapter-bun/nodes/17.js
const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-D32wMJZE.js")).default;
const server_id = "src/routes/(protected)/dashboard/certificates/new/+page.server.ts";
const imports = [
	"_app/immutable/nodes/17.BatwjsRN.js",
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

//# sourceMappingURL=17-Bo97RnOe.js.map