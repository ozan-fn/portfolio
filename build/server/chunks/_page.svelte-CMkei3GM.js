import { C as ensure_array_like, T as escape_html, c as attr, h as clsx$1, l as attr_class, pt as stringify, x as derived } from "./dev-D04rZKKe.js";
import "./navigation-CzjKizXc.js";
import { a as formatDate, r as calculateReadTime, t as Button } from "./button-DA4j647p.js";
import { n as badgeVariants } from "./badge-cwPhXDyp.js";
import { t as X } from "./x-Dvgn6q8c.js";
import { t as Input } from "./input-DFCl4JL5.js";
import { t as Search } from "./search-DRtdeO--.js";
import { t as getFileUrl } from "./storage.client-BxgykJF5.js";
import { t as Label } from "./label-CGw7bmi2.js";
import { t as Plus } from "./plus-BExZv4GK.js";
import { t as Eye } from "./eye-CK8RaQHE.js";
import { t as Trash_2 } from "./trash-2-DAdCz1J1.js";
import { t as Globe } from "./globe-anevZEn1.js";
import { t as Lock } from "./lock-2ekMpjzO.js";
import "./forms-CxrA1JPp.js";
import { t as Crud_header } from "./crud-header-fXwgJuKI.js";
import { t as Crud_form_layout } from "./crud-form-layout-D0RYgH0a.js";
import { t as Image$1 } from "./image-BHFg5Mc4.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/blog/_id_/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		let post = derived(() => data.post);
		let isLoading = false;
		let isPublished = false;
		let title = "";
		let currentContent = "";
		let selectedCategoryId = null;
		let categorySearch = "";
		let showCategoryDropdown = false;
		let isCreatingCategory = false;
		let filteredCategories = derived(() => data.categories.filter((c) => c.name.toLowerCase().includes(categorySearch.toLowerCase().trim())));
		let tagInput = "";
		let tags = [];
		let slug = derived(() => title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, ""));
		let readTime = derived(() => calculateReadTime(currentContent));
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
					Button($$renderer, {
						variant: "outline",
						href: `/blog/${stringify(data.post.slug)}`,
						target: "_blank",
						class: "gap-2",
						children: ($$renderer) => {
							Eye($$renderer, { class: "h-4 w-4" });
							$$renderer.push(`<!----> View Live`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <form method="POST" action="?/delete">`);
					Button($$renderer, {
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
					title: "Edit Post",
					description: "Update your article and manage its visibility.",
					backUrl: "/dashboard/blog",
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
					$$renderer.push(`<!----> <div class="flex items-center gap-2 mt-1">`);
					if (post().image) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<div class="flex h-12 w-16 items-center justify-center rounded border overflow-hidden"><img${attr("src", getFileUrl(post().image))} alt="Thumbnail" class="h-full w-full object-cover"/></div>`);
					} else {
						$$renderer.push("<!--[-1-->");
						$$renderer.push(`<div class="flex h-12 w-16 items-center justify-center rounded border bg-muted/50 text-muted-foreground">`);
						Image$1($$renderer, { class: "h-5 w-5 opacity-40" });
						$$renderer.push(`<!----></div>`);
					}
					$$renderer.push(`<!--]--> <p class="text-[10px] text-muted-foreground italic">${escape_html(post().image ? "Click to change image" : "No image uploaded")}</p></div></div> <div class="grid gap-2"><div class="flex items-center justify-between">`);
					Label($$renderer, {
						for: "content",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Content (Markdown or HTML)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <span class="text-[10px] text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded">${escape_html(readTime())}</span></div> <textarea id="content" name="content" rows="20" placeholder="Write your amazing story here..." required="" class="flex min-h-[500px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono leading-relaxed">`);
					const $$body = escape_html(currentContent);
					if ($$body) $$renderer.push(`${$$body}`);
					$$renderer.push(`</textarea></div> <div class="grid gap-2 pt-2 border-t mt-2">`);
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
					$$renderer.push(`<div class="flex flex-col gap-4"><div class="space-y-4"><div class="grid gap-2 relative">`);
					Label($$renderer, {
						for: "categoryId",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Category`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <input type="hidden" name="categoryId"${attr("value", selectedCategoryId)} required=""/> <div class="flex items-center gap-2">`);
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<div class="relative w-full">`);
					Search($$renderer, {
						class: "absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground",
						size: 14
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						placeholder: "Search or create category...",
						onfocus: () => showCategoryDropdown = true,
						class: "pl-8",
						get value() {
							return categorySearch;
						},
						set value($$value) {
							categorySearch = $$value;
							$$settled = false;
						}
					});
					$$renderer.push(`<!----></div>`);
					$$renderer.push(`<!--]--></div> `);
					if (showCategoryDropdown && true) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<div class="absolute top-[calc(100%+4px)] left-0 w-full z-50 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in fade-in-0 zoom-in-95 max-h-[200px] overflow-auto p-1"><!--[-->`);
						const each_array_1 = ensure_array_like(filteredCategories());
						for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
							let category = each_array_1[$$index_1];
							$$renderer.push(`<button type="button" class="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground transition-colors text-left">${escape_html(category.name)}</button>`);
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
						$$renderer.push(`<!--]--> `);
						if (filteredCategories().length === 0 && categorySearch.trim().length === 0) {
							$$renderer.push("<!--[0-->");
							$$renderer.push(`<div class="p-2 text-xs italic text-muted-foreground">Type to search or create...</div>`);
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]--></div> <button type="button" class="fixed inset-0 z-40 bg-transparent" aria-label="Close dropdown"></button>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div> <div class="flex items-center space-x-2 pt-2"><input type="checkbox" id="featured" name="featured"${attr("checked", post().featured, true)} class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"/> `);
					Label($$renderer, {
						for: "featured",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Featured Post`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></div></div> <div class="flex flex-col gap-3 pt-2 pt-2 border-t mt-2">`);
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
					$$renderer.push(`<!----></div></div></div> <div class="mt-4 rounded-lg border bg-muted/30 p-4"><h4 class="text-xs font-semibold mb-2 uppercase text-muted-foreground">Post Info</h4> <div class="space-y-1 text-[11px] text-muted-foreground"><p>Slug: <span class="font-mono">${escape_html(data.post.slug)}</span></p> <p>Created: ${escape_html(formatDate(data.post.createdAt))}</p> <p>Last Update: ${escape_html(formatDate(data.post.updatedAt))}</p></div></div>`);
				}
				Crud_form_layout($$renderer, {
					action: "?/update",
					cancelUrl: "/dashboard/blog",
					submitLabel: "Update Post",
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

//# sourceMappingURL=_page.svelte-CMkei3GM.js.map