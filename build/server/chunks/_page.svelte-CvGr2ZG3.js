import "./root-hPyMpEOi.js";
import { D as attr_class, E as attr, I as ensure_array_like, L as escape_html, P as derived, it as stringify } from "./renderer-CoNnoy0x.js";
import "./state.svelte-yQ996O6E.js";
import { a as formatDate, o as generateExcerpt, r as calculateReadTime, t as Button } from "./button-JWKRuBhr.js";
import "./badge-BhT1H9Q3.js";
import { t as Input } from "./input-yKAcSgEU.js";
import { t as Search } from "./search-dSF40r3G.js";
import { t as File_text } from "./file-text-DZj2evBP.js";
import { t as Tag } from "./tag-DPzeKWfG.js";
import { t as Dashboard_page } from "./dashboard-page-DbMyEhcp.js";
import { t as Plus } from "./plus-Bjw3hl99.js";
import { t as Eye } from "./eye-vfN4IFre.js";
import { t as Trash_2 } from "./trash-2-D7az2Ppd.js";
import { t as Globe } from "./globe-BBsnsNSQ.js";
import { t as Lock } from "./lock-CgOjRqis.js";
import { a as Table_header, i as Table_head, n as Table_body, o as Table_row, r as Table_cell, t as Table } from "./table-row-Zxfuky06.js";
import { t as Arrow_up_down } from "./arrow-up-down-D6jN9a8A.js";
import { t as Pencil } from "./pencil-30dr0DJK.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/blog/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
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
			return (!q || p.title.toLowerCase().includes(q) || p.category.name.toLowerCase().includes(q) || p.content.toLowerCase().includes(q)) && statusFilter === "ALL" && categoryFilter === "ALL";
		}).sort((a, b) => {
			let av = a[sortKey] ?? "";
			let bv = b[sortKey] ?? "";
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
		function $$render_inner($$renderer3) {
			{
				let actions = function($$renderer4) {
					Button($$renderer4, {
						href: "/dashboard/blog/new",
						class: "shadow-sm",
						children: ($$renderer5) => {
							Plus($$renderer5, { class: "mr-2 h-4 w-4" });
							$$renderer5.push(`<!----> New Post`);
						},
						$$slots: { default: true }
					});
				}, children = function($$renderer4) {
					$$renderer4.push(`<div class="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-5"><!--[-->`);
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
						$$renderer4.push(`<div class="rounded-lg bg-muted/50 p-4"><p class="text-xs text-muted-foreground">${escape_html(stat.label)}</p> <p class="mt-1 text-2xl font-bold tracking-tight">${escape_html(stat.value)}</p></div>`);
					}
					$$renderer4.push(`<!--]--></div> <div class="mb-4 flex flex-wrap items-center gap-3"><div class="relative flex-1 min-w-[180px]">`);
					Search($$renderer4, { class: "absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" });
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
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
					$$renderer4.push(`<!----></div> <div class="flex gap-1 flex-wrap"><!--[-->`);
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
						$$renderer4.push(`<button${attr_class(`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${stringify(statusFilter === s.key ? "bg-primary text-primary-foreground border-primary" : "border-border/40 text-muted-foreground hover:bg-muted")}`)}>${escape_html(s.label)}</button>`);
					}
					$$renderer4.push(`<!--]--></div> `);
					$$renderer4.select({
						value: categoryFilter,
						class: "h-9 rounded-md border border-border/40 bg-card px-3 text-sm text-muted-foreground focus:outline-none focus:ring-1"
					}, ($$renderer5) => {
						$$renderer5.push(`<!--[-->`);
						const each_array_2 = ensure_array_like(categories());
						for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
							let cat = each_array_2[$$index_2];
							$$renderer5.option({ value: cat }, ($$renderer6) => {
								$$renderer6.push(`${escape_html(cat === "ALL" ? "All categories" : cat)}`);
							});
						}
						$$renderer5.push(`<!--]-->`);
					});
					$$renderer4.push(`</div> <div class="rounded-xl border border-border/40 overflow-hidden"><div class="overflow-x-auto">`);
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
																class: "w-[300px]",
																children: ($$renderer8) => {
																	$$renderer8.push(`<button class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">Post `);
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
																children: ($$renderer8) => {
																	$$renderer8.push(`<!---->Category`);
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
																	$$renderer8.push(`<button class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">Status `);
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
																	$$renderer8.push(`<!---->Read time`);
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
																	$$renderer8.push(`<button class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">Date `);
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
																class: "text-right w-[120px]",
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
																	colspan: 6,
																	class: "py-12 text-center text-sm text-muted-foreground",
																	children: ($$renderer8) => {
																		$$renderer8.push(`<!---->No posts match your search.`);
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
												const each_array_3 = ensure_array_like(filtered());
												for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
													let post = each_array_3[$$index_3];
													if (Table_row) {
														$$renderer6.push("<!--[-->");
														Table_row($$renderer6, {
															class: "group hover:bg-muted/20",
															children: ($$renderer7) => {
																if (Table_cell) {
																	$$renderer7.push("<!--[-->");
																	Table_cell($$renderer7, {
																		children: ($$renderer8) => {
																			$$renderer8.push(`<div class="flex flex-col gap-0.5"><span class="font-semibold text-sm line-clamp-1">${escape_html(post.title)}</span> <span class="text-xs text-muted-foreground italic line-clamp-1">${escape_html(generateExcerpt(post.content, 70))}</span></div>`);
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
																			$$renderer8.push(`<span class="inline-flex items-center gap-1 rounded-full border border-border/40 bg-secondary/40 px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground">`);
																			Tag($$renderer8, { class: "h-3 w-3" });
																			$$renderer8.push(`<!----> ${escape_html(post.category.name)}</span>`);
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
																			$$renderer8.push(`<form action="?/togglePublish" method="POST"><input type="hidden" name="id"${attr("value", post.id)}/> <input type="hidden" name="published"${attr("value", post.published)}/> <button type="submit"${attr("disabled", isToggling === post.id, true)} title="Click to toggle"${attr_class(`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-tight transition-opacity hover:opacity-80 disabled:opacity-50 ${stringify(post.published ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-muted text-muted-foreground border-border/40")}`)}>`);
																			if (post.published) {
																				$$renderer8.push("<!--[0-->");
																				Globe($$renderer8, { class: "h-3 w-3" });
																				$$renderer8.push(`<!----> Published`);
																			} else {
																				$$renderer8.push("<!--[-1-->");
																				Lock($$renderer8, { class: "h-3 w-3" });
																				$$renderer8.push(`<!----> Draft`);
																			}
																			$$renderer8.push(`<!--]--></button></form>`);
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
																			$$renderer8.push(`<span class="flex items-center gap-1 text-xs text-muted-foreground">`);
																			File_text($$renderer8, { class: "h-3.5 w-3.5" });
																			$$renderer8.push(`<!----> ${escape_html(calculateReadTime(post.content))}</span>`);
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
																			$$renderer8.push(`<span class="text-xs text-muted-foreground">${escape_html(formatDate(post.createdAt))}</span>`);
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
																			$$renderer8.push(`<div class="flex justify-end gap-1.5">`);
																			Button($$renderer8, {
																				variant: "ghost",
																				size: "icon",
																				href: `/blog/${stringify(post.slug)}`,
																				target: "_blank",
																				class: "h-8 w-8 rounded-md border border-border/40 opacity-0 group-hover:opacity-100 transition-opacity",
																				title: "Preview",
																				children: ($$renderer9) => {
																					Eye($$renderer9, { class: "h-3.5 w-3.5" });
																					$$renderer9.push(`<!----> <span class="sr-only">Preview</span>`);
																				},
																				$$slots: { default: true }
																			});
																			$$renderer8.push(`<!----> `);
																			Button($$renderer8, {
																				variant: "ghost",
																				size: "icon",
																				href: `/dashboard/blog/${stringify(post.id)}`,
																				class: "h-8 w-8 rounded-md border border-border/40 opacity-0 group-hover:opacity-100 transition-opacity",
																				title: "Edit",
																				children: ($$renderer9) => {
																					Pencil($$renderer9, { class: "h-3.5 w-3.5" });
																					$$renderer9.push(`<!----> <span class="sr-only">Edit</span>`);
																				},
																				$$slots: { default: true }
																			});
																			$$renderer8.push(`<!----> <form action="?/delete" method="POST"><input type="hidden" name="id"${attr("value", post.id)}/> `);
																			Button($$renderer8, {
																				variant: "ghost",
																				size: "icon",
																				type: "submit",
																				class: "h-8 w-8 rounded-md border border-border/40 text-destructive hover:bg-destructive/10 hover:border-destructive/30 opacity-0 group-hover:opacity-100 transition-opacity",
																				title: "Delete",
																				children: ($$renderer9) => {
																					Trash_2($$renderer9, { class: "h-3.5 w-3.5" });
																					$$renderer9.push(`<!----> <span class="sr-only">Delete</span>`);
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
					$$renderer4.push(`</div> <div class="flex items-center justify-between border-t border-border/30 bg-muted/20 px-4 py-2.5 text-xs text-muted-foreground"><span>Showing ${escape_html(filtered().length)} of ${escape_html(data.posts.length)} posts</span> `);
					if (hasFilter()) {
						$$renderer4.push("<!--[0-->");
						$$renderer4.push(`<button class="underline underline-offset-2 hover:text-foreground">Clear filters</button>`);
					} else $$renderer4.push("<!--[-1-->");
					$$renderer4.push(`<!--]--></div></div>`);
				};
				Dashboard_page($$renderer3, {
					title: "Blog Posts",
					description: "Manage your articles and thoughts.",
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

//# sourceMappingURL=_page.svelte-CvGr2ZG3.js.map