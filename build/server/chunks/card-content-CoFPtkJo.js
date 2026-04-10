import { A as bind_props, j as clsx, k as attributes } from "./renderer-CoNnoy0x.js";
import { i as cn } from "./button-JWKRuBhr.js";
//#region .svelte-kit/adapter-bun/chunks/card-content.js
function Card_content($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer2.push(`<div${attributes({
			"data-slot": "card-content",
			class: clsx(cn("px-6 group-data-[size=sm]/card:px-4", className)),
			...restProps
		})}>`);
		children?.($$renderer2);
		$$renderer2.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
export { Card_content as t };

//# sourceMappingURL=card-content-CoFPtkJo.js.map