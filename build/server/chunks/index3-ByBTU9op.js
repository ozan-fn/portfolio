import { z as getContext } from "./index2-v1oxlg_d.js";
import "./client-0jB2AjeY.js";
//#region .svelte-kit/adapter-bun/chunks/index3.js
function context() {
	return getContext("__request__");
}
const page = {
	get error() {
		return context().page.error;
	},
	get status() {
		return context().page.status;
	},
	get url() {
		return context().page.url;
	}
};
//#endregion
export { page as t };

//# sourceMappingURL=index3-ByBTU9op.js.map