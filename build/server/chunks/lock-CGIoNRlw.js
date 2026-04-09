import { rt as spread_props } from "./index2-v1oxlg_d.js";
import { t as Icon } from "./Icon-CvnL3Gja.js";
//#region .svelte-kit/adapter-bun/chunks/lock.js
function Lock($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer2, spread_props([
			{ name: "lock" },
			props,
			{
				iconNode: [["rect", {
					"width": "18",
					"height": "11",
					"x": "3",
					"y": "11",
					"rx": "2",
					"ry": "2"
				}], ["path", { "d": "M7 11V7a5 5 0 0 1 10 0v4" }]],
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
export { Lock as t };

//# sourceMappingURL=lock-CGIoNRlw.js.map