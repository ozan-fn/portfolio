import { A as bind_props, j as clsx, k as attributes } from "./renderer-CoNnoy0x.js";
import { r as cn } from "./button-Ch6ZWsjV.js";
//#region .svelte-kit/adapter-bun/chunks/card.js
function Card($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, children, size = "default", $$slots, $$events, ...restProps } = $$props;
		$$renderer2.push(`<div${attributes({
			"data-slot": "card",
			"data-size": size,
			class: clsx(cn("ring-foreground/10 bg-card text-card-foreground gap-6 overflow-hidden rounded-xl py-6 text-sm shadow-xs ring-1 has-[>img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col", className)),
			...restProps
		})}>`);
		children?.($$renderer2);
		$$renderer2.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
export { Card as t };

//# sourceMappingURL=card-CnyBIkIo.js.map