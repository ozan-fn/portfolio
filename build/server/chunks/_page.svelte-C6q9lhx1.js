import "./root-hPyMpEOi.js";
import { E as attr, L as escape_html, P as derived, nt as spread_props } from "./renderer-CoNnoy0x.js";
import "./state.svelte-yQ996O6E.js";
import { t as Button } from "./button-JWKRuBhr.js";
import { t as Icon } from "./Icon-DsjQn-Ts.js";
import { t as Input } from "./input-yKAcSgEU.js";
import { t as Label } from "./label-XufGbXy_.js";
import { t as Crud_header } from "./crud-header-8_9VZwFh.js";
import { t as Crud_form_layout } from "./crud-form-layout-4Vin_waV.js";
import { t as Trash_2 } from "./trash-2-D7az2Ppd.js";
import { t as getFileUrl } from "./storage.client-B4KZJi2l.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/_id_/_page.svelte.js
function Image($$renderer, $$props) {
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
	$$renderer.component(($$renderer2) => {
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
		function $$render_inner($$renderer3) {
			{
				let actions = function($$renderer4) {
					$$renderer4.push(`<form action="?/delete" method="POST">`);
					Button($$renderer4, {
						type: "submit",
						variant: "destructive",
						size: "icon",
						disabled: isLoading,
						children: ($$renderer5) => {
							$$renderer5.push("<!--[-1-->");
							Trash_2($$renderer5, { class: "h-4 w-4" });
							$$renderer5.push(`<!--]-->`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----></form>`);
				};
				Crud_header($$renderer3, {
					title: "Edit Certificate",
					description: "Update your certification details.",
					backUrl: "/dashboard/certificates",
					actions
				});
			}
			$$renderer3.push(`<!----> `);
			{
				let main = function($$renderer4) {
					$$renderer4.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
					Label($$renderer4, {
						for: "title",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Certificate Title`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
						id: "title",
						name: "title",
						value: certificate().title,
						placeholder: "e.g. AWS Certified Solutions Architect",
						required: true
					});
					$$renderer4.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer4, {
						for: "issuer",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Issuing Organization`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
						id: "issuer",
						name: "issuer",
						value: certificate().issuer,
						placeholder: "e.g. Amazon Web Services",
						required: true
					});
					$$renderer4.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer4, {
						for: "verifyUrl",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Verification URL (Optional)`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
						id: "verifyUrl",
						name: "verifyUrl",
						value: certificate().verifyUrl || "",
						placeholder: "https://..."
					});
					$$renderer4.push(`<!----></div> <div class="grid gap-2 pt-2 border-t mt-2">`);
					Label($$renderer4, {
						for: "thumbnail",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Certificate Image (Optional)`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
						id: "thumbnail",
						name: "thumbnail",
						type: "file",
						accept: "image/*"
					});
					$$renderer4.push(`<!----> <div class="flex items-center gap-2 mt-1">`);
					if (certificate().thumbnail) {
						$$renderer4.push("<!--[0-->");
						$$renderer4.push(`<div class="flex h-12 w-16 items-center justify-center rounded border overflow-hidden"><img${attr("src", getFileUrl(certificate().thumbnail))} alt="Thumbnail" class="h-full w-full object-cover"/></div>`);
					} else {
						$$renderer4.push("<!--[-1-->");
						$$renderer4.push(`<div class="flex h-12 w-16 items-center justify-center rounded border bg-muted/50 text-muted-foreground">`);
						Image($$renderer4, { class: "h-5 w-5 opacity-40" });
						$$renderer4.push(`<!----></div>`);
					}
					$$renderer4.push(`<!--]--> <p class="text-[10px] text-muted-foreground italic">${escape_html(certificate().thumbnail ? "Click to change image" : "No image uploaded")}</p></div></div></div>`);
				}, sidebar = function($$renderer4) {
					$$renderer4.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
					Label($$renderer4, {
						for: "issueDate",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Issue Date`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
						id: "issueDate",
						name: "issueDate",
						type: "date",
						value: formatDateForInput(certificate().issueDate),
						required: true
					});
					$$renderer4.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer4, {
						for: "expiryDate",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Expiry Date (Optional)`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
						id: "expiryDate",
						name: "expiryDate",
						type: "date",
						value: formatDateForInput(certificate().expiryDate)
					});
					$$renderer4.push(`<!----></div> <div class="text-xs text-muted-foreground pt-2"><p>Leave expiry date empty for lifetime certifications.</p></div></div>`);
				};
				Crud_form_layout($$renderer3, {
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
			$$renderer3.push(`<!---->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer2.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer2.subsume($$inner_renderer);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-C6q9lhx1.js.map