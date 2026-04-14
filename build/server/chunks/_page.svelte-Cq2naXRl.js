import { C as ensure_array_like, T as escape_html, c as attr, h as clsx$1, l as attr_class, x as derived } from "./dev-D04rZKKe.js";
import "./navigation-mCVhDtlX.js";
import { t as Button } from "./button-DA4j647p.js";
import { n as badgeVariants } from "./badge-cwPhXDyp.js";
import { t as X } from "./x-Dvgn6q8c.js";
import { t as Input } from "./input-D59IkaTZ.js";
import { t as Label } from "./label-CGw7bmi2.js";
import { t as Plus } from "./plus-BExZv4GK.js";
import { t as Globe } from "./globe-anevZEn1.js";
import { t as Lock } from "./lock-2ekMpjzO.js";
import { t as Crud_header } from "./crud-header-fXwgJuKI.js";
import { t as Crud_form_layout } from "./crud-form-layout-BaJ00bOq.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/blog/new/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		let isLoading = false;
		let isCreatingCategory = false;
		let isPublished = false;
		let title = "";
		let categorySearch = "";
		let selectedCategoryId = "";
		let showCategoryDropdown = false;
		const filteredCategories = derived(() => data.categories.filter((c) => c.name.toLowerCase().includes(categorySearch.toLowerCase())));
		let tagInput = "";
		let tags = [];
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
				title: "New Blog Post",
				description: "Share your thoughts and knowledge with the world.",
				backUrl: "/dashboard/blog"
			});
			$$renderer.push(`<!----> `);
			{
				function main($$renderer) {
					$$renderer.push(`<div class="flex flex-col gap-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="grid gap-2">`);
					Label($$renderer, {
						for: "title",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Post Title`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "title",
						name: "title",
						placeholder: "e.g. Mastering Svelte 5 Runes",
						class: "text-lg font-medium",
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
						placeholder: "e.g. mastering-svelte-5-runes",
						readonly: true,
						required: true,
						class: "bg-muted"
					});
					$$renderer.push(`<!----></div></div> <div class="grid gap-2 pt-2 border-t mt-2">`);
					Label($$renderer, {
						for: "image",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Post Image (Auto-resize max 1200px)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "image",
						name: "image",
						type: "file",
						accept: "image/*",
						onchange: handleFileChange
					});
					$$renderer.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer, {
						for: "content",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Content (Markdown or HTML)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <textarea id="content" name="content" rows="20" placeholder="Write your amazing story here..." required="" class="flex min-h-[400px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono leading-relaxed"></textarea></div> <div class="grid gap-2 pt-2 border-t mt-2">`);
					Label($$renderer, {
						for: "tags",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Tags (Space or Enter to add)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <div class="flex flex-wrap gap-2 p-2 rounded-md border bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ring-offset-background transition-shadow"><!--[-->`);
					const each_array = ensure_array_like(tags);
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let tag = each_array[$$index];
						$$renderer.push(`<span${attr_class(clsx$1(badgeVariants({ variant: "secondary" })))}>${escape_html(tag)} <button type="button" class="ml-1 rounded-full hover:bg-muted p-0.5 outline-none">`);
						X($$renderer, { size: 10 });
						$$renderer.push(`<!----></button></span>`);
					}
					$$renderer.push(`<!--]--> <input id="tags-input" type="text"${attr("value", tagInput)}${attr("placeholder", tags.length === 0 ? "e.g. sveltekit webdev typescript" : "")} class="flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground"/></div> <input type="hidden" name="tags"${attr("value", tags.join(","))}/> <p class="text-[10px] text-muted-foreground italic">You can also paste a list of tags separated by spaces or commas.</p></div></div>`);
				}
				function sidebar($$renderer) {
					$$renderer.push(`<div class="flex flex-col gap-4"><div class="grid gap-2 relative">`);
					Label($$renderer, {
						for: "categoryId",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Category`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <div class="relative">`);
					Input($$renderer, {
						type: "text",
						placeholder: "Search category...",
						onfocus: () => showCategoryDropdown = true,
						autocomplete: "off",
						class: "pr-10",
						get value() {
							return categorySearch;
						},
						set value($$value) {
							categorySearch = $$value;
							$$settled = false;
						}
					});
					$$renderer.push(`<!----> <input type="hidden" name="categoryId"${attr("value", selectedCategoryId)} required=""/> `);
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div> `);
					if (showCategoryDropdown && filteredCategories().length > 0) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<div class="absolute top-[calc(100%+4px)] left-0 w-full z-50 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95 max-h-[200px] overflow-auto p-1"><!--[-->`);
						const each_array_1 = ensure_array_like(filteredCategories());
						for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
							let category = each_array_1[$$index_1];
							$$renderer.push(`<button type="button" class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors text-left">${escape_html(category.name)}</button>`);
						}
						$$renderer.push(`<!--]--> `);
						if (!data.categories.some((c) => c.name.toLowerCase() === categorySearch.toLowerCase().trim()) && categorySearch.trim().length > 0) {
							$$renderer.push("<!--[0-->");
							$$renderer.push(`<div class="border-t mt-1 pt-1"><button type="button" class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-emerald-500/10 text-emerald-600 font-medium transition-colors text-left gap-2"${attr("disabled", isCreatingCategory, true)}>`);
							$$renderer.push("<!--[-1-->");
							Plus($$renderer, { size: 14 });
							$$renderer.push(`<!----> Create "${escape_html(categorySearch)}"`);
							$$renderer.push(`<!--]--></button></div>`);
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]--></div>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--> `);
					if (showCategoryDropdown && filteredCategories().length === 0) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<div class="absolute top-[calc(100%+4px)] left-0 w-full z-50 rounded-md border bg-popover text-popover-foreground shadow-md p-1 text-sm text-muted-foreground animate-in fade-in-0 zoom-in-95"><div class="p-2 text-xs italic">No category found.</div> <div class="border-t pt-1"><button type="button" class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-emerald-500/10 text-emerald-600 font-medium transition-colors text-left gap-2"${attr("disabled", isCreatingCategory, true)}>`);
						$$renderer.push("<!--[-1-->");
						Plus($$renderer, { size: 14 });
						$$renderer.push(`<!----> Create "${escape_html(categorySearch)}"`);
						$$renderer.push(`<!--]--></button></div></div>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--> `);
					if (showCategoryDropdown) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<button type="button" class="fixed inset-0 z-40 bg-transparent" aria-label="Close category selection"></button>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div> <div class="flex items-center space-x-2 pt-2"><input type="checkbox" id="featured" name="featured" class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"/> `);
					Label($$renderer, {
						for: "featured",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Featured Post`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></div> <div class="flex flex-col gap-3 pt-2 pt-2 border-t mt-2">`);
					Label($$renderer, {
						children: ($$renderer) => {
							$$renderer.push(`<!---->Status`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <div class="grid grid-cols-2 gap-2"><input type="hidden" name="published"${attr("value", isPublished)}/> `);
					Button($$renderer, {
						type: "button",
						variant: isPublished ? "default" : "outline",
						class: "w-full gap-2 transition-all",
						onclick: () => isPublished = true,
						children: ($$renderer) => {
							Globe($$renderer, { size: 16 });
							$$renderer.push(`<!----> Public`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Button($$renderer, {
						type: "button",
						variant: !isPublished ? "secondary" : "outline",
						class: "w-full gap-2 transition-all",
						onclick: () => isPublished = false,
						children: ($$renderer) => {
							Lock($$renderer, { size: 16 });
							$$renderer.push(`<!----> Draft`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></div> <p class="text-[11px] text-muted-foreground italic">${escape_html(isPublished ? "This post will be visible to everyone immediately." : "This post will be saved as a private draft.")}</p></div></div> <div class="mt-4 rounded-lg border bg-muted/30 p-4"><h4 class="text-xs font-semibold mb-2 uppercase text-muted-foreground">Writing Tips</h4> <ul class="text-xs space-y-2 text-muted-foreground"><li>• Use meaningful headings for better SEO.</li> <li>• Excerpts and read time are calculated automatically.</li></ul></div>`);
				}
				Crud_form_layout($$renderer, {
					cancelUrl: "/dashboard/blog",
					submitLabel: isPublished ? "Publish Post" : "Save Draft",
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

//# sourceMappingURL=_page.svelte-Cq2naXRl.js.map