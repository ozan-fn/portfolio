import { T as escape_html } from "./dev-D04rZKKe.js";
import { t as page } from "./state-CZJNR5TN.js";
//#region .svelte-kit/adapter-bun/entries/fallbacks/error.svelte.js
function Error($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
	});
}
//#endregion
export { Error as default };

//# sourceMappingURL=error.svelte-C4UlbFSp.js.map