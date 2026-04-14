import { x as derived } from "./dev-D04rZKKe.js";
import { t as Input } from "./input-DFCl4JL5.js";
import { t as Label } from "./label-CGw7bmi2.js";
import { t as Crud_header } from "./crud-header-fXwgJuKI.js";
import { t as Crud_form_layout } from "./crud-form-layout-D0RYgH0a.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/new/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let isLoading = false;
		let title = "";
		let slug = derived(() => title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, ""));
		async function handleFileChange(e) {
			const input = e.target;
			if (!input.files || input.files.length === 0) return;
			const file = input.files[0];
			if (!file.type.startsWith("image/")) return;
			const img = new Image();
			img.src = URL.createObjectURL(file);
			await new Promise((resolve) => img.onload = resolve);
			let width = img.width;
			let height = img.height;
			const maxSize = 1200;
			if (width > maxSize || height > maxSize) {
				if (width > height) {
					height = Math.round(height * maxSize / width);
					width = maxSize;
				} else {
					width = Math.round(width * maxSize / height);
					height = maxSize;
				}
				const canvas = document.createElement("canvas");
				canvas.width = width;
				canvas.height = height;
				canvas.getContext("2d")?.drawImage(img, 0, 0, width, height);
				canvas.toBlob((blob) => {
					if (blob) {
						const resizedFile = new File([blob], file.name, {
							type: file.type,
							lastModified: Date.now()
						});
						const dataTransfer = new DataTransfer();
						dataTransfer.items.add(resizedFile);
						input.files = dataTransfer.files;
					}
					URL.revokeObjectURL(img.src);
				}, file.type, .85);
			} else URL.revokeObjectURL(img.src);
		}
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
					$$renderer.push(`<div class="flex flex-col gap-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="grid gap-2">`);
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
						required: true,
						get value() {
							return title;
						},
						set value($$value) {
							title = $$value;
							$$settled = false;
						}
					});
					$$renderer.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer, {
						for: "slug",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Slug (URL)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "slug",
						name: "slug",
						value: slug(),
						placeholder: "e.g. aws-certified-solutions-architect",
						readonly: true,
						required: true,
						class: "bg-muted"
					});
					$$renderer.push(`<!----></div></div> <div class="grid gap-2">`);
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
							$$renderer.push(`<!---->Certificate Image (Auto-resize max 1200px)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "thumbnail",
						name: "thumbnail",
						type: "file",
						accept: "image/*",
						onchange: handleFileChange
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
					$$renderer.push(`<!----></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2"><div class="grid gap-2">`);
					Label($$renderer, {
						for: "order",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Display Order`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "order",
						name: "order",
						type: "number",
						value: "0"
					});
					$$renderer.push(`<!----></div> <div class="flex items-center space-x-2 pt-8"><input type="checkbox" id="featured" name="featured" class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"/> `);
					Label($$renderer, {
						for: "featured",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Featured`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></div></div> <div class="text-xs text-muted-foreground pt-2"><p>Leave expiry date empty for lifetime certifications.</p></div></div>`);
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
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-Drly1BkN.js.map