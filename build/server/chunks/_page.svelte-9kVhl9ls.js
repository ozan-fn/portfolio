import { t as Button } from "./button-Ch6ZWsjV.js";
import { t as Briefcase } from "./briefcase-DNxe04gO.js";
import { t as File_text } from "./file-text-CZ2BWLJQ.js";
import { t as Tag } from "./tag-Be9bZGa4.js";
import { t as Arrow_up_right } from "./arrow-up-right-CGCCJdUl.js";
import { t as Plus } from "./plus-BompRSaj.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/_page.svelte.js
function _page($$renderer) {
	$$renderer.push(`<div class="p-6 max-w-7xl mx-auto w-full space-y-8"><div class="flex flex-col gap-1"><h1 class="text-3xl font-bold tracking-tight">Dashboard Overview</h1> <p class="text-muted-foreground italic text-sm">Welcome back to your control center.</p></div> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4"><div class="rounded-xl border bg-card p-6 shadow-sm"><div class="flex items-center justify-between space-y-0 pb-2"><h3 class="text-sm font-medium">Total Projects</h3> `);
	Briefcase($$renderer, { class: "h-4 w-4 text-muted-foreground" });
	$$renderer.push(`<!----></div> <div class="flex items-end justify-between"><div class="text-2xl font-bold">12</div> `);
	Button($$renderer, {
		variant: "ghost",
		size: "sm",
		href: "/dashboard/projects",
		class: "h-8 px-2 text-xs",
		children: ($$renderer2) => {
			$$renderer2.push(`<!---->View All `);
			Arrow_up_right($$renderer2, { class: "ml-1 h-3 w-3" });
			$$renderer2.push(`<!---->`);
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
		children: ($$renderer2) => {
			$$renderer2.push(`<!---->View All `);
			Arrow_up_right($$renderer2, { class: "ml-1 h-3 w-3" });
			$$renderer2.push(`<!---->`);
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
		children: ($$renderer2) => {
			$$renderer2.push(`<!---->View All `);
			Arrow_up_right($$renderer2, { class: "ml-1 h-3 w-3" });
			$$renderer2.push(`<!---->`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----></div></div> <div class="rounded-xl border bg-card p-6 shadow-sm"><div class="flex items-center justify-between space-y-0 pb-2"><h3 class="text-sm font-medium">Admin Status</h3> <div class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div></div> <div class="text-2xl font-bold">Active</div> <p class="text-[10px] text-muted-foreground mt-1">Last login: Today</p></div></div> <div class="grid gap-6 md:grid-cols-2"><div class="rounded-xl border bg-card p-6 shadow-sm min-h-[300px] flex flex-col gap-4"><h3 class="font-semibold">Quick Actions</h3> <div class="grid grid-cols-2 gap-4">`);
	Button($$renderer, {
		variant: "outline",
		class: "h-24 flex-col gap-2",
		href: "/dashboard/projects/new",
		children: ($$renderer2) => {
			Plus($$renderer2, { size: 20 });
			$$renderer2.push(`<!----> <span>New Project</span>`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	Button($$renderer, {
		variant: "outline",
		class: "h-24 flex-col gap-2",
		href: "/dashboard/blog/new",
		children: ($$renderer2) => {
			Plus($$renderer2, { size: 20 });
			$$renderer2.push(`<!----> <span>New Article</span>`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----></div></div> <div class="rounded-xl border bg-card p-6 shadow-sm min-h-[300px]"><h3 class="font-semibold mb-4">System Status</h3> <div class="space-y-4"><div class="flex items-center justify-between text-sm border-b pb-2"><span class="text-muted-foreground">Framework</span> <span class="font-medium">SvelteKit 2 / Svelte 5</span></div> <div class="flex items-center justify-between text-sm border-b pb-2"><span class="text-muted-foreground">Database</span> <span class="font-medium text-emerald-600">Connected (Neon/Prisma)</span></div> <div class="flex items-center justify-between text-sm border-b pb-2"><span class="text-muted-foreground">Auth</span> <span class="font-medium">Better-Auth</span></div></div></div></div></div>`);
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-9kVhl9ls.js.map