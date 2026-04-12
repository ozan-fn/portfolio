import "./dev-OC6EGoUN.js";
import { t as Button } from "./button-BAli88Z_.js";
import { t as Briefcase } from "./briefcase-BjPDROv_.js";
import { t as File_text } from "./file-text-D8UzrVZE.js";
import { t as Tag } from "./tag-BSVg2f2Y.js";
import { t as Arrow_up_right } from "./arrow-up-right-DzCfWaAE.js";
import { t as Dashboard_page } from "./dashboard-page-ClqvGtKv.js";
import { t as Plus } from "./plus-BBCnpi5x.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/_page.svelte.js
function _page($$renderer) {
	{
		function children($$renderer) {
			$$renderer.push(`<div class="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-4"><div class="rounded-xl border bg-card p-6 shadow-sm"><div class="flex items-center justify-between space-y-0 pb-2"><h3 class="text-sm font-medium">Total Projects</h3> `);
			Briefcase($$renderer, { class: "h-4 w-4 text-muted-foreground" });
			$$renderer.push(`<!----></div> <div class="flex items-end justify-between"><div class="text-2xl font-bold">12</div> `);
			Button($$renderer, {
				variant: "ghost",
				size: "sm",
				href: "/dashboard/projects",
				class: "h-8 px-2 text-xs",
				children: ($$renderer) => {
					$$renderer.push(`<!---->View All `);
					Arrow_up_right($$renderer, { class: "ml-1 h-3 w-3" });
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></div> <div class="rounded-xl border bg-card p-6 shadow-sm"><div class="flex items-center justify-between space-y-0 pb-2"><h3 class="text-sm font-medium">Blog Posts</h3> `);
			File_text($$renderer, { class: "h-4 w-4 text-muted-foreground" });
			$$renderer.push(`<!----></div> <div class="flex items-end justify-between"><div class="text-2xl font-bold">24</div> `);
			Button($$renderer, {
				variant: "ghost",
				size: "sm",
				href: "/dashboard/blog",
				class: "h-8 px-2 text-xs",
				children: ($$renderer) => {
					$$renderer.push(`<!---->View All `);
					Arrow_up_right($$renderer, { class: "ml-1 h-3 w-3" });
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></div> <div class="rounded-xl border bg-card p-6 shadow-sm"><div class="flex items-center justify-between space-y-0 pb-2"><h3 class="text-sm font-medium">Categories</h3> `);
			Tag($$renderer, { class: "h-4 w-4 text-muted-foreground" });
			$$renderer.push(`<!----></div> <div class="flex items-end justify-between"><div class="text-2xl font-bold">8</div> `);
			Button($$renderer, {
				variant: "ghost",
				size: "sm",
				href: "/dashboard/categories",
				class: "h-8 px-2 text-xs",
				children: ($$renderer) => {
					$$renderer.push(`<!---->View All `);
					Arrow_up_right($$renderer, { class: "ml-1 h-3 w-3" });
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></div> <div class="rounded-xl border bg-card p-6 shadow-sm"><div class="flex items-center justify-between space-y-0 pb-2"><h3 class="text-sm font-medium">Admin Status</h3> <div class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div></div> <div class="text-2xl font-bold">Active</div> <p class="text-[10px] text-muted-foreground mt-1">Last login: Today</p></div></div> <div class="w-full grid gap-6 md:grid-cols-2"><div class="rounded-xl border bg-card p-6 shadow-sm min-h-[300px] flex flex-col gap-4"><h3 class="font-semibold">Quick Actions</h3> <div class="grid grid-cols-2 gap-4">`);
			Button($$renderer, {
				variant: "outline",
				class: "h-24 flex-col gap-2",
				href: "/dashboard/projects/new",
				children: ($$renderer) => {
					Plus($$renderer, { size: 20 });
					$$renderer.push(`<!----> <span>New Project</span>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Button($$renderer, {
				variant: "outline",
				class: "h-24 flex-col gap-2",
				href: "/dashboard/blog/new",
				children: ($$renderer) => {
					Plus($$renderer, { size: 20 });
					$$renderer.push(`<!----> <span>New Article</span>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></div> <div class="rounded-xl border bg-card p-6 shadow-sm min-h-[300px]"><h3 class="font-semibold mb-4">System Status</h3> <div class="space-y-4"><div class="flex items-center justify-between text-sm border-b pb-2"><span class="text-muted-foreground">Framework</span> <span class="font-medium">SvelteKit 2 / Svelte 5</span></div> <div class="flex items-center justify-between text-sm border-b pb-2"><span class="text-muted-foreground">Database</span> <span class="font-medium text-emerald-600">Connected (Neon/Prisma)</span></div> <div class="flex items-center justify-between text-sm border-b pb-2"><span class="text-muted-foreground">Auth</span> <span class="font-medium">Better-Auth</span></div></div></div></div>`);
		}
		Dashboard_page($$renderer, {
			title: "Dashboard Overview",
			description: "Welcome back to your control center.",
			children,
			$$slots: { default: true }
		});
	}
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-uGW0lNYS.js.map