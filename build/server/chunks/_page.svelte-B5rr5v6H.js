import "./client-0jB2AjeY.js";
import { t as Button } from "./button-Bb0vadXY.js";
import { t as Card } from "./card-BXUXQfdp.js";
import { t as Card_content } from "./card-content-5415gil-.js";
import { t as Input } from "./input-VkuySYpz.js";
import { i as Card_title, n as Card_footer, r as Card_header, t as Card_description } from "./card-title-DqvBQ5d7.js";
import { t as Label } from "./label-BP7Pf62d.js";
import "./auth-client-Bk4cDtM5.js";
//#region .svelte-kit/adapter-bun/entries/pages/(auth)/login/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let email = "";
		let password = "";
		let isLoading = false;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			$$renderer3.push(`<div class="flex min-h-screen items-center justify-center bg-muted/40 p-4">`);
			if (Card) {
				$$renderer3.push("<!--[-->");
				Card($$renderer3, {
					class: "w-full max-w-md",
					children: ($$renderer4) => {
						if (Card_header) {
							$$renderer4.push("<!--[-->");
							Card_header($$renderer4, {
								class: "space-y-1",
								children: ($$renderer5) => {
									if (Card_title) {
										$$renderer5.push("<!--[-->");
										Card_title($$renderer5, {
											class: "text-2xl font-bold",
											children: ($$renderer6) => {
												$$renderer6.push(`<!---->Login`);
											},
											$$slots: { default: true }
										});
										$$renderer5.push("<!--]-->");
									} else {
										$$renderer5.push("<!--[!-->");
										$$renderer5.push("<!--]-->");
									}
									$$renderer5.push(` `);
									if (Card_description) {
										$$renderer5.push("<!--[-->");
										Card_description($$renderer5, {
											class: " text-balance italic",
											children: ($$renderer6) => {
												$$renderer6.push(`<!---->"Mau nyoba bobol kah dek? Belajar dulu yang bener biar gak kena mental pas liat kodenya. 😎"`);
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
						if (Card_content) {
							$$renderer4.push("<!--[-->");
							Card_content($$renderer4, {
								children: ($$renderer5) => {
									$$renderer5.push("<!--[-1-->");
									$$renderer5.push(`<!--]--> <form class="grid gap-4"><div class="grid gap-2">`);
									Label($$renderer5, {
										for: "email",
										children: ($$renderer6) => {
											$$renderer6.push(`<!---->Email`);
										},
										$$slots: { default: true }
									});
									$$renderer5.push(`<!----> `);
									Input($$renderer5, {
										id: "email",
										type: "email",
										placeholder: "si_paling_hacker@gmail.com",
										required: true,
										disabled: isLoading,
										get value() {
											return email;
										},
										set value($$value) {
											email = $$value;
											$$settled = false;
										}
									});
									$$renderer5.push(`<!----></div> <div class="grid gap-2"><div class="flex items-center justify-between">`);
									Label($$renderer5, {
										for: "password",
										children: ($$renderer6) => {
											$$renderer6.push(`<!---->Password`);
										},
										$$slots: { default: true }
									});
									$$renderer5.push(`<!----> <span class="text-[10px] text-muted-foreground uppercase tracking-widest">Hati-hati Typo Dek</span></div> `);
									Input($$renderer5, {
										id: "password",
										type: "password",
										required: true,
										disabled: isLoading,
										get value() {
											return password;
										},
										set value($$value) {
											password = $$value;
											$$settled = false;
										}
									});
									$$renderer5.push(`<!----></div> `);
									Button($$renderer5, {
										type: "submit",
										class: "w-full font-bold",
										disabled: isLoading,
										children: ($$renderer6) => {
											$$renderer6.push("<!--[-1-->");
											$$renderer6.push(`Login (Bukan Bobol Ya!)`);
											$$renderer6.push(`<!--]-->`);
										},
										$$slots: { default: true }
									});
									$$renderer5.push(`<!----></form>`);
								},
								$$slots: { default: true }
							});
							$$renderer4.push("<!--]-->");
						} else {
							$$renderer4.push("<!--[!-->");
							$$renderer4.push("<!--]-->");
						}
						$$renderer4.push(` `);
						if (Card_footer) {
							$$renderer4.push("<!--[-->");
							Card_footer($$renderer4, {
								class: "flex flex-col items-center gap-2 text-sm text-muted-foreground",
								children: ($$renderer5) => {
									$$renderer5.push(`<p class="text-[10px] opacity-50">#AntiBobolClub #BelajarLagiDek</p>`);
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

//# sourceMappingURL=_page.svelte-B5rr5v6H.js.map