import "./root-B7evDd0u.js";
import { E as attr, I as ensure_array_like, L as escape_html, at as stringify } from "./index2-v1oxlg_d.js";
import "./state.svelte-CJnt2xD2.js";
import { t as Button } from "./button-Bb0vadXY.js";
import { t as Badge } from "./badge-BJCt7Bzh.js";
import { t as Code } from "./code-D2S7UUPH.js";
import { t as External_link } from "./external-link-BFVRWS9f.js";
import { t as Plus } from "./plus-BZ9D7SPi.js";
import { t as Eye } from "./eye-D817MoEN.js";
import { t as Trash_2 } from "./trash-2-D5gDvLls.js";
import { a as Table_header, i as Table_head, n as Table_body, o as Table_row, r as Table_cell, t as Table } from "./table-row-C232_IKl.js";
import { t as Pencil } from "./pencil-yYhtDRK2.js";
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
		$$renderer2.push(`<div class="p-6 max-w-7xl mx-auto w-full flex flex-col gap-6"><div class="flex items-center justify-between"><div class="flex flex-col gap-1"><h1 class="text-3xl font-bold tracking-tight">Projects</h1> <p class="text-muted-foreground text-sm italic">Manage your portfolio projects and showcase your best work.</p></div> `);
		Button($$renderer2, {
			href: "/dashboard/projects/new",
			children: ($$renderer3) => {
				Plus($$renderer3, { class: "mr-2 h-4 w-4" });
				$$renderer3.push(`<!----> Add Project`);
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
													class: "w-[300px]",
													children: ($$renderer6) => {
														$$renderer6.push(`<!---->Project`);
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
														$$renderer6.push(`<!---->Tech Stack`);
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
														$$renderer6.push(`<!---->Created At`);
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
								if (data.projects.length === 0) {
									$$renderer4.push("<!--[0-->");
									if (Table_row) {
										$$renderer4.push("<!--[-->");
										Table_row($$renderer4, {
											children: ($$renderer5) => {
												if (Table_cell) {
													$$renderer5.push("<!--[-->");
													Table_cell($$renderer5, {
														colspan: 5,
														class: "h-24 text-center text-muted-foreground",
														children: ($$renderer6) => {
															$$renderer6.push(`<!---->No projects found. Create your first project to get started.`);
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
									const each_array = ensure_array_like(data.projects);
									for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
										let project = each_array[$$index_1];
										if (Table_row) {
											$$renderer4.push("<!--[-->");
											Table_row($$renderer4, {
												children: ($$renderer5) => {
													if (Table_cell) {
														$$renderer5.push("<!--[-->");
														Table_cell($$renderer5, {
															children: ($$renderer6) => {
																$$renderer6.push(`<div class="flex flex-col"><span class="font-medium">${escape_html(project.title)}</span> <div class="flex gap-2 mt-1">`);
																if (project.githubUrl) {
																	$$renderer6.push("<!--[0-->");
																	$$renderer6.push(`<a${attr("href", project.githubUrl)} target="_blank" rel="noreferrer" class="text-muted-foreground hover:text-primary">`);
																	Code($$renderer6, { size: 14 });
																	$$renderer6.push(`<!----></a>`);
																} else $$renderer6.push("<!--[-1-->");
																$$renderer6.push(`<!--]--> `);
																if (project.demoUrl) {
																	$$renderer6.push("<!--[0-->");
																	$$renderer6.push(`<a${attr("href", project.demoUrl)} target="_blank" rel="noreferrer" class="text-muted-foreground hover:text-primary">`);
																	External_link($$renderer6, { size: 14 });
																	$$renderer6.push(`<!----></a>`);
																} else $$renderer6.push("<!--[-1-->");
																$$renderer6.push(`<!--]--></div></div>`);
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
																	variant: getStatusColor(project.status),
																	children: ($$renderer7) => {
																		$$renderer7.push(`<!---->${escape_html(project.status.replace("_", " "))}`);
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
																$$renderer6.push(`<div class="flex flex-wrap gap-1"><!--[-->`);
																const each_array_1 = ensure_array_like(project.techStack.slice(0, 3));
																for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
																	let tech = each_array_1[$$index];
																	Badge($$renderer6, {
																		variant: "outline",
																		class: "text-[10px] px-1 py-0 font-normal",
																		children: ($$renderer7) => {
																			$$renderer7.push(`<!---->${escape_html(tech)}`);
																		},
																		$$slots: { default: true }
																	});
																}
																$$renderer6.push(`<!--]--> `);
																if (project.techStack.length > 3) {
																	$$renderer6.push("<!--[0-->");
																	$$renderer6.push(`<span class="text-[10px] text-muted-foreground">+${escape_html(project.techStack.length - 3)}</span>`);
																} else $$renderer6.push("<!--[-1-->");
																$$renderer6.push(`<!--]--></div>`);
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
																$$renderer6.push(`<span class="text-muted-foreground text-sm">${escape_html(new Date(project.createdAt).toLocaleDateString())}</span>`);
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
																	href: `/dashboard/projects/${stringify(project.id)}/view`,
																	class: "h-8 w-8",
																	children: ($$renderer7) => {
																		Eye($$renderer7, { class: "h-4 w-4" });
																		$$renderer7.push(`<!----> <span class="sr-only">View</span>`);
																	},
																	$$slots: { default: true }
																});
																$$renderer6.push(`<!----> `);
																Button($$renderer6, {
																	variant: "ghost",
																	size: "icon",
																	href: `/dashboard/projects/${stringify(project.id)}`,
																	class: "h-8 w-8",
																	children: ($$renderer7) => {
																		Pencil($$renderer7, { class: "h-4 w-4" });
																		$$renderer7.push(`<!----> <span class="sr-only">Edit</span>`);
																	},
																	$$slots: { default: true }
																});
																$$renderer6.push(`<!----> <form action="?/delete" method="POST"><input type="hidden" name="id"${attr("value", project.id)}/> `);
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

//# sourceMappingURL=_page.svelte-CWdbMZ3x.js.map