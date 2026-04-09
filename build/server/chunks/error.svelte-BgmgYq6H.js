import { L as escape_html } from "./renderer-CoNnoy0x.js";
import { t as page } from "./index2-D7oJTtU5.js";
//#region .svelte-kit/adapter-bun/entries/fallbacks/error.svelte.js
function Error($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		$$renderer2.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
	});
}
//#endregion
export { Error as default };

//# sourceMappingURL=error.svelte-BgmgYq6H.js.map