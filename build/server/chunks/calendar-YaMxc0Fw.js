import { rt as spread_props } from "./index2-v1oxlg_d.js";
import { t as Icon } from "./Icon-CvnL3Gja.js";
//#region .svelte-kit/adapter-bun/chunks/calendar.js
function Calendar($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer2, spread_props([
			{ name: "calendar" },
			props,
			{
				iconNode: [
					["path", { "d": "M8 2v4" }],
					["path", { "d": "M16 2v4" }],
					["rect", {
						"width": "18",
						"height": "18",
						"x": "3",
						"y": "4",
						"rx": "2"
					}],
					["path", { "d": "M3 10h18" }]
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
export { Calendar as t };

//# sourceMappingURL=calendar-YaMxc0Fw.js.map