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
				start: "_app/immutable/entry/start.Btafuw9N.js",
				app: "_app/immutable/entry/app.Klm0xH9D.js",
				imports: [
					"_app/immutable/entry/start.Btafuw9N.js",
					"_app/immutable/chunks/Chc5zS1J.js",
					"_app/immutable/chunks/DYrfgn9M.js",
					"_app/immutable/entry/app.Klm0xH9D.js",
					"_app/immutable/chunks/DYrfgn9M.js",
					"_app/immutable/chunks/9OMuMABi.js",
					"_app/immutable/chunks/CCi4sbZS.js"
				],
				stylesheets: [],
				fonts: [],
				uses_env_dynamic_public: false
			},
			nodes: [
				__memo(() => import("./chunks/0-DvwhpMAT.js")),
				__memo(() => import("./chunks/1-CFYtp_HD.js")),
				__memo(() => import("./chunks/2-B0pLd5iE.js")),
				__memo(() => import("./chunks/3-BxK5pC6W.js")),
				__memo(() => import("./chunks/4-JAdFMQyz.js")),
				__memo(() => import("./chunks/5-CL-pYsyE.js")),
				__memo(() => import("./chunks/6-DfI8XbOf.js")),
				__memo(() => import("./chunks/7-DOkkqqlS.js")),
				__memo(() => import("./chunks/8-B3jr1YM2.js")),
				__memo(() => import("./chunks/9-DQO7XYfH.js")),
				__memo(() => import("./chunks/10-BWAF1vc_.js")),
				__memo(() => import("./chunks/11-RToZXI3l.js")),
				__memo(() => import("./chunks/12-DNVtN_Yz.js")),
				__memo(() => import("./chunks/13-BRqGoZvx.js")),
				__memo(() => import("./chunks/14-DOVnrjCi.js")),
				__memo(() => import("./chunks/15-CAdwGly8.js")),
				__memo(() => import("./chunks/16-LqGBqCab.js")),
				__memo(() => import("./chunks/17-CsEvF6C0.js")),
				__memo(() => import("./chunks/18-ZbDXEV06.js")),
				__memo(() => import("./chunks/19-5DEerutU.js")),
				__memo(() => import("./chunks/20-DUdjzQsr.js")),
				__memo(() => import("./chunks/21-x03nus-Y.js")),
				__memo(() => import("./chunks/22-Cxp8_i3n.js")),
				__memo(() => import("./chunks/23-BSDyFjQF.js")),
				__memo(() => import("./chunks/24-BeKmjQx0.js")),
				__memo(() => import("./chunks/25-BNkTxycP.js"))
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