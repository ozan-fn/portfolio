import { nt as spread_props } from "./renderer-CoNnoy0x.js";
import { t as Icon } from "./Icon-DsjQn-Ts.js";
//#region .svelte-kit/adapter-bun/chunks/globe.js
function Globe($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "globe" },
		props,
		{ iconNode: [
			["circle", {
				"cx": "12",
				"cy": "12",
				"r": "10"
			}],
			["path", { "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }],
			["path", { "d": "M2 12h20" }]
		] }
	]));
}
//#endregion
export { Globe as t };

//# sourceMappingURL=globe-BBsnsNSQ.js.map