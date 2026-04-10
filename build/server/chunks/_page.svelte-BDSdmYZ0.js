import "./root-hPyMpEOi.js";
import { E as attr, I as ensure_array_like, L as escape_html, nt as spread_props } from "./renderer-CoNnoy0x.js";
import "./state.svelte-yQ996O6E.js";
import { t as Button } from "./button-Ch6ZWsjV.js";
import { t as Badge } from "./badge-C1NswtNY.js";
import { t as Icon } from "./Icon-CiEhqWrS.js";
import { t as X } from "./x-BUucf2v6.js";
import { t as Input } from "./input-CkhnL9Hs.js";
import { t as Label } from "./label-CecdpjkD.js";
import { t as Tag } from "./tag-Be9bZGa4.js";
import { t as Dashboard_page } from "./dashboard-page-D-aEFOn1.js";
import { t as Plus } from "./plus-Cx0aCHfI.js";
import { t as Trash_2 } from "./trash-2-C-0YQPwz.js";
import { a as Table_header, i as Table_head, n as Table_body, o as Table_row, r as Table_cell, t as Table } from "./table-row-D1cSEL9h.js";
import { t as Pencil } from "./pencil-Dx93cckm.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/categories/_page.svelte.js
function Check($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "check" },
		props,
		{ iconNode: [["path", { "d": "M20 6 9 17l-5-5" }]] }
	]));
}
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { data, form } = $$props;
		let isLoading = false;
		let editingId = null;
		let editValue = "";
		let isDeleteDialogOpen = false;
		let categoryToDelete = null;
		function startEditing(category) {
			editingId = category.id;
			editValue = category.name;
		}
		function cancelEditing() {
			editingId = null;
			editValue = "";
		}
		function openDeleteDialog(category) {
			categoryToDelete = category;
			isDeleteDialogOpen = true;
		}
		function closeDeleteDialog() {
			isDeleteDialogOpen = false;
			categoryToDelete = null;
		}
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			{
				let children = function($$renderer4) {
					$$renderer4.push(`<div class="grid gap-6 lg:grid-cols-[1fr_350px]"><div class="rounded-md border bg-card">`);
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
													children: ($$renderer7) => {
														if (Table_head) {
															$$renderer7.push("<!--[-->");
															Table_head($$renderer7, {
																children: ($$renderer8) => {
																	$$renderer8.push(`<!---->Name`);
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
																	$$renderer8.push(`<!---->Slug`);
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
																class: "text-center",
																children: ($$renderer8) => {
																	$$renderer8.push(`<!---->Posts`);
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
																class: "text-right",
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
											if (data.categories.length === 0) {
												$$renderer6.push("<!--[0-->");
												if (Table_row) {
													$$renderer6.push("<!--[-->");
													Table_row($$renderer6, {
														children: ($$renderer7) => {
															if (Table_cell) {
																$$renderer7.push("<!--[-->");
																Table_cell($$renderer7, {
																	colspan: 4,
																	class: "h-24 text-center text-muted-foreground",
																	children: ($$renderer8) => {
																		$$renderer8.push(`<!---->No categories found.`);
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
												const each_array = ensure_array_like(data.categories);
												for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
													let category = each_array[$$index];
													if (Table_row) {
														$$renderer6.push("<!--[-->");
														Table_row($$renderer6, {
															children: ($$renderer7) => {
																if (Table_cell) {
																	$$renderer7.push("<!--[-->");
																	Table_cell($$renderer7, {
																		class: "font-medium",
																		children: ($$renderer8) => {
																			if (editingId === category.id) {
																				$$renderer8.push("<!--[0-->");
																				$$renderer8.push(`<form action="?/update" method="POST" class="flex items-center gap-2"><input type="hidden" name="id"${attr("value", category.id)}/> `);
																				Input($$renderer8, {
																					name: "name",
																					class: "h-8 py-0",
																					required: true,
																					autofocus: true,
																					get value() {
																						return editValue;
																					},
																					set value($$value) {
																						editValue = $$value;
																						$$settled = false;
																					}
																				});
																				$$renderer8.push(`<!----> `);
																				Button($$renderer8, {
																					size: "icon",
																					variant: "ghost",
																					type: "submit",
																					class: "h-8 w-8 text-emerald-600",
																					disabled: isLoading,
																					children: ($$renderer9) => {
																						Check($$renderer9, { class: "h-4 w-4" });
																					},
																					$$slots: { default: true }
																				});
																				$$renderer8.push(`<!----> `);
																				Button($$renderer8, {
																					size: "icon",
																					variant: "ghost",
																					type: "button",
																					class: "h-8 w-8 text-destructive",
																					onclick: cancelEditing,
																					children: ($$renderer9) => {
																						X($$renderer9, { class: "h-4 w-4" });
																					},
																					$$slots: { default: true }
																				});
																				$$renderer8.push(`<!----></form>`);
																			} else {
																				$$renderer8.push("<!--[-1-->");
																				$$renderer8.push(`<div class="flex items-center gap-2">`);
																				Tag($$renderer8, { class: "h-3.5 w-3.5 text-muted-foreground" });
																				$$renderer8.push(`<!----> ${escape_html(category.name)}</div>`);
																			}
																			$$renderer8.push(`<!--]-->`);
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
																			$$renderer8.push(`<code class="text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground">${escape_html(category.slug)}</code>`);
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
																		class: "text-center",
																		children: ($$renderer8) => {
																			Badge($$renderer8, {
																				variant: "secondary",
																				class: "font-normal",
																				children: ($$renderer9) => {
																					$$renderer9.push(`<!---->${escape_html(category._count.posts)}`);
																				},
																				$$slots: { default: true }
																			});
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
																			$$renderer8.push(`<div class="flex justify-end gap-1">`);
																			Button($$renderer8, {
																				variant: "ghost",
																				size: "icon",
																				class: "h-8 w-8",
																				disabled: editingId !== null,
																				onclick: () => startEditing(category),
																				children: ($$renderer9) => {
																					Pencil($$renderer9, { class: "h-4 w-4" });
																					$$renderer9.push(`<!----> <span class="sr-only">Edit</span>`);
																				},
																				$$slots: { default: true }
																			});
																			$$renderer8.push(`<!----> `);
																			Button($$renderer8, {
																				variant: "ghost",
																				size: "icon",
																				type: "button",
																				class: "h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10",
																				disabled: editingId !== null || category._count.posts > 0,
																				onclick: () => openDeleteDialog(category),
																				children: ($$renderer9) => {
																					Trash_2($$renderer9, { class: "h-4 w-4" });
																					$$renderer9.push(`<!----> <span class="sr-only">Delete</span>`);
																				},
																				$$slots: { default: true }
																			});
																			$$renderer8.push(`<!----></div>`);
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
					$$renderer4.push(`</div> <div class="space-y-6"><div class="rounded-lg border bg-card p-6 shadow-sm"><h3 class="font-semibold text-lg mb-4">Add New Category</h3> <form action="?/create" method="POST" class="flex flex-col gap-4"><div class="grid gap-2">`);
					Label($$renderer4, {
						for: "name",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Category Name`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
						id: "name",
						name: "name",
						placeholder: "e.g. Tutorial",
						required: true,
						autocomplete: "off"
					});
					$$renderer4.push(`<!----></div> `);
					if (form?.message) {
						$$renderer4.push("<!--[0-->");
						$$renderer4.push(`<p class="text-xs font-medium text-destructive">${escape_html(form.message)}</p>`);
					} else $$renderer4.push("<!--[-1-->");
					$$renderer4.push(`<!--]--> `);
					Button($$renderer4, {
						type: "submit",
						class: "w-full",
						disabled: isLoading,
						children: ($$renderer5) => {
							$$renderer5.push("<!--[-1-->");
							Plus($$renderer5, { class: "mr-2 h-4 w-4" });
							$$renderer5.push(`<!----> Add Category`);
							$$renderer5.push(`<!--]-->`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----></form></div> <div class="rounded-lg border bg-muted/30 p-4"><h4 class="text-xs font-semibold mb-2 uppercase text-muted-foreground">Category Info</h4> <p class="text-xs text-muted-foreground leading-relaxed">Categories help organize your blog posts. Slugs are generated automatically from the name. You cannot delete a category that is currently used by blog posts.</p></div></div> `);
					if (isDeleteDialogOpen) {
						$$renderer4.push("<!--[0-->");
						$$renderer4.push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"><div class="bg-card border rounded-lg shadow-lg max-w-md w-full p-6 animate-in fade-in zoom-in duration-200"><h3 class="text-lg font-semibold mb-2">Delete Category</h3> <p class="text-sm text-muted-foreground mb-6">Are you sure you want to delete <span class="font-bold text-foreground">"${escape_html(categoryToDelete?.name)}"</span>? This action cannot be undone and will only succeed if no blog posts are attached.</p> <div class="flex justify-end gap-3">`);
						Button($$renderer4, {
							variant: "outline",
							onclick: closeDeleteDialog,
							disabled: isLoading,
							children: ($$renderer5) => {
								$$renderer5.push(`<!---->Cancel`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----> <form action="?/delete" method="POST"><input type="hidden" name="id"${attr("value", categoryToDelete?.id)}/> `);
						Button($$renderer4, {
							variant: "destructive",
							type: "submit",
							disabled: isLoading,
							children: ($$renderer5) => {
								$$renderer5.push("<!--[-1-->");
								$$renderer5.push(`Delete Category`);
								$$renderer5.push(`<!--]-->`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----></form></div></div></div>`);
					} else $$renderer4.push("<!--[-1-->");
					$$renderer4.push(`<!--]--></div>`);
				};
				Dashboard_page($$renderer3, {
					title: "Categories",
					description: "Manage categories for your blog posts.",
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

//# sourceMappingURL=_page.svelte-BDSdmYZ0.js.map