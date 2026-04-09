import { rt as spread_props } from "./index2-v1oxlg_d.js";
import { t as Icon } from "./Icon-CvnL3Gja.js";
//#region .svelte-kit/adapter-bun/chunks/arrow-right.js
function Arrow_right($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer2, spread_props([
			{ name: "arrow-right" },
			props,
			{
				iconNode: [["path", { "d": "M5 12h14" }], ["path", { "d": "m12 5 7 7-7 7" }]],
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
export { Arrow_right as t };

//# sourceMappingURL=arrow-right-ixm6ty34.js.map