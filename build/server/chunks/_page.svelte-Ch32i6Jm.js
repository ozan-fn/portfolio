import "./dev-OC6EGoUN.js";
import { t as Input } from "./input-B4jit4xQ.js";
import { t as Label } from "./label-DnM6-HFi.js";
import { t as Crud_header } from "./crud-header-5rxnVVzC.js";
import { t as Crud_form_layout } from "./crud-form-layout-DnsivRU_.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/new/_page.svelte.js
function _page($$renderer) {
	let isLoading = false;
	let $$settled = true;
	let $$inner_renderer;
	function $$render_inner($$renderer) {
		Crud_header($$renderer, {
			title: "New Certificate",
			description: "Add a new professional certification to your portfolio.",
			backUrl: "/dashboard/certificates"
		});
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
				$$renderer.push(`<!----></div></div>`);
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
					type: "date"
				});
				$$renderer.push(`<!----></div> <div class="text-xs text-muted-foreground pt-2"><p>Leave expiry date empty for lifetime certifications.</p></div></div>`);
			}
			Crud_form_layout($$renderer, {
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
		$$renderer.push(`<!---->`);
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

//# sourceMappingURL=_page.svelte-Ch32i6Jm.js.map