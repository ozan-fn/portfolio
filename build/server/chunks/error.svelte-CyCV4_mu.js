import { L as escape_html } from "./index2-v1oxlg_d.js";
import { t as page } from "./index3-ByBTU9op.js";
//#region .svelte-kit/adapter-bun/entries/fallbacks/error.svelte.js
function Error($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		$$renderer2.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
	});
}
//#endregion
export { Error as default };

//# sourceMappingURL=error.svelte-CyCV4_mu.js.map