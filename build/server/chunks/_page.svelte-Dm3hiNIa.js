import { C as ensure_array_like, T as escape_html, c as attr } from "./dev-OC6EGoUN.js";
import { t as Button } from "./button-BAli88Z_.js";
import { t as Input } from "./input-B4jit4xQ.js";
import { t as Label } from "./label-DnM6-HFi.js";
import { t as Globe } from "./globe-C_R1u8gS.js";
import { t as Lock } from "./lock-CHnb4DUe.js";
import { t as Crud_header } from "./crud-header-5rxnVVzC.js";
import { t as Crud_form_layout } from "./crud-form-layout-DnsivRU_.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/blog/new/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		let isLoading = false;
		let isPublished = false;
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
					$$renderer.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
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
						required: true
					});
					$$renderer.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer, {
						for: "content",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Content (Markdown or HTML)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <textarea id="content" name="content" rows="20" placeholder="Write your amazing story here..." required="" class="flex min-h-[400px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono leading-relaxed"></textarea></div></div>`);
				}
				function sidebar($$renderer) {
					$$renderer.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
					Label($$renderer, {
						for: "categoryId",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Category`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <select id="categoryId" name="categoryId" required="" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">`);
					$$renderer.option({
						value: "",
						disabled: true,
						selected: true
					}, ($$renderer) => {
						$$renderer.push(`Select category`);
					});
					$$renderer.push(`<!--[-->`);
					const each_array = ensure_array_like(data.categories);
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let category = each_array[$$index];
						$$renderer.option({ value: category.id }, ($$renderer) => {
							$$renderer.push(`${escape_html(category.name)}`);
						});
					}
					$$renderer.push(`<!--]--></select></div> <div class="grid gap-2">`);
					Label($$renderer, {
						for: "image",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Featured Image URL`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "image",
						name: "image",
						placeholder: "https://unsplash.com/..."
					});
					$$renderer.push(`<!----></div> <div class="flex flex-col gap-3 pt-2">`);
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

//# sourceMappingURL=_page.svelte-Dm3hiNIa.js.map