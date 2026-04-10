import { E as attr, I as ensure_array_like, L as escape_html, it as stringify, nt as spread_props } from "./renderer-CoNnoy0x.js";
import { t as Button } from "./button-JWKRuBhr.js";
import { t as Badge } from "./badge-BhT1H9Q3.js";
import { t as Card } from "./card-BNT23Klg.js";
import { t as Card_content } from "./card-content-CoFPtkJo.js";
import { t as Icon } from "./Icon-DsjQn-Ts.js";
import { t as Calendar } from "./calendar-DbIoV4cg.js";
import { n as Card_header, r as Card_title, t as Card_description } from "./card-title-BhI6TCaP.js";
import { t as Code } from "./code-DDombfk5.js";
import { t as External_link } from "./external-link-DOMXW-bn.js";
import { t as Arrow_up_right } from "./arrow-up-right-BEOBS-ol.js";
import { t as Crud_header } from "./crud-header-8_9VZwFh.js";
import { t as Globe } from "./globe-BBsnsNSQ.js";
import { t as Pencil } from "./pencil-30dr0DJK.js";
import { t as getFileUrl } from "./storage.client-B4KZJi2l.js";
import { t as Info } from "./info-BYSb9qws.js";
import { t as Layers } from "./layers-DoJDjJwb.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/_id_/view/_page.svelte.js
function Terminal($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "terminal" },
		props,
		{ iconNode: [["path", { "d": "M12 19h8" }], ["path", { "d": "m4 17 6-6-6-6" }]] }
	]));
}
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
		{
			let actions = function($$renderer3) {
				Button($$renderer3, {
					variant: "outline",
					href: `/projects/${stringify(data.project.id)}`,
					target: "_blank",
					class: "gap-2",
					children: ($$renderer4) => {
						External_link($$renderer4, { class: "h-4 w-4" });
						$$renderer4.push(`<!----> Public View`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> `);
				Button($$renderer3, {
					href: `/dashboard/projects/${stringify(data.project.id)}`,
					class: "gap-2",
					children: ($$renderer4) => {
						Pencil($$renderer4, { class: "h-4 w-4" });
						$$renderer4.push(`<!----> Edit Project`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!---->`);
			};
			Crud_header($$renderer2, {
				title: data.project.title,
				description: "Detailed project information and statistics.",
				backUrl: "/dashboard/projects",
				actions
			});
		}
		$$renderer2.push(`<!----> <div class="px-6 pb-12 max-w-7xl mx-auto"><div class="grid gap-6 lg:grid-cols-3"><div class="lg:col-span-2 space-y-6">`);
		Card($$renderer2, {
			class: "overflow-hidden border-none shadow-md bg-muted/20",
			children: ($$renderer3) => {
				if (data.project.thumbnail) {
					$$renderer3.push("<!--[0-->");
					$$renderer3.push(`<div class="relative group"><img${attr("src", getFileUrl(data.project.thumbnail))}${attr("alt", data.project.title)} class="aspect-video w-full object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-[1.01]"/> <div class="absolute top-4 right-4 flex items-center gap-2">`);
					Badge($$renderer3, {
						variant: getStatusColor(data.project.status),
						class: "shadow-sm",
						children: ($$renderer4) => {
							$$renderer4.push(`<!---->${escape_html(data.project.status.replace("_", " "))}`);
						},
						$$slots: { default: true }
					});
					$$renderer3.push(`<!----></div></div>`);
				} else {
					$$renderer3.push("<!--[-1-->");
					$$renderer3.push(`<div class="flex aspect-video items-center justify-center bg-muted text-muted-foreground italic rounded-xl border-2 border-dashed">No thumbnail provided</div>`);
				}
				$$renderer3.push(`<!--]-->`);
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----> `);
		Card($$renderer2, {
			class: "shadow-sm overflow-hidden",
			children: ($$renderer3) => {
				Card_header($$renderer3, {
					class: "border-b bg-muted/30",
					children: ($$renderer4) => {
						$$renderer4.push(`<div class="flex items-center gap-2">`);
						Info($$renderer4, { class: "h-5 w-5 text-primary" });
						$$renderer4.push(`<!----> `);
						Card_title($$renderer4, {
							children: ($$renderer5) => {
								$$renderer5.push(`<!---->Project Information`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----></div> `);
						Card_description($$renderer4, {
							children: ($$renderer5) => {
								$$renderer5.push(`<!---->Full description and detailed content`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> `);
				Card_content($$renderer3, {
					class: "p-6 space-y-8",
					children: ($$renderer4) => {
						$$renderer4.push(`<div><h4 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">Overview</h4> <p class="text-lg leading-relaxed text-foreground/90">${escape_html(data.project.description)}</p></div> <div class="pt-6 border-t"><h4 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Detailed Content</h4> <div class="prose prose-sm dark:prose-invert max-w-none">`);
						if (data.project.content) {
							$$renderer4.push("<!--[0-->");
							$$renderer4.push(`<div class="whitespace-pre-wrap rounded-xl bg-muted/40 p-5 border text-foreground/80 leading-relaxed">${escape_html(data.project.content)}</div>`);
						} else {
							$$renderer4.push("<!--[-1-->");
							$$renderer4.push(`<div class="flex flex-col items-center justify-center py-8 text-muted-foreground bg-muted/20 rounded-xl border border-dashed"><p class="italic">No detailed content written yet.</p></div>`);
						}
						$$renderer4.push(`<!--]--></div></div>`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----> `);
		if (data.project.env) {
			$$renderer2.push("<!--[0-->");
			Card($$renderer2, {
				class: "shadow-sm border-amber-200/50 dark:border-amber-900/30",
				children: ($$renderer3) => {
					Card_header($$renderer3, {
						class: "bg-amber-50/50 dark:bg-amber-950/10 border-b border-amber-100 dark:border-amber-900/20",
						children: ($$renderer4) => {
							$$renderer4.push(`<div class="flex items-center gap-2">`);
							Terminal($$renderer4, { class: "h-5 w-5 text-amber-600 dark:text-amber-500" });
							$$renderer4.push(`<!----> `);
							Card_title($$renderer4, {
								class: "text-amber-900 dark:text-amber-100",
								children: ($$renderer5) => {
									$$renderer5.push(`<!---->Environment Variables`);
								},
								$$slots: { default: true }
							});
							$$renderer4.push(`<!----></div> `);
							Card_description($$renderer4, {
								children: ($$renderer5) => {
									$$renderer5.push(`<!---->Configuration and secrets`);
								},
								$$slots: { default: true }
							});
							$$renderer4.push(`<!---->`);
						},
						$$slots: { default: true }
					});
					$$renderer3.push(`<!----> `);
					Card_content($$renderer3, {
						class: "p-4",
						children: ($$renderer4) => {
							$$renderer4.push(`<pre class="overflow-x-auto rounded-lg bg-zinc-950 p-4 text-xs text-zinc-100 font-mono leading-relaxed"><code>${escape_html(data.project.env)}</code></pre>`);
						},
						$$slots: { default: true }
					});
					$$renderer3.push(`<!---->`);
				},
				$$slots: { default: true }
			});
		} else $$renderer2.push("<!--[-1-->");
		$$renderer2.push(`<!--]--></div> <div class="space-y-6">`);
		Card($$renderer2, {
			children: ($$renderer3) => {
				Card_header($$renderer3, {
					class: "py-4 border-b bg-muted/10",
					children: ($$renderer4) => {
						Card_title($$renderer4, {
							class: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: ($$renderer5) => {
								$$renderer5.push(`<!---->Properties`);
							},
							$$slots: { default: true }
						});
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> `);
				Card_content($$renderer3, {
					class: "p-6 space-y-4",
					children: ($$renderer4) => {
						$$renderer4.push(`<div class="flex items-center justify-between text-sm py-1"><span class="flex items-center text-muted-foreground">`);
						Calendar($$renderer4, { class: "mr-2 h-4 w-4" });
						$$renderer4.push(`<!----> Created</span> <span class="font-medium">${escape_html(new Date(data.project.createdAt).toLocaleDateString("en-US", {
							day: "numeric",
							month: "long",
							year: "numeric"
						}))}</span></div> <div class="flex items-center justify-between text-sm py-1"><span class="flex items-center text-muted-foreground">`);
						Layers($$renderer4, { class: "mr-2 h-4 w-4" });
						$$renderer4.push(`<!----> Status</span> `);
						Badge($$renderer4, {
							variant: getStatusColor(data.project.status),
							class: "font-medium",
							children: ($$renderer5) => {
								$$renderer5.push(`<!---->${escape_html(data.project.status)}`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----></div>`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----> `);
		Card($$renderer2, {
			children: ($$renderer3) => {
				Card_header($$renderer3, {
					class: "py-4 border-b bg-muted/10",
					children: ($$renderer4) => {
						Card_title($$renderer4, {
							class: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: ($$renderer5) => {
								$$renderer5.push(`<!---->Reference Links`);
							},
							$$slots: { default: true }
						});
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> `);
				Card_content($$renderer3, {
					class: "p-6 space-y-3",
					children: ($$renderer4) => {
						if (data.project.githubUrl) {
							$$renderer4.push("<!--[0-->");
							$$renderer4.push(`<a${attr("href", data.project.githubUrl)} target="_blank" rel="noreferrer" class="group flex items-center justify-between p-3 rounded-xl border bg-muted/10 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200"><span class="flex items-center font-medium text-sm">`);
							Code($$renderer4, { class: "mr-3 h-5 w-5 text-foreground group-hover:text-primary transition-colors" });
							$$renderer4.push(`<!----> Source Code</span> `);
							Arrow_up_right($$renderer4, { class: "h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" });
							$$renderer4.push(`<!----></a>`);
						} else $$renderer4.push("<!--[-1-->");
						$$renderer4.push(`<!--]--> `);
						if (data.project.demoUrl) {
							$$renderer4.push("<!--[0-->");
							$$renderer4.push(`<a${attr("href", data.project.demoUrl)} target="_blank" rel="noreferrer" class="group flex items-center justify-between p-3 rounded-xl border bg-muted/10 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200"><span class="flex items-center font-medium text-sm">`);
							Globe($$renderer4, { class: "mr-3 h-5 w-5 text-foreground group-hover:text-primary transition-colors" });
							$$renderer4.push(`<!----> Live Demo</span> `);
							Arrow_up_right($$renderer4, { class: "h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" });
							$$renderer4.push(`<!----></a>`);
						} else $$renderer4.push("<!--[-1-->");
						$$renderer4.push(`<!--]--> `);
						if (!data.project.githubUrl && !data.project.demoUrl) {
							$$renderer4.push("<!--[0-->");
							$$renderer4.push(`<p class="text-sm text-center py-4 text-muted-foreground italic">No links available</p>`);
						} else $$renderer4.push("<!--[-1-->");
						$$renderer4.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----> `);
		Card($$renderer2, {
			children: ($$renderer3) => {
				Card_header($$renderer3, {
					class: "py-4 border-b bg-muted/10 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: ($$renderer4) => {
						Card_title($$renderer4, {
							class: "text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2",
							children: ($$renderer5) => {
								Code($$renderer5, { class: "h-4 w-4" });
								$$renderer5.push(`<!----> Technologies`);
							},
							$$slots: { default: true }
						});
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> `);
				Card_content($$renderer3, {
					class: "p-6",
					children: ($$renderer4) => {
						$$renderer4.push(`<div class="flex flex-wrap gap-2"><!--[-->`);
						const each_array = ensure_array_like(data.project.techStack);
						for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
							let tech = each_array[$$index];
							Badge($$renderer4, {
								variant: "secondary",
								class: "font-medium bg-secondary/50 hover:bg-secondary transition-colors",
								children: ($$renderer5) => {
									$$renderer5.push(`<!---->${escape_html(tech)}`);
								},
								$$slots: { default: true }
							});
						}
						$$renderer4.push(`<!--]--> `);
						if (data.project.techStack.length === 0) {
							$$renderer4.push("<!--[0-->");
							$$renderer4.push(`<span class="text-sm text-muted-foreground italic">None specified</span>`);
						} else $$renderer4.push("<!--[-1-->");
						$$renderer4.push(`<!--]--></div>`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----></div></div></div>`);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-DGyrl7nh.js.map