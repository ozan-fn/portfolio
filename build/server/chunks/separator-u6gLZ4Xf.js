import { Q as props_id, d as attributes, f as bind_props, ut as spread_props, x as derived } from "./dev-OC6EGoUN.js";
import { a as boolToStrTrueOrUndef, d as createBitsAttrs, f as createId, l as boxWith, n as attachRef, x as mergeProps } from "./create-id-FjMUD0Is.js";
import { i as cn } from "./button-BAli88Z_.js";
//#region .svelte-kit/adapter-bun/chunks/separator.js
var separatorAttrs = createBitsAttrs({
	component: "separator",
	parts: ["root"]
});
var SeparatorRootState = class SeparatorRootState {
	static create(opts) {
		return new SeparatorRootState(opts);
	}
	opts;
	attachment;
	constructor(opts) {
		this.opts = opts;
		this.attachment = attachRef(opts.ref);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: this.opts.decorative.current ? "none" : "separator",
		"aria-orientation": this.opts.orientation.current,
		"aria-hidden": boolToStrTrueOrUndef(this.opts.decorative.current),
		"data-orientation": this.opts.orientation.current,
		[separatorAttrs.root]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
function Separator$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { id = createId(uid), ref = null, child, children, decorative = false, orientation = "horizontal", $$slots, $$events, ...restProps } = $$props;
		const rootState = SeparatorRootState.create({
			ref: boxWith(() => ref, (v) => ref = v),
			id: boxWith(() => id),
			decorative: boxWith(() => decorative),
			orientation: boxWith(() => orientation)
		});
		const mergedProps = derived(() => mergeProps(restProps, rootState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
function Separator($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, "data-slot": dataSlot = "separator", $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Separator$1) {
				$$renderer.push("<!--[-->");
				Separator$1($$renderer, spread_props([
					{
						"data-slot": dataSlot,
						class: cn("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px", "data-[orientation=vertical]:h-full", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
export { Separator as t };

//# sourceMappingURL=separator-u6gLZ4Xf.js.map