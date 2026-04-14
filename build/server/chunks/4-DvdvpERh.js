import { n as __exportAll } from "./chunk-BiVYx4eG.js";
import { t as private_env } from "./shared-server-D--cyMsO.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/_page.server.ts.js
var _page_server_ts_exports = /* @__PURE__ */ __exportAll({ load: () => load });
var load = async ({ fetch, setHeaders }) => {
	setHeaders({ "Cache-Control": "public, max-age=300" });
	const headers = { Authorization: `Basic ${Buffer.from(private_env.WAKATIME_API_KEY || "").toString("base64")}` };
	const fetchStats = async () => {
		try {
			const res = await fetch("https://wakatime.com/api/v1/users/current/stats/last_7_days", { headers });
			if (!res.ok) return null;
			return await res.json();
		} catch (error) {
			return null;
		}
	};
	const fetchAllTime = async () => {
		try {
			const res = await fetch("https://wakatime.com/api/v1/users/current/all_time_since_today", { headers });
			if (!res.ok) return null;
			return await res.json();
		} catch (error) {
			return null;
		}
	};
	const [wakaStats, allTime] = await Promise.all([fetchStats(), fetchAllTime()]);
	return {
		wakaStats,
		allTime
	};
};
//#endregion
//#region .svelte-kit/adapter-bun/nodes/4.js
const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import("./_page.svelte-bOipg9tY.js")).default;
const server_id = "src/routes/(app)/+page.server.ts";
const imports = [
	"_app/immutable/nodes/4.DZs_4k3o.js",
	"_app/immutable/chunks/PHEsi65A.js",
	"_app/immutable/chunks/Cf3l8d4F2.js",
	"_app/immutable/chunks/DfJzbisG.js",
	"_app/immutable/chunks/CCi4sbZS.js"
];
const stylesheets = [];
const fonts = [];
//#endregion
export { component, fonts, imports, index, _page_server_ts_exports as server, server_id, stylesheets };

//# sourceMappingURL=4-DvdvpERh.js.map