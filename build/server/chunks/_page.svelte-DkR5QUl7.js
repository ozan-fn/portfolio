import { T as escape_html, c as attr, x as derived } from "./dev-D04rZKKe.js";
import { t as Button } from "./button-DA4j647p.js";
import { t as getFileUrl } from "./storage.client-DuiLhuWL.js";
import { t as Input } from "./input-D59IkaTZ.js";
import { t as Label } from "./label-CGw7bmi2.js";
import { t as Trash_2 } from "./trash-2-DAdCz1J1.js";
import "./forms-CAPPyD24.js";
import { t as Crud_header } from "./crud-header-fXwgJuKI.js";
import { t as Crud_form_layout } from "./crud-form-layout-BaJ00bOq.js";
import { t as Image$1 } from "./image-BHFg5Mc4.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/_id_/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		let certificate = derived(() => data.certificate);
		let isLoading = false;
		let title = "";
		let slug = derived(() => title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, ""));
		const formatDateForInput = (date) => {
			if (!date) return "";
			const d = new Date(date);
			const month = String(d.getMonth() + 1).padStart(2, "0");
			const day = String(d.getDate()).padStart(2, "0");
			return `${d.getFullYear()}-${month}-${day}`;
		};
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
					$$renderer.push(`<!----> <div class="flex items-center gap-2 mt-1">`);
					if (certificate().thumbnail) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<div class="flex h-12 w-16 items-center justify-center rounded border overflow-hidden"><img${attr("src", getFileUrl(certificate().thumbnail))} alt="Thumbnail" class="h-full w-full object-cover"/></div>`);
					} else {
						$$renderer.push("<!--[-1-->");
						$$renderer.push(`<div class="flex h-12 w-16 items-center justify-center rounded border bg-muted/50 text-muted-foreground">`);
						Image$1($$renderer, { class: "h-5 w-5 opacity-40" });
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
						value: certificate().order
					});
					$$renderer.push(`<!----></div> <div class="flex items-center space-x-2 pt-8"><input type="checkbox" id="featured" name="featured"${attr("checked", certificate().featured, true)} class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"/> `);
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

//# sourceMappingURL=_page.svelte-DkR5QUl7.js.map