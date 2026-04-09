import { z as getContext } from "./renderer-CoNnoy0x.js";
import "./client-Cfn02-BT.js";
//#region .svelte-kit/adapter-bun/chunks/index2.js
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

//# sourceMappingURL=index2-D7oJTtU5.js.map