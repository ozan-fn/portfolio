import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
import { a as redirect, n as fail, t as error } from "./exports-kBK34q0P.js";
import { n as uploadImage, t as deleteFile } from "./storage-Dtct7ClG.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/_id_/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
const load = async ({ params }) => {
	const certificate = await prisma.certificate.findUnique({ where: { id: params.id } });
	if (!certificate) throw error(404, "Certificate not found");
	return { certificate };
};
const actions = {
	update: async ({ params, request }) => {
		const formData = await request.formData();
		const title = formData.get("title");
		const issuer = formData.get("issuer");
		const issueDateStr = formData.get("issueDate");
		const expiryDateStr = formData.get("expiryDate");
		const thumbnailFile = formData.get("thumbnail");
		const verifyUrl = formData.get("verifyUrl");
		if (!title || !issuer || !issueDateStr) return fail(400, { message: "Title, issuer and issue date are required" });
		try {
			const existingCertificate = await prisma.certificate.findUnique({
				where: { id: params.id },
				select: { thumbnail: true }
			});
			let thumbnail = void 0;
			if (thumbnailFile && thumbnailFile.size > 0) {
				thumbnail = await uploadImage(Buffer.from(await thumbnailFile.arrayBuffer()), "certificates", thumbnailFile.type);
				if (existingCertificate?.thumbnail) await deleteFile(existingCertificate.thumbnail);
			}
			await prisma.certificate.update({
				where: { id: params.id },
				data: {
					title,
					issuer,
					issueDate: new Date(issueDateStr),
					expiryDate: expiryDateStr ? new Date(expiryDateStr) : null,
					...thumbnail && { thumbnail },
					verifyUrl
				}
			});
		} catch (err) {
			console.error("Update certificate error:", err);
			return fail(500, { message: "Failed to update certificate" });
		}
		throw redirect(303, "/dashboard/certificates");
	},
	delete: async ({ params }) => {
		try {
			const certificate = await prisma.certificate.findUnique({
				where: { id: params.id },
				select: { thumbnail: true }
			});
			if (certificate?.thumbnail) await deleteFile(certificate.thumbnail);
			await prisma.certificate.delete({ where: { id: params.id } });
		} catch (err) {
			console.error("Delete certificate error:", err);
			return fail(500, { message: "Failed to delete certificate" });
		}
		throw redirect(303, "/dashboard/certificates");
	}
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/18.js
const index = 18;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-C6q9lhx1.js")).default;
const server_id = "src/routes/(protected)/dashboard/certificates/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/18.CzsNyZrd.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/Dr_zM3p0.js",
	"_app/immutable/chunks/Cw5cvJPR.js",
	"_app/immutable/chunks/DZbCXLBc.js",
	"_app/immutable/chunks/e11Tx_iV.js",
	"_app/immutable/chunks/BQkCsZss.js",
	"_app/immutable/chunks/BKntPBgS.js",
	"_app/immutable/chunks/PMFTZqdj.js",
	"_app/immutable/chunks/Clz0Wp70.js",
	"_app/immutable/chunks/6aY7LGuk.js",
	"_app/immutable/chunks/DKGcMd31.js",
	"_app/immutable/chunks/CZFnYrdz.js",
	"_app/immutable/chunks/BxeYG_Uu.js",
	"_app/immutable/chunks/qinMVjST.js",
	"_app/immutable/chunks/B9WTJlVd.js",
	"_app/immutable/chunks/8okcUSwY.js",
	"_app/immutable/chunks/DvOG7n1n.js",
	"_app/immutable/chunks/CCnBCYaM.js",
	"_app/immutable/chunks/DudHFfjW.js",
	"_app/immutable/chunks/BmL9q_GQ.js",
	"_app/immutable/chunks/Cno8UwTT.js",
	"_app/immutable/chunks/CpE6MGa8.js",
	"_app/immutable/chunks/Du-oe5kA.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=18-Bpuqkbzv.js.map