import { C as ensure_array_like, T as escape_html, c as attr, l as attr_class, pt as stringify, x as derived } from "./dev-D04rZKKe.js";
import { a as formatDate, o as generateExcerpt, r as calculateReadTime, t as Button } from "./button-DA4j647p.js";
import "./badge-cwPhXDyp.js";
import { t as Input } from "./input-DFCl4JL5.js";
import { t as Search } from "./search-DRtdeO--.js";
import { t as File_text } from "./file-text-BlWwYhRk.js";
import { t as Tag } from "./tag-DTkKNPw3.js";
import { t as Dashboard_page } from "./dashboard-page-CRUuroPf.js";
import { t as Plus } from "./plus-BExZv4GK.js";
import { t as Eye } from "./eye-CK8RaQHE.js";
import { t as Trash_2 } from "./trash-2-DAdCz1J1.js";
import { t as Globe } from "./globe-anevZEn1.js";
import { t as Lock } from "./lock-2ekMpjzO.js";
import "./forms-CxrA1JPp.js";
import { a as Table_header, i as Table_head, n as Table_body, o as Table_row, r as Table_cell, t as Table } from "./table-Bhl2UPa8.js";
import { t as Pencil } from "./pencil-mjSaXPMi.js";
import { t as Arrow_up_down } from "./arrow-up-down-D0JgX5Qc.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/blog/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		let isToggling = null;
		let search = "";
		let statusFilter = "ALL";
		let categoryFilter = "ALL";
		let sortKey = "createdAt";
		let sortDir = -1;
		const categories = derived(() => ["ALL", ...new Set(data.posts.map((p) => p.category.name))]);
		const filtered = derived(() => data.posts.filter((p) => {
			const q = search.toLowerCase();
			const mq = !q || p.title.toLowerCase().includes(q) || p.category.name.toLowerCase().includes(q) || p.content.toLowerCase().includes(q);
			const ms = statusFilter === "ALL" || statusFilter === "PUBLISHED" && p.published || statusFilter === "DRAFT" && !p.published;
			const mc = categoryFilter === "ALL" || p.category.name === categoryFilter;
			return mq && ms && mc;
		}).sort((a, b) => {
			let av = a[sortKey] ?? "";
			let bv = b[sortKey] ?? "";
			if (sortKey === "published") {
				av = a.published ? 1 : 0;
				bv = b.published ? 1 : 0;
			}
			return av < bv ? -sortDir : av > bv ? sortDir : 0;
		}));
		const stats = derived(() => ({
			total: data.posts.length,
			published: data.posts.filter((p) => p.published).length,
			draft: data.posts.filter((p) => !p.published).length,
			categories: new Set(data.posts.map((p) => p.category.name)).size
		}));
		const hasFilter = derived(() => search || statusFilter !== "ALL" || categoryFilter !== "ALL");
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			{
				function actions($$renderer) {
					Button($$renderer, {
						href: "/dashboard/blog/new",
						class: "shadow-sm",
						children: ($$renderer) => {
							Plus($$renderer, { class: "mr-2 h-4 w-4" });
							$$renderer.push(`<!----> New Post`);
						},
						$$slots: { default: true }
					});
				}
				function children($$renderer) {
					$$renderer.push(`<div class="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-5"><!--[-->`);
					const each_array = ensure_array_like([
						{
							label: "Total posts",
							value: stats().total
						},
						{
							label: "Published",
							value: stats().published
						},
						{
							label: "Drafts",
							value: stats().draft
						},
						{
							label: "Categories",
							value: stats().categories
						}
					]);
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let stat = each_array[$$index];
						$$renderer.push(`<div class="rounded-lg bg-muted/50 p-4"><p class="text-xs text-muted-foreground">${escape_html(stat.label)}</p> <p class="mt-1 text-2xl font-bold tracking-tight">${escape_html(stat.value)}</p></div>`);
					}
					$$renderer.push(`<!--]--></div> <div class="mb-4 flex flex-wrap items-center gap-3"><div class="relative flex-1 min-w-[180px]">`);
					Search($$renderer, { class: "absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" });
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						placeholder: "Search posts...",
						class: "pl-8 h-9 text-sm",
						get value() {
							return search;
						},
						set value($$value) {
							search = $$value;
							$$settled = false;
						}
					});
					$$renderer.push(`<!----></div> <div class="flex gap-1 flex-wrap"><!--[-->`);
					const each_array_1 = ensure_array_like([
						{
							key: "ALL",
							label: "All"
						},
						{
							key: "PUBLISHED",
							label: "Published"
						},
						{
							key: "DRAFT",
							label: "Draft"
						}
					]);
					for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
						let s = each_array_1[$$index_1];
						$$renderer.push(`<button${attr_class(`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${stringify(statusFilter === s.key ? "bg-primary text-primary-foreground border-primary" : "border-border/40 text-muted-foreground hover:bg-muted")}`)}>${escape_html(s.label)}</button>`);
					}
					$$renderer.push(`<!--]--></div> `);
					$$renderer.select({
						value: categoryFilter,
						class: "h-9 rounded-md border border-border/40 bg-card px-3 text-sm text-muted-foreground focus:outline-none focus:ring-1"
					}, ($$renderer) => {
						$$renderer.push(`<!--[-->`);
						const each_array_2 = ensure_array_like(categories());
						for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
							let cat = each_array_2[$$index_2];
							$$renderer.option({ value: cat }, ($$renderer) => {
								$$renderer.push(`${escape_html(cat === "ALL" ? "All categories" : cat)}`);
							});
						}
						$$renderer.push(`<!--]-->`);
					});
					$$renderer.push(`</div> <div class="rounded-xl border border-border/40 overflow-hidden"><div class="overflow-x-auto">`);
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
																class: "w-[300px]",
																children: ($$renderer) => {
																	$$renderer.push(`<button class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">Post `);
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
																children: ($$renderer) => {
																	$$renderer.push(`<!---->Category`);
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
																	$$renderer.push(`<button class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">Status `);
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
																	$$renderer.push(`<!---->Read time`);
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
																	$$renderer.push(`<button class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">Date `);
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
																class: "text-right w-[120px]",
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
																	colspan: 6,
																	class: "py-12 text-center text-sm text-muted-foreground",
																	children: ($$renderer) => {
																		$$renderer.push(`<!---->No posts match your search.`);
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
												const each_array_3 = ensure_array_like(filtered());
												for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
													let post = each_array_3[$$index_3];
													if (Table_row) {
														$$renderer.push("<!--[-->");
														Table_row($$renderer, {
															class: "group hover:bg-muted/20",
															children: ($$renderer) => {
																if (Table_cell) {
																	$$renderer.push("<!--[-->");
																	Table_cell($$renderer, {
																		children: ($$renderer) => {
																			$$renderer.push(`<div class="flex flex-col gap-0.5"><span class="font-semibold text-sm line-clamp-1">${escape_html(post.title)}</span> <span class="text-xs text-muted-foreground italic line-clamp-1">${escape_html(generateExcerpt(post.content, 70))}</span></div>`);
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
																			$$renderer.push(`<span class="inline-flex items-center gap-1 rounded-full border border-border/40 bg-secondary/40 px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground">`);
																			Tag($$renderer, { class: "h-3 w-3" });
																			$$renderer.push(`<!----> ${escape_html(post.category.name)}</span>`);
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
																			$$renderer.push(`<div class="flex flex-col gap-1.5 min-w-[100px]"><form action="?/togglePublish" method="POST"><input type="hidden" name="id"${attr("value", post.id)}/> <input type="hidden" name="published"${attr("value", post.published)}/> <button type="submit"${attr("disabled", isToggling === post.id, true)} title="Click to toggle Status"${attr_class(`inline-flex w-full items-center justify-between gap-1 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-tight transition-all hover:opacity-80 disabled:opacity-50 ${stringify(post.published ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 shadow-sm" : "bg-muted text-muted-foreground border-border/40")}`)}><span class="flex items-center gap-1.5">`);
																			if (post.published) {
																				$$renderer.push("<!--[0-->");
																				Globe($$renderer, { class: "h-3 w-3" });
																				$$renderer.push(`<!----> Published`);
																			} else {
																				$$renderer.push("<!--[-1-->");
																				Lock($$renderer, { class: "h-3 w-3" });
																				$$renderer.push(`<!----> Draft`);
																			}
																			$$renderer.push(`<!--]--></span> `);
																			if (isToggling === post.id) {
																				$$renderer.push("<!--[0-->");
																				Loader2($$renderer, { class: "h-2.5 w-2.5 animate-spin" });
																			} else $$renderer.push("<!--[-1-->");
																			$$renderer.push(`<!--]--></button></form> `);
																			if (post.featured) {
																				$$renderer.push("<!--[0-->");
																				$$renderer.push(`<div class="inline-flex w-fit items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 border border-amber-500/20 text-[9px] font-bold uppercase tracking-wider">★ Featured</div>`);
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
																			$$renderer.push(`<span class="flex items-center gap-1 text-xs text-muted-foreground">`);
																			File_text($$renderer, { class: "h-3.5 w-3.5" });
																			$$renderer.push(`<!----> ${escape_html(calculateReadTime(post.content))}</span>`);
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
																			$$renderer.push(`<span class="text-xs text-muted-foreground">${escape_html(formatDate(post.createdAt))}</span>`);
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
																			$$renderer.push(`<div class="flex justify-end gap-1.5">`);
																			Button($$renderer, {
																				variant: "ghost",
																				size: "icon",
																				href: `/blog/${stringify(post.slug)}`,
																				target: "_blank",
																				class: "h-8 w-8 rounded-md border border-border/40 opacity-0 group-hover:opacity-100 transition-opacity",
																				title: "Preview",
																				children: ($$renderer) => {
																					Eye($$renderer, { class: "h-3.5 w-3.5" });
																					$$renderer.push(`<!----> <span class="sr-only">Preview</span>`);
																				},
																				$$slots: { default: true }
																			});
																			$$renderer.push(`<!----> `);
																			Button($$renderer, {
																				variant: "ghost",
																				size: "icon",
																				href: `/dashboard/blog/${stringify(post.id)}`,
																				class: "h-8 w-8 rounded-md border border-border/40 opacity-0 group-hover:opacity-100 transition-opacity",
																				title: "Edit",
																				children: ($$renderer) => {
																					Pencil($$renderer, { class: "h-3.5 w-3.5" });
																					$$renderer.push(`<!----> <span class="sr-only">Edit</span>`);
																				},
																				$$slots: { default: true }
																			});
																			$$renderer.push(`<!----> <form action="?/delete" method="POST"><input type="hidden" name="id"${attr("value", post.id)}/> `);
																			Button($$renderer, {
																				variant: "ghost",
																				size: "icon",
																				type: "submit",
																				class: "h-8 w-8 rounded-md border border-border/40 text-destructive hover:bg-destructive/10 hover:border-destructive/30 opacity-0 group-hover:opacity-100 transition-opacity",
																				title: "Delete",
																				children: ($$renderer) => {
																					Trash_2($$renderer, { class: "h-3.5 w-3.5" });
																					$$renderer.push(`<!----> <span class="sr-only">Delete</span>`);
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
					$$renderer.push(`</div> <div class="flex items-center justify-between border-t border-border/30 bg-muted/20 px-4 py-2.5 text-xs text-muted-foreground"><span>Showing ${escape_html(filtered().length)} of ${escape_html(data.posts.length)} posts</span> `);
					if (hasFilter()) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<button class="underline underline-offset-2 hover:text-foreground">Clear filters</button>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div></div>`);
				}
				Dashboard_page($$renderer, {
					title: "Blog Posts",
					description: "Manage your articles and thoughts.",
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

//# sourceMappingURL=_page.svelte-BM-5mjMY.js.map