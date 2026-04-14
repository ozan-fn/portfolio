import { C as ensure_array_like, L as head, T as escape_html, c as attr, x as derived } from "./dev-D04rZKKe.js";
import { t as Button } from "./button-DA4j647p.js";
import { t as Card } from "./card-NgUFv-dy.js";
import { t as Award } from "./award-BHMo8ArH.js";
import { t as Aspect_ratio } from "./aspect-ratio-DYpdVE6F.js";
import { t as Calendar } from "./calendar-kEcXdJVQ.js";
import { t as getFileUrl } from "./storage.client-BxgykJF5.js";
import { t as External_link } from "./external-link-qYkMRxz3.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/certificates/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const certificates = derived(() => data.certificates);
		const formatDate = (date) => {
			return new Date(date).toLocaleDateString("id-ID", {
				year: "numeric",
				month: "short"
			});
		};
		head("v9ah68", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Certificates | Portfolio</title>`);
			});
		});
		$$renderer.push(`<div class="flex flex-col gap-6"><div class="bg-primary/5 p-10 rounded-2xl border border-primary/10 relative overflow-hidden shadow-inner"><div class="absolute -right-10 -top-10 size-40 bg-primary/5 blur-3xl rounded-full"></div> <div class="flex items-center gap-2 mb-3">`);
		Award($$renderer, {
			size: 16,
			class: "text-primary"
		});
		$$renderer.push(`<!----> <span class="text-[10px] font-bold tracking-widest uppercase text-primary">Recognition</span></div> <h3 class="text-4xl font-black mb-4 tracking-tight text-primary leading-tight">Certificates 🏆</h3> <p class="text-muted-foreground text-xl leading-relaxed max-w-2xl">Koleksi sertifikasi dan pencapaian dalam perjalanan belajar koding. <br/> <span class="text-sm italic text-primary/80 mt-2 block">"Belajar terus, sertifikat mah bonus yang penting ilmunya."</span></p></div> <div class="mt-2 flex items-center justify-between px-0.5"><div class="flex items-center gap-2"><svg class="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg> <span class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">achievements</span></div> <span class="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">${escape_html(certificates().length)} items</span></div> `);
		if (certificates().length === 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="rounded-2xl border border-border bg-muted/30 p-12 flex flex-col items-center justify-center text-center space-y-4">`);
			Award($$renderer, {
				size: 48,
				class: "text-muted-foreground opacity-20"
			});
			$$renderer.push(`<!----> <p class="text-sm text-muted-foreground tracking-wide">Belum ada sertifikat yang ditampilkan.</p></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
			const each_array = ensure_array_like(certificates());
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let cert = each_array[$$index];
				if (Card) {
					$$renderer.push("<!--[-->");
					Card($$renderer, {
						class: "group rounded-2xl border border-border bg-card overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg",
						children: ($$renderer) => {
							$$renderer.push(`<div class="relative overflow-hidden border-b border-border">`);
							if (Aspect_ratio) {
								$$renderer.push("<!--[-->");
								Aspect_ratio($$renderer, {
									ratio: 16 / 9,
									children: ($$renderer) => {
										if (cert.thumbnail) {
											$$renderer.push("<!--[0-->");
											$$renderer.push(`<img${attr("src", getFileUrl(cert.thumbnail))}${attr("alt", cert.title)} class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"/>`);
										} else {
											$$renderer.push("<!--[-1-->");
											$$renderer.push(`<div class="w-full h-full bg-muted/50 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">`);
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
							$$renderer.push(` <div class="absolute top-3 left-3"><span class="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md backdrop-blur-md border border-primary/20 bg-background/80 text-foreground">${escape_html(cert.issuer)}</span></div> `);
							if (cert.featured) {
								$$renderer.push("<!--[0-->");
								$$renderer.push(`<div class="absolute top-3 right-3"><span class="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md bg-primary text-primary-foreground shadow-sm">Featured</span></div>`);
							} else $$renderer.push("<!--[-1-->");
							$$renderer.push(`<!--]--></div> <div class="p-5 flex flex-col flex-1 gap-4"><div class="flex-1 space-y-2"><h4 class="text-lg font-bold tracking-tight text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">${escape_html(cert.title)}</h4> <div class="flex items-center gap-1.5 text-muted-foreground text-[10px] font-bold uppercase tracking-widest">`);
							Calendar($$renderer, {
								size: 12,
								class: "opacity-70"
							});
							$$renderer.push(`<!----> <span>${escape_html(formatDate(cert.issueDate))}</span></div></div> <div class="pt-3 mt-auto border-t border-border/50">`);
							if (cert.verifyUrl) {
								$$renderer.push("<!--[0-->");
								Button($$renderer, {
									variant: "ghost",
									size: "sm",
									class: "w-full h-9 text-[10px] font-bold tracking-widest uppercase group/btn bg-muted/30 hover:bg-primary hover:text-primary-foreground transition-all",
									href: cert.verifyUrl,
									target: "_blank",
									children: ($$renderer) => {
										$$renderer.push(`<!---->Verify Certificate `);
										External_link($$renderer, {
											size: 14,
											class: "ml-2 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
										});
										$$renderer.push(`<!---->`);
									},
									$$slots: { default: true }
								});
							} else {
								$$renderer.push("<!--[-1-->");
								Button($$renderer, {
									variant: "ghost",
									size: "sm",
									class: "w-full h-9 text-[10px] font-bold tracking-widest uppercase cursor-default opacity-50 bg-muted/30",
									disabled: true,
									children: ($$renderer) => {
										$$renderer.push(`<!---->No Link`);
									},
									$$slots: { default: true }
								});
							}
							$$renderer.push(`<!--]--></div></div>`);
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

//# sourceMappingURL=_page.svelte-BrrSF0GG.js.map