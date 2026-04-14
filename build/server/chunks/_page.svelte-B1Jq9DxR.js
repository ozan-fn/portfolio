import { C as ensure_array_like, L as head, T as escape_html, c as attr, pt as stringify, ut as spread_props, x as derived } from "./dev-D04rZKKe.js";
import { t as Button } from "./button-DA4j647p.js";
import "./badge-cwPhXDyp.js";
import { t as Card } from "./card-NgUFv-dy.js";
import { t as Icon } from "./Icon-BhN73e3z.js";
import { t as Pen_tool } from "./pen-tool-Cjf1iyCj.js";
import { t as getFileUrl } from "./storage.client-DuiLhuWL.js";
import { t as Aspect_ratio } from "./aspect-ratio-BImvbOXt.js";
import { t as Input } from "./input-D59IkaTZ.js";
import { t as Calendar } from "./calendar-BgJvywF6.js";
import { t as Clock } from "./clock-DhQTlM8O.js";
import { t as Arrow_right } from "./arrow-right-Os0CVGYj.js";
import { t as Search } from "./search-d5lY_O2s.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/blog/_page.svelte.js
function Hash($$renderer, $$props) {
	/**
	* @license @lucide/svelte v1.8.0 - ISC
	*
	* ISC License
	*
	* Copyright (c) 2026 Lucide Icons and Contributors
	*
	* Permission to use, copy, modify, and/or distribute this software for any
	* purpose with or without fee is hereby granted, provided that the above
	* copyright notice and this permission notice appear in all copies.
	*
	* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
	* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
	* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
	* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
	* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
	* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
	* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	*
	* ---
	*
	* The following Lucide icons are derived from the Feather project:
	*
	* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
	*
	* The MIT License (MIT) (for the icons listed above)
	*
	* Copyright (c) 2013-present Cole Bemis
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*
	*/
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "hash" },
		props,
		{ iconNode: [
			["line", {
				"x1": "4",
				"x2": "20",
				"y1": "9",
				"y2": "9"
			}],
			["line", {
				"x1": "4",
				"x2": "20",
				"y1": "15",
				"y2": "15"
			}],
			["line", {
				"x1": "10",
				"x2": "8",
				"y1": "3",
				"y2": "21"
			}],
			["line", {
				"x1": "16",
				"x2": "14",
				"y1": "3",
				"y2": "21"
			}]
		] }
	]));
}
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		let searchQuery = "";
		const filteredPosts = derived(() => data.posts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.content.toLowerCase().includes(searchQuery.toLowerCase())));
		const featuredPost = derived(() => filteredPosts().find((p) => p.featured) || filteredPosts()[0]);
		const regularPosts = derived(() => filteredPosts().filter((p) => p.id !== featuredPost()?.id));
		function formatDate(date) {
			return new Date(date).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric"
			});
		}
		function getReadTime(content) {
			const wordsPerMinute = 200;
			const words = content.trim().split(/\s+/).length;
			return `${Math.ceil(words / wordsPerMinute)} min read`;
		}
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			head("rwi3u8", $$renderer, ($$renderer) => {
				$$renderer.title(($$renderer) => {
					$$renderer.push(`<title>Writing | Portfolio</title>`);
				});
			});
			$$renderer.push(`<div class="flex flex-col gap-6 pb-10"><div class="bg-primary/5 p-10 rounded-2xl border border-primary/10 relative overflow-hidden shadow-inner"><div class="absolute -right-10 -top-10 size-40 bg-primary/5 blur-3xl rounded-full"></div> <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10"><div class="space-y-3"><div class="flex items-center gap-2">`);
			Pen_tool($$renderer, {
				size: 16,
				class: "text-primary"
			});
			$$renderer.push(`<!----> <span class="text-[10px] font-bold tracking-widest uppercase text-primary">Articles</span></div> <h3 class="text-4xl font-black tracking-tight text-primary leading-tight">Writing ✍️</h3> <p class="text-muted-foreground text-xl leading-relaxed max-w-2xl">Berbagi pemikiran seputar teknologi, koding, dan pengembangan diri.</p></div> <div class="relative w-full md:w-80">`);
			Search($$renderer, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" });
			$$renderer.push(`<!----> `);
			Input($$renderer, {
				placeholder: "Cari artikel...",
				class: "pl-10 h-11 bg-background/50 border-border rounded-xl focus-visible:ring-primary backdrop-blur-sm text-sm",
				get value() {
					return searchQuery;
				},
				set value($$value) {
					searchQuery = $$value;
					$$settled = false;
				}
			});
			$$renderer.push(`<!----></div></div></div> `);
			if (featuredPost()) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="mt-2 text-left"><a${attr("href", `/blog/${stringify(featuredPost().slug)}`)} class="block group">`);
				if (Card) {
					$$renderer.push("<!--[-->");
					Card($$renderer, {
						class: "group rounded-2xl border border-border bg-card overflow-hidden flex flex-col lg:flex-row transition-all hover:-translate-y-1 hover:shadow-lg",
						children: ($$renderer) => {
							$$renderer.push(`<div class="relative w-full lg:w-3/5 overflow-hidden border-b lg:border-b-0 lg:border-r border-border">`);
							if (Aspect_ratio) {
								$$renderer.push("<!--[-->");
								Aspect_ratio($$renderer, {
									ratio: 16 / 9,
									class: "h-full",
									children: ($$renderer) => {
										$$renderer.push(`<img${attr("src", getFileUrl(featuredPost().image))}${attr("alt", featuredPost().title)} class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"/>`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
							$$renderer.push(` <div class="absolute top-4 left-4"><span class="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md backdrop-blur-md border border-primary/20 bg-background/90 text-primary shadow-sm">Featured • ${escape_html(featuredPost().category?.name || "General")}</span></div></div> <div class="w-full lg:w-2/5 p-6 lg:p-8 flex flex-col justify-center gap-5"><div class="flex flex-wrap items-center gap-3 text-muted-foreground text-[10px] font-bold uppercase tracking-widest"><span class="flex items-center gap-1.5">`);
							Calendar($$renderer, {
								size: 12,
								class: "opacity-70"
							});
							$$renderer.push(`<!----> ${escape_html(formatDate(featuredPost().createdAt))}</span> <span class="hidden sm:inline">•</span> <span class="flex items-center gap-1.5">`);
							Clock($$renderer, {
								size: 12,
								class: "opacity-70"
							});
							$$renderer.push(`<!----> ${escape_html(getReadTime(featuredPost().content))}</span></div> <div class="space-y-3"><h2 class="text-2xl lg:text-3xl font-bold tracking-tight text-foreground leading-snug group-hover:text-primary transition-colors">${escape_html(featuredPost().title)}</h2> <div class="text-muted-foreground text-sm lg:text-base leading-relaxed line-clamp-3">${escape_html(featuredPost().content.replace(/<[^>]*>/g, "").substring(0, 160))}...</div></div> <div class="pt-4 mt-auto border-t border-border/50 flex items-center justify-between"><div class="flex items-center gap-2"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ozan" alt="Author" class="size-6 rounded-full bg-muted border border-border"/> <span class="text-[10px] font-bold tracking-widest uppercase text-foreground">Ozan</span></div> <div class="flex items-center gap-4">`);
							Button($$renderer, {
								variant: "outline",
								class: "w-fit h-8 px-3 text-[9px] font-bold tracking-widest uppercase group/btn border-border bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-lg",
								children: ($$renderer) => {
									$$renderer.push(`<!---->Baca `);
									Arrow_right($$renderer, {
										size: 12,
										class: "ml-1.5 transition-transform group-hover/btn:translate-x-1"
									});
									$$renderer.push(`<!---->`);
								},
								$$slots: { default: true }
							});
							$$renderer.push(`<!----></div></div></div>`);
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
				$$renderer.push(`</a></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <div class="mt-6 flex items-center justify-between px-0.5"><div class="flex items-center gap-2"><svg class="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg> <span class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">latest posts</span></div> <span class="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">${escape_html(regularPosts().length)} items</span></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
			const each_array = ensure_array_like(regularPosts());
			for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
				let post = each_array[$$index_1];
				$$renderer.push(`<a${attr("href", `/blog/${stringify(post.slug)}`)} class="block group">`);
				if (Card) {
					$$renderer.push("<!--[-->");
					Card($$renderer, {
						class: "group rounded-2xl border border-border bg-card overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg h-full",
						children: ($$renderer) => {
							$$renderer.push(`<div class="relative overflow-hidden border-b border-border">`);
							if (Aspect_ratio) {
								$$renderer.push("<!--[-->");
								Aspect_ratio($$renderer, {
									ratio: 16 / 10,
									children: ($$renderer) => {
										$$renderer.push(`<img${attr("src", getFileUrl(post.image))}${attr("alt", post.title)} class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"/>`);
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
							$$renderer.push(` <div class="absolute top-3 left-3"><span class="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md backdrop-blur-md border border-border/50 bg-background/80 text-foreground">${escape_html(post.category?.name || "General")}</span></div></div> <div class="p-5 flex flex-col flex-1 gap-4 text-left"><div class="flex items-center justify-between text-muted-foreground text-[9px] font-bold uppercase tracking-widest"><div class="flex items-center gap-2"><span class="flex items-center gap-1">`);
							Calendar($$renderer, {
								size: 10,
								class: "opacity-70"
							});
							$$renderer.push(`<!----> ${escape_html(formatDate(post.createdAt))}</span> <span>•</span> <span class="flex items-center gap-1">`);
							Clock($$renderer, {
								size: 10,
								class: "opacity-70"
							});
							$$renderer.push(`<!----> ${escape_html(getReadTime(post.content))}</span></div></div> <div class="flex-1 space-y-2"><h4 class="text-lg font-bold tracking-tight text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">${escape_html(post.title)}</h4> <p class="text-sm text-muted-foreground leading-relaxed line-clamp-2">${escape_html(post.content.replace(/<[^>]*>/g, "").substring(0, 100))}...</p></div> `);
							if (post.tags) {
								$$renderer.push("<!--[0-->");
								$$renderer.push(`<div class="flex flex-wrap gap-1.5 pt-1"><!--[-->`);
								const each_array_1 = ensure_array_like(post.tags.split(",").slice(0, 3));
								for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
									let tag = each_array_1[$$index];
									$$renderer.push(`<span class="px-1.5 py-0.5 rounded bg-muted/30 text-[8px] font-bold uppercase tracking-widest text-muted-foreground border border-border/30">`);
									Hash($$renderer, {
										size: 8,
										class: "mr-0.5 inline opacity-50"
									});
									$$renderer.push(`<!---->${escape_html(tag)}</span>`);
								}
								$$renderer.push(`<!--]--></div>`);
							} else $$renderer.push("<!--[-1-->");
							$$renderer.push(`<!--]--> <div class="pt-3 mt-auto border-t border-border/50 flex items-center justify-between">`);
							Button($$renderer, {
								variant: "ghost",
								class: "h-7 px-2 text-[9px] font-bold tracking-widest uppercase text-primary hover:bg-primary/10 group/link",
								children: ($$renderer) => {
									$$renderer.push(`<!---->Read More `);
									Arrow_right($$renderer, {
										size: 12,
										class: "ml-1 transition-transform group-hover/link:translate-x-1"
									});
									$$renderer.push(`<!---->`);
								},
								$$slots: { default: true }
							});
							$$renderer.push(`<!----></div></div>`);
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
				$$renderer.push(`</a>`);
			}
			$$renderer.push(`<!--]--></div></div>`);
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

//# sourceMappingURL=_page.svelte-B1Jq9DxR.js.map