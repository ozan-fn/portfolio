import "./root-hPyMpEOi.js";
import { A as bind_props, E as attr, L as escape_html, nt as spread_props } from "./renderer-CoNnoy0x.js";
import "./state.svelte-yQ996O6E.js";
import { t as Button } from "./button-Ch6ZWsjV.js";
import { t as Icon } from "./Icon-CiEhqWrS.js";
import { t as Chevron_left } from "./chevron-left-xm-MdilH.js";
import { t as Loader_circle } from "./loader-circle-Cd7PfToa.js";
//#region .svelte-kit/adapter-bun/chunks/crud-form-layout.js
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
function Save($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "save" },
		props,
		{ iconNode: [
			["path", { "d": "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }],
			["path", { "d": "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }],
			["path", { "d": "M7 3v4a1 1 0 0 0 1 1h7" }]
		] }
	]));
}
function Crud_form_layout($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { action = "", isLoading = false, main, sidebar, cancelUrl, submitLabel = "Save Changes", onSuccess } = $$props;
		$$renderer2.push(`<form method="POST"${attr("action", action)} class="px-6 pb-6 max-w-7xl w-full mx-auto grid gap-6 lg:grid-cols-[1fr_300px]"><div class="space-y-6"><div class="grid gap-6 rounded-lg border bg-card p-6 shadow-sm">`);
		main($$renderer2);
		$$renderer2.push(`<!----></div></div> <div class="space-y-6"><div class="grid gap-6 rounded-lg border bg-card p-6 shadow-sm"><h3 class="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Options</h3> <div class="space-y-4">`);
		sidebar($$renderer2);
		$$renderer2.push(`<!----></div> <div class="flex flex-col gap-2 pt-4 border-t">`);
		Button($$renderer2, {
			type: "submit",
			disabled: isLoading,
			class: "w-full",
			children: ($$renderer3) => {
				if (isLoading) {
					$$renderer3.push("<!--[0-->");
					Loader_circle($$renderer3, { class: "mr-2 h-4 w-4 animate-spin" });
					$$renderer3.push(`<!----> Saving...`);
				} else {
					$$renderer3.push("<!--[-1-->");
					Save($$renderer3, { class: "mr-2 h-4 w-4" });
					$$renderer3.push(`<!----> ${escape_html(submitLabel)}`);
				}
				$$renderer3.push(`<!--]-->`);
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----> `);
		Button($$renderer2, {
			variant: "ghost",
			href: cancelUrl,
			disabled: isLoading,
			class: "w-full",
			children: ($$renderer3) => {
				$$renderer3.push(`<!---->Cancel`);
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----></div></div></div></form>`);
		bind_props($$props, { isLoading });
	});
}
//#endregion
export { Crud_header as n, Crud_form_layout as t };

//# sourceMappingURL=crud-form-layout-Ci1MXD3C.js.map