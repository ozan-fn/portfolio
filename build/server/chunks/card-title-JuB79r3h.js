import { A as bind_props, j as clsx, k as attributes } from "./renderer-CoNnoy0x.js";
import { r as cn } from "./button-Ch6ZWsjV.js";
//#region .svelte-kit/adapter-bun/chunks/card-title.js
function Card_description($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer2.push(`<p${attributes({
			"data-slot": "card-description",
			class: clsx(cn("text-muted-foreground text-sm", className)),
			...restProps
		})}>`);
		children?.($$renderer2);
		$$renderer2.push(`<!----></p>`);
		bind_props($$props, { ref });
	});
}
function Card_header($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer2.push(`<div${attributes({
			"data-slot": "card-header",
			class: clsx(cn("gap-1 rounded-t-xl px-6 group-data-[size=sm]/card:px-4 [.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]", className)),
			...restProps
		})}>`);
		children?.($$renderer2);
		$$renderer2.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
function Card_title($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer2.push(`<div${attributes({
			"data-slot": "card-title",
			class: clsx(cn("text-base leading-normal font-medium group-data-[size=sm]/card:text-sm", className)),
			...restProps
		})}>`);
		children?.($$renderer2);
		$$renderer2.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
export { Card_header as n, Card_title as r, Card_description as t };

//# sourceMappingURL=card-title-JuB79r3h.js.map