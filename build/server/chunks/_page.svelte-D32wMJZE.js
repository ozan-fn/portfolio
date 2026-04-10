import { t as Input } from "./input-yKAcSgEU.js";
import { t as Label } from "./label-XufGbXy_.js";
import { t as Crud_header } from "./crud-header-8_9VZwFh.js";
import { t as Crud_form_layout } from "./crud-form-layout-4Vin_waV.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/new/_page.svelte.js
function _page($$renderer) {
	let isLoading = false;
	let $$settled = true;
	let $$inner_renderer;
	function $$render_inner($$renderer2) {
		Crud_header($$renderer2, {
			title: "New Certificate",
			description: "Add a new professional certification to your portfolio.",
			backUrl: "/dashboard/certificates"
		});
		$$renderer2.push(`<!----> `);
		{
			let main = function($$renderer3) {
				$$renderer3.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
				Label($$renderer3, {
					for: "title",
					children: ($$renderer4) => {
						$$renderer4.push(`<!---->Certificate Title`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> `);
				Input($$renderer3, {
					id: "title",
					name: "title",
					placeholder: "e.g. AWS Certified Solutions Architect",
					required: true
				});
				$$renderer3.push(`<!----></div> <div class="grid gap-2">`);
				Label($$renderer3, {
					for: "issuer",
					children: ($$renderer4) => {
						$$renderer4.push(`<!---->Issuing Organization`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> `);
				Input($$renderer3, {
					id: "issuer",
					name: "issuer",
					placeholder: "e.g. Amazon Web Services",
					required: true
				});
				$$renderer3.push(`<!----></div> <div class="grid gap-2">`);
				Label($$renderer3, {
					for: "verifyUrl",
					children: ($$renderer4) => {
						$$renderer4.push(`<!---->Verification URL (Optional)`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> `);
				Input($$renderer3, {
					id: "verifyUrl",
					name: "verifyUrl",
					placeholder: "https://..."
				});
				$$renderer3.push(`<!----></div> <div class="grid gap-2 pt-2 border-t mt-2">`);
				Label($$renderer3, {
					for: "thumbnail",
					children: ($$renderer4) => {
						$$renderer4.push(`<!---->Certificate Image (Optional)`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> `);
				Input($$renderer3, {
					id: "thumbnail",
					name: "thumbnail",
					type: "file",
					accept: "image/*"
				});
				$$renderer3.push(`<!----></div></div>`);
			}, sidebar = function($$renderer3) {
				$$renderer3.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
				Label($$renderer3, {
					for: "issueDate",
					children: ($$renderer4) => {
						$$renderer4.push(`<!---->Issue Date`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> `);
				Input($$renderer3, {
					id: "issueDate",
					name: "issueDate",
					type: "date",
					required: true
				});
				$$renderer3.push(`<!----></div> <div class="grid gap-2">`);
				Label($$renderer3, {
					for: "expiryDate",
					children: ($$renderer4) => {
						$$renderer4.push(`<!---->Expiry Date (Optional)`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> `);
				Input($$renderer3, {
					id: "expiryDate",
					name: "expiryDate",
					type: "date"
				});
				$$renderer3.push(`<!----></div> <div class="text-xs text-muted-foreground pt-2"><p>Leave expiry date empty for lifetime certifications.</p></div></div>`);
			};
			Crud_form_layout($$renderer2, {
				action: "?/create",
				cancelUrl: "/dashboard/certificates",
				submitLabel: "Create Certificate",
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
		$$renderer2.push(`<!---->`);
	}
	do {
		$$settled = true;
		$$inner_renderer = $$renderer.copy();
		$$render_inner($$inner_renderer);
	} while (!$$settled);
	$$renderer.subsume($$inner_renderer);
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-D32wMJZE.js.map