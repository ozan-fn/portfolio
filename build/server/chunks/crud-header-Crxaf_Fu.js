import { L as escape_html } from "./renderer-CoNnoy0x.js";
import { t as Button } from "./button-Ch6ZWsjV.js";
import { t as Chevron_left } from "./chevron-left-xm-MdilH.js";
//#region .svelte-kit/adapter-bun/chunks/crud-header.js
function Crud_header($$renderer, $$props) {
	let { title, description, backUrl, actions } = $$props;
	$$renderer.push(`<div class="px-6 py-6 max-w-7xl w-full mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div class="flex items-center gap-4">`);
	if (backUrl) {
		$$renderer.push("<!--[0-->");
		Button($$renderer, {
			variant: "outline",
			size: "icon",
			href: backUrl,
			class: "h-9 w-9",
			children: ($$renderer2) => {
				Chevron_left($$renderer2, { class: "h-4 w-4" });
				$$renderer2.push(`<!----> <span class="sr-only">Back</span>`);
			},
			$$slots: { default: true }
		});
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--> <div><h1 class="text-3xl font-bold tracking-tight">${escape_html(title)}</h1> `);
	if (description) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<p class="text-muted-foreground mt-1 text-sm">${escape_html(description)}</p>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--></div></div> `);
	if (actions) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="flex items-center gap-2">`);
		actions($$renderer);
		$$renderer.push(`<!----></div>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--></div>`);
}
//#endregion
export { Crud_header as t };

//# sourceMappingURL=crud-header-Crxaf_Fu.js.map