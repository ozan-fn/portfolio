import { E as attr, I as ensure_array_like, L as escape_html, U as head } from "./renderer-CoNnoy0x.js";
import { t as Button } from "./button-JWKRuBhr.js";
import { t as Badge } from "./badge-BhT1H9Q3.js";
import { t as Calendar } from "./calendar-DbIoV4cg.js";
import { t as Chevron_left } from "./chevron-left-agRAC5zI.js";
import { t as Code } from "./code-DDombfk5.js";
import { t as External_link } from "./external-link-DOMXW-bn.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/projects/_id_/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { data } = $$props;
		const getStatusColor = (status) => {
			switch (status) {
				case "COMPLETED": return "default";
				case "IN_PROGRESS": return "secondary";
				case "ARCHIVED": return "outline";
				default: return "default";
			}
		};
		head("hh65jm", $$renderer2, ($$renderer3) => {
			$$renderer3.title(($$renderer4) => {
				$$renderer4.push(`<title>${escape_html(data.project.title)} | Portfolio</title>`);
			});
			$$renderer3.push(`<meta name="description"${attr("content", data.project.description)}/>`);
		});
		$$renderer2.push(`<article class="container max-w-4xl py-10"><div class="mb-8">`);
		Button($$renderer2, {
			variant: "ghost",
			href: "/projects",
			class: "mb-6 -ml-2 text-muted-foreground",
			children: ($$renderer3) => {
				Chevron_left($$renderer3, { class: "mr-2 h-4 w-4" });
				$$renderer3.push(`<!----> Back to projects`);
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----> <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div class="space-y-2"><div class="flex items-center gap-2">`);
		Badge($$renderer2, {
			variant: getStatusColor(data.project.status),
			children: ($$renderer3) => {
				$$renderer3.push(`<!---->${escape_html(data.project.status.replace("_", " "))}`);
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----> <div class="flex items-center text-sm text-muted-foreground">`);
		Calendar($$renderer2, { class: "mr-1 h-3 w-3" });
		$$renderer2.push(`<!----> ${escape_html(new Date(data.project.createdAt).toLocaleDateString("en-US", {
			month: "long",
			year: "numeric"
		}))}</div></div> <h1 class="text-4xl font-bold tracking-tight md:text-5xl">${escape_html(data.project.title)}</h1> <p class="text-xl text-muted-foreground">${escape_html(data.project.description)}</p></div> <div class="flex gap-3">`);
		if (data.project.githubUrl) {
			$$renderer2.push("<!--[0-->");
			Button($$renderer2, {
				variant: "outline",
				href: data.project.githubUrl,
				target: "_blank",
				rel: "noreferrer",
				children: ($$renderer3) => {
					Code($$renderer3, { class: "mr-2 h-4 w-4" });
					$$renderer3.push(`<!----> Source Code`);
				},
				$$slots: { default: true }
			});
		} else $$renderer2.push("<!--[-1-->");
		$$renderer2.push(`<!--]--> `);
		if (data.project.demoUrl) {
			$$renderer2.push("<!--[0-->");
			Button($$renderer2, {
				href: data.project.demoUrl,
				target: "_blank",
				rel: "noreferrer",
				children: ($$renderer3) => {
					External_link($$renderer3, { class: "mr-2 h-4 w-4" });
					$$renderer3.push(`<!----> Live Demo`);
				},
				$$slots: { default: true }
			});
		} else $$renderer2.push("<!--[-1-->");
		$$renderer2.push(`<!--]--></div></div></div> `);
		if (data.project.thumbnail) {
			$$renderer2.push("<!--[0-->");
			$$renderer2.push(`<div class="mb-12 overflow-hidden rounded-xl border bg-muted shadow-sm"><img${attr("src", data.project.thumbnail)}${attr("alt", data.project.title)} class="aspect-video w-full object-cover"/></div>`);
		} else $$renderer2.push("<!--[-1-->");
		$$renderer2.push(`<!--]--> <div class="grid gap-12 md:grid-cols-[1fr_250px]"><div class="prose prose-zinc dark:prose-invert max-w-none">`);
		if (data.project.content) {
			$$renderer2.push("<!--[0-->");
			$$renderer2.push(`<div class="whitespace-pre-wrap">${escape_html(data.project.content)}</div>`);
		} else {
			$$renderer2.push("<!--[-1-->");
			$$renderer2.push(`<p class="text-muted-foreground italic">No detailed content provided for this project.</p>`);
		}
		$$renderer2.push(`<!--]--></div> <aside class="space-y-8"><div class="space-y-3"><h3 class="font-semibold uppercase tracking-wider text-muted-foreground text-xs">Technologies</h3> <div class="flex flex-wrap gap-2"><!--[-->`);
		const each_array = ensure_array_like(data.project.techStack);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let tech = each_array[$$index];
			Badge($$renderer2, {
				variant: "secondary",
				children: ($$renderer3) => {
					$$renderer3.push(`<!---->${escape_html(tech)}`);
				},
				$$slots: { default: true }
			});
		}
		$$renderer2.push(`<!--]--></div></div> <div class="rounded-lg border bg-card p-4 text-card-foreground"><h3 class="mb-2 font-medium">Interested in this?</h3> <p class="mb-4 text-sm text-muted-foreground">Feel free to check the source code or reach out if you have any questions.</p> `);
		Button($$renderer2, {
			variant: "outline",
			class: "w-full",
			href: "/contact",
			children: ($$renderer3) => {
				$$renderer3.push(`<!---->Contact Me`);
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----></div></aside></div></article>`);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-BTnIdQKN.js.map