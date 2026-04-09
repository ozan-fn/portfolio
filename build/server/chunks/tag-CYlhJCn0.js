import { rt as spread_props } from "./index2-v1oxlg_d.js";
import { t as Icon } from "./Icon-CvnL3Gja.js";
//#region .svelte-kit/adapter-bun/chunks/tag.js
function Tag($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer2, spread_props([
			{ name: "tag" },
			props,
			{
				iconNode: [["path", { "d": "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" }], ["circle", {
					"cx": "7.5",
					"cy": "7.5",
					"r": ".5",
					"fill": "currentColor"
				}]],
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
export { Tag as t };

//# sourceMappingURL=tag-CYlhJCn0.js.map