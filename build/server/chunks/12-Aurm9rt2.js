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
const component = async () => component_cache ??= (await import("./_page.svelte-CvGr2ZG3.js")).default;
const server_id = "src/routes/(protected)/dashboard/blog/+page.server.ts";
const imports = [
	"_app/immutable/nodes/12.Bbt6vd4z.js",
	"_app/immutable/chunks/DsnmJJEf.js",
	"_app/immutable/chunks/Dr_zM3p0.js",
	"_app/immutable/chunks/Cw5cvJPR.js",
	"_app/immutable/chunks/DZbCXLBc.js",
	"_app/immutable/chunks/e11Tx_iV.js",
	"_app/immutable/chunks/B9WTJlVd.js",
	"_app/immutable/chunks/BmL9q_GQ.js",
	"_app/immutable/chunks/BQkCsZss.js",
	"_app/immutable/chunks/BKntPBgS.js",
	"_app/immutable/chunks/PMFTZqdj.js",
	"_app/immutable/chunks/Clz0Wp70.js",
	"_app/immutable/chunks/CZp4nuAZ.js",
	"_app/immutable/chunks/CZFnYrdz.js",
	"_app/immutable/chunks/DKGcMd31.js",
	"_app/immutable/chunks/CCnBCYaM.js",
	"_app/immutable/chunks/CR4NlZIO.js",
	"_app/immutable/chunks/C6sHDagH.js",
	"_app/immutable/chunks/BcEHo6wA.js",
	"_app/immutable/chunks/qinMVjST.js",
	"_app/immutable/chunks/BaiRr2ZE.js",
	"_app/immutable/chunks/DDtgbht9.js",
	"_app/immutable/chunks/BXY7cfkw.js",
	"_app/immutable/chunks/jbdkH9PY.js",
	"_app/immutable/chunks/_U6fiQKz.js",
	"_app/immutable/chunks/DDdMp1MP.js",
	"_app/immutable/chunks/Du-oe5kA.js",
	"_app/immutable/chunks/DShVOjNy.js",
	"_app/immutable/chunks/eq5xT-5j.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=12-Aurm9rt2.js.map