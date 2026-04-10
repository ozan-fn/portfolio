import "./root-hPyMpEOi.js";
import { A as bind_props, E as attr, L as escape_html, nt as spread_props } from "./renderer-CoNnoy0x.js";
import "./state.svelte-yQ996O6E.js";
import { t as Button } from "./button-JWKRuBhr.js";
import { t as Icon } from "./Icon-DsjQn-Ts.js";
import { t as Loader_circle } from "./loader-circle-CROlml2D.js";
//#region .svelte-kit/adapter-bun/chunks/crud-form-layout.js
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
		let { action = "", isLoading = false, main, sidebar, cancelUrl, submitLabel = "Save Changes", onSuccess, enctype } = $$props;
		$$renderer2.push(`<form method="POST"${attr("action", action)}${attr("enctype", enctype)} class="px-6 pb-6 max-w-7xl w-full mx-auto grid gap-6 lg:grid-cols-[1fr_300px]"><div class="space-y-6"><div class="grid gap-6 rounded-lg border bg-card p-6 shadow-sm">`);
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
export { Crud_form_layout as t };

//# sourceMappingURL=crud-form-layout-4Vin_waV.js.map