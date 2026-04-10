import "./root-hPyMpEOi.js";
import { D as attr_class, E as attr, I as ensure_array_like, L as escape_html, P as derived, it as stringify } from "./renderer-CoNnoy0x.js";
import "./state.svelte-yQ996O6E.js";
import { t as Button } from "./button-JWKRuBhr.js";
import { t as Input } from "./input-yKAcSgEU.js";
import { t as Search } from "./search-dSF40r3G.js";
import { t as Dashboard_page } from "./dashboard-page-DbMyEhcp.js";
import { t as Plus } from "./plus-Bjw3hl99.js";
import { t as Eye } from "./eye-vfN4IFre.js";
import { t as Trash_2 } from "./trash-2-D7az2Ppd.js";
import { a as Table_header, i as Table_head, n as Table_body, o as Table_row, r as Table_cell, t as Table } from "./table-row-Zxfuky06.js";
import { t as Arrow_up_down } from "./arrow-up-down-D6jN9a8A.js";
import { t as Pencil } from "./pencil-30dr0DJK.js";
import { a as Alert_dialog_footer, i as Alert_dialog_description, n as Alert_dialog_cancel, o as Alert_dialog_header, r as Alert_dialog_content, s as Alert_dialog_title, t as Alert_dialog } from "./alert-dialog-description-DQ6tBYWu.js";
import { t as getFileUrl } from "./storage.client-B4KZJi2l.js";
import { t as Shield_check } from "./shield-check-aynyyIGx.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
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
			return (!q || c.title.toLowerCase().includes(q) || c.issuer.toLowerCase().includes(q)) && statusFilter === "ALL";
		}).sort((a, b) => {
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
		function $$render_inner($$renderer3) {
			{
				let actions = function($$renderer4) {
					Button($$renderer4, {
						href: "/dashboard/certificates/new",
						class: "shadow-sm",
						children: ($$renderer5) => {
							Plus($$renderer5, { class: "mr-2 h-4 w-4" });
							$$renderer5.push(`<!----> Add Certificate`);
						},
						$$slots: { default: true }
					});
				}, children = function($$renderer4) {
					$$renderer4.push(`<div class="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-5"><!--[-->`);
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
						$$renderer4.push(`<div class="rounded-lg bg-muted/50 p-4"><p class="text-xs text-muted-foreground">${escape_html(stat.label)}</p> <p class="mt-1 text-2xl font-bold tracking-tight">${escape_html(stat.value)}</p></div>`);
					}
					$$renderer4.push(`<!--]--></div> <div class="mb-4 flex flex-wrap items-center gap-3"><div class="relative flex-1 min-w-45">`);
					Search($$renderer4, { class: "absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" });
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
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
					$$renderer4.push(`<!----></div> <div class="flex flex-wrap gap-1"><!--[-->`);
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
						$$renderer4.push(`<button${attr_class(`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${stringify(statusFilter === s.key ? "bg-primary text-primary-foreground border-primary" : "border-border/40 text-muted-foreground hover:bg-muted")}`)}>${escape_html(s.label)}</button>`);
					}
					$$renderer4.push(`<!--]--></div></div> `);
					if (data.certificates.length === 0) {
						$$renderer4.push("<!--[0-->");
						$$renderer4.push(`<div class="rounded-xl border-2 border-dashed bg-card/50 p-12"><div class="flex flex-col items-center justify-center gap-4 py-16 text-center"><div class="rounded-full bg-muted p-6 shadow-inner">`);
						Shield_check($$renderer4, { class: "h-8 w-8 text-muted-foreground" });
						$$renderer4.push(`<!----></div> <div class="space-y-1"><h2 class="text-xl font-bold tracking-tight">No Certificates Yet</h2> <p class="max-w-xs text-sm text-muted-foreground leading-relaxed">Start by adding your first certificate to showcase your achievements.</p></div> `);
						Button($$renderer4, {
							href: "/dashboard/certificates/new",
							class: "mt-2",
							children: ($$renderer5) => {
								Plus($$renderer5, { class: "mr-2 h-4 w-4" });
								$$renderer5.push(`<!----> Add Your First Certificate`);
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
																	class: "w-70",
																	children: ($$renderer8) => {
																		$$renderer8.push(`<button class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">Certificate `);
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
																		$$renderer8.push(`<button class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">Issuer `);
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
																		$$renderer8.push(`<button class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">Issued `);
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
																		$$renderer8.push(`<button class="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground">Expires `);
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
																		colspan: 6,
																		class: "py-12 text-center text-sm text-muted-foreground",
																		children: ($$renderer8) => {
																			$$renderer8.push(`<!---->No certificates match your search.`);
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
													for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
														let cert = each_array_2[$$index_2];
														const status = getStatus(cert);
														if (Table_row) {
															$$renderer6.push("<!--[-->");
															Table_row($$renderer6, {
																class: "group hover:bg-muted/20",
																children: ($$renderer7) => {
																	if (Table_cell) {
																		$$renderer7.push("<!--[-->");
																		Table_cell($$renderer7, {
																			children: ($$renderer8) => {
																				$$renderer8.push(`<div class="flex items-center gap-3 text-left">`);
																				if (cert.thumbnail) {
																					$$renderer8.push("<!--[0-->");
																					$$renderer8.push(`<img${attr("src", getFileUrl(cert.thumbnail))}${attr("alt", cert.title)} class="h-10 w-10 rounded-md object-cover border border-border/40 shrink-0"/>`);
																				} else {
																					$$renderer8.push("<!--[-1-->");
																					$$renderer8.push(`<div class="flex h-10 w-10 items-center justify-center rounded-md border border-border/40 bg-muted/50 text-muted-foreground shrink-0">`);
																					Shield_check($$renderer8, { class: "h-5 w-5 opacity-40" });
																					$$renderer8.push(`<!----></div>`);
																				}
																				$$renderer8.push(`<!--]--> <div class="min-w-0"><p class="truncate font-semibold text-sm leading-tight">${escape_html(cert.title)}</p> <p class="text-[10px] text-muted-foreground mt-0.5 md:hidden">${escape_html(cert.issuer)}</p></div></div>`);
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
																			class: "hidden md:table-cell text-sm text-muted-foreground",
																			children: ($$renderer8) => {
																				$$renderer8.push(`<!---->${escape_html(cert.issuer)}`);
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
																				$$renderer8.push(`<span${attr_class(`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-tight ${stringify(statusConfig[status].class)}`)}>${escape_html(statusConfig[status].label)}</span>`);
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
																			class: "hidden sm:table-cell text-xs text-muted-foreground",
																			children: ($$renderer8) => {
																				$$renderer8.push(`<!---->${escape_html(formatDate(cert.issueDate))}`);
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
																			class: "hidden sm:table-cell text-xs text-muted-foreground",
																			children: ($$renderer8) => {
																				$$renderer8.push(`<!---->${escape_html(formatDate(cert.expiryDate))}`);
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
																				$$renderer8.push(`<div class="flex justify-end gap-1.5 transition-opacity">`);
																				Button($$renderer8, {
																					variant: "ghost",
																					size: "icon",
																					href: `/dashboard/certificates/${stringify(cert.id)}/view`,
																					class: "h-8 w-8 rounded-md border border-border/40 hover:bg-muted",
																					title: "View",
																					children: ($$renderer9) => {
																						Eye($$renderer9, { class: "h-3.5 w-3.5" });
																					},
																					$$slots: { default: true }
																				});
																				$$renderer8.push(`<!----> `);
																				Button($$renderer8, {
																					variant: "ghost",
																					size: "icon",
																					href: `/dashboard/certificates/${stringify(cert.id)}`,
																					class: "h-8 w-8 rounded-md border border-border/40 hover:bg-muted",
																					title: "Edit",
																					children: ($$renderer9) => {
																						Pencil($$renderer9, { class: "h-3.5 w-3.5" });
																					},
																					$$slots: { default: true }
																				});
																				$$renderer8.push(`<!----> `);
																				Button($$renderer8, {
																					variant: "ghost",
																					size: "icon",
																					type: "button",
																					class: "h-8 w-8 rounded-md border border-border/40 text-destructive hover:bg-destructive/10 hover:border-destructive/30",
																					title: "Delete",
																					onclick: () => deleteTarget = cert,
																					children: ($$renderer9) => {
																						Trash_2($$renderer9, { class: "h-3.5 w-3.5" });
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
						$$renderer4.push(`</div> <div class="flex items-center justify-between border-t border-border/30 bg-muted/20 px-4 py-2.5 text-xs text-muted-foreground"><span>Showing ${escape_html(filtered().length)} of ${escape_html(data.certificates.length)} certificates</span> `);
						if (hasFilter()) {
							$$renderer4.push("<!--[0-->");
							$$renderer4.push(`<button class="underline underline-offset-2 hover:text-foreground">Clear filters</button>`);
						} else $$renderer4.push("<!--[-1-->");
						$$renderer4.push(`<!--]--></div></div>`);
					}
					$$renderer4.push(`<!--]--> `);
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
																	$$renderer8.push(`<!---->Delete Certificate`);
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
																	$$renderer8.push(`<!---->Are you sure you want to delete <span class="font-semibold text-foreground">"${escape_html(deleteTarget?.title)}"</span>? This action cannot be undone.`);
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
														Button($$renderer7, {
															type: "submit",
															variant: "destructive",
															children: ($$renderer8) => {
																$$renderer8.push(`<!---->Delete Certificate`);
															},
															$$slots: { default: true }
														});
														$$renderer7.push(`<!----></form>`);
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
					title: "Certificates",
					description: "Manage your professional certifications and achievements.",
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

//# sourceMappingURL=_page.svelte-DlmRLuEW.js.map