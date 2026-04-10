import "./root-hPyMpEOi.js";
import { D as attr_class, E as attr, I as ensure_array_like, L as escape_html, P as derived, it as stringify, nt as spread_props } from "./renderer-CoNnoy0x.js";
import "./state.svelte-yQ996O6E.js";
import { t as Button } from "./button-JWKRuBhr.js";
import "./badge-BhT1H9Q3.js";
import { t as Icon } from "./Icon-DsjQn-Ts.js";
import { t as Input } from "./input-yKAcSgEU.js";
import { t as Search } from "./search-dSF40r3G.js";
import { t as Calendar } from "./calendar-DbIoV4cg.js";
import { t as Code } from "./code-DDombfk5.js";
import { t as External_link } from "./external-link-DOMXW-bn.js";
import { t as Dashboard_page } from "./dashboard-page-DbMyEhcp.js";
import { t as Plus } from "./plus-Bjw3hl99.js";
import { t as Eye } from "./eye-vfN4IFre.js";
import { t as Trash_2 } from "./trash-2-D7az2Ppd.js";
import { a as Table_header, i as Table_head, n as Table_body, o as Table_row, r as Table_cell, t as Table } from "./table-row-Zxfuky06.js";
import { t as Arrow_up_down } from "./arrow-up-down-D6jN9a8A.js";
import { t as Pencil } from "./pencil-30dr0DJK.js";
import { t as getFileUrl } from "./storage.client-B4KZJi2l.js";
import { t as Layers } from "./layers-DoJDjJwb.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/_page.svelte.js
function Folder_open($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "folder-open" },
		props,
		{ iconNode: [["path", { "d": "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" }]] }
	]));
}
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
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
			return (!q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.techStack.some((t) => t.toLowerCase().includes(q))) && statusFilter === "ALL";
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
		function $$render_inner($$renderer3) {
			{
				let actions = function($$renderer4) {
					Button($$renderer4, {
						href: "/dashboard/projects/new",
						class: "shadow-sm",
						children: ($$renderer5) => {
							Plus($$renderer5, { class: "mr-2 h-4 w-4" });
							$$renderer5.push(`<!----> Add Project`);
						},
						$$slots: { default: true }
					});
				}, children = function($$renderer4) {
					$$renderer4.push(`<div class="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-5"><!--[-->`);
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
						$$renderer4.push(`<div class="rounded-lg bg-muted/50 p-4"><p class="text-xs text-muted-foreground">${escape_html(stat.label)}</p> <p class="mt-1 text-2xl font-bold tracking-tight">${escape_html(stat.value)}</p></div>`);
					}
					$$renderer4.push(`<!--]--></div> <div class="mb-4 flex flex-wrap items-center gap-3"><div class="relative flex-1 min-w-45">`);
					Search($$renderer4, { class: "absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" });
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
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
					$$renderer4.push(`<!----></div> <div class="flex flex-wrap gap-1"><!--[-->`);
					const each_array_1 = ensure_array_like(statuses);
					for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
						let s = each_array_1[$$index_1];
						$$renderer4.push(`<button${attr_class(`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${stringify(statusFilter === s ? "bg-primary text-primary-foreground border-primary" : "border-border/40 text-muted-foreground hover:bg-muted")}`)}>${escape_html(s === "ALL" ? "All" : statusLabel[s])}</button>`);
					}
					$$renderer4.push(`<!--]--></div></div> `);
					if (data.projects.length === 0) {
						$$renderer4.push("<!--[0-->");
						$$renderer4.push(`<div class="rounded-xl border-2 border-dashed bg-card/50 p-12"><div class="flex flex-col items-center justify-center gap-4 py-16 text-center"><div class="rounded-full bg-muted p-6 shadow-inner">`);
						Folder_open($$renderer4, { class: "h-8 w-8 text-muted-foreground" });
						$$renderer4.push(`<!----></div> <div class="space-y-1"><h2 class="text-xl font-bold tracking-tight">No Projects Yet</h2> <p class="max-w-xs text-sm text-muted-foreground leading-relaxed">Your portfolio is empty. Time to showcase your amazing work!</p></div> `);
						Button($$renderer4, {
							href: "/dashboard/projects/new",
							class: "mt-2",
							children: ($$renderer5) => {
								Plus($$renderer5, { class: "mr-2 h-4 w-4" });
								$$renderer5.push(`<!----> Create First Project`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----></div></div>`);
					} else {
						$$renderer4.push("<!--[-1-->");
						$$renderer4.push(`<div class="rounded-xl border border-border/40 overflow-hidden"><div class="overflow-x-auto">`);
						if (Table) {
							$$renderer4.push("<!--[-->");
							Table($$renderer4, {
								children: ($$renderer5) => {
									if (Table_header) {
										$$renderer5.push("<!--[-->");
										Table_header($$renderer5, {
											children: ($$renderer6) => {
												if (Table_row) {
													$$renderer6.push("<!--[-->");
													Table_row($$renderer6, {
														class: "bg-muted/30 hover:bg-muted/30",
														children: ($$renderer7) => {
															if (Table_head) {
																$$renderer7.push("<!--[-->");
																Table_head($$renderer7, {
																	class: "w-60",
																	children: ($$renderer8) => {
																		$$renderer8.push(`<button class="flex items-center gap-1 font-semibold text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground">Project `);
																		Arrow_up_down($$renderer8, { class: "h-3 w-3" });
																		$$renderer8.push(`<!----></button>`);
																	},
																	$$slots: { default: true }
																});
																$$renderer7.push("<!--]-->");
															} else {
																$$renderer7.push("<!--[!-->");
																$$renderer7.push("<!--]-->");
															}
															$$renderer7.push(` `);
															if (Table_head) {
																$$renderer7.push("<!--[-->");
																Table_head($$renderer7, {
																	class: "hidden md:table-cell",
																	children: ($$renderer8) => {
																		$$renderer8.push(`<!---->Description`);
																	},
																	$$slots: { default: true }
																});
																$$renderer7.push("<!--]-->");
															} else {
																$$renderer7.push("<!--[!-->");
																$$renderer7.push("<!--]-->");
															}
															$$renderer7.push(` `);
															if (Table_head) {
																$$renderer7.push("<!--[-->");
																Table_head($$renderer7, {
																	children: ($$renderer8) => {
																		$$renderer8.push(`<button class="flex items-center gap-1 font-semibold text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground">Status `);
																		Arrow_up_down($$renderer8, { class: "h-3 w-3" });
																		$$renderer8.push(`<!----></button>`);
																	},
																	$$slots: { default: true }
																});
																$$renderer7.push("<!--]-->");
															} else {
																$$renderer7.push("<!--[!-->");
																$$renderer7.push("<!--]-->");
															}
															$$renderer7.push(` `);
															if (Table_head) {
																$$renderer7.push("<!--[-->");
																Table_head($$renderer7, {
																	class: "hidden lg:table-cell",
																	children: ($$renderer8) => {
																		$$renderer8.push(`<!---->Tech Stack`);
																	},
																	$$slots: { default: true }
																});
																$$renderer7.push("<!--]-->");
															} else {
																$$renderer7.push("<!--[!-->");
																$$renderer7.push("<!--]-->");
															}
															$$renderer7.push(` `);
															if (Table_head) {
																$$renderer7.push("<!--[-->");
																Table_head($$renderer7, {
																	class: "hidden sm:table-cell",
																	children: ($$renderer8) => {
																		$$renderer8.push(`<button class="flex items-center gap-1 font-semibold text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground">Updated `);
																		Arrow_up_down($$renderer8, { class: "h-3 w-3" });
																		$$renderer8.push(`<!----></button>`);
																	},
																	$$slots: { default: true }
																});
																$$renderer7.push("<!--]-->");
															} else {
																$$renderer7.push("<!--[!-->");
																$$renderer7.push("<!--]-->");
															}
															$$renderer7.push(` `);
															if (Table_head) {
																$$renderer7.push("<!--[-->");
																Table_head($$renderer7, {
																	class: "hidden sm:table-cell",
																	children: ($$renderer8) => {
																		$$renderer8.push(`<!---->Links`);
																	},
																	$$slots: { default: true }
																});
																$$renderer7.push("<!--]-->");
															} else {
																$$renderer7.push("<!--[!-->");
																$$renderer7.push("<!--]-->");
															}
															$$renderer7.push(` `);
															if (Table_head) {
																$$renderer7.push("<!--[-->");
																Table_head($$renderer7, {
																	class: "text-right w-30",
																	children: ($$renderer8) => {
																		$$renderer8.push(`<!---->Actions`);
																	},
																	$$slots: { default: true }
																});
																$$renderer7.push("<!--]-->");
															} else {
																$$renderer7.push("<!--[!-->");
																$$renderer7.push("<!--]-->");
															}
														},
														$$slots: { default: true }
													});
													$$renderer6.push("<!--]-->");
												} else {
													$$renderer6.push("<!--[!-->");
													$$renderer6.push("<!--]-->");
												}
											},
											$$slots: { default: true }
										});
										$$renderer5.push("<!--]-->");
									} else {
										$$renderer5.push("<!--[!-->");
										$$renderer5.push("<!--]-->");
									}
									$$renderer5.push(` `);
									if (Table_body) {
										$$renderer5.push("<!--[-->");
										Table_body($$renderer5, {
											children: ($$renderer6) => {
												if (filtered().length === 0) {
													$$renderer6.push("<!--[0-->");
													if (Table_row) {
														$$renderer6.push("<!--[-->");
														Table_row($$renderer6, {
															children: ($$renderer7) => {
																if (Table_cell) {
																	$$renderer7.push("<!--[-->");
																	Table_cell($$renderer7, {
																		colspan: 7,
																		class: "py-12 text-center text-sm text-muted-foreground",
																		children: ($$renderer8) => {
																			$$renderer8.push(`<!---->No projects match your search.`);
																		},
																		$$slots: { default: true }
																	});
																	$$renderer7.push("<!--]-->");
																} else {
																	$$renderer7.push("<!--[!-->");
																	$$renderer7.push("<!--]-->");
																}
															},
															$$slots: { default: true }
														});
														$$renderer6.push("<!--]-->");
													} else {
														$$renderer6.push("<!--[!-->");
														$$renderer6.push("<!--]-->");
													}
												} else {
													$$renderer6.push("<!--[-1-->");
													$$renderer6.push(`<!--[-->`);
													const each_array_2 = ensure_array_like(filtered());
													for (let index = 0, $$length = each_array_2.length; index < $$length; index++) {
														let project = each_array_2[index];
														if (Table_row) {
															$$renderer6.push("<!--[-->");
															Table_row($$renderer6, {
																class: "group hover:bg-muted/20",
																children: ($$renderer7) => {
																	if (Table_cell) {
																		$$renderer7.push("<!--[-->");
																		Table_cell($$renderer7, {
																			children: ($$renderer8) => {
																				$$renderer8.push(`<div class="flex items-center gap-3">`);
																				if (project.thumbnail) {
																					$$renderer8.push("<!--[0-->");
																					$$renderer8.push(`<img${attr("src", getFileUrl(project.thumbnail))}${attr("alt", project.title)} class="h-9 w-9 rounded-md object-cover border border-border/40 shrink-0"/>`);
																				} else {
																					$$renderer8.push("<!--[-1-->");
																					$$renderer8.push(`<div class="flex h-9 w-9 items-center justify-center rounded-md border border-border/40 bg-muted/50 text-muted-foreground shrink-0">`);
																					Folder_open($$renderer8, { class: "h-4 w-4" });
																					$$renderer8.push(`<!----></div>`);
																				}
																				$$renderer8.push(`<!--]--> <div class="min-w-0"><p class="truncate font-semibold text-sm leading-tight">${escape_html(project.title)}</p> <p class="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-2"><span class="flex items-center gap-1">`);
																				Layers($$renderer8, { class: "h-3 w-3" });
																				$$renderer8.push(`<!----> ${escape_html(project.techStack.length)} tools</span> <span class="flex items-center gap-1">`);
																				Calendar($$renderer8, { class: "h-3 w-3" });
																				$$renderer8.push(`<!----> ${escape_html(new Date(project.updatedAt).toLocaleDateString())}</span></p></div></div>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer7.push("<!--]-->");
																	} else {
																		$$renderer7.push("<!--[!-->");
																		$$renderer7.push("<!--]-->");
																	}
																	$$renderer7.push(` `);
																	if (Table_cell) {
																		$$renderer7.push("<!--[-->");
																		Table_cell($$renderer7, {
																			class: "hidden md:table-cell max-w-50",
																			children: ($$renderer8) => {
																				$$renderer8.push(`<p class="truncate text-xs text-muted-foreground">${escape_html(project.description)}</p>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer7.push("<!--]-->");
																	} else {
																		$$renderer7.push("<!--[!-->");
																		$$renderer7.push("<!--]-->");
																	}
																	$$renderer7.push(` `);
																	if (Table_cell) {
																		$$renderer7.push("<!--[-->");
																		Table_cell($$renderer7, {
																			children: ($$renderer8) => {
																				$$renderer8.push(`<span${attr_class(`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-tight ${stringify(statusVariant[project.status])}`)}>${escape_html(statusLabel[project.status] ?? project.status)}</span>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer7.push("<!--]-->");
																	} else {
																		$$renderer7.push("<!--[!-->");
																		$$renderer7.push("<!--]-->");
																	}
																	$$renderer7.push(` `);
																	if (Table_cell) {
																		$$renderer7.push("<!--[-->");
																		Table_cell($$renderer7, {
																			class: "hidden lg:table-cell",
																			children: ($$renderer8) => {
																				$$renderer8.push(`<div class="flex flex-wrap gap-1"><!--[-->`);
																				const each_array_3 = ensure_array_like(project.techStack.slice(0, 3));
																				for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
																					let tech = each_array_3[$$index_2];
																					$$renderer8.push(`<span class="rounded-sm bg-secondary/60 px-1.5 py-0.5 text-[10px] font-medium text-secondary-foreground border-none">${escape_html(tech)}</span>`);
																				}
																				$$renderer8.push(`<!--]--> `);
																				if (project.techStack.length > 3) {
																					$$renderer8.push("<!--[0-->");
																					$$renderer8.push(`<span class="text-[10px] text-muted-foreground/60 self-center">+${escape_html(project.techStack.length - 3)}</span>`);
																				} else $$renderer8.push("<!--[-1-->");
																				$$renderer8.push(`<!--]--></div>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer7.push("<!--]-->");
																	} else {
																		$$renderer7.push("<!--[!-->");
																		$$renderer7.push("<!--]-->");
																	}
																	$$renderer7.push(` `);
																	if (Table_cell) {
																		$$renderer7.push("<!--[-->");
																		Table_cell($$renderer7, {
																			class: "hidden sm:table-cell",
																			children: ($$renderer8) => {
																				$$renderer8.push(`<span class="text-xs text-muted-foreground">${escape_html(new Date(project.updatedAt).toLocaleDateString("id-ID", {
																					day: "2-digit",
																					month: "short",
																					year: "numeric"
																				}))}</span>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer7.push("<!--]-->");
																	} else {
																		$$renderer7.push("<!--[!-->");
																		$$renderer7.push("<!--]-->");
																	}
																	$$renderer7.push(` `);
																	if (Table_cell) {
																		$$renderer7.push("<!--[-->");
																		Table_cell($$renderer7, {
																			class: "hidden sm:table-cell",
																			children: ($$renderer8) => {
																				$$renderer8.push(`<div class="flex gap-1.5">`);
																				if (project.githubUrl) {
																					$$renderer8.push("<!--[0-->");
																					$$renderer8.push(`<a${attr("href", project.githubUrl)} target="_blank" class="flex h-7 w-7 items-center justify-center rounded-md border border-border/40 text-muted-foreground hover:bg-muted hover:text-foreground" title="Source code">`);
																					Code($$renderer8, { class: "h-3.5 w-3.5" });
																					$$renderer8.push(`<!----></a>`);
																				} else $$renderer8.push("<!--[-1-->");
																				$$renderer8.push(`<!--]--> `);
																				if (project.demoUrl) {
																					$$renderer8.push("<!--[0-->");
																					$$renderer8.push(`<a${attr("href", project.demoUrl)} target="_blank" class="flex h-7 w-7 items-center justify-center rounded-md border border-border/40 text-muted-foreground hover:bg-muted hover:text-foreground" title="Live demo">`);
																					External_link($$renderer8, { class: "h-3.5 w-3.5" });
																					$$renderer8.push(`<!----></a>`);
																				} else $$renderer8.push("<!--[-1-->");
																				$$renderer8.push(`<!--]--></div>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer7.push("<!--]-->");
																	} else {
																		$$renderer7.push("<!--[!-->");
																		$$renderer7.push("<!--]-->");
																	}
																	$$renderer7.push(` `);
																	if (Table_cell) {
																		$$renderer7.push("<!--[-->");
																		Table_cell($$renderer7, {
																			class: "text-right",
																			children: ($$renderer8) => {
																				$$renderer8.push(`<div class="flex items-center justify-end gap-1.5 transition-opacity">`);
																				Button($$renderer8, {
																					href: `/dashboard/projects/${stringify(project.id)}/view`,
																					variant: "ghost",
																					size: "icon",
																					class: "h-8 w-8 rounded-md hover:bg-muted",
																					title: "View Project",
																					children: ($$renderer9) => {
																						Eye($$renderer9, { class: "h-4 w-4" });
																					},
																					$$slots: { default: true }
																				});
																				$$renderer8.push(`<!----> `);
																				Button($$renderer8, {
																					href: `/dashboard/projects/${stringify(project.id)}`,
																					variant: "ghost",
																					size: "icon",
																					class: "h-8 w-8 rounded-md hover:bg-muted",
																					title: "Edit Project",
																					children: ($$renderer9) => {
																						Pencil($$renderer9, { class: "h-4 w-4" });
																					},
																					$$slots: { default: true }
																				});
																				$$renderer8.push(`<!----> <form action="?/delete" method="POST"><input type="hidden" name="id"${attr("value", project.id)}/> `);
																				Button($$renderer8, {
																					type: "submit",
																					variant: "ghost",
																					size: "icon",
																					class: "h-8 w-8 rounded-md text-destructive hover:bg-destructive/10 hover:text-destructive",
																					title: "Delete Project",
																					children: ($$renderer9) => {
																						Trash_2($$renderer9, { class: "h-4 w-4" });
																					},
																					$$slots: { default: true }
																				});
																				$$renderer8.push(`<!----></form></div>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer7.push("<!--]-->");
																	} else {
																		$$renderer7.push("<!--[!-->");
																		$$renderer7.push("<!--]-->");
																	}
																},
																$$slots: { default: true }
															});
															$$renderer6.push("<!--]-->");
														} else {
															$$renderer6.push("<!--[!-->");
															$$renderer6.push("<!--]-->");
														}
													}
													$$renderer6.push(`<!--]-->`);
												}
												$$renderer6.push(`<!--]-->`);
											},
											$$slots: { default: true }
										});
										$$renderer5.push("<!--]-->");
									} else {
										$$renderer5.push("<!--[!-->");
										$$renderer5.push("<!--]-->");
									}
								},
								$$slots: { default: true }
							});
							$$renderer4.push("<!--]-->");
						} else {
							$$renderer4.push("<!--[!-->");
							$$renderer4.push("<!--]-->");
						}
						$$renderer4.push(`</div> <div class="flex items-center justify-between border-t border-border/30 bg-muted/20 px-4 py-2.5 text-xs text-muted-foreground"><span>Showing ${escape_html(filtered().length)} of ${escape_html(data.projects.length)} projects</span> `);
						if (search || statusFilter !== "ALL") {
							$$renderer4.push("<!--[0-->");
							$$renderer4.push(`<button class="hover:text-foreground underline underline-offset-2">Clear filters</button>`);
						} else $$renderer4.push("<!--[-1-->");
						$$renderer4.push(`<!--]--></div></div>`);
					}
					$$renderer4.push(`<!--]-->`);
				};
				Dashboard_page($$renderer3, {
					title: "Projects",
					description: "Manage your portfolio projects and showcase your best work.",
					actions,
					children
				});
			}
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

//# sourceMappingURL=_page.svelte-Ss9RFXp2.js.map