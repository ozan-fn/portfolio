import { rt as spread_props } from "./index2-v1oxlg_d.js";
import { t as Icon } from "./Icon-CvnL3Gja.js";
//#region .svelte-kit/adapter-bun/chunks/arrow-up-right.js
function Arrow_up_right($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer2, spread_props([
			{ name: "arrow-up-right" },
			props,
			{
				iconNode: [["path", { "d": "M7 7h10v10" }], ["path", { "d": "M7 17 17 7" }]],
				children: ($$renderer3) => {
					props.children?.($$renderer3);
					$$renderer3.push(`<!---->`);
				},
				$$slots: { default: true }
			}
		]));
	});
}
//#endregion
export { Arrow_up_right as t };

//# sourceMappingURL=arrow-up-right-CD2q4MzK.js.map