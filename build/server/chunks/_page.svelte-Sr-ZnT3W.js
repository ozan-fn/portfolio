import "./root-hPyMpEOi.js";
import { A as bind_props, E as attr, I as ensure_array_like, L as escape_html, P as derived, Z as props_id, k as attributes, nt as spread_props } from "./renderer-CoNnoy0x.js";
import "./state.svelte-yQ996O6E.js";
import { f as createId, l as boxWith, x as mergeProps } from "./create-id-vdhYoWyc.js";
import { i as cn, n as buttonVariants, t as Button } from "./button-JWKRuBhr.js";
import { t as Icon } from "./Icon-DsjQn-Ts.js";
import { t as X } from "./x-DUuZNArf.js";
import { t as Input } from "./input-yKAcSgEU.js";
import { t as Label } from "./label-XufGbXy_.js";
import { n as DialogActionState } from "./dialog-description-CQMejHjJ.js";
import { t as Tag } from "./tag-DPzeKWfG.js";
import { t as Dashboard_page } from "./dashboard-page-DbMyEhcp.js";
import { t as Plus } from "./plus-Bjw3hl99.js";
import { t as Trash_2 } from "./trash-2-D7az2Ppd.js";
import { a as Table_header, i as Table_head, n as Table_body, o as Table_row, r as Table_cell, t as Table } from "./table-row-Zxfuky06.js";
import { t as Pencil } from "./pencil-30dr0DJK.js";
import { a as Alert_dialog_footer, i as Alert_dialog_description, n as Alert_dialog_cancel, o as Alert_dialog_header, r as Alert_dialog_content, s as Alert_dialog_title, t as Alert_dialog } from "./alert-dialog-description-DQ6tBYWu.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/categories/_page.svelte.js
function Alert_dialog_action$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		const uid = props_id($$renderer2);
		let { children, child, id = createId(uid), ref = null, $$slots, $$events, ...restProps } = $$props;
		const actionState = DialogActionState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, actionState.props));
		if (child) {
			$$renderer2.push("<!--[0-->");
			child($$renderer2, { props: mergedProps() });
			$$renderer2.push(`<!---->`);
		} else {
			$$renderer2.push("<!--[-1-->");
			$$renderer2.push(`<button${attributes({ ...mergedProps() })}>`);
			children?.($$renderer2);
			$$renderer2.push(`<!----></button>`);
		}
		$$renderer2.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
