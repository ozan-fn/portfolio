import { Q as props_id, d as attributes, f as bind_props, pt as stringify, u as attr_style, ut as spread_props, x as derived } from "./dev-D04rZKKe.js";
import { d as createBitsAttrs, f as createId, l as boxWith, n as attachRef, x as mergeProps } from "./create-id-BhPC_Pr4.js";
//#region .svelte-kit/adapter-bun/chunks/aspect-ratio.js
var aspectRatioAttrs = createBitsAttrs({
	component: "aspect-ratio",
	parts: ["root"]
});
var AspectRatioRootState = class AspectRatioRootState {
	static create(opts) {
		return new AspectRatioRootState(opts);
	}
	opts;
	attachment;
	constructor(opts) {
		this.opts = opts;
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		style: {
			position: "absolute",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		},
		[aspectRatioAttrs.root]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
function Aspect_ratio$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { ref = null, id = createId(uid), ratio = 1, children, child, $$slots, $$events, ...restProps } = $$props;
		const rootState = AspectRatioRootState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			ratio: boxWith(() => ratio)
		});
		const mergedProps = derived(() => mergeProps(restProps, rootState.props));
		$$renderer.push(`<div${attr_style("", {
			position: "relative",
			width: "100%",
			"padding-bottom": `${stringify(ratio ? 100 / ratio : 0)}%`
		})}>`);
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
		$$renderer.push(`<!--]--></div>`);
		bind_props($$props, { ref });
	});
}
function Aspect_ratio($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Aspect_ratio$1) {
				$$renderer.push("<!--[-->");
				Aspect_ratio$1($$renderer, spread_props([
					{ "data-slot": "aspect-ratio" },
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
export { Aspect_ratio as t };

//# sourceMappingURL=aspect-ratio-BImvbOXt.js.map