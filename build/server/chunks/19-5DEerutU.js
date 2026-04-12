import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { a as redirect, n as fail, t as error } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
import { n as uploadImage, t as deleteFile } from "./storage-BdsIAvCS.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/_id_/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
var load = async ({ params }) => {
	const certificate = await prisma.certificate.findUnique({ where: { id: params.id } });
	if (!certificate) throw error(404, "Certificate not found");
	return { certificate };
};
var actions = {
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
//#region .svelte-kit/adapter-bun/nodes/19.js
const index = 19;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-B6r_NkEU.js")).default;
const server_id = "src/routes/(protected)/dashboard/certificates/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/19.9YSsm-M3.js",
	"_app/immutable/chunks/DYrfgn9M.js",
	"_app/immutable/chunks/DtUMkQvv.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/nRyRQFvZ.js",
	"_app/immutable/chunks/CVFCDIRL.js",
	"_app/immutable/chunks/io5Y9osX.js",
	"_app/immutable/chunks/Chc5zS1J.js",
	"_app/immutable/chunks/Shq8r7Wz.js",
	"_app/immutable/chunks/GbeH5Min.js",
	"_app/immutable/chunks/C1vG9HRy.js",
	"_app/immutable/chunks/Bh6ZNlic.js",
	"_app/immutable/chunks/D1VRbIGe.js",
	"_app/immutable/chunks/z70b_DCL.js",
	"_app/immutable/chunks/ZIxaEaUC.js",
	"_app/immutable/chunks/B2fV9SZe.js",
	"_app/immutable/chunks/CJIvDuSN.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=19-5DEerutU.js.map