function Alert_dialog_action($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, variant = "default", size = "default", $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			if (Alert_dialog_action$1) {
				$$renderer3.push("<!--[-->");
				Alert_dialog_action$1($$renderer3, spread_props([
					{
						"data-slot": "alert-dialog-action",
						class: cn(buttonVariants({
							variant,
							size
						}), "cn-alert-dialog-action", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer3.push("<!--]-->");
			} else {
				$$renderer3.push("<!--[!-->");
				$$renderer3.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer2.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer2.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
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
		let deleteTarget = null;
		function startEditing(category) {
			editingId = category.id;
			editValue = category.name;
		}
		function cancelEditing() {
			editingId = null;
			editValue = "";
		}
		const stats = derived(() => ({
			total: data.categories.length,
			inUse: data.categories.filter((c) => c._count.posts > 0).length,
			unused: data.categories.filter((c) => c._count.posts === 0).length
		}));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			{
				let children = function($$renderer4) {
					$$renderer4.push(`<div class="grid grid-cols-3 gap-3 mb-5"><!--[-->`);
					const each_array = ensure_array_like([
						{
							label: "Total categories",
							value: stats().total
						},
						{
							label: "In use",
							value: stats().inUse
						},
						{
							label: "Unused",
							value: stats().unused
						}
					]);
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let stat = each_array[$$index];
						$$renderer4.push(`<div class="rounded-lg bg-muted/50 p-4"><p class="text-xs text-muted-foreground">${escape_html(stat.label)}</p> <p class="mt-1 text-2xl font-bold tracking-tight">${escape_html(stat.value)}</p></div>`);
					}
					$$renderer4.push(`<!--]--></div> <div class="grid gap-6 lg:grid-cols-[1fr_320px] items-start"><div class="rounded-xl border border-border/40 overflow-hidden"><div class="overflow-x-auto">`);
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
																class: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
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
																class: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
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
																class: "text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground w-[80px]",
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
																class: "text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground w-[100px]",
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
																	class: "py-12 text-center text-sm text-muted-foreground",
																	children: ($$renderer8) => {
																		$$renderer8.push(`<!---->No categories yet. Add your first one!`);
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
												const each_array_1 = ensure_array_like(data.categories);
												for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
													let category = each_array_1[$$index_1];
													if (Table_row) {
														$$renderer6.push("<!--[-->");
														Table_row($$renderer6, {
															class: "group hover:bg-muted/20",
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
																					class: "h-8 py-0 text-sm",
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
																					class: "h-8 w-8 rounded-md border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20",
																					disabled: isLoading,
																					children: ($$renderer9) => {
																						Check($$renderer9, { class: "h-3.5 w-3.5" });
																					},
																					$$slots: { default: true }
																				});
																				$$renderer8.push(`<!----> `);
																				Button($$renderer8, {
																					size: "icon",
																					variant: "ghost",
																					type: "button",
																					class: "h-8 w-8 rounded-md border border-border/40 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30",
																					onclick: cancelEditing,
																					children: ($$renderer9) => {
																						X($$renderer9, { class: "h-3.5 w-3.5" });
																					},
																					$$slots: { default: true }
																				});
																				$$renderer8.push(`<!----></form>`);
																			} else {
																				$$renderer8.push("<!--[-1-->");
																				$$renderer8.push(`<div class="flex items-center gap-2">`);
																				Tag($$renderer8, { class: "h-3.5 w-3.5 text-muted-foreground flex-shrink-0" });
																				$$renderer8.push(`<!----> <span class="text-sm font-semibold">${escape_html(category.name)}</span></div>`);
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
																			$$renderer8.push(`<code class="rounded-sm bg-muted/60 border border-border/40 px-1.5 py-0.5 text-[11px] text-muted-foreground font-mono">${escape_html(category.slug)}</code>`);
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
																			$$renderer8.push(`<span class="inline-flex items-center rounded-full border border-border/40 bg-secondary/40 px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground">${escape_html(category._count.posts)}</span>`);
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
																				class: "h-8 w-8 rounded-md border border-border/40 opacity-0 group-hover:opacity-100 transition-opacity",
																				disabled: editingId !== null,
																				onclick: () => startEditing(category),
																				title: "Edit",
																				children: ($$renderer9) => {
																					Pencil($$renderer9, { class: "h-3.5 w-3.5" });
																					$$renderer9.push(`<!----> <span class="sr-only">Edit</span>`);
																				},
																				$$slots: { default: true }
																			});
																			$$renderer8.push(`<!----> `);
																			Button($$renderer8, {
																				variant: "ghost",
																				size: "icon",
																				type: "button",
																				class: "h-8 w-8 rounded-md border border-border/40 text-destructive hover:bg-destructive/10 hover:border-destructive/30 opacity-0 group-hover:opacity-100 transition-opacity",
																				disabled: editingId !== null || category._count.posts > 0,
																				title: category._count.posts > 0 ? "Cannot delete: has posts" : "Delete",
																				onclick: () => deleteTarget = {
																					id: category.id,
																					name: category.name
																				},
																				children: ($$renderer9) => {
																					Trash_2($$renderer9, { class: "h-3.5 w-3.5" });
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
					$$renderer4.push(`</div> <div class="border-t border-border/30 bg-muted/20 px-4 py-2.5 text-xs text-muted-foreground">${escape_html(data.categories.length)}
          ${escape_html(data.categories.length === 1 ? "category" : "categories")} total</div></div> <div class="flex flex-col gap-4"><div class="rounded-xl border border-border/40 bg-card p-5"><h3 class="text-base font-semibold mb-4">Add New Category</h3> <form action="?/create" method="POST" class="flex flex-col gap-4"><div class="flex flex-col gap-1.5">`);
					Label($$renderer4, {
						for: "name",
						class: "text-xs font-medium text-muted-foreground",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Category name`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
						id: "name",
						name: "name",
						placeholder: "e.g. Tutorial",
						required: true,
						autocomplete: "off",
						class: "h-9 text-sm"
					});
					$$renderer4.push(`<!----></div> `);
					if (form?.message) {
						$$renderer4.push("<!--[0-->");
						$$renderer4.push(`<p class="text-xs font-medium text-destructive">${escape_html(form.message)}</p>`);
					} else $$renderer4.push("<!--[-1-->");
					$$renderer4.push(`<!--]--> `);
					Button($$renderer4, {
						type: "submit",
						class: "w-full shadow-sm",
						disabled: isLoading,
						children: ($$renderer5) => {
							$$renderer5.push("<!--[-1-->");
							Plus($$renderer5, { class: "mr-2 h-4 w-4" });
							$$renderer5.push(`<!----> Add Category`);
							$$renderer5.push(`<!--]-->`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----></form></div> <div class="rounded-xl border border-border/40 bg-muted/30 p-4"><h4 class="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Category info</h4> <p class="text-xs text-muted-foreground leading-relaxed">Categories help organize your blog posts. Slugs are generated automatically from the name. You cannot delete a category that is currently used by blog posts.</p></div></div></div> `);
					if (Alert_dialog) {
						$$renderer4.push("<!--[-->");
						Alert_dialog($$renderer4, {
							open: deleteTarget !== null,
							onOpenChange: (v) => {
								if (!v) deleteTarget = null;
							},
							children: ($$renderer5) => {
								if (Alert_dialog_content) {
									$$renderer5.push("<!--[-->");
									Alert_dialog_content($$renderer5, {
										class: "rounded-xl",
										children: ($$renderer6) => {
											if (Alert_dialog_header) {
												$$renderer6.push("<!--[-->");
												Alert_dialog_header($$renderer6, {
													children: ($$renderer7) => {
														if (Alert_dialog_title) {
															$$renderer7.push("<!--[-->");
															Alert_dialog_title($$renderer7, {
																children: ($$renderer8) => {
																	$$renderer8.push(`<!---->Delete Category`);
																},
																$$slots: { default: true }
															});
															$$renderer7.push("<!--]-->");
														} else {
															$$renderer7.push("<!--[!-->");
															$$renderer7.push("<!--]-->");
														}
														$$renderer7.push(` `);
														if (Alert_dialog_description) {
															$$renderer7.push("<!--[-->");
															Alert_dialog_description($$renderer7, {
																children: ($$renderer8) => {
																	$$renderer8.push(`<!---->Are you sure you want to delete <span class="font-semibold text-foreground">"${escape_html(deleteTarget?.name)}"</span>? This action cannot be undone and will only succeed if no blog posts are attached.`);
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
											$$renderer6.push(` `);
											if (Alert_dialog_footer) {
												$$renderer6.push("<!--[-->");
												Alert_dialog_footer($$renderer6, {
													children: ($$renderer7) => {
														if (Alert_dialog_cancel) {
															$$renderer7.push("<!--[-->");
															Alert_dialog_cancel($$renderer7, {
																onclick: () => deleteTarget = null,
																children: ($$renderer8) => {
																	$$renderer8.push(`<!---->Cancel`);
																},
																$$slots: { default: true }
															});
															$$renderer7.push("<!--]-->");
														} else {
															$$renderer7.push("<!--[!-->");
															$$renderer7.push("<!--]-->");
														}
														$$renderer7.push(` <form action="?/delete" method="POST"><input type="hidden" name="id"${attr("value", deleteTarget?.id)}/> `);
														if (Alert_dialog_action) {
															$$renderer7.push("<!--[-->");
															Alert_dialog_action($$renderer7, {
																children: ($$renderer8) => {
																	Button($$renderer8, {
																		type: "submit",
																		variant: "destructive",
																		disabled: isLoading,
																		children: ($$renderer9) => {
																			$$renderer9.push("<!--[-1-->");
																			$$renderer9.push(`Delete Category`);
																			$$renderer9.push(`<!--]-->`);
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
														$$renderer7.push(`</form>`);
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

//# sourceMappingURL=_page.svelte-Sr-ZnT3W.js.map