import { L as escape_html, it as stringify, nt as spread_props } from "./renderer-CoNnoy0x.js";
import { t as Button } from "./button-JWKRuBhr.js";
import { t as Badge } from "./badge-BhT1H9Q3.js";
import { t as Card } from "./card-BNT23Klg.js";
import { t as Card_content } from "./card-content-CoFPtkJo.js";
import { t as Icon } from "./Icon-DsjQn-Ts.js";
import { t as Calendar } from "./calendar-DbIoV4cg.js";
import { t as Clock } from "./clock-jY___EAI.js";
import { n as Card_header, r as Card_title, t as Card_description } from "./card-title-BhI6TCaP.js";
import { t as External_link } from "./external-link-DOMXW-bn.js";
import { t as Arrow_up_right } from "./arrow-up-right-BEOBS-ol.js";
import { t as Crud_header } from "./crud-header-8_9VZwFh.js";
import { t as Pencil } from "./pencil-30dr0DJK.js";
import { t as Info } from "./info-BYSb9qws.js";
import { t as Shield_check } from "./shield-check-aynyyIGx.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/certificates/_id_/view/_page.svelte.js
function Building_2($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "building-2" },
		props,
		{ iconNode: [
			["path", { "d": "M10 12h4" }],
			["path", { "d": "M10 8h4" }],
			["path", { "d": "M14 21v-3a2 2 0 0 0-4 0v3" }],
			["path", { "d": "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" }],
			["path", { "d": "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" }]
		] }
	]));
}
function Trophy($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "trophy" },
		props,
		{ iconNode: [
			["path", { "d": "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" }],
			["path", { "d": "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" }],
			["path", { "d": "M18 9h1.5a1 1 0 0 0 0-5H18" }],
			["path", { "d": "M4 22h16" }],
			["path", { "d": "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" }],
			["path", { "d": "M6 9H4.5a1 1 0 0 1 0-5H6" }]
		] }
	]));
}
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let certificate = {
			id: "1",
			title: "AWS Certified Solutions Architect",
			issuer: "Amazon Web Services",
			issueDate: /* @__PURE__ */ new Date("2023-06-15"),
			expiryDate: /* @__PURE__ */ new Date("2025-06-15")
		};
		function getStatus(cert) {
			if (!cert.expiryDate) return "lifetime";
			if (/* @__PURE__ */ new Date() > cert.expiryDate) return "expired";
			const soon = /* @__PURE__ */ new Date();
			soon.setMonth(soon.getMonth() + 6);
			if (cert.expiryDate <= soon) return "expiring";
			return "active";
		}
		const getStatusColor = (status2) => {
			switch (status2) {
				case "active":
				case "lifetime": return "default";
				case "expiring": return "secondary";
				case "expired": return "outline";
				default: return "default";
			}
		};
		const status = getStatus(certificate);
		const statusLabel = status.charAt(0).toUpperCase() + status.slice(1);
		{
			let actions = function($$renderer3) {
				Button($$renderer3, {
					variant: "outline",
					href: "/dashboard/certificates",
					target: "_blank",
					class: "gap-2",
					children: ($$renderer4) => {
						External_link($$renderer4, { class: "h-4 w-4" });
						$$renderer4.push(`<!----> Public Page`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> `);
				Button($$renderer3, {
					href: `/dashboard/certificates/${stringify(certificate.id)}`,
					class: "gap-2",
					children: ($$renderer4) => {
						Pencil($$renderer4, { class: "h-4 w-4" });
						$$renderer4.push(`<!----> Edit Certificate`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!---->`);
			};
			Crud_header($$renderer2, {
				title: certificate.title,
				description: "Verification and details for your professional certification.",
				backUrl: "/dashboard/certificates",
				actions
			});
		}
		$$renderer2.push(`<!----> <div class="px-6 pb-12 max-w-7xl mx-auto"><div class="grid gap-6 lg:grid-cols-3"><div class="lg:col-span-2 space-y-6">`);
		Card($$renderer2, {
			class: "overflow-hidden border-none shadow-md bg-muted/20",
			children: ($$renderer3) => {
				$$renderer3.push("<!--[-1-->");
				$$renderer3.push(`<div class="flex aspect-video items-center justify-center bg-muted text-muted-foreground italic rounded-xl border-2 border-dashed"><div class="flex flex-col items-center gap-2">`);
				Trophy($$renderer3, { class: "h-12 w-12 opacity-20" });
				$$renderer3.push(`<!----> <p>No preview image available</p></div></div>`);
				$$renderer3.push(`<!--]-->`);
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----> `);
		Card($$renderer2, {
			class: "shadow-sm overflow-hidden",
			children: ($$renderer3) => {
				Card_header($$renderer3, {
					class: "border-b bg-muted/30",
					children: ($$renderer4) => {
						$$renderer4.push(`<div class="flex items-center gap-2">`);
						Info($$renderer4, { class: "h-5 w-5 text-primary" });
						$$renderer4.push(`<!----> `);
						Card_title($$renderer4, {
							children: ($$renderer5) => {
								$$renderer5.push(`<!---->Certification Details`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----></div> `);
						Card_description($$renderer4, {
							children: ($$renderer5) => {
								$$renderer5.push(`<!---->Verified information about this credential`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> `);
				Card_content($$renderer3, {
					class: "p-6 space-y-8",
					children: ($$renderer4) => {
						$$renderer4.push(`<div class="grid sm:grid-cols-2 gap-6"><div class="space-y-1"><h4 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">`);
						Building_2($$renderer4, { class: "h-3 w-3" });
						$$renderer4.push(`<!----> Issuing Organization</h4> <p class="text-lg font-medium text-foreground">${escape_html(certificate.issuer)}</p></div> <div class="space-y-1"><h4 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">`);
						Shield_check($$renderer4, { class: "h-3 w-3" });
						$$renderer4.push(`<!----> Certification Status</h4> <div class="flex items-center gap-2 mt-1">`);
						Badge($$renderer4, {
							variant: getStatusColor(status),
							children: ($$renderer5) => {
								$$renderer5.push(`<!---->${escape_html(statusLabel)}`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----></div></div></div> <div class="pt-6 border-t"><h4 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Metadata / Verification</h4> <div class="grid sm:grid-cols-2 gap-4"><div class="p-4 rounded-xl border bg-muted/10"><p class="text-[11px] text-muted-foreground uppercase font-bold tracking-tighter mb-1">Issue Date</p> <p class="text-sm font-medium">${escape_html(certificate.issueDate.toLocaleDateString("en-US", {
							month: "long",
							year: "numeric",
							day: "numeric"
						}))}</p></div> <div class="p-4 rounded-xl border bg-muted/10"><p class="text-[11px] text-muted-foreground uppercase font-bold tracking-tighter mb-1">Expiration Date</p> <p class="text-sm font-medium">${escape_html(certificate.expiryDate ? certificate.expiryDate.toLocaleDateString("en-US", {
							month: "long",
							year: "numeric",
							day: "numeric"
						}) : "No Expiry (Lifetime)")}</p></div></div></div>`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----></div> <div class="space-y-6">`);
		Card($$renderer2, {
			children: ($$renderer3) => {
				Card_header($$renderer3, {
					class: "py-4 border-b bg-muted/10",
					children: ($$renderer4) => {
						Card_title($$renderer4, {
							class: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: ($$renderer5) => {
								$$renderer5.push(`<!---->Properties`);
							},
							$$slots: { default: true }
						});
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> `);
				Card_content($$renderer3, {
					class: "p-6 space-y-4",
					children: ($$renderer4) => {
						$$renderer4.push(`<div class="flex items-center justify-between text-sm py-1"><span class="flex items-center text-muted-foreground text-xs">`);
						Calendar($$renderer4, { class: "mr-2 h-4 w-4" });
						$$renderer4.push(`<!----> Date Added</span> <span class="font-medium text-xs">Recently</span></div> <div class="flex items-center justify-between text-sm py-1"><span class="flex items-center text-muted-foreground text-xs">`);
						Clock($$renderer4, { class: "mr-2 h-4 w-4" });
						$$renderer4.push(`<!----> Validity</span> `);
						if (status === "expired") {
							$$renderer4.push("<!--[0-->");
							Badge($$renderer4, {
								variant: "outline",
								class: "text-[10px] text-destructive border-destructive/30",
								children: ($$renderer5) => {
									$$renderer5.push(`<!---->Expired`);
								},
								$$slots: { default: true }
							});
						} else if (status === "lifetime") {
							$$renderer4.push("<!--[1-->");
							Badge($$renderer4, {
								variant: "secondary",
								class: "text-[10px]",
								children: ($$renderer5) => {
									$$renderer5.push(`<!---->Lifetime Access`);
								},
								$$slots: { default: true }
							});
						} else {
							$$renderer4.push("<!--[-1-->");
							Badge($$renderer4, {
								variant: "secondary",
								class: "text-[10px]",
								children: ($$renderer5) => {
									$$renderer5.push(`<!---->Valid Credential`);
								},
								$$slots: { default: true }
							});
						}
						$$renderer4.push(`<!--]--></div>`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----> `);
		Card($$renderer2, {
			children: ($$renderer3) => {
				Card_header($$renderer3, {
					class: "py-4 border-b bg-muted/10",
					children: ($$renderer4) => {
						Card_title($$renderer4, {
							class: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: ($$renderer5) => {
								$$renderer5.push(`<!---->Verification`);
							},
							$$slots: { default: true }
						});
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> `);
				Card_content($$renderer3, {
					class: "p-6",
					children: ($$renderer4) => {
						$$renderer4.push(`<div class="flex flex-col gap-3">`);
						Button($$renderer4, {
							variant: "outline",
							class: "w-full justify-between h-auto py-3 px-4 rounded-xl border-dashed",
							children: ($$renderer5) => {
								$$renderer5.push(`<span class="text-xs italic text-muted-foreground">No verification link set</span> `);
								Arrow_up_right($$renderer5, { class: "h-3 w-3 opacity-30" });
								$$renderer5.push(`<!---->`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----> <p class="text-[10px] text-center text-muted-foreground italic">Add a link to the certificate issuer's portal to allow others to verify this credential.</p></div>`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----></div></div></div>`);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-DxHhc83r.js.map