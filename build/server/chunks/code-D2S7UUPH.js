import { rt as spread_props } from "./index2-v1oxlg_d.js";
import { t as Icon } from "./Icon-CvnL3Gja.js";
//#region .svelte-kit/adapter-bun/chunks/code.js
function Code($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer2, spread_props([
			{ name: "code" },
			props,
			{
				iconNode: [["path", { "d": "m16 18 6-6-6-6" }], ["path", { "d": "m8 6-6 6 6 6" }]],
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
export { Code as t };

//# sourceMappingURL=code-D2S7UUPH.js.map