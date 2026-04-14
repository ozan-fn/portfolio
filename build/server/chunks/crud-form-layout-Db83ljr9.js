import { T as escape_html, c as attr, f as bind_props, ut as spread_props } from "./dev-D04rZKKe.js";
import { t as Button } from "./button-DA4j647p.js";
import { t as Icon } from "./Icon-BhN73e3z.js";
import "./forms-ChRS1G7X.js";
import { t as Loader_circle } from "./loader-circle-BXuKuS1J.js";
//#region .svelte-kit/adapter-bun/chunks/crud-form-layout.js
function Save($$renderer, $$props) {
	/**
	* @license @lucide/svelte v1.8.0 - ISC
	*
	* ISC License
	*
	* Copyright (c) 2026 Lucide Icons and Contributors
	*
	* Permission to use, copy, modify, and/or distribute this software for any
	* purpose with or without fee is hereby granted, provided that the above
	* copyright notice and this permission notice appear in all copies.
	*
	* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
	* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
	* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
	* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
	* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
	* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
	* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	*
	* ---
	*
	* The following Lucide icons are derived from the Feather project:
	*
	* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
	*
	* The MIT License (MIT) (for the icons listed above)
	*
	* Copyright (c) 2013-present Cole Bemis
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*
	*/
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "save" },
		props,
		{ iconNode: [
			["path", { "d": "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }],
			["path", { "d": "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }],
			["path", { "d": "M7 3v4a1 1 0 0 0 1 1h7" }]
		] }
	]));
}
function Crud_form_layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { action = "", isLoading = false, main, sidebar, cancelUrl, submitLabel = "Save Changes", onSuccess, enctype } = $$props;
		$$renderer.push(`<form method="POST"${attr("action", action)}${attr("enctype", enctype)} class="px-6 pb-6 max-w-7xl w-full mx-auto grid gap-6 lg:grid-cols-[1fr_300px]"><div class="space-y-6"><div class="grid gap-6 rounded-lg border bg-card p-6 shadow-sm">`);
		main($$renderer);
		$$renderer.push(`<!----></div></div> <div class="space-y-6"><div class="grid gap-6 rounded-lg border bg-card p-6 shadow-sm"><h3 class="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Options</h3> <div class="space-y-4">`);
		sidebar($$renderer);
		$$renderer.push(`<!----></div> <div class="flex flex-col gap-2 pt-4 border-t">`);
		Button($$renderer, {
			type: "submit",
			disabled: isLoading,
			class: "w-full",
			children: ($$renderer) => {
				if (isLoading) {
					$$renderer.push("<!--[0-->");
					Loader_circle($$renderer, { class: "mr-2 h-4 w-4 animate-spin" });
					$$renderer.push(`<!----> Saving...`);
				} else {
					$$renderer.push("<!--[-1-->");
					Save($$renderer, { class: "mr-2 h-4 w-4" });
					$$renderer.push(`<!----> ${escape_html(submitLabel)}`);
				}
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Button($$renderer, {
			variant: "ghost",
			href: cancelUrl,
			disabled: isLoading,
			class: "w-full",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Cancel`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></div></div></form>`);
		bind_props($$props, { isLoading });
	});
}
//#endregion
export { Crud_form_layout as t };

//# sourceMappingURL=crud-form-layout-Db83ljr9.js.map