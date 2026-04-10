import "./root-hPyMpEOi.js";
import { E as attr, I as ensure_array_like, L as escape_html, it as stringify } from "./renderer-CoNnoy0x.js";
import "./state.svelte-yQ996O6E.js";
import { t as Button } from "./button-Ch6ZWsjV.js";
import { t as Badge } from "./badge-C1NswtNY.js";
import { t as Code } from "./code-Cha5n0md.js";
import { t as External_link } from "./external-link-yuuPrjC8.js";
import { t as Dashboard_page } from "./dashboard-page-D-aEFOn1.js";
import { t as Plus } from "./plus-Cx0aCHfI.js";
import { t as Eye } from "./eye-BJ7Jh70h.js";
import { t as Trash_2 } from "./trash-2-C-0YQPwz.js";
import { a as Table_header, i as Table_head, n as Table_body, o as Table_row, r as Table_cell, t as Table } from "./table-row-D1cSEL9h.js";
import { t as Pencil } from "./pencil-Dx93cckm.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { data } = $$props;
		const getStatusColor = (status) => {
			switch (status) {
				case "COMPLETED": return "default";
				case "IN_PROGRESS": return "secondary";
				case "ARCHIVED": return "outline";
				default: return "default";
			}
		};
		{
			let actions = function($$renderer3) {
				Button($$renderer3, {
					href: "/dashboard/projects/new",
					children: ($$renderer4) => {
						Plus($$renderer4, { class: "mr-2 h-4 w-4" });
						$$renderer4.push(`<!----> Add Project`);
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
															class: "w-[300px]",
															children: ($$renderer7) => {
																$$renderer7.push(`<!---->Project`);
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
																$$renderer7.push(`<!---->Tech Stack`);
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
																$$renderer7.push(`<!---->Created At`);
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
										if (data.projects.length === 0) {
											$$renderer5.push("<!--[0-->");
											if (Table_row) {
												$$renderer5.push("<!--[-->");
												Table_row($$renderer5, {
													children: ($$renderer6) => {
														if (Table_cell) {
															$$renderer6.push("<!--[-->");
															Table_cell($$renderer6, {
																colspan: 5,
																class: "h-24 text-center text-muted-foreground",
																children: ($$renderer7) => {
																	$$renderer7.push(`<!---->No projects found. Create your first project to get started.`);
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
											const each_array = ensure_array_like(data.projects);
											for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
												let project = each_array[$$index_1];
												if (Table_row) {
													$$renderer5.push("<!--[-->");
													Table_row($$renderer5, {
														children: ($$renderer6) => {
															if (Table_cell) {
																$$renderer6.push("<!--[-->");
																Table_cell($$renderer6, {
																	children: ($$renderer7) => {
																		$$renderer7.push(`<div class="flex flex-col"><span class="font-medium">${escape_html(project.title)}</span> <div class="flex gap-2 mt-1">`);
																		if (project.githubUrl) {
																			$$renderer7.push("<!--[0-->");
																			$$renderer7.push(`<a${attr("href", project.githubUrl)} target="_blank" rel="noreferrer" class="text-muted-foreground hover:text-primary">`);
																			Code($$renderer7, { size: 14 });
																			$$renderer7.push(`<!----></a>`);
																		} else $$renderer7.push("<!--[-1-->");
																		$$renderer7.push(`<!--]--> `);
																		if (project.demoUrl) {
																			$$renderer7.push("<!--[0-->");
																			$$renderer7.push(`<a${attr("href", project.demoUrl)} target="_blank" rel="noreferrer" class="text-muted-foreground hover:text-primary">`);
																			External_link($$renderer7, { size: 14 });
																			$$renderer7.push(`<!----></a>`);
																		} else $$renderer7.push("<!--[-1-->");
																		$$renderer7.push(`<!--]--></div></div>`);
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
																			variant: getStatusColor(project.status),
																			children: ($$renderer8) => {
																				$$renderer8.push(`<!---->${escape_html(project.status.replace("_", " "))}`);
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
																		$$renderer7.push(`<div class="flex flex-wrap gap-1"><!--[-->`);
																		const each_array_1 = ensure_array_like(project.techStack.slice(0, 3));
																		for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
																			let tech = each_array_1[$$index];
																			Badge($$renderer7, {
																				variant: "outline",
																				class: "text-[10px] px-1 py-0 font-normal",
																				children: ($$renderer8) => {
																					$$renderer8.push(`<!---->${escape_html(tech)}`);
																				},
																				$$slots: { default: true }
																			});
																		}
																		$$renderer7.push(`<!--]--> `);
																		if (project.techStack.length > 3) {
																			$$renderer7.push("<!--[0-->");
																			$$renderer7.push(`<span class="text-[10px] text-muted-foreground">+${escape_html(project.techStack.length - 3)}</span>`);
																		} else $$renderer7.push("<!--[-1-->");
																		$$renderer7.push(`<!--]--></div>`);
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
																		$$renderer7.push(`<span class="text-muted-foreground text-sm">${escape_html(new Date(project.createdAt).toLocaleDateString())}</span>`);
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
																			href: `/dashboard/projects/${stringify(project.id)}/view`,
																			class: "h-8 w-8",
																			children: ($$renderer8) => {
																				Eye($$renderer8, { class: "h-4 w-4" });
																				$$renderer8.push(`<!----> <span class="sr-only">View</span>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer7.push(`<!----> `);
																		Button($$renderer7, {
																			variant: "ghost",
																			size: "icon",
																			href: `/dashboard/projects/${stringify(project.id)}`,
																			class: "h-8 w-8",
																			children: ($$renderer8) => {
																				Pencil($$renderer8, { class: "h-4 w-4" });
																				$$renderer8.push(`<!----> <span class="sr-only">Edit</span>`);
																			},
																			$$slots: { default: true }
																		});
																		$$renderer7.push(`<!----> <form action="?/delete" method="POST"><input type="hidden" name="id"${attr("value", project.id)}/> `);
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
				title: "Projects",
				description: "Manage your portfolio projects and showcase your best work.",
				actions,
				children
			});
		}
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-B74OGWCZ.js.map