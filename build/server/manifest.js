//#region .svelte-kit/adapter-bun/manifest.js
const manifest = (() => {
	function __memo(fn) {
		let value;
		return () => value ??= value = fn();
	}
	return {
		appDir: "_app",
		appPath: "_app",
		assets: new Set(["robots.txt"]),
		mimeTypes: { ".txt": "text/plain" },
		_: {
			client: {
				start: "_app/immutable/entry/start.By_Z3Dme.js",
				app: "_app/immutable/entry/app.BwBMd2F9.js",
				imports: [
					"_app/immutable/entry/start.By_Z3Dme.js",
					"_app/immutable/chunks/Dxk3ACRs.js",
					"_app/immutable/chunks/Dp8XMXav.js",
					"_app/immutable/chunks/COJEdS0d.js",
					"_app/immutable/chunks/Czy_XTH7.js",
					"_app/immutable/chunks/CkNGqTXG.js",
					"_app/immutable/entry/app.BwBMd2F9.js",
					"_app/immutable/chunks/COJEdS0d.js",
					"_app/immutable/chunks/Czy_XTH7.js",
					"_app/immutable/chunks/CkNGqTXG.js",
					"_app/immutable/chunks/DsnmJJEf.js",
					"_app/immutable/chunks/Dp8XMXav.js",
					"_app/immutable/chunks/CYTOpgq_.js",
					"_app/immutable/chunks/CRRNmWFo.js",
					"_app/immutable/chunks/D4bx8ejP.js"
				],
				stylesheets: [],
				fonts: [],
				uses_env_dynamic_public: false
			},
			nodes: [
				__memo(() => import("./chunks/0-mNRscOOM.js")),
				__memo(() => import("./chunks/1-fYhdyKvt.js")),
				__memo(() => import("./chunks/2-Dwgx8BQB.js")),
				__memo(() => import("./chunks/3-BwKMkwlU.js")),
				__memo(() => import("./chunks/4-BcqjpDhu.js")),
				__memo(() => import("./chunks/5-FkKiI54M.js")),
				__memo(() => import("./chunks/6-B87QECpJ.js")),
				__memo(() => import("./chunks/7-CapWoOm9.js")),
				__memo(() => import("./chunks/8-C_zA9m6b.js")),
				__memo(() => import("./chunks/9-Cl1xtUNW.js")),
				__memo(() => import("./chunks/10-C6Weu54G.js")),
				__memo(() => import("./chunks/11-Gd-y5xSb.js")),
				__memo(() => import("./chunks/12-DmkBE25B.js")),
				__memo(() => import("./chunks/13-CsVzgVoD.js")),
				__memo(() => import("./chunks/14-B8Tlndjm.js")),
				__memo(() => import("./chunks/15-B_K_yfDh.js")),
				__memo(() => import("./chunks/16-Cb4Yh2SK.js")),
				__memo(() => import("./chunks/17-Ds3l5FLp.js")),
				__memo(() => import("./chunks/18-C39d4zqO.js")),
				__memo(() => import("./chunks/19-D0wlhEMP.js")),
				__memo(() => import("./chunks/20-Cfz8q6UT.js")),
				__memo(() => import("./chunks/21-CQmSkxks.js")),
				__memo(() => import("./chunks/22-nlaXcKPB.js")),
				__memo(() => import("./chunks/23-BZgnk6av.js"))
			],
			remotes: {},
			routes: [
				{
					id: "/(app)",
					pattern: /^\/?$/,
					params: [],
					page: {
						layouts: [0, 2],
						errors: [1, ,],
						leaf: 4
					},
					endpoint: null
				},
				{
					id: "/(app)/blog",
					pattern: /^\/blog\/?$/,
					params: [],
					page: {
						layouts: [0, 2],
						errors: [1, ,],
						leaf: 5
					},
					endpoint: null
				},
				{
					id: "/(app)/contact",
					pattern: /^\/contact\/?$/,
					params: [],
					page: {
						layouts: [0, 2],
						errors: [1, ,],
						leaf: 6
					},
					endpoint: null
				},
				{
					id: "/(protected)/dashboard",
					pattern: /^\/dashboard\/?$/,
					params: [],
					page: {
						layouts: [0, 3],
						errors: [1, ,],
						leaf: 11
					},
					endpoint: null
				},
				{
					id: "/(protected)/dashboard/blog",
					pattern: /^\/dashboard\/blog\/?$/,
					params: [],
					page: {
						layouts: [0, 3],
						errors: [1, ,],
						leaf: 12
					},
					endpoint: null
				},
				{
					id: "/(protected)/dashboard/blog/new",
					pattern: /^\/dashboard\/blog\/new\/?$/,
					params: [],
					page: {
						layouts: [0, 3],
						errors: [1, ,],
						leaf: 13
					},
					endpoint: null
				},
				{
					id: "/(protected)/dashboard/blog/[id]",
					pattern: /^\/dashboard\/blog\/([^/]+?)\/?$/,
					params: [{
						"name": "id",
						"optional": false,
						"rest": false,
						"chained": false
					}],
					page: {
						layouts: [0, 3],
						errors: [1, ,],
						leaf: 14
					},
					endpoint: null
				},
				{
					id: "/(protected)/dashboard/categories",
					pattern: /^\/dashboard\/categories\/?$/,
					params: [],
					page: {
						layouts: [0, 3],
						errors: [1, ,],
						leaf: 15
					},
					endpoint: null
				},
				{
					id: "/(protected)/dashboard/certificates",
					pattern: /^\/dashboard\/certificates\/?$/,
					params: [],
					page: {
						layouts: [0, 3],
						errors: [1, ,],
						leaf: 16
					},
					endpoint: null
				},
				{
					id: "/(protected)/dashboard/certificates/new",
					pattern: /^\/dashboard\/certificates\/new\/?$/,
					params: [],
					page: {
						layouts: [0, 3],
						errors: [1, ,],
						leaf: 17
					},
					endpoint: null
				},
				{
					id: "/(protected)/dashboard/certificates/[id]",
					pattern: /^\/dashboard\/certificates\/([^/]+?)\/?$/,
					params: [{
						"name": "id",
						"optional": false,
						"rest": false,
						"chained": false
					}],
					page: {
						layouts: [0, 3],
						errors: [1, ,],
						leaf: 18
					},
					endpoint: null
				},
				{
					id: "/(protected)/dashboard/projects",
					pattern: /^\/dashboard\/projects\/?$/,
					params: [],
					page: {
						layouts: [0, 3],
						errors: [1, ,],
						leaf: 19
					},
					endpoint: null
				},
				{
					id: "/(protected)/dashboard/projects/new",
					pattern: /^\/dashboard\/projects\/new\/?$/,
					params: [],
					page: {
						layouts: [0, 3],
						errors: [1, ,],
						leaf: 20
					},
					endpoint: null
				},
				{
					id: "/(protected)/dashboard/projects/[id]",
					pattern: /^\/dashboard\/projects\/([^/]+?)\/?$/,
					params: [{
						"name": "id",
						"optional": false,
						"rest": false,
						"chained": false
					}],
					page: {
						layouts: [0, 3],
						errors: [1, ,],
						leaf: 21
					},
					endpoint: null
				},
				{
					id: "/(protected)/dashboard/projects/[id]/view",
					pattern: /^\/dashboard\/projects\/([^/]+?)\/view\/?$/,
					params: [{
						"name": "id",
						"optional": false,
						"rest": false,
						"chained": false
					}],
					page: {
						layouts: [0, 3],
						errors: [1, ,],
						leaf: 22
					},
					endpoint: null
				},
				{
					id: "/(protected)/dashboard/settings",
					pattern: /^\/dashboard\/settings\/?$/,
					params: [],
					page: {
						layouts: [0, 3],
						errors: [1, ,],
						leaf: 23
					},
					endpoint: null
				},
				{
					id: "/(app)/game",
					pattern: /^\/game\/?$/,
					params: [],
					page: {
						layouts: [0, 2],
						errors: [1, ,],
						leaf: 7
					},
					endpoint: null
				},
				{
					id: "/(auth)/login",
					pattern: /^\/login\/?$/,
					params: [],
					page: {
						layouts: [0],
						errors: [1],
						leaf: 10
					},
					endpoint: null
				},
				{
					id: "/(app)/projects",
					pattern: /^\/projects\/?$/,
					params: [],
					page: {
						layouts: [0, 2],
						errors: [1, ,],
						leaf: 8
					},
					endpoint: null
				},
				{
					id: "/(app)/projects/[id]",
					pattern: /^\/projects\/([^/]+?)\/?$/,
					params: [{
						"name": "id",
						"optional": false,
						"rest": false,
						"chained": false
					}],
					page: {
						layouts: [0, 2],
						errors: [1, ,],
						leaf: 9
					},
					endpoint: null
				}
			],
			prerendered_routes: /* @__PURE__ */ new Set([]),
			matchers: async () => {
				return {};
			},
			server_assets: {}
		}
	};
})();
const prerendered = /* @__PURE__ */ new Set([]);
const base = "";
//#endregion
export { base, manifest, prerendered };

//# sourceMappingURL=manifest.js.map