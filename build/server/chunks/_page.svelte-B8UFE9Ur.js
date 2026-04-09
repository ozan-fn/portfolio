import { E as attr, I as ensure_array_like, L as escape_html, it as stringify } from "./renderer-CoNnoy0x.js";
import { t as Button } from "./button-Ch6ZWsjV.js";
import { t as Badge } from "./badge-C1NswtNY.js";
import { t as Card } from "./card-CnyBIkIo.js";
import { t as Card_content } from "./card-content-CTbC7BF1.js";
import { n as Card_header, r as Card_title, t as Card_description } from "./card-title-JuB79r3h.js";
import { t as Plus } from "./plus-BompRSaj.js";
import { t as Crud_header } from "./crud-header-Crxaf_Fu.js";
import { t as Trash_2 } from "./trash-2-C-0YQPwz.js";
import { t as Pencil } from "./pencil-Dx93cckm.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let certificates = [
			{
				id: "1",
				title: "AWS Certified Solutions Architect",
				issuer: "Amazon Web Services",
				issueDate: /* @__PURE__ */ new Date("2023-06-15"),
				expiryDate: /* @__PURE__ */ new Date("2025-06-15")
			},
			{
				id: "2",
				title: "Certified Kubernetes Administrator",
				issuer: "Linux Foundation",
				issueDate: /* @__PURE__ */ new Date("2023-03-20"),
				expiryDate: /* @__PURE__ */ new Date("2026-03-20")
			},
			{
				id: "3",
				title: "Google Cloud Professional Data Engineer",
				issuer: "Google Cloud",
				issueDate: /* @__PURE__ */ new Date("2023-09-10"),
				expiryDate: /* @__PURE__ */ new Date("2025-09-10")
			},
			{
				id: "4",
				title: "TypeScript Professional",
				issuer: "freeCodeCamp",
				issueDate: /* @__PURE__ */ new Date("2023-12-01")
			},
			{
				id: "5",
				title: "Full Stack Web Development",
				issuer: "Udacity",
				issueDate: /* @__PURE__ */ new Date("2023-08-15"),
				expiryDate: /* @__PURE__ */ new Date("2024-08-15")
			},
			{
				id: "6",
				title: "Docker & Kubernetes Mastery",
				issuer: "Udemy",
				issueDate: /* @__PURE__ */ new Date("2023-05-20")
			}
		];
		const isExpired = (expiryDate) => {
			if (!expiryDate) return false;
			return /* @__PURE__ */ new Date() > expiryDate;
		};
		const isExpiringSoon = (expiryDate) => {
			if (!expiryDate) return false;
			const thirtyDaysFromNow = /* @__PURE__ */ new Date();
			thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
			return /* @__PURE__ */ new Date() <= expiryDate && expiryDate <= thirtyDaysFromNow;
		};
		const formatDate = (date) => {
			return new Date(date).toLocaleDateString("en-US", {
				year: "numeric",
				month: "short"
			});
		};
		const handleDelete = (id) => {
			if (confirm("Are you sure you want to delete this certificate?")) certificates = certificates.filter((c) => c.id !== id);
		};
		const getImageId = (index) => {
			return index % 50 + 1;
		};
		{
			let actions = function($$renderer3) {
				Button($$renderer3, {
					href: "/dashboard/certificates/new",
					children: ($$renderer4) => {
						Plus($$renderer4, { class: "mr-2 h-4 w-4" });
						$$renderer4.push(`<!----> Add Certificate`);
					},
					$$slots: { default: true }
				});
			};
			Crud_header($$renderer2, {
				title: "Certificates",
				description: "Manage your professional certifications and achievements.",
				actions
			});
		}
		$$renderer2.push(`<!----> <div class="px-6 pb-6 max-w-7xl w-full mx-auto">`);
		if (certificates.length === 0) {
			$$renderer2.push("<!--[0-->");
			$$renderer2.push(`<div class="rounded-xl border bg-card p-12 shadow-sm"><div class="flex flex-col items-center justify-center gap-3 py-20 text-center"><div class="text-4xl">🏅</div> <h2 class="text-xl font-semibold tracking-tight">No Certificates Yet</h2> <p class="max-w-md text-sm text-muted-foreground">Start by adding your first certificate to showcase your professional achievements.</p> `);
			Button($$renderer2, {
				href: "/dashboard/certificates/new",
				class: "mt-4",
				children: ($$renderer3) => {
					Plus($$renderer3, { class: "mr-2 h-4 w-4" });
					$$renderer3.push(`<!----> Add Your First Certificate`);
				},
				$$slots: { default: true }
			});
			$$renderer2.push(`<!----></div></div>`);
		} else {
			$$renderer2.push("<!--[-1-->");
			$$renderer2.push(`<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
			const each_array = ensure_array_like(certificates);
			for (let index = 0, $$length = each_array.length; index < $$length; index++) {
				let cert = each_array[index];
				Card($$renderer2, {
					class: "flex flex-col overflow-hidden hover:shadow-md transition-shadow",
					children: ($$renderer3) => {
						$$renderer3.push(`<div class="w-full h-40 bg-muted overflow-hidden"><img${attr("src", `https://picsum.photos/id/${stringify(getImageId(index))}/400/160`)}${attr("alt", cert.title)} class="w-full h-full object-cover"/></div> `);
						Card_header($$renderer3, {
							class: "pb-2",
							children: ($$renderer4) => {
								Card_title($$renderer4, {
									class: "text-base line-clamp-2",
									children: ($$renderer5) => {
										$$renderer5.push(`<!---->${escape_html(cert.title)}`);
									},
									$$slots: { default: true }
								});
								$$renderer4.push(`<!----> `);
								Card_description($$renderer4, {
									class: "text-xs",
									children: ($$renderer5) => {
										$$renderer5.push(`<!---->${escape_html(cert.issuer)}`);
									},
									$$slots: { default: true }
								});
								$$renderer4.push(`<!---->`);
							},
							$$slots: { default: true }
						});
						$$renderer3.push(`<!----> `);
						Card_content($$renderer3, {
							class: "flex-1 flex flex-col justify-between gap-3",
							children: ($$renderer4) => {
								$$renderer4.push(`<div class="flex flex-wrap gap-2">`);
								if (isExpired(cert.expiryDate)) {
									$$renderer4.push("<!--[0-->");
									Badge($$renderer4, {
										variant: "destructive",
										class: "text-xs",
										children: ($$renderer5) => {
											$$renderer5.push(`<!---->Expired`);
										},
										$$slots: { default: true }
									});
								} else if (isExpiringSoon(cert.expiryDate)) {
									$$renderer4.push("<!--[1-->");
									Badge($$renderer4, {
										variant: "secondary",
										class: "text-xs",
										children: ($$renderer5) => {
											$$renderer5.push(`<!---->Expiring Soon`);
										},
										$$slots: { default: true }
									});
								} else if (cert.expiryDate) {
									$$renderer4.push("<!--[2-->");
									Badge($$renderer4, {
										variant: "outline",
										class: "text-xs",
										children: ($$renderer5) => {
											$$renderer5.push(`<!---->Active`);
										},
										$$slots: { default: true }
									});
								} else {
									$$renderer4.push("<!--[-1-->");
									Badge($$renderer4, {
										variant: "default",
										class: "text-xs",
										children: ($$renderer5) => {
											$$renderer5.push(`<!---->Lifetime`);
										},
										$$slots: { default: true }
									});
								}
								$$renderer4.push(`<!--]--> `);
								if (cert.expiryDate) {
									$$renderer4.push("<!--[0-->");
									$$renderer4.push(`<span class="text-xs text-muted-foreground">${escape_html(formatDate(cert.expiryDate))}</span>`);
								} else $$renderer4.push("<!--[-1-->");
								$$renderer4.push(`<!--]--></div> <div class="flex gap-2 pt-2">`);
								Button($$renderer4, {
									variant: "outline",
									size: "sm",
									href: `/dashboard/certificates/${stringify(cert.id)}`,
									class: "flex-1",
									children: ($$renderer5) => {
										Pencil($$renderer5, { class: "h-4 w-4" });
									},
									$$slots: { default: true }
								});
								$$renderer4.push(`<!----> `);
								Button($$renderer4, {
									variant: "destructive",
									size: "sm",
									onclick: () => handleDelete(cert.id),
									class: "flex-1",
									children: ($$renderer5) => {
										Trash_2($$renderer5, { class: "h-4 w-4" });
									},
									$$slots: { default: true }
								});
								$$renderer4.push(`<!----></div>`);
							},
							$$slots: { default: true }
						});
						$$renderer3.push(`<!---->`);
					},
					$$slots: { default: true }
				});
			}
			$$renderer2.push(`<!--]--></div>`);
		}
		$$renderer2.push(`<!--]--></div>`);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-B8UFE9Ur.js.map