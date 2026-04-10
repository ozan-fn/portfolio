import { n as __exportAll, t as prisma } from "./prisma-DITxr3oK.js";
import { n as fail } from "./exports-kBK34q0P.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/blog/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({
	actions: () => actions,
	load: () => load
});
const load = async () => {
	return { posts: await prisma.blogPost.findMany({
		include: { category: true },
		orderBy: { createdAt: "desc" }
	}) };
};
const actions = {
	delete: async ({ request }) => {
		const id = (await request.formData()).get("id");
		if (!id) return fail(400, { message: "ID is required" });
		try {
			await prisma.blogPost.delete({ where: { id } });
			return { success: true };
		} catch (err) {
			console.error(err);
			return fail(500, { message: "Failed to delete blog post" });
		}
	},
	togglePublish: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get("id");
		const published = formData.get("published") === "true";
		if (!id) return fail(400, { message: "ID is required" });
		try {
			await prisma.blogPost.update({
				where: { id },
				data: { published: !published }
			});
			return { success: true };
		} catch (err) {
			console.error(err);
			return fail(500, { message: "Failed to update post status" });
		}
	}
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/12.js
const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-B_oKvg_4.js")).default;
const server_id = "src/routes/(protected)/dashboard/blog/+page.server.ts";
const imports = [
	"_app/immutable/nodes/12.S8-JJRuj.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/COJEdS0d.js",
	"_app/immutable/chunks/Czy_XTH7.js",
	"_app/immutable/chunks/CkNGqTXG.js",
	"_app/immutable/chunks/CYTOpgq_.js",
	"_app/immutable/chunks/BHCixpY4.js",
	"_app/immutable/chunks/CRRNmWFo.js",
	"_app/immutable/chunks/Dqlc-nSA.js",
	"_app/immutable/chunks/Dxk3ACRs.js",
	"_app/immutable/chunks/Dp8XMXav.js",
	"_app/immutable/chunks/BAbGFpV-.js",
	"_app/immutable/chunks/DUDe5kkv.js",
	"_app/immutable/chunks/D4bx8ejP.js",
	"_app/immutable/chunks/DF4J2jId.js",
	"_app/immutable/chunks/rcgDbsqO.js",
	"_app/immutable/chunks/BcNBi2Kp.js",
	"_app/immutable/chunks/CsraHWEC.js",
	"_app/immutable/chunks/eH8bvPBN.js",
	"_app/immutable/chunks/S3k0ICUX.js",
	"_app/immutable/chunks/B2pYV11g.js",
	"_app/immutable/chunks/B3j_9PW7.js",
	"_app/immutable/chunks/CXTc4z71.js",
	"_app/immutable/chunks/CVbl3hc6.js",
	"_app/immutable/chunks/eJ6u87Y2.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=12-DmkBE25B.js.map