import { nt as spread_props } from "./renderer-CoNnoy0x.js";
import { t as Icon } from "./Icon-DsjQn-Ts.js";
//#region .svelte-kit/adapter-bun/chunks/clock.js
function Clock($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "clock" },
		props,
		{ iconNode: [["circle", {
			"cx": "12",
			"cy": "12",
			"r": "10"
		}], ["path", { "d": "M12 6v6l4 2" }]] }
	]));
}
//#endregion
export { Clock as t };

//# sourceMappingURL=clock-jY___EAI.js.map