import { t as Button } from "./button-Ch6ZWsjV.js";
import { t as Input } from "./input-CkhnL9Hs.js";
import { t as Label } from "./label-CecdpjkD.js";
import { t as Crud_header } from "./crud-header-Crxaf_Fu.js";
import { t as Loader_circle } from "./loader-circle-Cd7PfToa.js";
import { t as Crud_form_layout } from "./crud-form-layout-BEnoQuye.js";
import { t as Trash_2 } from "./trash-2-C-0YQPwz.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/_id_/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let certificate = {
			title: "AWS Certified Solutions Architect",
			issuer: "Amazon Web Services",
			issueDate: /* @__PURE__ */ new Date("2023-06-15"),
			expiryDate: /* @__PURE__ */ new Date("2025-06-15")
		};
		let isLoading = false;
		let isDeleting = false;
		const handleDelete = () => {
			if (confirm("Are you sure you want to delete this certificate?")) {
				isDeleting = true;
				setTimeout(() => {
					window.location.href = "/dashboard/certificates";
				}, 500);
			}
		};
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
					Button($$renderer4, {
						variant: "destructive",
						size: "icon",
						onclick: handleDelete,
						disabled: isDeleting || isLoading,
						children: ($$renderer5) => {
							if (isDeleting) {
								$$renderer5.push("<!--[0-->");
								Loader_circle($$renderer5, { class: "h-4 w-4 animate-spin" });
							} else {
								$$renderer5.push("<!--[-1-->");
								Trash_2($$renderer5, { class: "h-4 w-4" });
							}
							$$renderer5.push(`<!--]-->`);
						},
						$$slots: { default: true }
					});
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
						value: certificate.title,
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
						value: certificate.issuer,
						placeholder: "e.g. Amazon Web Services",
						required: true
					});
					$$renderer4.push(`<!----></div></div>`);
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
						value: formatDateForInput(certificate.issueDate),
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
						value: formatDateForInput(certificate.expiryDate)
					});
					$$renderer4.push(`<!----></div> <div class="text-xs text-muted-foreground pt-2"><p>Leave expiry date empty for lifetime certifications.</p></div></div>`);
				};
				Crud_form_layout($$renderer3, {
					cancelUrl: "/dashboard/certificates",
					submitLabel: "Update Certificate",
					onSuccess: () => {
						window.location.href = "/dashboard/certificates";
					},
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

//# sourceMappingURL=_page.svelte-CrN64Fez.js.map