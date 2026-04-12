import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { a as redirect, n as fail, t as error } from "./exports-Bb1_wnF_.js";
import { t as prisma } from "./prisma-_TbeRE6e.js";
import { n as uploadImage, t as deleteFile } from "./storage-BUBCCRO1.js";
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
const component = async () => component_cache ??= (await import("./_page.svelte-Is7uBfHo.js")).default;
const server_id = "src/routes/(protected)/dashboard/certificates/[id]/+page.server.ts";
const imports = [
	"_app/immutable/nodes/19.Dx20--mz.js",
	"_app/immutable/chunks/D1w_RFSq.js",
	"_app/immutable/chunks/Be3d-_on.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/DImwKZpG.js",
	"_app/immutable/chunks/UzVvPweq.js",
	"_app/immutable/chunks/D1oRABRN.js",
	"_app/immutable/chunks/CvDZ79mX.js",
	"_app/immutable/chunks/DVnAbSuA.js",
	"_app/immutable/chunks/CYm7iPyV.js",
	"_app/immutable/chunks/Dg5EqJvS.js",
	"_app/immutable/chunks/D4IVV97f.js",
	"_app/immutable/chunks/Dl2HO6Ng.js",
	"_app/immutable/chunks/Bd4fEQuX.js",
	"_app/immutable/chunks/Bjdk1uRX.js",
	"_app/immutable/chunks/Bi3eUg9r2.js",
	"_app/immutable/chunks/fpRipbV0.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=19-DycpJ7If.js.map