import "./root-hPyMpEOi.js";
import { E as attr, I as ensure_array_like, L as escape_html, it as stringify } from "./renderer-CoNnoy0x.js";
import "./state.svelte-yQ996O6E.js";
import { a as generateExcerpt, i as formatDate, n as calculateReadTime, t as Button } from "./button-Ch6ZWsjV.js";
import { t as Badge } from "./badge-C1NswtNY.js";
import { t as File_text } from "./file-text-CZ2BWLJQ.js";
import { t as Plus } from "./plus-BompRSaj.js";
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
		$$renderer2.push(`<div class="p-6 max-w-7xl mx-auto w-full flex flex-col gap-6"><div class="flex items-center justify-between"><div class="flex flex-col gap-1"><h1 class="text-3xl font-bold tracking-tight">Blog Posts</h1> <p class="text-muted-foreground text-sm italic">Manage your articles and thoughts.</p></div> `);
		Button($$renderer2, {
			href: "/dashboard/blog/new",
			children: ($$renderer3) => {
				Plus($$renderer3, { class: "mr-2 h-4 w-4" });
				$$renderer3.push(`<!----> New Post`);
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----></div> <div class="rounded-md border bg-card shadow-sm">`);
		if (Table) {
			$$renderer2.push("<!--[-->");
			Table($$renderer2, {
				children: ($$renderer3) => {
					if (Table_header) {
						$$renderer3.push("<!--[-->");
						Table_header($$renderer3, {
							children: ($$renderer4) => {
								if (Table_row) {
									$$renderer4.push("<!--[-->");
									Table_row($$renderer4, {
										children: ($$renderer5) => {
											if (Table_head) {
												$$renderer5.push("<!--[-->");
												Table_head($$renderer5, {
													class: "w-[400px]",
													children: ($$renderer6) => {
														$$renderer6.push(`<!---->Post`);
													},
													$$slots: { default: true }
												});
												$$renderer5.push("<!--]-->");
											} else {
												$$renderer5.push("<!--[!-->");
												$$renderer5.push("<!--]-->");
											}
											$$renderer5.push(` `);
											if (Table_head) {
												$$renderer5.push("<!--[-->");
												Table_head($$renderer5, {
													children: ($$renderer6) => {
														$$renderer6.push(`<!---->Category`);
													},
													$$slots: { default: true }
												});
												$$renderer5.push("<!--]-->");
											} else {
												$$renderer5.push("<!--[!-->");
												$$renderer5.push("<!--]-->");
											}
											$$renderer5.push(` `);
											if (Table_head) {
												$$renderer5.push("<!--[-->");
												Table_head($$renderer5, {
													children: ($$renderer6) => {
														$$renderer6.push(`<!---->Status`);
													},
													$$slots: { default: true }
												});
												$$renderer5.push("<!--]-->");
											} else {
												$$renderer5.push("<!--[!-->");
												$$renderer5.push("<!--]-->");
											}
											$$renderer5.push(` `);
											if (Table_head) {
												$$renderer5.push("<!--[-->");
												Table_head($$renderer5, {
													children: ($$renderer6) => {
														$$renderer6.push(`<!---->Stats`);
													},
													$$slots: { default: true }
												});
												$$renderer5.push("<!--]-->");
											} else {
												$$renderer5.push("<!--[!-->");
												$$renderer5.push("<!--]-->");
											}
											$$renderer5.push(` `);
											if (Table_head) {
												$$renderer5.push("<!--[-->");
												Table_head($$renderer5, {
													children: ($$renderer6) => {
														$$renderer6.push(`<!---->Date`);
													},
													$$slots: { default: true }
												});
												$$renderer5.push("<!--]-->");
											} else {
												$$renderer5.push("<!--[!-->");
												$$renderer5.push("<!--]-->");
											}
											$$renderer5.push(` `);
											if (Table_head) {
												$$renderer5.push("<!--[-->");
												Table_head($$renderer5, {
													class: "text-right",
													children: ($$renderer6) => {
														$$renderer6.push(`<!---->Actions`);
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
							},
							$$slots: { default: true }
						});
						$$renderer3.push("<!--]-->");
					} else {
						$$renderer3.push("<!--[!-->");
						$$renderer3.push("<!--]-->");
					}
					$$renderer3.push(` `);
					if (Table_body) {
						$$renderer3.push("<!--[-->");
						Table_body($$renderer3, {
							children: ($$renderer4) => {
								if (data.posts.length === 0) {
									$$renderer4.push("<!--[0-->");
									if (Table_row) {
										$$renderer4.push("<!--[-->");
										Table_row($$renderer4, {
											children: ($$renderer5) => {
												if (Table_cell) {
													$$renderer5.push("<!--[-->");
													Table_cell($$renderer5, {
														colspan: 6,
														class: "h-24 text-center text-muted-foreground",
														children: ($$renderer6) => {
															$$renderer6.push(`<!---->No posts found. Start writing your first article!`);
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
								} else {
									$$renderer4.push("<!--[-1-->");
									$$renderer4.push(`<!--[-->`);
									const each_array = ensure_array_like(data.posts);
									for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
										let post = each_array[$$index];
										if (Table_row) {
											$$renderer4.push("<!--[-->");
											Table_row($$renderer4, {
												children: ($$renderer5) => {
													if (Table_cell) {
														$$renderer5.push("<!--[-->");
														Table_cell($$renderer5, {
															children: ($$renderer6) => {
																$$renderer6.push(`<div class="flex flex-col gap-1"><span class="font-medium line-clamp-1">${escape_html(post.title)}</span> <span class="text-xs text-muted-foreground line-clamp-1 italic">${escape_html(generateExcerpt(post.content, 60))}</span></div>`);
															},
															$$slots: { default: true }
														});
														$$renderer5.push("<!--]-->");
													} else {
														$$renderer5.push("<!--[!-->");
														$$renderer5.push("<!--]-->");
													}
													$$renderer5.push(` `);
													if (Table_cell) {
														$$renderer5.push("<!--[-->");
														Table_cell($$renderer5, {
															children: ($$renderer6) => {
																Badge($$renderer6, {
																	variant: "secondary",
																	class: "font-normal",
																	children: ($$renderer7) => {
																		$$renderer7.push(`<!---->${escape_html(post.category.name)}`);
																	},
																	$$slots: { default: true }
																});
															},
															$$slots: { default: true }
														});
														$$renderer5.push("<!--]-->");
													} else {
														$$renderer5.push("<!--[!-->");
														$$renderer5.push("<!--]-->");
													}
													$$renderer5.push(` `);
													if (Table_cell) {
														$$renderer5.push("<!--[-->");
														Table_cell($$renderer5, {
															children: ($$renderer6) => {
																$$renderer6.push(`<form action="?/togglePublish" method="POST"><input type="hidden" name="id"${attr("value", post.id)}/> <input type="hidden" name="published"${attr("value", post.published)}/> <button type="submit"${attr("disabled", isToggling === post.id, true)} class="flex items-center gap-1.5 transition-opacity hover:opacity-80 disabled:opacity-50">`);
																if (post.published) {
																	$$renderer6.push("<!--[0-->");
																	Badge($$renderer6, {
																		class: "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-emerald-500/20 gap-1",
																		children: ($$renderer7) => {
																			Globe($$renderer7, { size: 12 });
																			$$renderer7.push(`<!----> Published`);
																		},
																		$$slots: { default: true }
																	});
																} else {
																	$$renderer6.push("<!--[-1-->");
																	Badge($$renderer6, {
																		variant: "outline",
																		class: "text-muted-foreground gap-1",
																		children: ($$renderer7) => {
																			Lock($$renderer7, { size: 12 });
																			$$renderer7.push(`<!----> Draft`);
																		},
																		$$slots: { default: true }
																	});
																}
																$$renderer6.push(`<!--]--></button></form>`);
															},
															$$slots: { default: true }
														});
														$$renderer5.push("<!--]-->");
													} else {
														$$renderer5.push("<!--[!-->");
														$$renderer5.push("<!--]-->");
													}
													$$renderer5.push(` `);
													if (Table_cell) {
														$$renderer5.push("<!--[-->");
														Table_cell($$renderer5, {
															children: ($$renderer6) => {
																$$renderer6.push(`<div class="flex items-center text-xs text-muted-foreground">`);
																File_text($$renderer6, { class: "mr-1 h-3.5 w-3.5" });
																$$renderer6.push(`<!----> ${escape_html(calculateReadTime(post.content))}</div>`);
															},
															$$slots: { default: true }
														});
														$$renderer5.push("<!--]-->");
													} else {
														$$renderer5.push("<!--[!-->");
														$$renderer5.push("<!--]-->");
													}
													$$renderer5.push(` `);
													if (Table_cell) {
														$$renderer5.push("<!--[-->");
														Table_cell($$renderer5, {
															children: ($$renderer6) => {
																$$renderer6.push(`<span class="text-muted-foreground text-sm">${escape_html(formatDate(post.createdAt))}</span>`);
															},
															$$slots: { default: true }
														});
														$$renderer5.push("<!--]-->");
													} else {
														$$renderer5.push("<!--[!-->");
														$$renderer5.push("<!--]-->");
													}
													$$renderer5.push(` `);
													if (Table_cell) {
														$$renderer5.push("<!--[-->");
														Table_cell($$renderer5, {
															class: "text-right",
															children: ($$renderer6) => {
																$$renderer6.push(`<div class="flex justify-end gap-2">`);
																Button($$renderer6, {
																	variant: "ghost",
																	size: "icon",
																	href: `/blog/${stringify(post.slug)}`,
																	target: "_blank",
																	class: "h-8 w-8",
																	children: ($$renderer7) => {
																		Eye($$renderer7, { class: "h-4 w-4" });
																		$$renderer7.push(`<!----> <span class="sr-only">Preview</span>`);
																	},
																	$$slots: { default: true }
																});
																$$renderer6.push(`<!----> `);
																Button($$renderer6, {
																	variant: "ghost",
																	size: "icon",
																	href: `/dashboard/blog/${stringify(post.id)}`,
																	class: "h-8 w-8",
																	children: ($$renderer7) => {
																		Pencil($$renderer7, { class: "h-4 w-4" });
																		$$renderer7.push(`<!----> <span class="sr-only">Edit</span>`);
																	},
																	$$slots: { default: true }
																});
																$$renderer6.push(`<!----> <form action="?/delete" method="POST"><input type="hidden" name="id"${attr("value", post.id)}/> `);
																Button($$renderer6, {
																	variant: "ghost",
																	size: "icon",
																	type: "submit",
																	class: "h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10",
																	children: ($$renderer7) => {
																		Trash_2($$renderer7, { class: "h-4 w-4" });
																		$$renderer7.push(`<!----> <span class="sr-only">Delete</span>`);
																	},
																	$$slots: { default: true }
																});
																$$renderer6.push(`<!----></form></div>`);
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
									}
									$$renderer4.push(`<!--]-->`);
								}
								$$renderer4.push(`<!--]-->`);
							},
							$$slots: { default: true }
						});
						$$renderer3.push("<!--]-->");
					} else {
						$$renderer3.push("<!--[!-->");
						$$renderer3.push("<!--]-->");
					}
				},
				$$slots: { default: true }
			});
			$$renderer2.push("<!--]-->");
		} else {
			$$renderer2.push("<!--[!-->");
			$$renderer2.push("<!--]-->");
		}
		$$renderer2.push(`</div></div>`);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-C338vwc4.js.map