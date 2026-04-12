import { C as ensure_array_like, T as escape_html, c as attr, ft as stringify, l as attr_class, x as derived } from "./dev-OC6EGoUN.js";
import { t as Button } from "./button-BAli88Z_.js";
import { t as Input } from "./input-B4jit4xQ.js";
import { t as Search } from "./search-aQk__OJS.js";
import { t as Dashboard_page } from "./dashboard-page-ClqvGtKv.js";
import { t as Plus } from "./plus-BBCnpi5x.js";
import { t as Trash_2 } from "./trash-2-C1TVGmo8.js";
import { t as Eye } from "./eye-Do5t-rz8.js";
import "./forms-nWoHtbL-.js";
import { a as Table_header, i as Table_head, n as Table_body, o as Table_row, r as Table_cell, t as Table } from "./table-BkxaLgzJ.js";
import { t as Pencil } from "./pencil-CuLE9Jvs.js";
import { t as Arrow_up_down } from "./arrow-up-down-DJVFh1Cq.js";
import { a as Alert_dialog_description, c as Alert_dialog_title, i as Alert_dialog_content, o as Alert_dialog_footer, r as Alert_dialog_cancel, s as Alert_dialog_header, t as Alert_dialog } from "./alert-dialog-fYlseVk_.js";
import { t as getFileUrl } from "./storage.client-BdaqK3xy.js";
import { t as Shield_check } from "./shield-check-Cbv8SSRW.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		let search = "";
		let statusFilter = "ALL";
		let sortKey = "issueDate";
		let sortDir = -1;
		let deleteTarget = null;
		function getStatus(cert) {
			if (!cert.expiryDate) return "lifetime";
			const now = /* @__PURE__ */ new Date();
			const expiryDate = new Date(cert.expiryDate);
			if (now > expiryDate) return "expired";
			const soon = /* @__PURE__ */ new Date();
			soon.setMonth(soon.getMonth() + 6);
			if (expiryDate <= soon) return "expiring";
			return "active";
		}
		const statusOrder = {
			active: 0,
			lifetime: 1,
			expiring: 2,
			expired: 3
		};
		function formatDate(date) {
			if (!date) return "—";
			return new Date(date).toLocaleDateString("id-ID", {
				day: "2-digit",
				month: "short",
				year: "numeric"
			});
		}
		const filtered = derived(() => data.certificates.filter((c) => {
			const q = search.toLowerCase();
			const mq = !q || c.title.toLowerCase().includes(q) || c.issuer.toLowerCase().includes(q);
			const ms = statusFilter === "ALL" || getStatus(c) === statusFilter;
			return mq && ms;
		}).sort((a, b) => {
			if (sortKey === "status") return (statusOrder[getStatus(a)] - statusOrder[getStatus(b)]) * sortDir;
			const av = a[sortKey] ?? "";
			const bv = b[sortKey] ?? "";
			return av < bv ? -sortDir : av > bv ? sortDir : 0;
		}));
		const stats = derived(() => ({
			total: data.certificates.length,
			active: data.certificates.filter((c) => getStatus(c) === "active").length,
			expiring: data.certificates.filter((c) => getStatus(c) === "expiring").length,
			expired: data.certificates.filter((c) => getStatus(c) === "expired").length
		}));
		const hasFilter = derived(() => search || statusFilter !== "ALL");
		const statusConfig = {
			active: {
				label: "Active",
				class: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
			},
			lifetime: {
				label: "Lifetime",
				class: "bg-blue-500/10 text-blue-600 border-blue-500/20"
			},
			expiring: {
				label: "Expiring soon",
				class: "bg-amber-500/10 text-amber-600 border-amber-500/20"
			},
			expired: {
				label: "Expired",
				class: "bg-destructive/10 text-destructive border-destructive/20"
			}
		};
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			{
				function actions($$renderer) {
					Button($$renderer, {
						href: "/dashboard/certificates/new",
						class: "shadow-sm",
						children: ($$renderer) => {
							Plus($$renderer, { class: "mr-2 h-4 w-4" });
							$$renderer.push(`<!----> Add Certificate`);
						},
						$$slots: { default: true }
					});
				}
				function children($$renderer) {
					$$renderer.push(`<div class="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-5"><!--[-->`);
					const each_array = ensure_array_like([
						{
							label: "Total certificates",
							value: stats().total
						},
						{
							label: "Active",
							value: stats().active
						},
						{
							label: "Expiring soon",
							value: stats().expiring
						},
						{
							label: "Expired",
							value: stats().expired
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
						placeholder: "Search certificates...",
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
					const each_array_1 = ensure_array_like([
						{
							key: "ALL",
							label: "All"
						},
						{
							key: "active",
							label: "Active"
						},
						{
							key: "lifetime",
							label: "Lifetime"
						},
						{
							key: "expiring",
							label: "Expiring soon"
						},
						{
							key: "expired",
							label: "Expired"
						}
					]);
					for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
						let s = each_array_1[$$index_1];
						$$renderer.push(`<button${attr_class(`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${stringify(statusFilter === s.key ? "bg-primary text-primary-foreground border-primary" : "border-border/40 text-muted-foreground hover:bg-muted")}`)}>${escape_html(s.label)}</button>`);
					}
					$$renderer.push(`<!--]--></div></div> `);
					if (data.certificates.length === 0) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<div class="rounded-xl border-2 border-dashed bg-card/50 p-12"><div class="flex flex-col items-center justify-center gap-4 py-16 text-center"><div class="rounded-full bg-muted p-6 shadow-inner">`);
						Shield_check($$renderer, { class: "h-8 w-8 text-muted-foreground" });
						$$renderer.push(`<!----></div> <div class="space-y-1"><h2 class="text-xl font-bold tracking-tight">No Certificates Yet</h2> <p class="max-w-xs text-sm text-muted-foreground leading-relaxed">Start by adding your first certificate to showcase your achievements.</p></div> `);
						Button($$renderer, {
							href: "/dashboard/certificates/new",
							class: "mt-2",
							children: ($$renderer) => {
								Plus($$renderer, { class: "mr-2 h-4 w-4" });
								$$renderer.push(`<!----> Add Your First Certificate`);
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
																	class: "w-70",
																	children: ($$renderer) => {
																		$$renderer.push(`<button class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">Certificate `);
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
																		$$renderer.push(`<button class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">Issuer `);
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
																		$$renderer.push(`<button class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">Issued `);
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
																		$$renderer.push(`<button class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">Expires `);
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
																		colspan: 6,
																		class: "py-12 text-center text-sm text-muted-foreground",
																		children: ($$renderer) => {
																			$$renderer.push(`<!---->No certificates match your search.`);
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
													for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
														let cert = each_array_2[$$index_2];
														const status = getStatus(cert);
														if (Table_row) {
															$$renderer.push("<!--[-->");
															Table_row($$renderer, {
																class: "group hover:bg-muted/20",
																children: ($$renderer) => {
																	if (Table_cell) {
																		$$renderer.push("<!--[-->");
																		Table_cell($$renderer, {
																			children: ($$renderer) => {
																				$$renderer.push(`<div class="flex items-center gap-3 text-left">`);
																				if (cert.thumbnail) {
																					$$renderer.push("<!--[0-->");
																					$$renderer.push(`<img${attr("src", getFileUrl(cert.thumbnail))}${attr("alt", cert.title)} class="h-10 w-10 rounded-md object-cover border border-border/40 shrink-0"/>`);
																				} else {
																					$$renderer.push("<!--[-1-->");
																					$$renderer.push(`<div class="flex h-10 w-10 items-center justify-center rounded-md border border-border/40 bg-muted/50 text-muted-foreground shrink-0">`);
																					Shield_check($$renderer, { class: "h-5 w-5 opacity-40" });
																					$$renderer.push(`<!----></div>`);
																				}
																				$$renderer.push(`<!--]--> <div class="min-w-0"><p class="truncate font-semibold text-sm leading-tight">${escape_html(cert.title)}</p> <p class="text-[10px] text-muted-foreground mt-0.5 md:hidden">${escape_html(cert.issuer)}</p></div></div>`);
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
																			class: "hidden md:table-cell text-sm text-muted-foreground",
																			children: ($$renderer) => {
																				$$renderer.push(`<!---->${escape_html(cert.issuer)}`);
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
																				$$renderer.push(`<span${attr_class(`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-tight ${stringify(statusConfig[status].class)}`)}>${escape_html(statusConfig[status].label)}</span>`);
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
																			class: "hidden sm:table-cell text-xs text-muted-foreground",
																			children: ($$renderer) => {
																				$$renderer.push(`<!---->${escape_html(formatDate(cert.issueDate))}`);
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
																			class: "hidden sm:table-cell text-xs text-muted-foreground",
																			children: ($$renderer) => {
																				$$renderer.push(`<!---->${escape_html(formatDate(cert.expiryDate))}`);
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
																				$$renderer.push(`<div class="flex justify-end gap-1.5 transition-opacity">`);
																				Button($$renderer, {
																					variant: "ghost",
																					size: "icon",
																					href: `/dashboard/certificates/${stringify(cert.id)}/view`,
																					class: "h-8 w-8 rounded-md border border-border/40 hover:bg-muted",
																					title: "View",
																					children: ($$renderer) => {
																						Eye($$renderer, { class: "h-3.5 w-3.5" });
																					},
																					$$slots: { default: true }
																				});
																				$$renderer.push(`<!----> `);
																				Button($$renderer, {
																					variant: "ghost",
																					size: "icon",
																					href: `/dashboard/certificates/${stringify(cert.id)}`,
																					class: "h-8 w-8 rounded-md border border-border/40 hover:bg-muted",
																					title: "Edit",
																					children: ($$renderer) => {
																						Pencil($$renderer, { class: "h-3.5 w-3.5" });
																					},
																					$$slots: { default: true }
																				});
																				$$renderer.push(`<!----> `);
																				Button($$renderer, {
																					variant: "ghost",
																					size: "icon",
																					type: "button",
																					class: "h-8 w-8 rounded-md border border-border/40 text-destructive hover:bg-destructive/10 hover:border-destructive/30",
																					title: "Delete",
																					onclick: () => deleteTarget = cert,
																					children: ($$renderer) => {
																						Trash_2($$renderer, { class: "h-3.5 w-3.5" });
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
						$$renderer.push(`</div> <div class="flex items-center justify-between border-t border-border/30 bg-muted/20 px-4 py-2.5 text-xs text-muted-foreground"><span>Showing ${escape_html(filtered().length)} of ${escape_html(data.certificates.length)} certificates</span> `);
						if (hasFilter()) {
							$$renderer.push("<!--[0-->");
							$$renderer.push(`<button class="underline underline-offset-2 hover:text-foreground">Clear filters</button>`);
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]--></div></div>`);
					}
					$$renderer.push(`<!--]--> `);
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
																	$$renderer.push(`<!---->Delete Certificate`);
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
																	$$renderer.push(`<!---->Are you sure you want to delete <span class="font-semibold text-foreground">"${escape_html(deleteTarget?.title)}"</span>? This action cannot be undone.`);
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
														Button($$renderer, {
															type: "submit",
															variant: "destructive",
															children: ($$renderer) => {
																$$renderer.push(`<!---->Delete Certificate`);
															},
															$$slots: { default: true }
														});
														$$renderer.push(`<!----></form>`);
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
					title: "Certificates",
					description: "Manage your professional certifications and achievements.",
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

//# sourceMappingURL=_page.svelte-DefYHYVg.js.map