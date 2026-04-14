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
				start: "_app/immutable/entry/start.De168tT2.js",
				app: "_app/immutable/entry/app.DzpkdRhp.js",
				imports: [
					"_app/immutable/entry/start.De168tT2.js",
					"_app/immutable/chunks/tpCMofHw.js",
					"_app/immutable/chunks/PHEsi65A.js",
					"_app/immutable/entry/app.DzpkdRhp.js",
					"_app/immutable/chunks/PHEsi65A.js",
					"_app/immutable/chunks/9OMuMABi.js",
					"_app/immutable/chunks/CCi4sbZS.js"
				],
				stylesheets: [],
				fonts: [],
				uses_env_dynamic_public: false
			},
			nodes: [
				__memo(() => import("./chunks/0-CIS3SQSg.js")),
				__memo(() => import("./chunks/1-iwgBkzqN.js")),
				__memo(() => import("./chunks/2-BFXt0mkj.js")),
				__memo(() => import("./chunks/3-C01tBC9F.js")),
				__memo(() => import("./chunks/4-DvdvpERh.js")),
				__memo(() => import("./chunks/5-B9hbgHYX.js")),
				__memo(() => import("./chunks/6-8MCOayxN.js")),
				__memo(() => import("./chunks/7-DsIon86o.js")),
				__memo(() => import("./chunks/8-Bu3kE4h2.js")),
				__memo(() => import("./chunks/9-bMQEDmY7.js")),
				__memo(() => import("./chunks/10-Dn9BdPri.js")),
				__memo(() => import("./chunks/11-BCCXAsQ5.js")),
				__memo(() => import("./chunks/12-BmcgW4bA.js")),
				__memo(() => import("./chunks/13-JMxOGUe-.js")),
				__memo(() => import("./chunks/14-5mxzTOT4.js")),
				__memo(() => import("./chunks/15-CT9AdPLc.js")),
				__memo(() => import("./chunks/16-COWHUUbX.js")),
				__memo(() => import("./chunks/17-BfbzjZkG.js")),
				__memo(() => import("./chunks/18-DOoguJZX.js")),
				__memo(() => import("./chunks/19-CJCanY2P.js")),
				__memo(() => import("./chunks/20-Dz-2xopf.js")),
				__memo(() => import("./chunks/21-Ddk4YI96.js")),
				__memo(() => import("./chunks/22-6gfiwpYp.js")),
				__memo(() => import("./chunks/23-D04J_2nE.js")),
				__memo(() => import("./chunks/24-DUAw-V3W.js")),
				__memo(() => import("./chunks/25-C6WVWn25.js"))
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
					id: "/(app)/certificates",
					pattern: /^\/certificates\/?$/,
					params: [],
					page: {
						layouts: [0, 2],
						errors: [1, ,],
						leaf: 6
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
						leaf: 7
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
						leaf: 12
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
						leaf: 13
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
						leaf: 14
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
						leaf: 15
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
						leaf: 16
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
						leaf: 17
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
						leaf: 18
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
						leaf: 19
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
						leaf: 20
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
						leaf: 21
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
						leaf: 22
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
						leaf: 23
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
						leaf: 24
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
						leaf: 25
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
						leaf: 8
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
						leaf: 11
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
						leaf: 9
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
						leaf: 10
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