import "./root-B7evDd0u.js";
import { n as writable } from "./index4-BiaCZLW1.js";
import "./state.svelte-CJnt2xD2.js";
//#region .svelte-kit/adapter-bun/chunks/client.js
function create_updated_store() {
	const { set, subscribe } = writable(false);
	return {
		subscribe,
		check: async () => false
	};
}
const stores = { updated: /* @__PURE__ */ create_updated_store() };
function goto(url, opts = {}) {
	throw new Error("Cannot call goto(...) on the server");
}
stores.updated.check;
//#endregion
export { goto as t };

//# sourceMappingURL=client-0jB2AjeY.js.map