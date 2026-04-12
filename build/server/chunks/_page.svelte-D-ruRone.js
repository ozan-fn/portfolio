import { C as ensure_array_like, T as escape_html, c as attr, x as derived } from "./dev-OC6EGoUN.js";
import { t as Button } from "./button-BAli88Z_.js";
import { t as Badge } from "./badge-ysT7GMMH.js";
import { a as Card_header, i as Card_footer, o as Card_title, t as Card } from "./card-BAKj0KoL.js";
import { t as Award } from "./award-gizuQEWJ.js";
import { t as Calendar } from "./calendar-BSMbf7m-.js";
import { t as Aspect_ratio } from "./aspect-ratio-yWbVAk8i.js";
import { t as External_link } from "./external-link-Du5Lwh_5.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/certificates/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const certificates = derived(() => data.certificates);
		const formatDate = (dateString) => {
			return new Date(dateString).toLocaleDateString("id-ID", {
				year: "numeric",
				month: "long"
			});
		};
		$$renderer.push(`<div class="container mx-auto space-y-8 pb-10"><div class="bg-primary/5 p-10 rounded-3xl border border-primary/10 relative overflow-hidden"><div class="absolute -right-20 -top-20 size-64 bg-primary/10 blur-3xl rounded-full"></div> <div class="relative z-10"><div class="flex items-center gap-2 mb-4 text-primary font-mono text-sm uppercase tracking-widest">`);
		Award($$renderer, { size: 16 });
		$$renderer.push(`<!----> <span>Recognition</span></div> <h1 class="text-5xl font-black mb-4 tracking-tighter text-foreground">Certificates 🏆</h1> <p class="text-muted-foreground text-xl max-w-2xl leading-relaxed">Koleksi sertifikasi dan pencapaian dalam perjalanan belajar koding. <br/><span class="text-sm italic text-primary/80">"Belajar terus, sertifikat mah bonus yang penting ilmunya."</span></p></div></div> `);
		if (certificates().length === 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="flex flex-col items-center justify-center py-20 text-center space-y-4">`);
			Award($$renderer, {
				size: 48,
				class: "text-muted-foreground opacity-20"
			});
			$$renderer.push(`<!----> <p class="text-muted-foreground">Belum ada sertifikat yang ditampilkan.</p></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
			const each_array = ensure_array_like(certificates());
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let cert = each_array[$$index];
				if (Card) {
					$$renderer.push("<!--[-->");
					Card($$renderer, {
						class: "group overflow-hidden border-muted bg-card transition-all hover:shadow-2xl hover:-translate-y-1",
						children: ($$renderer) => {
							$$renderer.push(`<div class="relative overflow-hidden">`);
							if (Aspect_ratio) {
								$$renderer.push("<!--[-->");
								Aspect_ratio($$renderer, {
									ratio: 16 / 9,
									children: ($$renderer) => {
										if (cert.thumbnail) {
											$$renderer.push("<!--[0-->");
											$$renderer.push(`<img${attr("src", cert.thumbnail)}${attr("alt", cert.title)} class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"/>`);
										} else {
											$$renderer.push("<!--[-1-->");
											$$renderer.push(`<div class="w-full h-full bg-muted flex items-center justify-center">`);
											Award($$renderer, {
												size: 48,
												class: "text-muted-foreground opacity-20"
											});
											$$renderer.push(`<!----></div>`);
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
							$$renderer.push(`</div> `);
							if (Card_header) {
								$$renderer.push("<!--[-->");
								Card_header($$renderer, {
									class: "space-y-2",
									children: ($$renderer) => {
										$$renderer.push(`<div class="flex items-center justify-between">`);
										Badge($$renderer, {
											variant: "outline",
											class: "text-[10px] font-bold uppercase tracking-widest text-primary border-primary/20 bg-primary/5",
											children: ($$renderer) => {
												$$renderer.push(`<!---->${escape_html(cert.issuer)}`);
											},
											$$slots: { default: true }
										});
										$$renderer.push(`<!----> <div class="flex items-center gap-1.5 text-muted-foreground text-[10px] font-medium uppercase tracking-wider">`);
										Calendar($$renderer, { size: 12 });
										$$renderer.push(`<!----> <span>${escape_html(formatDate(cert.issueDate))}</span></div></div> `);
										if (Card_title) {
											$$renderer.push("<!--[-->");
											Card_title($$renderer, {
												class: "text-xl font-bold leading-tight group-hover:text-primary transition-colors",
												children: ($$renderer) => {
													$$renderer.push(`<!---->${escape_html(cert.title)}`);
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
							if (Card_footer) {
								$$renderer.push("<!--[-->");
								Card_footer($$renderer, {
									class: "pt-2",
									children: ($$renderer) => {
										if (cert.verifyUrl) {
											$$renderer.push("<!--[0-->");
											Button($$renderer, {
												variant: "outline",
												size: "sm",
												class: "w-full group/btn relative overflow-hidden transition-all hover:bg-primary hover:text-primary-foreground border-primary/20",
												href: cert.verifyUrl,
												target: "_blank",
												children: ($$renderer) => {
													$$renderer.push(`<span class="relative z-10 flex items-center gap-2">Verify Certificate `);
													External_link($$renderer, {
														size: 14,
														class: "transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
													});
													$$renderer.push(`<!----></span>`);
												},
												$$slots: { default: true }
											});
										} else {
											$$renderer.push("<!--[-1-->");
											Button($$renderer, {
												variant: "ghost",
												size: "sm",
												class: "w-full cursor-default opacity-50",
												disabled: true,
												children: ($$renderer) => {
													$$renderer.push(`<!---->No Verification Link`);
												},
												$$slots: { default: true }
											});
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
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div>`);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-D-ruRone.js.map