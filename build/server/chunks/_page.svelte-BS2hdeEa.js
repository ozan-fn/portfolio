import { C as ensure_array_like, L as head, T as escape_html, c as attr } from "./dev-OC6EGoUN.js";
import { t as Button } from "./button-BAli88Z_.js";
import { t as Badge } from "./badge-ysT7GMMH.js";
import { t as Calendar } from "./calendar-BSMbf7m-.js";
import { t as External_link } from "./external-link-Du5Lwh_5.js";
import { t as Chevron_left } from "./chevron-left-CzWk9mrJ.js";
import { t as Code } from "./code-BOPTs87B.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/projects/_id_/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const getStatusColor = (status) => {
			switch (status) {
				case "COMPLETED": return "default";
				case "IN_PROGRESS": return "secondary";
				case "ARCHIVED": return "outline";
				default: return "default";
			}
		};
		head("hh65jm", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(data.project.title)} | Portfolio</title>`);
			});
			$$renderer.push(`<meta name="description"${attr("content", data.project.description)}/>`);
		});
		$$renderer.push(`<article class="container max-w-4xl py-10"><div class="mb-8">`);
		Button($$renderer, {
			variant: "ghost",
			href: "/projects",
			class: "mb-6 -ml-2 text-muted-foreground",
			children: ($$renderer) => {
				Chevron_left($$renderer, { class: "mr-2 h-4 w-4" });
				$$renderer.push(`<!----> Back to projects`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div class="space-y-2"><div class="flex items-center gap-2">`);
		Badge($$renderer, {
			variant: getStatusColor(data.project.status),
			children: ($$renderer) => {
				$$renderer.push(`<!---->${escape_html(data.project.status.replace("_", " "))}`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> <div class="flex items-center text-sm text-muted-foreground">`);
		Calendar($$renderer, { class: "mr-1 h-3 w-3" });
		$$renderer.push(`<!----> ${escape_html(new Date(data.project.createdAt).toLocaleDateString("en-US", {
			month: "long",
			year: "numeric"
		}))}</div></div> <h1 class="text-4xl font-bold tracking-tight md:text-5xl">${escape_html(data.project.title)}</h1> <p class="text-xl text-muted-foreground">${escape_html(data.project.description)}</p></div> <div class="flex gap-3">`);
		if (data.project.githubUrl) {
			$$renderer.push("<!--[0-->");
			Button($$renderer, {
				variant: "outline",
				href: data.project.githubUrl,
				target: "_blank",
				rel: "noreferrer",
				children: ($$renderer) => {
					Code($$renderer, { class: "mr-2 h-4 w-4" });
					$$renderer.push(`<!----> Source Code`);
				},
				$$slots: { default: true }
			});
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (data.project.demoUrl) {
			$$renderer.push("<!--[0-->");
			Button($$renderer, {
				href: data.project.demoUrl,
				target: "_blank",
				rel: "noreferrer",
				children: ($$renderer) => {
					External_link($$renderer, { class: "mr-2 h-4 w-4" });
					$$renderer.push(`<!----> Live Demo`);
				},
				$$slots: { default: true }
			});
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></div></div> `);
		if (data.project.thumbnail) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="mb-12 overflow-hidden rounded-xl border bg-muted shadow-sm"><img${attr("src", data.project.thumbnail)}${attr("alt", data.project.title)} class="aspect-video w-full object-cover"/></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="grid gap-12 md:grid-cols-[1fr_250px]"><div class="prose prose-zinc dark:prose-invert max-w-none">`);
		if (data.project.content) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="whitespace-pre-wrap">${escape_html(data.project.content)}</div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<p class="text-muted-foreground italic">No detailed content provided for this project.</p>`);
		}
		$$renderer.push(`<!--]--></div> <aside class="space-y-8"><div class="space-y-3"><h3 class="font-semibold uppercase tracking-wider text-muted-foreground text-xs">Technologies</h3> <div class="flex flex-wrap gap-2"><!--[-->`);
		const each_array = ensure_array_like(data.project.techStack);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let tech = each_array[$$index];
			Badge($$renderer, {
				variant: "secondary",
				children: ($$renderer) => {
					$$renderer.push(`<!---->${escape_html(tech)}`);
				},
				$$slots: { default: true }
			});
		}
		$$renderer.push(`<!--]--></div></div> <div class="rounded-lg border bg-card p-4 text-card-foreground"><h3 class="mb-2 font-medium">Interested in this?</h3> <p class="mb-4 text-sm text-muted-foreground">Feel free to check the source code or reach out if you have any questions.</p> `);
		Button($$renderer, {
			variant: "outline",
			class: "w-full",
			href: "/contact",
			children: ($$renderer) => {
				$$renderer.push(`<!---->Contact Me`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></aside></div></article>`);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-BS2hdeEa.js.map