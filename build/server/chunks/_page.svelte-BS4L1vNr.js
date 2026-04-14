import { C as ensure_array_like, T as escape_html, c as attr, l as attr_class, pt as stringify, ut as spread_props, x as derived } from "./dev-D04rZKKe.js";
import { t as Button } from "./button-DA4j647p.js";
import "./badge-cwPhXDyp.js";
import { t as Icon } from "./Icon-BhN73e3z.js";
import { t as Input } from "./input-DFCl4JL5.js";
import { t as Calendar } from "./calendar-kEcXdJVQ.js";
import { t as Search } from "./search-DRtdeO--.js";
import { t as getFileUrl } from "./storage.client-BxgykJF5.js";
import { t as External_link } from "./external-link-qYkMRxz3.js";
import { t as Code } from "./code-Bo-G5_s0.js";
import { t as Dashboard_page } from "./dashboard-page-CRUuroPf.js";
import { t as Plus } from "./plus-BExZv4GK.js";
import { t as Eye } from "./eye-CK8RaQHE.js";
import { t as Trash_2 } from "./trash-2-DAdCz1J1.js";
import "./forms-CxrA1JPp.js";
import { a as Table_header, i as Table_head, n as Table_body, o as Table_row, r as Table_cell, t as Table } from "./table-Bhl2UPa8.js";
import { t as Pencil } from "./pencil-mjSaXPMi.js";
import { t as Arrow_up_down } from "./arrow-up-down-D0JgX5Qc.js";
import { t as Layers } from "./layers-BaakChq9.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/_page.svelte.js
function Folder_open($$renderer, $$props) {
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
		{ name: "folder-open" },
		props,
		{ iconNode: [["path", { "d": "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" }]] }
	]));
}
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		let search = "";
		let statusFilter = "ALL";
		let sortKey = "updatedAt";
		let sortDir = -1;
		const statuses = [
			"ALL",
			"COMPLETED",
			"IN_PROGRESS",
			"ARCHIVED"
		];
		const statusLabel = {
			COMPLETED: "Completed",
			IN_PROGRESS: "In Progress",
			ARCHIVED: "Archived"
		};
		const statusVariant = {
			COMPLETED: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
			IN_PROGRESS: "bg-amber-500/10 text-amber-600 border-amber-500/20",
			ARCHIVED: "bg-slate-500/10 text-slate-500 border-slate-500/20"
		};
		const filtered = derived(() => data.projects.filter((p) => {
			const q = search.toLowerCase();
			const matchSearch = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.techStack.some((t) => t.toLowerCase().includes(q));
			const matchStatus = statusFilter === "ALL" || p.status === statusFilter;
			return matchSearch && matchStatus;
		}).sort((a, b) => {
			const av = a[sortKey] ?? "";
			const bv = b[sortKey] ?? "";
			return av < bv ? -sortDir : av > bv ? sortDir : 0;
		}));
		const stats = derived(() => ({
			total: data.projects.length,
			completed: data.projects.filter((p) => p.status === "COMPLETED").length,
			inProgress: data.projects.filter((p) => p.status === "IN_PROGRESS").length,
			archived: data.projects.filter((p) => p.status === "ARCHIVED").length
		}));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			{
				function actions($$renderer) {
					Button($$renderer, {
						href: "/dashboard/projects/new",
						class: "shadow-sm",
						children: ($$renderer) => {
							Plus($$renderer, { class: "mr-2 h-4 w-4" });
							$$renderer.push(`<!----> Add Project`);
						},
						$$slots: { default: true }
					});
				}
				function children($$renderer) {
					$$renderer.push(`<div class="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-5"><!--[-->`);
					const each_array = ensure_array_like([
						{
							label: "Total projects",
							value: stats().total
						},
						{
							label: "Completed",
							value: stats().completed
						},
						{
							label: "In progress",
							value: stats().inProgress
						},
						{
							label: "Archived",
							value: stats().archived
						}
					]);
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let stat = each_array[$$index];
						$$renderer.push(`<div class="rounded-lg bg-muted/50 p-4"><p class="text-xs text-muted-foreground">${escape_html(stat.label)}</p> <p class="mt-1 text-2xl font-bold tracking-tight">${escape_html(stat.value)}</p></div>`);
					}
					$$renderer.push(`<!--]--></div> <div class="mb-4 flex flex-wrap items-center gap-3"><div class="relative flex-1 min-w-45">`);
					Search($$renderer, { class: "absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" });
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						placeholder: "Search projects...",
						class: "pl-8 h-9 text-sm",
						get value() {
							return search;
						},
						set value($$value) {
							search = $$value;
							$$settled = false;
						}
					});
					$$renderer.push(`<!----></div> <div class="flex flex-wrap gap-1"><!--[-->`);
					const each_array_1 = ensure_array_like(statuses);
					for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
						let s = each_array_1[$$index_1];
						$$renderer.push(`<button${attr_class(`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${stringify(statusFilter === s ? "bg-primary text-primary-foreground border-primary" : "border-border/40 text-muted-foreground hover:bg-muted")}`)}>${escape_html(s === "ALL" ? "All" : statusLabel[s])}</button>`);
					}
					$$renderer.push(`<!--]--></div></div> `);
					if (data.projects.length === 0) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<div class="rounded-xl border-2 border-dashed bg-card/50 p-12"><div class="flex flex-col items-center justify-center gap-4 py-16 text-center"><div class="rounded-full bg-muted p-6 shadow-inner">`);
						Folder_open($$renderer, { class: "h-8 w-8 text-muted-foreground" });
						$$renderer.push(`<!----></div> <div class="space-y-1"><h2 class="text-xl font-bold tracking-tight">No Projects Yet</h2> <p class="max-w-xs text-sm text-muted-foreground leading-relaxed">Your portfolio is empty. Time to showcase your amazing work!</p></div> `);
						Button($$renderer, {
							href: "/dashboard/projects/new",
							class: "mt-2",
							children: ($$renderer) => {
								Plus($$renderer, { class: "mr-2 h-4 w-4" });
								$$renderer.push(`<!----> Create First Project`);
							},
							$$slots: { default: true }
						});
						$$renderer.push(`<!----></div></div>`);
					} else {
						$$renderer.push("<!--[-1-->");
						$$renderer.push(`<div class="rounded-xl border border-border/40 overflow-hidden"><div class="overflow-x-auto">`);
						if (Table) {
							$$renderer.push("<!--[-->");
							Table($$renderer, {
								children: ($$renderer) => {
									if (Table_header) {
										$$renderer.push("<!--[-->");
										Table_header($$renderer, {
											children: ($$renderer) => {
												if (Table_row) {
													$$renderer.push("<!--[-->");
													Table_row($$renderer, {
														class: "bg-muted/30 hover:bg-muted/30",
														children: ($$renderer) => {
															if (Table_head) {
																$$renderer.push("<!--[-->");
																Table_head($$renderer, {
																	class: "w-60",
																	children: ($$renderer) => {
																		$$renderer.push(`<button class="flex items-center gap-1 font-semibold text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground">Project `);
																		Arrow_up_down($$renderer, { class: "h-3 w-3" });
																		$$renderer.push(`<!----></button>`);
																	},
																	$$slots: { default: true }
																});
																$$renderer.push("<!--]-->");
															} else {
																$$renderer.push("<!--[!-->");
																$$renderer.push("<!--]-->");
															}
															$$renderer.push(` `);
															if (Table_head) {
																$$renderer.push("<!--[-->");
																Table_head($$renderer, {
																	class: "hidden md:table-cell",
																	children: ($$renderer) => {
																		$$renderer.push(`<!---->Description`);
																	},
																	$$slots: { default: true }
																});
																$$renderer.push("<!--]-->");
															} else {
																$$renderer.push("<!--[!-->");
																$$renderer.push("<!--]-->");
															}
															$$renderer.push(` `);
															if (Table_head) {
																$$renderer.push("<!--[-->");
																Table_head($$renderer, {
																	children: ($$renderer) => {
																		$$renderer.push(`<button class="flex items-center gap-1 font-semibold text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground">Status `);
																		Arrow_up_down($$renderer, { class: "h-3 w-3" });
																		$$renderer.push(`<!----></button>`);
																	},
																	$$slots: { default: true }
																});
																$$renderer.push("<!--]-->");
															} else {
																$$renderer.push("<!--[!-->");
																$$renderer.push("<!--]-->");
															}
															$$renderer.push(` `);
															if (Table_head) {
																$$renderer.push("<!--[-->");
																Table_head($$renderer, {
																	class: "hidden lg:table-cell",
																	children: ($$renderer) => {
																		$$renderer.push(`<!---->Tech Stack`);
																	},
																	$$slots: { default: true }
																});
																$$renderer.push("<!--]-->");
															} else {
																$$renderer.push("<!--[!-->");
																$$renderer.push("<!--]-->");
															}
															$$renderer.push(` `);
															if (Table_head) {
																$$renderer.push("<!--[-->");
																Table_head($$renderer, {
																	class: "hidden sm:table-cell",
																	children: ($$renderer) => {
																		$$renderer.push(`<button class="flex items-center gap-1 font-semibold text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground">Updated `);
																		Arrow_up_down($$renderer, { class: "h-3 w-3" });
																		$$renderer.push(`<!----></button>`);
																	},
																	$$slots: { default: true }
																});
																$$renderer.push("<!--]-->");
															} else {
																$$renderer.push("<!--[!-->");
																$$renderer.push("<!--]-->");
															}
															$$renderer.push(` `);
															if (Table_head) {
																$$renderer.push("<!--[-->");
																Table_head($$renderer, {
																	class: "hidden sm:table-cell",
																	children: ($$renderer) => {
																		$$renderer.push(`<!---->Links`);
																	},
																	$$slots: { default: true }
																});
																$$renderer.push("<!--]-->");
															} else {
																$$renderer.push("<!--[!-->");
																$$renderer.push("<!--]-->");
															}
															$$renderer.push(` `);
															if (Table_head) {
																$$renderer.push("<!--[-->");
																Table_head($$renderer, {
																	class: "text-right w-30",
																	children: ($$renderer) => {
																		$$renderer.push(`<!---->Actions`);
																	},
																	$$slots: { default: true }
																});
																$$renderer.push("<!--]-->");
															} else {
																$$renderer.push("<!--[!-->");
																$$renderer.push("<!--]-->");
															}
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									if (Table_body) {
										$$renderer.push("<!--[-->");
										Table_body($$renderer, {
											children: ($$renderer) => {
												if (filtered().length === 0) {
													$$renderer.push("<!--[0-->");
													if (Table_row) {
														$$renderer.push("<!--[-->");
														Table_row($$renderer, {
															children: ($$renderer) => {
																if (Table_cell) {
																	$$renderer.push("<!--[-->");
																	Table_cell($$renderer, {
																		colspan: 7,
																		class: "py-12 text-center text-sm text-muted-foreground",
																		children: ($$renderer) => {
																			$$renderer.push(`<!---->No projects match your search.`);
																		},
																		$$slots: { default: true }
																	});
																	$$renderer.push("<!--]-->");
																} else {
																	$$renderer.push("<!--[!-->");
																	$$renderer.push("<!--]-->");
																}
															},
															$$slots: { default: true }
														});
														$$renderer.push("<!--]-->");
													} else {
														$$renderer.push("<!--[!-->");
														$$renderer.push("<!--]-->");
													}
												} else {
													$$renderer.push("<!--[-1-->");
													$$renderer.push(`<!--[-->`);
													const each_array_2 = ensure_array_like(filtered());
													for (let index = 0, $$length = each_array_2.length; index < $$length; index++) {
														let project = each_array_2[index];
														if (Table_row) {
															$$renderer.push("<!--[-->");
															Table_row($$renderer, {
																class: "group hover:bg-muted/20",
																children: ($$renderer) => {
																	if (Table_cell) {
																		$$renderer.push("<!--[-->");
																		Table_cell($$renderer, {
																			children: ($$renderer) => {
																				$$renderer.push(`<div class="flex items-center gap-3">`);
																				if (project.thumbnail) {
																					$$renderer.push("<!--[0-->");
																					$$renderer.push(`<img${attr("src", getFileUrl(project.thumbnail))}${attr("alt", project.title)} class="h-9 w-9 rounded-md object-cover border border-border/40 shrink-0"/>`);
																				} else {
																					$$renderer.push("<!--[-1-->");
																					$$renderer.push(`<div class="flex h-9 w-9 items-center justify-center rounded-md border border-border/40 bg-muted/50 text-muted-foreground shrink-0">`);
																					Folder_open($$renderer, { class: "h-4 w-4" });
																					$$renderer.push(`<!----></div>`);
																				}
																				$$renderer.push(`<!--]--> <div class="min-w-0"><p class="truncate font-semibold text-sm leading-tight">${escape_html(project.title)}</p> <p class="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-2"><span class="flex items-center gap-1">`);
																				Layers($$renderer, { class: "h-3 w-3" });
																				$$renderer.push(`<!----> ${escape_html(project.techStack.length)} tools</span> <span class="flex items-center gap-1">`);
																				Calendar($$renderer, { class: "h-3 w-3" });
																				$$renderer.push(`<!----> ${escape_html(new Date(project.updatedAt).toLocaleDateString())}</span></p></div></div>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer.push("<!--]-->");
																	} else {
																		$$renderer.push("<!--[!-->");
																		$$renderer.push("<!--]-->");
																	}
																	$$renderer.push(` `);
																	if (Table_cell) {
																		$$renderer.push("<!--[-->");
																		Table_cell($$renderer, {
																			class: "hidden md:table-cell max-w-50",
																			children: ($$renderer) => {
																				$$renderer.push(`<p class="truncate text-xs text-muted-foreground">${escape_html(project.description)}</p>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer.push("<!--]-->");
																	} else {
																		$$renderer.push("<!--[!-->");
																		$$renderer.push("<!--]-->");
																	}
																	$$renderer.push(` `);
																	if (Table_cell) {
																		$$renderer.push("<!--[-->");
																		Table_cell($$renderer, {
																			children: ($$renderer) => {
																				$$renderer.push(`<span${attr_class(`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-tight ${stringify(statusVariant[project.status])}`)}>${escape_html(statusLabel[project.status] ?? project.status)}</span>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer.push("<!--]-->");
																	} else {
																		$$renderer.push("<!--[!-->");
																		$$renderer.push("<!--]-->");
																	}
																	$$renderer.push(` `);
																	if (Table_cell) {
																		$$renderer.push("<!--[-->");
																		Table_cell($$renderer, {
																			class: "hidden lg:table-cell",
																			children: ($$renderer) => {
																				$$renderer.push(`<div class="flex flex-wrap gap-1"><!--[-->`);
																				const each_array_3 = ensure_array_like(project.techStack.slice(0, 3));
																				for (let $$index_2 = 0, $$length = each_array_3.length; $$index_2 < $$length; $$index_2++) {
																					let tech = each_array_3[$$index_2];
																					$$renderer.push(`<span class="rounded-sm bg-secondary/60 px-1.5 py-0.5 text-[10px] font-medium text-secondary-foreground border-none">${escape_html(tech)}</span>`);
																				}
																				$$renderer.push(`<!--]--> `);
																				if (project.techStack.length > 3) {
																					$$renderer.push("<!--[0-->");
																					$$renderer.push(`<span class="text-[10px] text-muted-foreground/60 self-center">+${escape_html(project.techStack.length - 3)}</span>`);
																				} else $$renderer.push("<!--[-1-->");
																				$$renderer.push(`<!--]--></div>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer.push("<!--]-->");
																	} else {
																		$$renderer.push("<!--[!-->");
																		$$renderer.push("<!--]-->");
																	}
																	$$renderer.push(` `);
																	if (Table_cell) {
																		$$renderer.push("<!--[-->");
																		Table_cell($$renderer, {
																			class: "hidden sm:table-cell",
																			children: ($$renderer) => {
																				$$renderer.push(`<span class="text-xs text-muted-foreground">${escape_html(new Date(project.updatedAt).toLocaleDateString("id-ID", {
																					day: "2-digit",
																					month: "short",
																					year: "numeric"
																				}))}</span>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer.push("<!--]-->");
																	} else {
																		$$renderer.push("<!--[!-->");
																		$$renderer.push("<!--]-->");
																	}
																	$$renderer.push(` `);
																	if (Table_cell) {
																		$$renderer.push("<!--[-->");
																		Table_cell($$renderer, {
																			class: "hidden sm:table-cell",
																			children: ($$renderer) => {
																				$$renderer.push(`<div class="flex gap-1.5">`);
																				if (project.githubUrl) {
																					$$renderer.push("<!--[0-->");
																					$$renderer.push(`<a${attr("href", project.githubUrl)} target="_blank" class="flex h-7 w-7 items-center justify-center rounded-md border border-border/40 text-muted-foreground hover:bg-muted hover:text-foreground" title="Source code">`);
																					Code($$renderer, { class: "h-3.5 w-3.5" });
																					$$renderer.push(`<!----></a>`);
																				} else $$renderer.push("<!--[-1-->");
																				$$renderer.push(`<!--]--> `);
																				if (project.demoUrl) {
																					$$renderer.push("<!--[0-->");
																					$$renderer.push(`<a${attr("href", project.demoUrl)} target="_blank" class="flex h-7 w-7 items-center justify-center rounded-md border border-border/40 text-muted-foreground hover:bg-muted hover:text-foreground" title="Live demo">`);
																					External_link($$renderer, { class: "h-3.5 w-3.5" });
																					$$renderer.push(`<!----></a>`);
																				} else $$renderer.push("<!--[-1-->");
																				$$renderer.push(`<!--]--></div>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer.push("<!--]-->");
																	} else {
																		$$renderer.push("<!--[!-->");
																		$$renderer.push("<!--]-->");
																	}
																	$$renderer.push(` `);
																	if (Table_cell) {
																		$$renderer.push("<!--[-->");
																		Table_cell($$renderer, {
																			class: "text-right",
																			children: ($$renderer) => {
																				$$renderer.push(`<div class="flex items-center justify-end gap-1.5 transition-opacity">`);
																				Button($$renderer, {
																					href: `/dashboard/projects/${stringify(project.id)}/view`,
																					variant: "ghost",
																					size: "icon",
																					class: "h-8 w-8 rounded-md hover:bg-muted",
																					title: "View Project",
																					children: ($$renderer) => {
																						Eye($$renderer, { class: "h-4 w-4" });
																					},
																					$$slots: { default: true }
																				});
																				$$renderer.push(`<!----> `);
																				Button($$renderer, {
																					href: `/dashboard/projects/${stringify(project.id)}`,
																					variant: "ghost",
																					size: "icon",
																					class: "h-8 w-8 rounded-md hover:bg-muted",
																					title: "Edit Project",
																					children: ($$renderer) => {
																						Pencil($$renderer, { class: "h-4 w-4" });
																					},
																					$$slots: { default: true }
																				});
																				$$renderer.push(`<!----> <form action="?/delete" method="POST"><input type="hidden" name="id"${attr("value", project.id)}/> `);
																				Button($$renderer, {
																					type: "submit",
																					variant: "ghost",
																					size: "icon",
																					class: "h-8 w-8 rounded-md text-destructive hover:bg-destructive/10 hover:text-destructive",
																					title: "Delete Project",
																					children: ($$renderer) => {
																						Trash_2($$renderer, { class: "h-4 w-4" });
																					},
																					$$slots: { default: true }
																				});
																				$$renderer.push(`<!----></form></div>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer.push("<!--]-->");
																	} else {
																		$$renderer.push("<!--[!-->");
																		$$renderer.push("<!--]-->");
																	}
																},
																$$slots: { default: true }
															});
															$$renderer.push("<!--]-->");
														} else {
															$$renderer.push("<!--[!-->");
															$$renderer.push("<!--]-->");
														}
													}
													$$renderer.push(`<!--]-->`);
												}
												$$renderer.push(`<!--]-->`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
						$$renderer.push(`</div> <div class="flex items-center justify-between border-t border-border/30 bg-muted/20 px-4 py-2.5 text-xs text-muted-foreground"><span>Showing ${escape_html(filtered().length)} of ${escape_html(data.projects.length)} projects</span> `);
						if (search || statusFilter !== "ALL") {
							$$renderer.push("<!--[0-->");
							$$renderer.push(`<button class="hover:text-foreground underline underline-offset-2">Clear filters</button>`);
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]--></div></div>`);
					}
					$$renderer.push(`<!--]-->`);
				}
				Dashboard_page($$renderer, {
					title: "Projects",
					description: "Manage your portfolio projects and showcase your best work.",
					actions,
					children,
					$$slots: {
						actions: true,
						default: true
					}
				});
			}
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

//# sourceMappingURL=_page.svelte-BS4L1vNr.js.map