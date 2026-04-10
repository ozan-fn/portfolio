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
				start: "_app/immutable/entry/start.CKluCCQI.js",
				app: "_app/immutable/entry/app.DCOFpL-w.js",
				imports: [
					"_app/immutable/entry/start.CKluCCQI.js",
					"_app/immutable/chunks/BKntPBgS.js",
					"_app/immutable/chunks/PMFTZqdj.js",
					"_app/immutable/chunks/Dr_zM3p0.js",
					"_app/immutable/chunks/Cw5cvJPR.js",
					"_app/immutable/chunks/DZbCXLBc.js",
					"_app/immutable/entry/app.DCOFpL-w.js",
					"_app/immutable/chunks/Dr_zM3p0.js",
					"_app/immutable/chunks/Cw5cvJPR.js",
					"_app/immutable/chunks/DZbCXLBc.js",
					"_app/immutable/chunks/DsnmJJEf.js",
					"_app/immutable/chunks/PMFTZqdj.js",
					"_app/immutable/chunks/e11Tx_iV.js",
					"_app/immutable/chunks/BmL9q_GQ.js",
					"_app/immutable/chunks/CZFnYrdz.js"
				],
				stylesheets: [],
				fonts: [],
				uses_env_dynamic_public: false
			},
			nodes: [
				__memo(() => import("./chunks/0-D0lO_T7o.js")),
				__memo(() => import("./chunks/1-D7h3GxHW.js")),
				__memo(() => import("./chunks/2-D0tIB3dX.js")),
				__memo(() => import("./chunks/3-D12TmVQi.js")),
				__memo(() => import("./chunks/4-C5dxDVB0.js")),
				__memo(() => import("./chunks/5-CyxUwbv1.js")),
				__memo(() => import("./chunks/6-pQa_zRPR.js")),
				__memo(() => import("./chunks/7-BfBvi1rh.js")),
				__memo(() => import("./chunks/8-C2s1y4md.js")),
				__memo(() => import("./chunks/9-BkgUgik4.js")),
				__memo(() => import("./chunks/10-BZ63YOtT.js")),
				__memo(() => import("./chunks/11-mamsFBUl.js")),
				__memo(() => import("./chunks/12-Aurm9rt2.js")),
				__memo(() => import("./chunks/13-BRU29wtE.js")),
				__memo(() => import("./chunks/14-DgDOYAJr.js")),
				__memo(() => import("./chunks/15-BC3NAztk.js")),
				__memo(() => import("./chunks/16-dJ8io8AM.js")),
				__memo(() => import("./chunks/17-Bo97RnOe.js")),
				__memo(() => import("./chunks/18-Bpuqkbzv.js")),
				__memo(() => import("./chunks/19-ew2ZHu7W.js")),
				__memo(() => import("./chunks/20-OyPIdoLc.js")),
				__memo(() => import("./chunks/21-DWd4uAWI.js")),
				__memo(() => import("./chunks/22-Dnd6gL17.js")),
				__memo(() => import("./chunks/23-CoyVhFJn.js")),
				__memo(() => import("./chunks/24-C55_r05d.js"))
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
					id: "/(protected)/dashboard/certificates/[id]/view",
					pattern: /^\/dashboard\/certificates\/([^/]+?)\/view\/?$/,
					params: [{
						"name": "id",
						"optional": false,
						"rest": false,
						"chained": false
					}],
					page: {
						layouts: [0, 3],
						errors: [1, ,],
						leaf: 19
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
						leaf: 20
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
						leaf: 21
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
						leaf: 22
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
						leaf: 23
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
						leaf: 24
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