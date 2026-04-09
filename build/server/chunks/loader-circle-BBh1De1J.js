import { rt as spread_props } from "./index2-v1oxlg_d.js";
import { t as Icon } from "./Icon-CvnL3Gja.js";
//#region .svelte-kit/adapter-bun/chunks/loader-circle.js
function Loader_circle($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer2, spread_props([
			{ name: "loader-circle" },
			props,
			{
				iconNode: [["path", { "d": "M21 12a9 9 0 1 1-6.219-8.56" }]],
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
export { Loader_circle as t };

//# sourceMappingURL=loader-circle-BBh1De1J.js.map