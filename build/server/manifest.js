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
				start: "_app/immutable/entry/start.CDFpwXgt.js",
				app: "_app/immutable/entry/app.CoHi-3Jm.js",
				imports: [
					"_app/immutable/entry/start.CDFpwXgt.js",
					"_app/immutable/chunks/CpB61uSw.js",
					"_app/immutable/chunks/Dcpp0Cf0.js",
					"_app/immutable/chunks/VvJ03jQm.js",
					"_app/immutable/chunks/Djhkul0P.js",
					"_app/immutable/chunks/aMc0A5rF.js",
					"_app/immutable/entry/app.CoHi-3Jm.js",
					"_app/immutable/chunks/VvJ03jQm.js",
					"_app/immutable/chunks/Djhkul0P.js",
					"_app/immutable/chunks/aMc0A5rF.js",
					"_app/immutable/chunks/DsnmJJEf.js",
					"_app/immutable/chunks/Dcpp0Cf0.js",
					"_app/immutable/chunks/Bjwghsge.js",
					"_app/immutable/chunks/DCbJqxLu.js",
					"_app/immutable/chunks/BiW6gY5k.js"
				],
				stylesheets: [],
				fonts: [],
				uses_env_dynamic_public: false
			},
			nodes: [
				__memo(() => import("./chunks/0-DxV78w04.js")),
				__memo(() => import("./chunks/1-BRPBJjjK.js")),
				__memo(() => import("./chunks/2-CxVOyBoM.js")),
				__memo(() => import("./chunks/3-D-5XsXN4.js")),
				__memo(() => import("./chunks/4-D0UfDWZX.js")),
				__memo(() => import("./chunks/5-DCBgAMFJ.js")),
				__memo(() => import("./chunks/6-D43v5Xy5.js")),
				__memo(() => import("./chunks/7-Cg7K0xgp.js")),
				__memo(() => import("./chunks/8-DxHLSkrU.js")),
				__memo(() => import("./chunks/9-2-4Kmob0.js")),
				__memo(() => import("./chunks/10-EzBjOZZb.js")),
				__memo(() => import("./chunks/11-Dpb-FHIz.js")),
				__memo(() => import("./chunks/12-D5OAxqKf.js")),
				__memo(() => import("./chunks/13-CzPhIUtZ.js")),
				__memo(() => import("./chunks/14-CnZaff8X.js")),
				__memo(() => import("./chunks/15-B1bY2DIY.js")),
				__memo(() => import("./chunks/16-CEFV0Oas.js")),
				__memo(() => import("./chunks/17-1Tg94rrg.js")),
				__memo(() => import("./chunks/18-CV7-6xEt.js")),
				__memo(() => import("./chunks/19-4F1_hJU5.js")),
				__memo(() => import("./chunks/20-CnCoD5I_.js")),
				__memo(() => import("./chunks/21-D1dKK0l-.js"))
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
					id: "/(protected)/dashboard/projects",
					pattern: /^\/dashboard\/projects\/?$/,
					params: [],
					page: {
						layouts: [0, 3],
						errors: [1, ,],
						leaf: 17
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
						leaf: 18
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
						leaf: 19
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
						leaf: 20
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
						leaf: 21
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