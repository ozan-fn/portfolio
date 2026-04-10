import { A as bind_props, j as clsx, k as attributes } from "./renderer-CoNnoy0x.js";
import { i as cn } from "./button-JWKRuBhr.js";
//#region .svelte-kit/adapter-bun/chunks/card-footer.js
function Card_footer($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer2.push(`<div${attributes({
			"data-slot": "card-footer",
			class: clsx(cn("rounded-b-xl px-6 group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4 flex items-center", className)),
			...restProps
		})}>`);
		children?.($$renderer2);
		$$renderer2.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
export { Card_footer as t };

//# sourceMappingURL=card-footer-B61i72Uo.js.map