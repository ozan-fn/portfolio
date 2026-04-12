import { T as escape_html } from "./dev-OC6EGoUN.js";
//#region .svelte-kit/adapter-bun/chunks/dashboard-page.js
function Dashboard_page($$renderer, $$props) {
	let { title, description, actions, children } = $$props;
	$$renderer.push(`<div class="w-full flex flex-col"><div class="px-6 py-6 max-w-7xl w-full mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div class="flex flex-col gap-1"><h1 class="text-3xl font-bold tracking-tight">${escape_html(title)}</h1> `);
	if (description) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<p class="text-muted-foreground text-sm italic">${escape_html(description)}</p>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--></div> `);
	if (actions) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="flex items-center gap-2">`);
		actions($$renderer);
		$$renderer.push(`<!----></div>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--></div> <div class="px-6 pb-6 max-w-7xl w-full mx-auto flex flex-col gap-6">`);
	children($$renderer);
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export { Dashboard_page as t };

//# sourceMappingURL=dashboard-page-ClqvGtKv.js.map