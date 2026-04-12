import { T as escape_html, c as attr, ut as spread_props, x as derived } from "./dev-OC6EGoUN.js";
import { t as Button } from "./button-BAli88Z_.js";
import { t as Icon } from "./Icon-gA2xXWGL.js";
import { t as Input } from "./input-B4jit4xQ.js";
import { t as Label } from "./label-DnM6-HFi.js";
import { t as Trash_2 } from "./trash-2-C1TVGmo8.js";
import "./forms-nWoHtbL-.js";
import { t as Crud_header } from "./crud-header-5rxnVVzC.js";
import { t as Crud_form_layout } from "./crud-form-layout-DnsivRU_.js";
import { t as getFileUrl } from "./storage.client-BdaqK3xy.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/_id_/_page.svelte.js
function Image($$renderer, $$props) {
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
		{ name: "image" },
		props,
		{ iconNode: [
			["rect", {
				"width": "18",
				"height": "18",
				"x": "3",
				"y": "3",
				"rx": "2",
				"ry": "2"
			}],
			["circle", {
				"cx": "9",
				"cy": "9",
				"r": "2"
			}],
			["path", { "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]
		] }
	]));
}
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		let certificate = derived(() => data.certificate);
		let isLoading = false;
		const formatDateForInput = (date) => {
			if (!date) return "";
			const d = new Date(date);
			const month = String(d.getMonth() + 1).padStart(2, "0");
			const day = String(d.getDate()).padStart(2, "0");
			return `${d.getFullYear()}-${month}-${day}`;
		};
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			{
				function actions($$renderer) {
					$$renderer.push(`<form action="?/delete" method="POST">`);
					Button($$renderer, {
						type: "submit",
						variant: "destructive",
						size: "icon",
						disabled: isLoading,
						children: ($$renderer) => {
							$$renderer.push("<!--[-1-->");
							Trash_2($$renderer, { class: "h-4 w-4" });
							$$renderer.push(`<!--]-->`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></form>`);
				}
				Crud_header($$renderer, {
					title: "Edit Certificate",
					description: "Update your certification details.",
					backUrl: "/dashboard/certificates",
					actions,
					$$slots: { actions: true }
				});
			}
			$$renderer.push(`<!----> `);
			{
				function main($$renderer) {
					$$renderer.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
					Label($$renderer, {
						for: "title",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Certificate Title`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "title",
						name: "title",
						value: certificate().title,
						placeholder: "e.g. AWS Certified Solutions Architect",
						required: true
					});
					$$renderer.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer, {
						for: "issuer",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Issuing Organization`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "issuer",
						name: "issuer",
						value: certificate().issuer,
						placeholder: "e.g. Amazon Web Services",
						required: true
					});
					$$renderer.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer, {
						for: "verifyUrl",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Verification URL (Optional)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "verifyUrl",
						name: "verifyUrl",
						value: certificate().verifyUrl || "",
						placeholder: "https://..."
					});
					$$renderer.push(`<!----></div> <div class="grid gap-2 pt-2 border-t mt-2">`);
					Label($$renderer, {
						for: "thumbnail",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Certificate Image (Optional)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "thumbnail",
						name: "thumbnail",
						type: "file",
						accept: "image/*"
					});
					$$renderer.push(`<!----> <div class="flex items-center gap-2 mt-1">`);
					if (certificate().thumbnail) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<div class="flex h-12 w-16 items-center justify-center rounded border overflow-hidden"><img${attr("src", getFileUrl(certificate().thumbnail))} alt="Thumbnail" class="h-full w-full object-cover"/></div>`);
					} else {
						$$renderer.push("<!--[-1-->");
						$$renderer.push(`<div class="flex h-12 w-16 items-center justify-center rounded border bg-muted/50 text-muted-foreground">`);
						Image($$renderer, { class: "h-5 w-5 opacity-40" });
						$$renderer.push(`<!----></div>`);
					}
					$$renderer.push(`<!--]--> <p class="text-[10px] text-muted-foreground italic">${escape_html(certificate().thumbnail ? "Click to change image" : "No image uploaded")}</p></div></div></div>`);
				}
				function sidebar($$renderer) {
					$$renderer.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
					Label($$renderer, {
						for: "issueDate",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Issue Date`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "issueDate",
						name: "issueDate",
						type: "date",
						value: formatDateForInput(certificate().issueDate),
						required: true
					});
					$$renderer.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer, {
						for: "expiryDate",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Expiry Date (Optional)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "expiryDate",
						name: "expiryDate",
						type: "date",
						value: formatDateForInput(certificate().expiryDate)
					});
					$$renderer.push(`<!----></div> <div class="text-xs text-muted-foreground pt-2"><p>Leave expiry date empty for lifetime certifications.</p></div></div>`);
				}
				Crud_form_layout($$renderer, {
					action: "?/update",
					cancelUrl: "/dashboard/certificates",
					submitLabel: "Update Certificate",
					enctype: "multipart/form-data",
					get isLoading() {
						return isLoading;
					},
					set isLoading($$value) {
						isLoading = $$value;
						$$settled = false;
					},
					main,
					sidebar,
					$$slots: {
						main: true,
						sidebar: true
					}
				});
			}
			$$renderer.push(`<!---->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-B6r_NkEU.js.map