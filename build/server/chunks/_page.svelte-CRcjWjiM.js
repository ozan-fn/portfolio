import "./dev-D04rZKKe.js";
import "./state-C6D_xCDY.js";
import { t as Button } from "./button-DA4j647p.js";
import { a as Card_header, i as Card_footer, n as Card_content, o as Card_title, r as Card_description, t as Card } from "./card-NgUFv-dy.js";
import { t as Input } from "./input-D59IkaTZ.js";
import { t as Label } from "./label-CGw7bmi2.js";
import "./auth-client-B13dwBf6.js";
//#region .svelte-kit/adapter-bun/entries/pages/(auth)/login/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let email = "";
		let password = "";
		let isLoading = false;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<div class="flex min-h-screen items-center justify-center bg-muted/40 p-4">`);
			if (Card) {
				$$renderer.push("<!--[-->");
				Card($$renderer, {
					class: "w-full max-w-md",
					children: ($$renderer) => {
						if (Card_header) {
							$$renderer.push("<!--[-->");
							Card_header($$renderer, {
								class: "space-y-1",
								children: ($$renderer) => {
									if (Card_title) {
										$$renderer.push("<!--[-->");
										Card_title($$renderer, {
											class: "text-2xl font-bold",
											children: ($$renderer) => {
												$$renderer.push(`<!---->Login`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									if (Card_description) {
										$$renderer.push("<!--[-->");
										Card_description($$renderer, {
											class: " text-balance italic",
											children: ($$renderer) => {
												$$renderer.push(`<!---->"Mau nyoba bobol kah dek? Belajar dulu yang bener biar gak kena mental pas liat kodenya. 😎"`);
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
						if (Card_content) {
							$$renderer.push("<!--[-->");
							Card_content($$renderer, {
								children: ($$renderer) => {
									$$renderer.push("<!--[-1-->");
									$$renderer.push(`<!--]--> <form class="grid gap-4"><div class="grid gap-2">`);
									Label($$renderer, {
										for: "email",
										children: ($$renderer) => {
											$$renderer.push(`<!---->Email`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----> `);
									Input($$renderer, {
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
									$$renderer.push(`<!----></div> <div class="grid gap-2"><div class="flex items-center justify-between">`);
									Label($$renderer, {
										for: "password",
										children: ($$renderer) => {
											$$renderer.push(`<!---->Password`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----> <span class="text-[10px] text-muted-foreground uppercase tracking-widest">Hati-hati Typo Dek</span></div> `);
									Input($$renderer, {
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
									$$renderer.push(`<!----></div> `);
									Button($$renderer, {
										type: "submit",
										class: "w-full font-bold",
										disabled: isLoading,
										children: ($$renderer) => {
											$$renderer.push("<!--[-1-->");
											$$renderer.push(`Login (Bukan Bobol Ya!)`);
											$$renderer.push(`<!--]-->`);
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
						$$renderer.push(` `);
						if (Card_footer) {
							$$renderer.push("<!--[-->");
							Card_footer($$renderer, {
								class: "flex flex-col items-center gap-2 text-sm text-muted-foreground",
								children: ($$renderer) => {
									$$renderer.push(`<p class="text-[10px] opacity-50">#AntiBobolClub #BelajarLagiDek</p>`);
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
			$$renderer.push(`</div>`);
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

//# sourceMappingURL=_page.svelte-CRcjWjiM.js.map