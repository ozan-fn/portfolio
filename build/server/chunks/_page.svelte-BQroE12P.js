import { E as attr, I as ensure_array_like, L as escape_html } from "./index2-v1oxlg_d.js";
import { t as Button } from "./button-Bb0vadXY.js";
import { t as Input } from "./input-VkuySYpz.js";
import { t as Label } from "./label-BP7Pf62d.js";
import { t as Crud_header } from "./crud-header-Czuq7x49.js";
import { t as Crud_form_layout } from "./crud-form-layout-BdHhLUxn.js";
import { t as Globe } from "./globe-TWPvIAQc.js";
import { t as Lock } from "./lock-CGIoNRlw.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/blog/new/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { data } = $$props;
		let isLoading = false;
		let isPublished = false;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			Crud_header($$renderer3, {
				title: "New Blog Post",
				description: "Share your thoughts and knowledge with the world.",
				backUrl: "/dashboard/blog"
			});
			$$renderer3.push(`<!----> `);
			{
				let main = function($$renderer4) {
					$$renderer4.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
					Label($$renderer4, {
						for: "title",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Post Title`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
						id: "title",
						name: "title",
						placeholder: "e.g. Mastering Svelte 5 Runes",
						class: "text-lg font-medium",
						required: true
					});
					$$renderer4.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer4, {
						for: "content",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Content (Markdown or HTML)`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> <textarea id="content" name="content" rows="20" placeholder="Write your amazing story here..." required="" class="flex min-h-[400px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono leading-relaxed"></textarea></div></div>`);
				}, sidebar = function($$renderer4) {
					$$renderer4.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
					Label($$renderer4, {
						for: "categoryId",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Category`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> <select id="categoryId" name="categoryId" required="" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">`);
					$$renderer4.option({
						value: "",
						disabled: true,
						selected: true
					}, ($$renderer5) => {
						$$renderer5.push(`Select category`);
					});
					$$renderer4.push(`<!--[-->`);
					const each_array = ensure_array_like(data.categories);
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let category = each_array[$$index];
						$$renderer4.option({ value: category.id }, ($$renderer5) => {
							$$renderer5.push(`${escape_html(category.name)}`);
						});
					}
					$$renderer4.push(`<!--]--></select></div> <div class="grid gap-2">`);
					Label($$renderer4, {
						for: "image",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Featured Image URL`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
						id: "image",
						name: "image",
						placeholder: "https://unsplash.com/..."
					});
					$$renderer4.push(`<!----></div> <div class="flex flex-col gap-3 pt-2">`);
					Label($$renderer4, {
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Status`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> <div class="grid grid-cols-2 gap-2"><input type="hidden" name="published"${attr("value", isPublished)}/> `);
					Button($$renderer4, {
						type: "button",
						variant: isPublished ? "default" : "outline",
						class: "w-full gap-2 transition-all",
						onclick: () => isPublished = true,
						children: ($$renderer5) => {
							Globe($$renderer5, { size: 16 });
							$$renderer5.push(`<!----> Public`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Button($$renderer4, {
						type: "button",
						variant: !isPublished ? "secondary" : "outline",
						class: "w-full gap-2 transition-all",
						onclick: () => isPublished = false,
						children: ($$renderer5) => {
							Lock($$renderer5, { size: 16 });
							$$renderer5.push(`<!----> Draft`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----></div> <p class="text-[11px] text-muted-foreground italic">${escape_html(isPublished ? "This post will be visible to everyone immediately." : "This post will be saved as a private draft.")}</p></div></div> <div class="mt-4 rounded-lg border bg-muted/30 p-4"><h4 class="text-xs font-semibold mb-2 uppercase text-muted-foreground">Writing Tips</h4> <ul class="text-xs space-y-2 text-muted-foreground"><li>• Use meaningful headings for better SEO.</li> <li>• Excerpts and read time are calculated automatically.</li></ul></div>`);
				};
				Crud_form_layout($$renderer3, {
					cancelUrl: "/dashboard/blog",
					submitLabel: isPublished ? "Publish Post" : "Save Draft",
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

//# sourceMappingURL=_page.svelte-BQroE12P.js.map