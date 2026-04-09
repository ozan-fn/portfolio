const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DFvTF8km.js",app:"_app/immutable/entry/app.DSxmpw60.js",imports:["_app/immutable/entry/start.DFvTF8km.js","_app/immutable/chunks/BUb5hhcM.js","_app/immutable/chunks/Dcpp0Cf0.js","_app/immutable/chunks/VvJ03jQm.js","_app/immutable/chunks/Djhkul0P.js","_app/immutable/chunks/aMc0A5rF.js","_app/immutable/entry/app.DSxmpw60.js","_app/immutable/chunks/VvJ03jQm.js","_app/immutable/chunks/Djhkul0P.js","_app/immutable/chunks/aMc0A5rF.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Dcpp0Cf0.js","_app/immutable/chunks/Bjwghsge.js","_app/immutable/chunks/DCbJqxLu.js","_app/immutable/chunks/BiW6gY5k.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-bF-bFPda.js')),
			__memo(() => import('./chunks/1-DXeSvHHp.js')),
			__memo(() => import('./chunks/2-CLOuDpIg.js')),
			__memo(() => import('./chunks/3-C3AQJuNt.js')),
			__memo(() => import('./chunks/4-CY-wux6K.js')),
			__memo(() => import('./chunks/5-Bl9tm7wj.js')),
			__memo(() => import('./chunks/6-BQKVzQ06.js')),
			__memo(() => import('./chunks/7-BmxSHdPL.js')),
			__memo(() => import('./chunks/8-CKAaS8rd.js')),
			__memo(() => import('./chunks/9-DwCxzZpc.js')),
			__memo(() => import('./chunks/10-DNYY3Usn.js')),
			__memo(() => import('./chunks/11-Dz7faKv0.js')),
			__memo(() => import('./chunks/12-CE0gIa72.js')),
			__memo(() => import('./chunks/13-OocZMJ9a.js')),
			__memo(() => import('./chunks/14-CeE72d5P.js')),
			__memo(() => import('./chunks/15-C717gtTL.js')),
			__memo(() => import('./chunks/16-Cds4Gz47.js')),
			__memo(() => import('./chunks/17-CwFIRF25.js')),
			__memo(() => import('./chunks/18-DfKD_Eze.js')),
			__memo(() => import('./chunks/19-DARpDB-9.js')),
			__memo(() => import('./chunks/20-DX0bISpV.js')),
			__memo(() => import('./chunks/21-BfbMKB0M.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(app)/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(protected)/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(protected)/dashboard/blog",
				pattern: /^\/dashboard\/blog\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(protected)/dashboard/blog/new",
				pattern: /^\/dashboard\/blog\/new\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(protected)/dashboard/blog/[id]",
				pattern: /^\/dashboard\/blog\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(protected)/dashboard/categories",
				pattern: /^\/dashboard\/categories\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(protected)/dashboard/certificates",
				pattern: /^\/dashboard\/certificates\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(protected)/dashboard/projects",
				pattern: /^\/dashboard\/projects\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(protected)/dashboard/projects/new",
				pattern: /^\/dashboard\/projects\/new\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(protected)/dashboard/projects/[id]",
				pattern: /^\/dashboard\/projects\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(protected)/dashboard/projects/[id]/view",
				pattern: /^\/dashboard\/projects\/([^/]+?)\/view\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(protected)/dashboard/settings",
				pattern: /^\/dashboard\/settings\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(app)/game",
				pattern: /^\/game\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(app)/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/projects/[id]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
