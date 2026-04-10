import "./root-hPyMpEOi.js";
import { E as attr, I as ensure_array_like, L as escape_html, it as stringify } from "./renderer-CoNnoy0x.js";
import "./state.svelte-yQ996O6E.js";
import { a as generateExcerpt, i as formatDate, n as calculateReadTime, t as Button } from "./button-Ch6ZWsjV.js";
import { t as Badge } from "./badge-C1NswtNY.js";
import { t as File_text } from "./file-text-CZ2BWLJQ.js";
import { t as Dashboard_page } from "./dashboard-page-D-aEFOn1.js";
import { t as Plus } from "./plus-Cx0aCHfI.js";
import { t as Eye } from "./eye-BJ7Jh70h.js";
import { t as Trash_2 } from "./trash-2-C-0YQPwz.js";
import { t as Globe } from "./globe-P75OaRP1.js";
import { t as Lock } from "./lock-DDqt2xEg.js";
import { a as Table_header, i as Table_head, n as Table_body, o as Table_row, r as Table_cell, t as Table } from "./table-row-D1cSEL9h.js";
import { t as Pencil } from "./pencil-Dx93cckm.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/blog/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { data } = $$props;
		let isToggling = null;
		{
			let actions = function($$renderer3) {
				Button($$renderer3, {
					href: "/dashboard/blog/new",
					children: ($$renderer4) => {
						Plus($$renderer4, { class: "mr-2 h-4 w-4" });
						$$renderer4.push(`<!----> New Post`);
					},
					$$slots: { default: true }
				});
			}, children = function($$renderer3) {
				$$renderer3.push(`<div class="rounded-md border bg-card shadow-sm">`);
				if (Table) {
					$$renderer3.push("<!--[-->");
					Table($$renderer3, {
						children: ($$renderer4) => {
							if (Table_header) {
								$$renderer4.push("<!--[-->");
								Table_header($$renderer4, {
									children: ($$renderer5) => {
										if (Table_row) {
											$$renderer5.push("<!--[-->");
											Table_row($$renderer5, {
												children: ($$renderer6) => {
													if (Table_head) {
														$$renderer6.push("<!--[-->");
														Table_head($$renderer6, {
															class: "w-[400px]",
															children: ($$renderer7) => {
																$$renderer7.push(`<!---->Post`);
															},
															$$slots: { default: true }
														});
														$$renderer6.push("<!--]-->");
													} else {
														$$renderer6.push("<!--[!-->");
														$$renderer6.push("<!--]-->");
													}
													$$renderer6.push(` `);
													if (Table_head) {
														$$renderer6.push("<!--[-->");
														Table_head($$renderer6, {
															children: ($$renderer7) => {
																$$renderer7.push(`<!---->Category`);
															},
															$$slots: { default: true }
														});
														$$renderer6.push("<!--]-->");
													} else {
														$$renderer6.push("<!--[!-->");
														$$renderer6.push("<!--]-->");
													}
													$$renderer6.push(` `);
													if (Table_head) {
														$$renderer6.push("<!--[-->");
														Table_head($$renderer6, {
															children: ($$renderer7) => {
																$$renderer7.push(`<!---->Status`);
															},
															$$slots: { default: true }
														});
														$$renderer6.push("<!--]-->");
													} else {
														$$renderer6.push("<!--[!-->");
														$$renderer6.push("<!--]-->");
													}
													$$renderer6.push(` `);
													if (Table_head) {
														$$renderer6.push("<!--[-->");
														Table_head($$renderer6, {
															children: ($$renderer7) => {
																$$renderer7.push(`<!---->Stats`);
															},
															$$slots: { default: true }
														});
														$$renderer6.push("<!--]-->");
													} else {
														$$renderer6.push("<!--[!-->");
														$$renderer6.push("<!--]-->");
													}
													$$renderer6.push(` `);
													if (Table_head) {
														$$renderer6.push("<!--[-->");
														Table_head($$renderer6, {
															children: ($$renderer7) => {
																$$renderer7.push(`<!---->Date`);
															},
															$$slots: { default: true }
														});
														$$renderer6.push("<!--]-->");
													} else {
														$$renderer6.push("<!--[!-->");
														$$renderer6.push("<!--]-->");
													}
													$$renderer6.push(` `);
													if (Table_head) {
														$$renderer6.push("<!--[-->");
														Table_head($$renderer6, {
															class: "text-right",
															children: ($$renderer7) => {
																$$renderer7.push(`<!---->Actions`);
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
									},
									$$slots: { default: true }
								});
								$$renderer4.push("<!--]-->");
							} else {
								$$renderer4.push("<!--[!-->");
								$$renderer4.push("<!--]-->");
							}
							$$renderer4.push(` `);
							if (Table_body) {
								$$renderer4.push("<!--[-->");
								Table_body($$renderer4, {
									children: ($$renderer5) => {
										if (data.posts.length === 0) {
											$$renderer5.push("<!--[0-->");
											if (Table_row) {
												$$renderer5.push("<!--[-->");
												Table_row($$renderer5, {
													children: ($$renderer6) => {
														if (Table_cell) {
															$$renderer6.push("<!--[-->");
															Table_cell($$renderer6, {
																colspan: 6,
																class: "h-24 text-center text-muted-foreground",
																children: ($$renderer7) => {
																	$$renderer7.push(`<!---->No posts found. Start writing your first article!`);
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
										} else {
											$$renderer5.push("<!--[-1-->");
											$$renderer5.push(`<!--[-->`);
											const each_array = ensure_array_like(data.posts);
											for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
												let post = each_array[$$index];
												if (Table_row) {
													$$renderer5.push("<!--[-->");
													Table_row($$renderer5, {
														children: ($$renderer6) => {
															if (Table_cell) {
																$$renderer6.push("<!--[-->");
																Table_cell($$renderer6, {
																	children: ($$renderer7) => {
																		$$renderer7.push(`<div class="flex flex-col gap-1"><span class="font-medium line-clamp-1">${escape_html(post.title)}</span> <span class="text-xs text-muted-foreground line-clamp-1 italic">${escape_html(generateExcerpt(post.content, 60))}</span></div>`);
																	},
																	$$slots: { default: true }
																});
																$$renderer6.push("<!--]-->");
															} else {
																$$renderer6.push("<!--[!-->");
																$$renderer6.push("<!--]-->");
															}
															$$renderer6.push(` `);
															if (Table_cell) {
																$$renderer6.push("<!--[-->");
																Table_cell($$renderer6, {
																	children: ($$renderer7) => {
																		Badge($$renderer7, {
																			variant: "secondary",
																			class: "font-normal",
																			children: ($$renderer8) => {
																				$$renderer8.push(`<!---->${escape_html(post.category.name)}`);
																			},
																			$$slots: { default: true }
																		});
																	},
																	$$slots: { default: true }
																});
																$$renderer6.push("<!--]-->");
															} else {
																$$renderer6.push("<!--[!-->");
																$$renderer6.push("<!--]-->");
															}
															$$renderer6.push(` `);
															if (Table_cell) {
																$$renderer6.push("<!--[-->");
																Table_cell($$renderer6, {
																	children: ($$renderer7) => {
																		$$renderer7.push(`<form action="?/togglePublish" method="POST"><input type="hidden" name="id"${attr("value", post.id)}/> <input type="hidden" name="published"${attr("value", post.published)}/> <button type="submit"${attr("disabled", isToggling === post.id, true)} class="flex items-center gap-1.5 transition-opacity hover:opacity-80 disabled:opacity-50">`);
																		if (post.published) {
																			$$renderer7.push("<!--[0-->");
																			Badge($$renderer7, {
																				class: "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-emerald-500/20 gap-1",
																				children: ($$renderer8) => {
																					Globe($$renderer8, { size: 12 });
																					$$renderer8.push(`<!----> Published`);
																				},
																				$$slots: { default: true }
																			});
																		} else {
																			$$renderer7.push("<!--[-1-->");
																			Badge($$renderer7, {
																				variant: "outline",
																				class: "text-muted-foreground gap-1",
																				children: ($$renderer8) => {
																					Lock($$renderer8, { size: 12 });
																					$$renderer8.push(`<!----> Draft`);
																				},
																				$$slots: { default: true }
																			});
																		}
																		$$renderer7.push(`<!--]--></button></form>`);
																	},
																	$$slots: { default: true }
																});
																$$renderer6.push("<!--]-->");
															} else {
																$$renderer6.push("<!--[!-->");
																$$renderer6.push("<!--]-->");
															}
															$$renderer6.push(` `);
															if (Table_cell) {
																$$renderer6.push("<!--[-->");
																Table_cell($$renderer6, {
																	children: ($$renderer7) => {
																		$$renderer7.push(`<div class="flex items-center text-xs text-muted-foreground">`);
																		File_text($$renderer7, { class: "mr-1 h-3.5 w-3.5" });
																		$$renderer7.push(`<!----> ${escape_html(calculateReadTime(post.content))}</div>`);
																	},
																	$$slots: { default: true }
																});
																$$renderer6.push("<!--]-->");
															} else {
																$$renderer6.push("<!--[!-->");
																$$renderer6.push("<!--]-->");
															}
															$$renderer6.push(` `);
															if (Table_cell) {
																$$renderer6.push("<!--[-->");
																Table_cell($$renderer6, {
																	children: ($$renderer7) => {
																		$$renderer7.push(`<span class="text-muted-foreground text-sm">${escape_html(formatDate(post.createdAt))}</span>`);
																	},
																	$$slots: { default: true }
																});
																$$renderer6.push("<!--]-->");
															} else {
																$$renderer6.push("<!--[!-->");
																$$renderer6.push("<!--]-->");
															}
															$$renderer6.push(` `);
															if (Table_cell) {
																$$renderer6.push("<!--[-->");
																Table_cell($$renderer6, {
																	class: "text-right",
																	children: ($$renderer7) => {
																		$$renderer7.push(`<div class="flex justify-end gap-2">`);
																		Button($$renderer7, {
																			variant: "ghost",
																			size: "icon",
																			href: `/blog/${stringify(post.slug)}`,
																			target: "_blank",
																			class: "h-8 w-8",
																			children: ($$renderer8) => {
																				Eye($$renderer8, { class: "h-4 w-4" });
																				$$renderer8.push(`<!----> <span class="sr-only">Preview</span>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer7.push(`<!----> `);
																		Button($$renderer7, {
																			variant: "ghost",
																			size: "icon",
																			href: `/dashboard/blog/${stringify(post.id)}`,
																			class: "h-8 w-8",
																			children: ($$renderer8) => {
																				Pencil($$renderer8, { class: "h-4 w-4" });
																				$$renderer8.push(`<!----> <span class="sr-only">Edit</span>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer7.push(`<!----> <form action="?/delete" method="POST"><input type="hidden" name="id"${attr("value", post.id)}/> `);
																		Button($$renderer7, {
																			variant: "ghost",
																			size: "icon",
																			type: "submit",
																			class: "h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10",
																			children: ($$renderer8) => {
																				Trash_2($$renderer8, { class: "h-4 w-4" });
																				$$renderer8.push(`<!----> <span class="sr-only">Delete</span>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer7.push(`<!----></form></div>`);
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
											}
											$$renderer5.push(`<!--]-->`);
										}
										$$renderer5.push(`<!--]-->`);
									},
									$$slots: { default: true }
								});
								$$renderer4.push("<!--]-->");
							} else {
								$$renderer4.push("<!--[!-->");
								$$renderer4.push("<!--]-->");
							}
						},
						$$slots: { default: true }
					});
					$$renderer3.push("<!--]-->");
				} else {
					$$renderer3.push("<!--[!-->");
					$$renderer3.push("<!--]-->");
				}
				$$renderer3.push(`</div>`);
			};
			Dashboard_page($$renderer2, {
				title: "Blog Posts",
				description: "Manage your articles and thoughts.",
				actions,
				children
			});
		}
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-B_oKvg_4.js.map