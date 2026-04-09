import { nt as spread_props } from "./renderer-CoNnoy0x.js";
import { t as Button } from "./button-Ch6ZWsjV.js";
import { u as toggleMode } from "./mode-BlOj8mZm.js";
import { t as Icon } from "./Icon-CiEhqWrS.js";
//#region .svelte-kit/adapter-bun/chunks/mode-toggle.js
function Sun($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "sun" },
		props,
		{ iconNode: [
			["circle", {
				"cx": "12",
				"cy": "12",
				"r": "4"
			}],
			["path", { "d": "M12 2v2" }],
			["path", { "d": "M12 20v2" }],
			["path", { "d": "m4.93 4.93 1.41 1.41" }],
			["path", { "d": "m17.66 17.66 1.41 1.41" }],
			["path", { "d": "M2 12h2" }],
			["path", { "d": "M20 12h2" }],
			["path", { "d": "m6.34 17.66-1.41 1.41" }],
			["path", { "d": "m19.07 4.93-1.41 1.41" }]
		] }
	]));
}
function Moon($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "moon" },
		props,
		{ iconNode: [["path", { "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" }]] }
	]));
}
function Mode_toggle($$renderer) {
	Button($$renderer, {
		onclick: toggleMode,
		variant: "outline",
		size: "icon",
		children: ($$renderer2) => {
			Sun($$renderer2, { class: "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90" });
			$$renderer2.push(`<!----> `);
			Moon($$renderer2, { class: "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0" });
			$$renderer2.push(`<!----> <span class="sr-only">Toggle theme</span>`);
		},
		$$slots: { default: true }
	});
}
//#endregion
export { Mode_toggle as t };

//# sourceMappingURL=mode-toggle-CKKgcqFb.js.map