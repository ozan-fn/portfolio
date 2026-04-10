import "./root-hPyMpEOi.js";
import { D as attr_class, L as escape_html, it as stringify, nt as spread_props } from "./renderer-CoNnoy0x.js";
import "./state.svelte-yQ996O6E.js";
import { t as Button } from "./button-Ch6ZWsjV.js";
import { t as Card } from "./card-CnyBIkIo.js";
import { t as Card_content } from "./card-content-CTbC7BF1.js";
import { t as Icon } from "./Icon-CiEhqWrS.js";
import { t as Input } from "./input-CkhnL9Hs.js";
import { n as Card_header, r as Card_title, t as Card_description } from "./card-title-JuB79r3h.js";
import { t as Card_footer } from "./card-footer-DY5qHY0f.js";
import { t as Label } from "./label-CecdpjkD.js";
import { t as authClient } from "./auth-client-CAwO3GU2.js";
import { t as Dashboard_page } from "./dashboard-page-D-aEFOn1.js";
import { t as Loader_circle } from "./loader-circle-Cd7PfToa.js";
import { t as Lock } from "./lock-DDqt2xEg.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/settings/_page.svelte.js
function User($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "user" },
		props,
		{ iconNode: [["path", { "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }], ["circle", {
			"cx": "12",
			"cy": "7",
			"r": "4"
		}]] }
	]));
}
function Camera($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "camera" },
		props,
		{ iconNode: [["path", { "d": "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" }], ["circle", {
			"cx": "12",
			"cy": "13",
			"r": "3"
		}]] }
	]));
}
function Shield_check($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "shield-check" },
		props,
		{ iconNode: [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { "d": "m9 12 2 2 4-4" }]] }
	]));
}
function Circle_alert($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "circle-alert" },
		props,
		{ iconNode: [
			["circle", {
				"cx": "12",
				"cy": "12",
				"r": "10"
			}],
			["line", {
				"x1": "12",
				"x2": "12",
				"y1": "8",
				"y2": "12"
			}],
			["line", {
				"x1": "12",
				"x2": "12.01",
				"y1": "16",
				"y2": "16"
			}]
		] }
	]));
}
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { data, form } = $$props;
		let isLoading = false;
		let message = {
			type: "",
			text: ""
		};
		let name = "";
		let currentPassword = "";
		let newPassword = "";
		let confirmPassword = "";
		async function changePassword() {
			if (!currentPassword || !newPassword || !confirmPassword) {
				message = {
					type: "error",
					text: "Isi semua field passwordnya dek."
				};
				return;
			}
			if (newPassword !== confirmPassword) {
				message = {
					type: "error",
					text: "Password konfirmasi gak cocok dek, fokus!"
				};
				return;
			}
			isLoading = true;
			message = {
				type: "",
				text: ""
			};
			const { error } = await authClient.changePassword({
				newPassword,
				currentPassword,
				revokeOtherSessions: true
			});
			if (error) message = {
				type: "error",
				text: error.message || "Gagal ganti password."
			};
			else {
				message = {
					type: "success",
					text: "Password diganti! Jangan sampe lupa lagi."
				};
				currentPassword = "";
				newPassword = "";
				confirmPassword = "";
			}
			isLoading = false;
		}
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			{
				let children = function($$renderer4) {
					$$renderer4.push(`<div class="flex flex-col gap-6">`);
					if (form?.message || message.text) {
						$$renderer4.push("<!--[0-->");
						const isError = form?.message?.includes("Gagal") || form?.success === false || message.type === "error";
						$$renderer4.push(`<div${attr_class(`flex items-center gap-2 rounded-lg border p-4 text-sm font-medium transition-all ${stringify(isError ? "bg-destructive/15 text-destructive border-destructive/20" : "bg-green-500/15 text-green-500 border-green-500/20")}`)}>`);
						if (isError) {
							$$renderer4.push("<!--[0-->");
							Circle_alert($$renderer4, { size: 18 });
						} else {
							$$renderer4.push("<!--[-1-->");
							Shield_check($$renderer4, { size: 18 });
						}
						$$renderer4.push(`<!--]--> ${escape_html(form?.message || message.text)}</div>`);
					} else $$renderer4.push("<!--[-1-->");
					$$renderer4.push(`<!--]--> <form method="POST" action="?/uploadAvatar" enctype="multipart/form-data">`);
					if (Card) {
						$$renderer4.push("<!--[-->");
						Card($$renderer4, {
							children: ($$renderer5) => {
								if (Card_header) {
									$$renderer5.push("<!--[-->");
									Card_header($$renderer5, {
										children: ($$renderer6) => {
											$$renderer6.push(`<div class="flex items-center gap-2">`);
											Camera($$renderer6, {
												size: 18,
												class: "text-primary"
											});
											$$renderer6.push(`<!----> `);
											if (Card_title) {
												$$renderer6.push("<!--[-->");
												Card_title($$renderer6, {
													class: "text-xl font-bold",
													children: ($$renderer7) => {
														$$renderer7.push(`<!---->Profile Picture`);
													},
													$$slots: { default: true }
												});
												$$renderer6.push("<!--]-->");
											} else {
												$$renderer6.push("<!--[!-->");
												$$renderer6.push("<!--]-->");
											}
											$$renderer6.push(`</div> `);
											if (Card_description) {
												$$renderer6.push("<!--[-->");
												Card_description($$renderer6, {
													children: ($$renderer7) => {
														$$renderer7.push(`<!---->Foto lama otomatis dihapus dari S3 dek.`);
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
								if (Card_content) {
									$$renderer5.push("<!--[-->");
									Card_content($$renderer5, {
										class: "flex flex-col items-center gap-4 py-2",
										children: ($$renderer6) => {
											$$renderer6.push(`<div class="relative group"><input type="file" name="avatar" accept="image/*" class="hidden"/> <button type="button" class="relative flex size-32 items-center justify-center overflow-hidden rounded-full bg-muted border-2 border-dashed border-primary/20 transition-all hover:border-primary/50">`);
											$$renderer6.push("<!--[-1-->");
											User($$renderer6, {
												size: 48,
												class: "text-muted-foreground"
											});
											$$renderer6.push(`<!--]--> <div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">`);
											Camera($$renderer6, {
												size: 24,
												class: "text-white"
											});
											$$renderer6.push(`<!----></div></button></div> <p class="text-[10px] italic text-muted-foreground">Klik foto buat ganti, dek.</p>`);
										},
										$$slots: { default: true }
									});
									$$renderer5.push("<!--]-->");
								} else {
									$$renderer5.push("<!--[!-->");
									$$renderer5.push("<!--]-->");
								}
								$$renderer5.push(` `);
								if (Card_footer) {
									$$renderer5.push("<!--[-->");
									Card_footer($$renderer5, {
										class: "border-t ",
										children: ($$renderer6) => {
											Button($$renderer6, {
												type: "submit",
												disabled: isLoading,
												class: "ml-auto font-bold min-w-[140px]",
												children: ($$renderer7) => {
													if (isLoading) {
														$$renderer7.push("<!--[0-->");
														Loader_circle($$renderer7, { class: "mr-2 size-4 animate-spin" });
														$$renderer7.push(`<!----> Uploading...`);
													} else {
														$$renderer7.push("<!--[-1-->");
														$$renderer7.push(`Update Foto`);
													}
													$$renderer7.push(`<!--]-->`);
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
							},
							$$slots: { default: true }
						});
						$$renderer4.push("<!--]-->");
					} else {
						$$renderer4.push("<!--[!-->");
						$$renderer4.push("<!--]-->");
					}
					$$renderer4.push(`</form> <form method="POST" action="?/updateProfile">`);
					if (Card) {
						$$renderer4.push("<!--[-->");
						Card($$renderer4, {
							children: ($$renderer5) => {
								if (Card_header) {
									$$renderer5.push("<!--[-->");
									Card_header($$renderer5, {
										children: ($$renderer6) => {
											$$renderer6.push(`<div class="flex items-center gap-2">`);
											User($$renderer6, {
												size: 18,
												class: "text-primary"
											});
											$$renderer6.push(`<!----> `);
											if (Card_title) {
												$$renderer6.push("<!--[-->");
												Card_title($$renderer6, {
													class: "text-xl font-bold",
													children: ($$renderer7) => {
														$$renderer7.push(`<!---->Basic Information`);
													},
													$$slots: { default: true }
												});
												$$renderer6.push("<!--]-->");
											} else {
												$$renderer6.push("<!--[!-->");
												$$renderer6.push("<!--]-->");
											}
											$$renderer6.push(`</div>`);
										},
										$$slots: { default: true }
									});
									$$renderer5.push("<!--]-->");
								} else {
									$$renderer5.push("<!--[!-->");
									$$renderer5.push("<!--]-->");
								}
								$$renderer5.push(` `);
								if (Card_content) {
									$$renderer5.push("<!--[-->");
									Card_content($$renderer5, {
										class: "space-y-4",
										children: ($$renderer6) => {
											$$renderer6.push(`<div class="space-y-2">`);
											Label($$renderer6, {
												for: "name",
												children: ($$renderer7) => {
													$$renderer7.push(`<!---->Display Name`);
												},
												$$slots: { default: true }
											});
											$$renderer6.push(`<!----> `);
											Input($$renderer6, {
												id: "name",
												name: "name",
												placeholder: "Nama beken kamu",
												disabled: isLoading,
												get value() {
													return name;
												},
												set value($$value) {
													name = $$value;
													$$settled = false;
												}
											});
											$$renderer6.push(`<!----></div> <div class="space-y-2">`);
											Label($$renderer6, {
												for: "email",
												children: ($$renderer7) => {
													$$renderer7.push(`<!---->Email Address`);
												},
												$$slots: { default: true }
											});
											$$renderer6.push(`<!----> `);
											Input($$renderer6, {
												id: "email",
												type: "email",
												value: data.user?.email,
												disabled: true,
												class: "bg-muted/50 cursor-not-allowed"
											});
											$$renderer6.push(`<!----></div>`);
										},
										$$slots: { default: true }
									});
									$$renderer5.push("<!--]-->");
								} else {
									$$renderer5.push("<!--[!-->");
									$$renderer5.push("<!--]-->");
								}
								$$renderer5.push(` `);
								if (Card_footer) {
									$$renderer5.push("<!--[-->");
									Card_footer($$renderer5, {
										class: "border-t ",
										children: ($$renderer6) => {
											Button($$renderer6, {
												type: "submit",
												disabled: isLoading,
												class: "ml-auto font-bold min-w-[140px]",
												children: ($$renderer7) => {
													$$renderer7.push(`<!---->${escape_html(isLoading ? "Nyimpen..." : "Simpan Nama")}`);
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
							},
							$$slots: { default: true }
						});
						$$renderer4.push("<!--]-->");
					} else {
						$$renderer4.push("<!--[!-->");
						$$renderer4.push("<!--]-->");
					}
					$$renderer4.push(`</form> `);
					if (Card) {
						$$renderer4.push("<!--[-->");
						Card($$renderer4, {
							children: ($$renderer5) => {
								if (Card_header) {
									$$renderer5.push("<!--[-->");
									Card_header($$renderer5, {
										children: ($$renderer6) => {
											$$renderer6.push(`<div class="flex items-center gap-2">`);
											Lock($$renderer6, {
												size: 18,
												class: "text-orange-500"
											});
											$$renderer6.push(`<!----> `);
											if (Card_title) {
												$$renderer6.push("<!--[-->");
												Card_title($$renderer6, {
													class: "text-xl font-bold",
													children: ($$renderer7) => {
														$$renderer7.push(`<!---->Security`);
													},
													$$slots: { default: true }
												});
												$$renderer6.push("<!--]-->");
											} else {
												$$renderer6.push("<!--[!-->");
												$$renderer6.push("<!--]-->");
											}
											$$renderer6.push(`</div>`);
										},
										$$slots: { default: true }
									});
									$$renderer5.push("<!--]-->");
								} else {
									$$renderer5.push("<!--[!-->");
									$$renderer5.push("<!--]-->");
								}
								$$renderer5.push(` `);
								if (Card_content) {
									$$renderer5.push("<!--[-->");
									Card_content($$renderer5, {
										class: "space-y-4",
										children: ($$renderer6) => {
											$$renderer6.push(`<div class="space-y-2">`);
											Label($$renderer6, {
												for: "current",
												children: ($$renderer7) => {
													$$renderer7.push(`<!---->Password Sekarang`);
												},
												$$slots: { default: true }
											});
											$$renderer6.push(`<!----> `);
											Input($$renderer6, {
												id: "current",
												type: "password",
												placeholder: "••••••••",
												disabled: isLoading,
												get value() {
													return currentPassword;
												},
												set value($$value) {
													currentPassword = $$value;
													$$settled = false;
												}
											});
											$$renderer6.push(`<!----></div> <div class="space-y-2">`);
											Label($$renderer6, {
												for: "new",
												children: ($$renderer7) => {
													$$renderer7.push(`<!---->Password Baru`);
												},
												$$slots: { default: true }
											});
											$$renderer6.push(`<!----> `);
											Input($$renderer6, {
												id: "new",
												type: "password",
												placeholder: "••••••••",
												disabled: isLoading,
												get value() {
													return newPassword;
												},
												set value($$value) {
													newPassword = $$value;
													$$settled = false;
												}
											});
											$$renderer6.push(`<!----></div> <div class="space-y-2">`);
											Label($$renderer6, {
												for: "confirm",
												children: ($$renderer7) => {
													$$renderer7.push(`<!---->Konfirmasi Password`);
												},
												$$slots: { default: true }
											});
											$$renderer6.push(`<!----> `);
											Input($$renderer6, {
												id: "confirm",
												type: "password",
												placeholder: "••••••••",
												disabled: isLoading,
												get value() {
													return confirmPassword;
												},
												set value($$value) {
													confirmPassword = $$value;
													$$settled = false;
												}
											});
											$$renderer6.push(`<!----></div>`);
										},
										$$slots: { default: true }
									});
									$$renderer5.push("<!--]-->");
								} else {
									$$renderer5.push("<!--[!-->");
									$$renderer5.push("<!--]-->");
								}
								$$renderer5.push(` `);
								if (Card_footer) {
									$$renderer5.push("<!--[-->");
									Card_footer($$renderer5, {
										class: "border-t ",
										children: ($$renderer6) => {
											Button($$renderer6, {
												variant: "outline",
												onclick: changePassword,
												disabled: isLoading,
												class: "ml-auto font-bold border-orange-500/20 text-orange-600 hover:bg-orange-500/10",
												children: ($$renderer7) => {
													$$renderer7.push(`<!---->Ganti Password`);
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
							},
							$$slots: { default: true }
						});
						$$renderer4.push("<!--]-->");
					} else {
						$$renderer4.push("<!--[!-->");
						$$renderer4.push("<!--]-->");
					}
					$$renderer4.push(`</div>`);
				};
				Dashboard_page($$renderer3, {
					title: "Settings",
					description: "Atur profilmu biar gak keliatan amatiran pas di-stalking HR, dek.",
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

//# sourceMappingURL=_page.svelte-BjF-2SYE.js.map