import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { t as prisma } from "./prisma-CP5mV9z4.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/blog/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ load: () => load });
var load = async () => {
	return { posts: await prisma.blogPost.findMany({
		where: { published: true },
		include: { category: true },
		orderBy: [{ featured: "desc" }, { createdAt: "desc" }]
	}) };
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/5.js
const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-B1Jq9DxR.js")).default;
const server_id = "src/routes/(app)/blog/+page.server.ts";
const imports = [
	"_app/immutable/nodes/5.cyOkfpKf.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/BrgG1I03.js",
	"_app/immutable/chunks/CCi4sbZS.js",
	"_app/immutable/chunks/Dco4iRMH.js",
	"_app/immutable/chunks/CPpYYUo1.js",
	"_app/immutable/chunks/DO9RgeVT.js",
	"_app/immutable/chunks/BI5tlxzv.js",
	"_app/immutable/chunks/mP6SPwEK.js",
	"_app/immutable/chunks/D1suYT_W.js",
	"_app/immutable/chunks/_GW2ySG0.js",
	"_app/immutable/chunks/Lx8YHk-i.js",
	"_app/immutable/chunks/BtOj0yJ_.js",
	"_app/immutable/chunks/CWOK_54O.js",
	"_app/immutable/chunks/CIiMOl332.js",
	"_app/immutable/chunks/BimGT1nf2.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=5-XzZPMp31.js.map