import { rt as spread_props } from "./index2-v1oxlg_d.js";
import { t as Icon } from "./Icon-CvnL3Gja.js";
//#region .svelte-kit/adapter-bun/chunks/file-text.js
function File_text($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer2, spread_props([
			{ name: "file-text" },
			props,
			{
				iconNode: [
					["path", { "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }],
					["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }],
					["path", { "d": "M10 9H8" }],
					["path", { "d": "M16 13H8" }],
					["path", { "d": "M16 17H8" }]
				],
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
export { File_text as t };

//# sourceMappingURL=file-text-okTzg-Rn.js.map