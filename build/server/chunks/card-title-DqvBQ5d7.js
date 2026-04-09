import { A as bind_props, j as clsx, k as attributes } from "./index2-v1oxlg_d.js";
import { r as cn } from "./button-Bb0vadXY.js";
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
export { Card_title as i, Card_footer as n, Card_header as r, Card_description as t };

//# sourceMappingURL=card-title-DqvBQ5d7.js.map