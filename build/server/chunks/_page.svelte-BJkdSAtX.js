import "./root-hPyMpEOi.js";
import { E as attr, I as ensure_array_like, L as escape_html, P as derived, it as stringify } from "./renderer-CoNnoy0x.js";
import "./state.svelte-yQ996O6E.js";
import { i as formatDate, n as calculateReadTime, t as Button } from "./button-Ch6ZWsjV.js";
import { t as Input } from "./input-CkhnL9Hs.js";
import { t as Label } from "./label-CecdpjkD.js";
import { t as Crud_header } from "./crud-header-Crxaf_Fu.js";
import { t as Crud_form_layout } from "./crud-form-layout-BEnoQuye.js";
import { t as Eye } from "./eye-BJ7Jh70h.js";
import { t as Trash_2 } from "./trash-2-C-0YQPwz.js";
import { t as Globe } from "./globe-P75OaRP1.js";
import { t as Lock } from "./lock-DDqt2xEg.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/blog/_id_/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { data } = $$props;
		let isLoading = false;
		let isPublished = derived(() => data.post.published);
		let currentContent = derived(() => data.post.content);
		let currentTitle = derived(() => data.post.title);
		let readTime = derived(() => calculateReadTime(currentContent()));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			{
				let actions = function($$renderer4) {
					Button($$renderer4, {
						variant: "outline",
						href: `/blog/${stringify(data.post.slug)}`,
						target: "_blank",
						class: "gap-2",
						children: ($$renderer5) => {
							Eye($$renderer5, { class: "h-4 w-4" });
							$$renderer5.push(`<!----> View Live`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> <form method="POST" action="?/delete">`);
					Button($$renderer4, {
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
					title: "Edit Post",
					description: "Update your article and manage its visibility.",
					backUrl: "/dashboard/blog",
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
						required: true,
						get value() {
							return currentTitle();
						},
						set value($$value) {
							currentTitle($$value);
							$$settled = false;
						}
					});
					$$renderer4.push(`<!----></div> <div class="grid gap-2"><div class="flex items-center justify-between">`);
					Label($$renderer4, {
						for: "content",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Content (Markdown or HTML)`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> <span class="text-[10px] text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded">${escape_html(readTime())}</span></div> <textarea id="content" name="content" rows="20" placeholder="Write your amazing story here..." required="" class="flex min-h-[500px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono leading-relaxed">`);
					const $$body = escape_html(currentContent());
					if ($$body) $$renderer4.push(`${$$body}`);
					$$renderer4.push(`</textarea></div></div>`);
				}, sidebar = function($$renderer4) {
					$$renderer4.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
					Label($$renderer4, {
						for: "categoryId",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Category`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					$$renderer4.select({
						id: "categoryId",
						name: "categoryId",
						required: true,
						value: data.post.categoryId,
						class: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					}, ($$renderer5) => {
						$$renderer5.push(`<!--[-->`);
						const each_array = ensure_array_like(data.categories);
						for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
							let category = each_array[$$index];
							$$renderer5.option({ value: category.id }, ($$renderer6) => {
								$$renderer6.push(`${escape_html(category.name)}`);
							});
						}
						$$renderer5.push(`<!--]-->`);
					});
					$$renderer4.push(`</div> <div class="grid gap-2">`);
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
						value: data.post.image,
						placeholder: "https://unsplash.com/..."
					});
					$$renderer4.push(`<!----></div> <div class="flex flex-col gap-3 pt-2">`);
					Label($$renderer4, {
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Status`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> <div class="grid grid-cols-2 gap-2"><input type="hidden" name="published"${attr("value", isPublished())}/> `);
					Button($$renderer4, {
						type: "button",
						variant: isPublished() ? "default" : "outline",
						class: "w-full gap-2 transition-all",
						onclick: () => isPublished(true),
						children: ($$renderer5) => {
							Globe($$renderer5, { size: 16 });
							$$renderer5.push(`<!----> Public`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Button($$renderer4, {
						type: "button",
						variant: !isPublished() ? "secondary" : "outline",
						class: "w-full gap-2 transition-all",
						onclick: () => isPublished(false),
						children: ($$renderer5) => {
							Lock($$renderer5, { size: 16 });
							$$renderer5.push(`<!----> Draft`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----></div></div></div> <div class="mt-4 rounded-lg border bg-muted/30 p-4"><h4 class="text-xs font-semibold mb-2 uppercase text-muted-foreground">Post Info</h4> <div class="space-y-1 text-[11px] text-muted-foreground"><p>Slug: <span class="font-mono">${escape_html(data.post.slug)}</span></p> <p>Created: ${escape_html(formatDate(data.post.createdAt))}</p> <p>Last Update: ${escape_html(formatDate(data.post.updatedAt))}</p></div></div>`);
				};
				Crud_form_layout($$renderer3, {
					action: "?/update",
					cancelUrl: "/dashboard/blog",
					submitLabel: "Update Post",
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

//# sourceMappingURL=_page.svelte-BJkdSAtX.js.map