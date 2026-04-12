import { C as ensure_array_like, T as escape_html, c as attr, ft as stringify, ut as spread_props } from "./dev-OC6EGoUN.js";
import { t as Button } from "./button-BAli88Z_.js";
import { t as Badge } from "./badge-ysT7GMMH.js";
import { a as Card_header, n as Card_content, o as Card_title, r as Card_description, t as Card } from "./card-BAKj0KoL.js";
import { t as Icon } from "./Icon-gA2xXWGL.js";
import { t as Calendar } from "./calendar-BSMbf7m-.js";
import { t as External_link } from "./external-link-Du5Lwh_5.js";
import { t as Code } from "./code-BOPTs87B.js";
import { t as Arrow_up_right } from "./arrow-up-right-DzCfWaAE.js";
import { t as Globe } from "./globe-C_R1u8gS.js";
import { t as Crud_header } from "./crud-header-5rxnVVzC.js";
import { t as Pencil } from "./pencil-CuLE9Jvs.js";
import { t as getFileUrl } from "./storage.client-BdaqK3xy.js";
import { t as Info } from "./info-B3mwYbEu.js";
import { t as Layers } from "./layers-DOWzULNi.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/_id_/view/_page.svelte.js
function Terminal($$renderer, $$props) {
	/**
	* @license @lucide/svelte v1.8.0 - ISC
	*
	* ISC License
	*
	* Copyright (c) 2026 Lucide Icons and Contributors
	*
	* Permission to use, copy, modify, and/or distribute this software for any
	* purpose with or without fee is hereby granted, provided that the above
	* copyright notice and this permission notice appear in all copies.
	*
	* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
	* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
	* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
	* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
	* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
	* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
	* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	*
	* ---
	*
	* The following Lucide icons are derived from the Feather project:
	*
	* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
	*
	* The MIT License (MIT) (for the icons listed above)
	*
	* Copyright (c) 2013-present Cole Bemis
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*
	*/
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "terminal" },
		props,
		{ iconNode: [["path", { "d": "M12 19h8" }], ["path", { "d": "m4 17 6-6-6-6" }]] }
	]));
}
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
		{
			function actions($$renderer) {
				Button($$renderer, {
					variant: "outline",
					href: `/projects/${stringify(data.project.id)}`,
					target: "_blank",
					class: "gap-2",
					children: ($$renderer) => {
						External_link($$renderer, { class: "h-4 w-4" });
						$$renderer.push(`<!----> Public View`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> `);
				Button($$renderer, {
					href: `/dashboard/projects/${stringify(data.project.id)}`,
					class: "gap-2",
					children: ($$renderer) => {
						Pencil($$renderer, { class: "h-4 w-4" });
						$$renderer.push(`<!----> Edit Project`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!---->`);
			}
			Crud_header($$renderer, {
				title: data.project.title,
				description: "Detailed project information and statistics.",
				backUrl: "/dashboard/projects",
				actions,
				$$slots: { actions: true }
			});
		}
		$$renderer.push(`<!----> <div class="px-6 pb-12 max-w-7xl mx-auto"><div class="grid gap-6 lg:grid-cols-3"><div class="lg:col-span-2 space-y-6">`);
		Card($$renderer, {
			class: "overflow-hidden border-none shadow-md bg-muted/20",
			children: ($$renderer) => {
				if (data.project.thumbnail) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<div class="relative group"><img${attr("src", getFileUrl(data.project.thumbnail))}${attr("alt", data.project.title)} class="aspect-video w-full object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-[1.01]"/> <div class="absolute top-4 right-4 flex items-center gap-2">`);
					Badge($$renderer, {
						variant: getStatusColor(data.project.status),
						class: "shadow-sm",
						children: ($$renderer) => {
							$$renderer.push(`<!---->${escape_html(data.project.status.replace("_", " "))}`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></div></div>`);
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<div class="flex aspect-video items-center justify-center bg-muted text-muted-foreground italic rounded-xl border-2 border-dashed">No thumbnail provided</div>`);
				}
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Card($$renderer, {
			class: "shadow-sm overflow-hidden",
			children: ($$renderer) => {
				Card_header($$renderer, {
					class: "border-b bg-muted/30",
					children: ($$renderer) => {
						$$renderer.push(`<div class="flex items-center gap-2">`);
						Info($$renderer, { class: "h-5 w-5 text-primary" });
						$$renderer.push(`<!----> `);
						Card_title($$renderer, {
							children: ($$renderer) => {
								$$renderer.push(`<!---->Project Information`);
							},
							$$slots: { default: true }
						});
						$$renderer.push(`<!----></div> `);
						Card_description($$renderer, {
							children: ($$renderer) => {
								$$renderer.push(`<!---->Full description and detailed content`);
							},
							$$slots: { default: true }
						});
						$$renderer.push(`<!---->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> `);
				Card_content($$renderer, {
					class: "p-6 space-y-8",
					children: ($$renderer) => {
						$$renderer.push(`<div><h4 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">Overview</h4> <p class="text-lg leading-relaxed text-foreground/90">${escape_html(data.project.description)}</p></div> <div class="pt-6 border-t"><h4 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Detailed Content</h4> <div class="prose prose-sm dark:prose-invert max-w-none">`);
						if (data.project.content) {
							$$renderer.push("<!--[0-->");
							$$renderer.push(`<div class="whitespace-pre-wrap rounded-xl bg-muted/40 p-5 border text-foreground/80 leading-relaxed">${escape_html(data.project.content)}</div>`);
						} else {
							$$renderer.push("<!--[-1-->");
							$$renderer.push(`<div class="flex flex-col items-center justify-center py-8 text-muted-foreground bg-muted/20 rounded-xl border border-dashed"><p class="italic">No detailed content written yet.</p></div>`);
						}
						$$renderer.push(`<!--]--></div></div>`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		if (data.project.env) {
			$$renderer.push("<!--[0-->");
			Card($$renderer, {
				class: "shadow-sm border-amber-200/50 dark:border-amber-900/30",
				children: ($$renderer) => {
					Card_header($$renderer, {
						class: "bg-amber-50/50 dark:bg-amber-950/10 border-b border-amber-100 dark:border-amber-900/20",
						children: ($$renderer) => {
							$$renderer.push(`<div class="flex items-center gap-2">`);
							Terminal($$renderer, { class: "h-5 w-5 text-amber-600 dark:text-amber-500" });
							$$renderer.push(`<!----> `);
							Card_title($$renderer, {
								class: "text-amber-900 dark:text-amber-100",
								children: ($$renderer) => {
									$$renderer.push(`<!---->Environment Variables`);
								},
								$$slots: { default: true }
							});
							$$renderer.push(`<!----></div> `);
							Card_description($$renderer, {
								children: ($$renderer) => {
									$$renderer.push(`<!---->Configuration and secrets`);
								},
								$$slots: { default: true }
							});
							$$renderer.push(`<!---->`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Card_content($$renderer, {
						class: "p-4",
						children: ($$renderer) => {
							$$renderer.push(`<pre class="overflow-x-auto rounded-lg bg-zinc-950 p-4 text-xs text-zinc-100 font-mono leading-relaxed"><code>${escape_html(data.project.env)}</code></pre>`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <div class="space-y-6">`);
		Card($$renderer, {
			children: ($$renderer) => {
				Card_header($$renderer, {
					class: "py-4 border-b bg-muted/10",
					children: ($$renderer) => {
						Card_title($$renderer, {
							class: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: ($$renderer) => {
								$$renderer.push(`<!---->Properties`);
							},
							$$slots: { default: true }
						});
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> `);
				Card_content($$renderer, {
					class: "p-6 space-y-4",
					children: ($$renderer) => {
						$$renderer.push(`<div class="flex items-center justify-between text-sm py-1"><span class="flex items-center text-muted-foreground">`);
						Calendar($$renderer, { class: "mr-2 h-4 w-4" });
						$$renderer.push(`<!----> Created</span> <span class="font-medium">${escape_html(new Date(data.project.createdAt).toLocaleDateString("en-US", {
							day: "numeric",
							month: "long",
							year: "numeric"
						}))}</span></div> <div class="flex items-center justify-between text-sm py-1"><span class="flex items-center text-muted-foreground">`);
						Layers($$renderer, { class: "mr-2 h-4 w-4" });
						$$renderer.push(`<!----> Status</span> `);
						Badge($$renderer, {
							variant: getStatusColor(data.project.status),
							class: "font-medium",
							children: ($$renderer) => {
								$$renderer.push(`<!---->${escape_html(data.project.status)}`);
							},
							$$slots: { default: true }
						});
						$$renderer.push(`<!----></div>`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Card($$renderer, {
			children: ($$renderer) => {
				Card_header($$renderer, {
					class: "py-4 border-b bg-muted/10",
					children: ($$renderer) => {
						Card_title($$renderer, {
							class: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: ($$renderer) => {
								$$renderer.push(`<!---->Reference Links`);
							},
							$$slots: { default: true }
						});
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> `);
				Card_content($$renderer, {
					class: "p-6 space-y-3",
					children: ($$renderer) => {
						if (data.project.githubUrl) {
							$$renderer.push("<!--[0-->");
							$$renderer.push(`<a${attr("href", data.project.githubUrl)} target="_blank" rel="noreferrer" class="group flex items-center justify-between p-3 rounded-xl border bg-muted/10 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200"><span class="flex items-center font-medium text-sm">`);
							Code($$renderer, { class: "mr-3 h-5 w-5 text-foreground group-hover:text-primary transition-colors" });
							$$renderer.push(`<!----> Source Code</span> `);
							Arrow_up_right($$renderer, { class: "h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" });
							$$renderer.push(`<!----></a>`);
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]--> `);
						if (data.project.demoUrl) {
							$$renderer.push("<!--[0-->");
							$$renderer.push(`<a${attr("href", data.project.demoUrl)} target="_blank" rel="noreferrer" class="group flex items-center justify-between p-3 rounded-xl border bg-muted/10 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200"><span class="flex items-center font-medium text-sm">`);
							Globe($$renderer, { class: "mr-3 h-5 w-5 text-foreground group-hover:text-primary transition-colors" });
							$$renderer.push(`<!----> Live Demo</span> `);
							Arrow_up_right($$renderer, { class: "h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" });
							$$renderer.push(`<!----></a>`);
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]--> `);
						if (!data.project.githubUrl && !data.project.demoUrl) {
							$$renderer.push("<!--[0-->");
							$$renderer.push(`<p class="text-sm text-center py-4 text-muted-foreground italic">No links available</p>`);
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		Card($$renderer, {
			children: ($$renderer) => {
				Card_header($$renderer, {
					class: "py-4 border-b bg-muted/10 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: ($$renderer) => {
						Card_title($$renderer, {
							class: "text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2",
							children: ($$renderer) => {
								Code($$renderer, { class: "h-4 w-4" });
								$$renderer.push(`<!----> Technologies`);
							},
							$$slots: { default: true }
						});
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> `);
				Card_content($$renderer, {
					class: "p-6",
					children: ($$renderer) => {
						$$renderer.push(`<div class="flex flex-wrap gap-2"><!--[-->`);
						const each_array = ensure_array_like(data.project.techStack);
						for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
							let tech = each_array[$$index];
							Badge($$renderer, {
								variant: "secondary",
								class: "font-medium bg-secondary/50 hover:bg-secondary transition-colors",
								children: ($$renderer) => {
									$$renderer.push(`<!---->${escape_html(tech)}`);
								},
								$$slots: { default: true }
							});
						}
						$$renderer.push(`<!--]--> `);
						if (data.project.techStack.length === 0) {
							$$renderer.push("<!--[0-->");
							$$renderer.push(`<span class="text-sm text-muted-foreground italic">None specified</span>`);
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]--></div>`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></div></div>`);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-DwRIVT6A.js.map