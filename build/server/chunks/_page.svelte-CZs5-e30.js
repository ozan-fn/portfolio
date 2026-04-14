import { C as ensure_array_like, T as escape_html, c as attr, h as clsx$1, l as attr_class, pt as stringify, ut as spread_props, x as derived } from "./dev-D04rZKKe.js";
import { t as Button } from "./button-DA4j647p.js";
import { n as badgeVariants } from "./badge-cwPhXDyp.js";
import { t as Icon } from "./Icon-BhN73e3z.js";
import { t as X } from "./x-Dvgn6q8c.js";
import { t as Input } from "./input-DFCl4JL5.js";
import { t as Label } from "./label-CGw7bmi2.js";
import { t as Tag } from "./tag-DTkKNPw3.js";
import { t as Dashboard_page } from "./dashboard-page-CRUuroPf.js";
import { t as Plus } from "./plus-BExZv4GK.js";
import { t as Trash_2 } from "./trash-2-DAdCz1J1.js";
import "./forms-CxrA1JPp.js";
import { a as Table_header, i as Table_head, n as Table_body, o as Table_row, r as Table_cell, t as Table } from "./table-Bhl2UPa8.js";
import { t as Pencil } from "./pencil-mjSaXPMi.js";
import { a as Alert_dialog_description, c as Alert_dialog_title, i as Alert_dialog_content, n as Alert_dialog_action, o as Alert_dialog_footer, r as Alert_dialog_cancel, s as Alert_dialog_header, t as Alert_dialog } from "./alert-dialog-DxxH6F87.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/categories/_page.svelte.js
function Check($$renderer, $$props) {
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
		{ name: "check" },
		props,
		{ iconNode: [["path", { "d": "M20 6 9 17l-5-5" }]] }
	]));
}
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data, form } = $$props;
		let isLoading = false;
		let editingId = null;
		let editValue = "";
		let editOrder = 0;
		let deleteTarget = null;
		let bulkInput = "";
		let newCategories = [];
		function startEditing(category) {
			editingId = category.id;
			editValue = category.name;
			editOrder = category.order;
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
		function $$render_inner($$renderer) {
			{
				function children($$renderer) {
					$$renderer.push(`<div class="grid grid-cols-3 gap-3 mb-5"><!--[-->`);
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
						$$renderer.push(`<div class="rounded-lg bg-muted/50 p-4"><p class="text-xs text-muted-foreground">${escape_html(stat.label)}</p> <p class="mt-1 text-2xl font-bold tracking-tight">${escape_html(stat.value)}</p></div>`);
					}
					$$renderer.push(`<!--]--></div> <div class="grid gap-6 lg:grid-cols-[1fr_320px] items-start"><div class="rounded-xl border border-border/40 overflow-hidden"><div class="overflow-x-auto">`);
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
																class: "text-xs font-semibold uppercase tracking-wide text-muted-foreground w-[50px]",
																children: ($$renderer) => {
																	$$renderer.push(`<!---->Order`);
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
																class: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
																children: ($$renderer) => {
																	$$renderer.push(`<!---->Name`);
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
																class: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
																children: ($$renderer) => {
																	$$renderer.push(`<!---->Slug`);
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
																class: "text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground w-[80px]",
																children: ($$renderer) => {
																	$$renderer.push(`<!---->Posts`);
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
																class: "text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground w-[100px]",
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
											if (data.categories.length === 0) {
												$$renderer.push("<!--[0-->");
												if (Table_row) {
													$$renderer.push("<!--[-->");
													Table_row($$renderer, {
														children: ($$renderer) => {
															if (Table_cell) {
																$$renderer.push("<!--[-->");
																Table_cell($$renderer, {
																	colspan: 5,
																	class: "py-12 text-center text-sm text-muted-foreground",
																	children: ($$renderer) => {
																		$$renderer.push(`<!---->No categories yet. Add your first one!`);
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
												const each_array_1 = ensure_array_like(data.categories);
												for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
													let category = each_array_1[$$index_1];
													if (Table_row) {
														$$renderer.push("<!--[-->");
														Table_row($$renderer, {
															class: "group hover:bg-muted/20",
															children: ($$renderer) => {
																if (Table_cell) {
																	$$renderer.push("<!--[-->");
																	Table_cell($$renderer, {
																		children: ($$renderer) => {
																			if (editingId === category.id) {
																				$$renderer.push("<!--[0-->");
																				Input($$renderer, {
																					name: "order",
																					type: "number",
																					class: "h-8 w-16 px-2 text-xs",
																					form: `update-form-${stringify(category.id)}`,
																					get value() {
																						return editOrder;
																					},
																					set value($$value) {
																						editOrder = $$value;
																						$$settled = false;
																					}
																				});
																			} else {
																				$$renderer.push("<!--[-1-->");
																				$$renderer.push(`<span class="text-xs font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded border border-border/40">${escape_html(category.order)}</span>`);
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
																$$renderer.push(` `);
																if (Table_cell) {
																	$$renderer.push("<!--[-->");
																	Table_cell($$renderer, {
																		class: "font-medium",
																		children: ($$renderer) => {
																			if (editingId === category.id) {
																				$$renderer.push("<!--[0-->");
																				$$renderer.push(`<form${attr("id", `update-form-${stringify(category.id)}`)} action="?/update" method="POST" class="flex items-center gap-2"><input type="hidden" name="id"${attr("value", category.id)}/> `);
																				Input($$renderer, {
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
																				$$renderer.push(`<!----> `);
																				Button($$renderer, {
																					size: "icon",
																					variant: "ghost",
																					type: "submit",
																					class: "h-8 w-8 rounded-md border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20",
																					disabled: isLoading,
																					children: ($$renderer) => {
																						Check($$renderer, { class: "h-3.5 w-3.5" });
																					},
																					$$slots: { default: true }
																				});
																				$$renderer.push(`<!----> `);
																				Button($$renderer, {
																					size: "icon",
																					variant: "ghost",
																					type: "button",
																					class: "h-8 w-8 rounded-md border border-border/40 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30",
																					onclick: cancelEditing,
																					children: ($$renderer) => {
																						X($$renderer, { class: "h-3.5 w-3.5" });
																					},
																					$$slots: { default: true }
																				});
																				$$renderer.push(`<!----></form>`);
																			} else {
																				$$renderer.push("<!--[-1-->");
																				$$renderer.push(`<div class="flex items-center gap-2">`);
																				Tag($$renderer, { class: "h-3.5 w-3.5 text-muted-foreground flex-shrink-0" });
																				$$renderer.push(`<!----> <span class="text-sm font-semibold">${escape_html(category.name)}</span></div>`);
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
																$$renderer.push(` `);
																if (Table_cell) {
																	$$renderer.push("<!--[-->");
																	Table_cell($$renderer, {
																		children: ($$renderer) => {
																			$$renderer.push(`<code class="rounded-sm bg-muted/60 border border-border/40 px-1.5 py-0.5 text-[11px] text-muted-foreground font-mono">${escape_html(category.slug)}</code>`);
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
																		class: "text-center",
																		children: ($$renderer) => {
																			$$renderer.push(`<span class="inline-flex items-center rounded-full border border-border/40 bg-secondary/40 px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground">${escape_html(category._count.posts)}</span>`);
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
																				class: "h-8 w-8 rounded-md border border-border/40 opacity-0 group-hover:opacity-100 transition-opacity",
																				disabled: editingId !== null,
																				onclick: () => startEditing(category),
																				title: "Edit",
																				children: ($$renderer) => {
																					Pencil($$renderer, { class: "h-3.5 w-3.5" });
																					$$renderer.push(`<!----> <span class="sr-only">Edit</span>`);
																				},
																				$$slots: { default: true }
																			});
																			$$renderer.push(`<!----> `);
																			Button($$renderer, {
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
																				children: ($$renderer) => {
																					Trash_2($$renderer, { class: "h-3.5 w-3.5" });
																					$$renderer.push(`<!----> <span class="sr-only">Delete</span>`);
																				},
																				$$slots: { default: true }
																			});
																			$$renderer.push(`<!----></div>`);
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
					$$renderer.push(`</div> <div class="border-t border-border/30 bg-muted/20 px-4 py-2.5 text-xs text-muted-foreground">${escape_html(data.categories.length)}
          ${escape_html(data.categories.length === 1 ? "category" : "categories")} total</div></div> <div class="flex flex-col gap-4"><div class="rounded-xl border border-border/40 bg-card p-5"><h3 class="text-base font-semibold mb-4">Add New Category</h3> <form action="?/create" method="POST" class="flex flex-col gap-4"><div class="flex flex-col gap-1.5">`);
					Label($$renderer, {
						class: "text-xs font-medium text-muted-foreground",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Category Name(s)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <div class="flex flex-wrap gap-2 p-2 rounded-md border bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ring-offset-background transition-shadow"><!--[-->`);
					const each_array_2 = ensure_array_like(newCategories);
					for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
						let category = each_array_2[$$index_2];
						$$renderer.push(`<span${attr_class(clsx$1(badgeVariants({ variant: "secondary" })))}>${escape_html(category)} <button type="button" class="ml-1 rounded-full hover:bg-muted p-0.5 outline-none">`);
						X($$renderer, { size: 10 });
						$$renderer.push(`<!----></button></span>`);
					}
					$$renderer.push(`<!--]--> <input type="text"${attr("value", bulkInput)}${attr("placeholder", newCategories.length === 0 ? "e.g. Svelte, Go, UI/UX" : "")} class="flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground"/></div> <input type="hidden" name="names"${attr("value", newCategories.join(","))}/> <input type="hidden" name="singleName"${attr("value", bulkInput)}/> <p class="text-[10px] text-muted-foreground italic mt-1">Type and press Space, Enter or comma to add multiple at once.</p></div> <div class="flex flex-col gap-1.5">`);
					Label($$renderer, {
						for: "order",
						class: "text-xs font-medium text-muted-foreground",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Order (higher = first)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "order",
						name: "order",
						type: "number",
						value: 0,
						required: true,
						class: "h-9 text-sm"
					});
					$$renderer.push(`<!----></div> `);
					if (form?.message) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<p class="text-xs font-medium text-destructive">${escape_html(form.message)}</p>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--> `);
					Button($$renderer, {
						type: "submit",
						class: "w-full shadow-sm",
						disabled: newCategories.length === 0 && true,
						children: ($$renderer) => {
							$$renderer.push("<!--[-1-->");
							Plus($$renderer, { class: "mr-2 h-4 w-4" });
							$$renderer.push(`<!----> Add Category`);
							$$renderer.push(`<!--]-->`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></form></div> <div class="rounded-xl border border-border/40 bg-muted/30 p-4"><h4 class="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Category info</h4> <p class="text-xs text-muted-foreground leading-relaxed">Categories help organize your blog posts. Slugs are generated automatically from the name. You cannot delete a category that is currently used by blog posts.</p></div></div></div> `);
					if (Alert_dialog) {
						$$renderer.push("<!--[-->");
						Alert_dialog($$renderer, {
							open: deleteTarget !== null,
							onOpenChange: (v) => {
								if (!v) deleteTarget = null;
							},
							children: ($$renderer) => {
								if (Alert_dialog_content) {
									$$renderer.push("<!--[-->");
									Alert_dialog_content($$renderer, {
										class: "rounded-xl",
										children: ($$renderer) => {
											if (Alert_dialog_header) {
												$$renderer.push("<!--[-->");
												Alert_dialog_header($$renderer, {
													children: ($$renderer) => {
														if (Alert_dialog_title) {
															$$renderer.push("<!--[-->");
															Alert_dialog_title($$renderer, {
																children: ($$renderer) => {
																	$$renderer.push(`<!---->Delete Category`);
																},
																$$slots: { default: true }
															});
															$$renderer.push("<!--]-->");
														} else {
															$$renderer.push("<!--[!-->");
															$$renderer.push("<!--]-->");
														}
														$$renderer.push(` `);
														if (Alert_dialog_description) {
															$$renderer.push("<!--[-->");
															Alert_dialog_description($$renderer, {
																children: ($$renderer) => {
																	$$renderer.push(`<!---->Are you sure you want to delete <span class="font-semibold text-foreground">"${escape_html(deleteTarget?.name)}"</span>? This action cannot be undone and will only succeed if no blog posts are attached.`);
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
											if (Alert_dialog_footer) {
												$$renderer.push("<!--[-->");
												Alert_dialog_footer($$renderer, {
													children: ($$renderer) => {
														if (Alert_dialog_cancel) {
															$$renderer.push("<!--[-->");
															Alert_dialog_cancel($$renderer, {
																onclick: () => deleteTarget = null,
																children: ($$renderer) => {
																	$$renderer.push(`<!---->Cancel`);
																},
																$$slots: { default: true }
															});
															$$renderer.push("<!--]-->");
														} else {
															$$renderer.push("<!--[!-->");
															$$renderer.push("<!--]-->");
														}
														$$renderer.push(` <form action="?/delete" method="POST"><input type="hidden" name="id"${attr("value", deleteTarget?.id)}/> `);
														if (Alert_dialog_action) {
															$$renderer.push("<!--[-->");
															Alert_dialog_action($$renderer, {
																children: ($$renderer) => {
																	Button($$renderer, {
																		type: "submit",
																		variant: "destructive",
																		disabled: isLoading,
																		children: ($$renderer) => {
																			$$renderer.push("<!--[-1-->");
																			$$renderer.push(`Delete Category`);
																			$$renderer.push(`<!--]-->`);
																		},
																		$$slots: { default: true }
																	});
																},
																$$slots: { default: true }
															});
															$$renderer.push("<!--]-->");
														} else {
															$$renderer.push("<!--[!-->");
															$$renderer.push("<!--]-->");
														}
														$$renderer.push(`</form>`);
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
				}
				Dashboard_page($$renderer, {
					title: "Categories",
					description: "Manage categories for your blog posts.",
					children,
					$$slots: { default: true }
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

//# sourceMappingURL=_page.svelte-CZs5-e30.js.map