import { C as ensure_array_like, L as head, T as escape_html, c as attr } from "./dev-OC6EGoUN.js";
import { t as Button } from "./button-BAli88Z_.js";
import { t as Badge } from "./badge-ysT7GMMH.js";
import { t as Card } from "./card-BAKj0KoL.js";
import { t as Input } from "./input-B4jit4xQ.js";
import { t as Calendar } from "./calendar-BSMbf7m-.js";
import { t as Clock } from "./clock-Dy8oQ7Xx.js";
import { t as Arrow_right } from "./arrow-right-ftL2qjLE.js";
import { t as Search } from "./search-aQk__OJS.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/blog/_page.svelte.js
function _page($$renderer) {
	const posts = [
		{
			id: 1,
			title: "Membangun API Cepat dengan Go dan Gin",
			excerpt: "Kenapa Go menjadi pilihan utama untuk backend modern? Mari kita bedah performa dan cara setup project pertama kamu.",
			date: "Mar 15, 2026",
			readTime: "5 min read",
			category: "Backend",
			image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop"
		},
		{
			id: 2,
			title: "Svelte 5 Runes: Masa Depan Reaktivitas",
			excerpt: "Penjelasan mendalam tentang $state, $derived, dan $effect. Apa bedanya dengan sistem lama dan kenapa kamu harus pindah?",
			date: "Apr 02, 2026",
			readTime: "8 min read",
			category: "Frontend",
			image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
		},
		{
			id: 3,
			title: "Tips Aman Menggunakan Prisma dengan PostgreSQL",
			excerpt: "Cara mengelola koneksi database, melakukan migration di production, dan optimasi query menggunakan Prisma Client.",
			date: "Apr 05, 2026",
			readTime: "6 min read",
			category: "Database",
			image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop"
		}
	];
	let searchQuery = "";
	let $$settled = true;
	let $$inner_renderer;
	function $$render_inner($$renderer) {
		head("rwi3u8", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Blog | Portfolio Blog</title>`);
			});
		});
		$$renderer.push(`<div class="container mx-auto max-w-6xl"><div class="bg-primary/3 p-10 rounded-2xl border border-primary/10 relative overflow-hidden shadow-inner mb-12"><div class="absolute -right-10 -top-10 size-40 bg-primary/5 blur-3xl rounded-full"></div> <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10"><div class="space-y-2"><h1 class="text-4xl font-black tracking-tight text-primary leading-tight">Writing ✍️</h1> <p class="text-muted-foreground text-xl leading-relaxed max-w-2xl">Berbagi pemikiran seputar teknologi koding, dan pengembangan diri.</p></div> <div class="relative w-full md:w-80">`);
		Search($$renderer, { class: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" });
		$$renderer.push(`<!----> `);
		Input($$renderer, {
			placeholder: "Cari artikel...",
			class: "pl-10 bg-background/50 border-primary/10 focus-visible:ring-primary backdrop-blur-sm",
			get value() {
				return searchQuery;
			},
			set value($$value) {
				searchQuery = $$value;
				$$settled = false;
			}
		});
		$$renderer.push(`<!----></div></div></div> <div class="mb-12 group cursor-pointer">`);
		if (Card) {
			$$renderer.push("<!--[-->");
			Card($$renderer, {
				class: "overflow-hidden border-none bg-primary/5 shadow-none transition-all hover:bg-primary/10",
				children: ($$renderer) => {
					$$renderer.push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-0"><div class="aspect-video lg:aspect-auto overflow-hidden"><img${attr("src", posts[0].image)} alt="Featured" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/></div> <div class="p-8 md:p-12 flex flex-col justify-center space-y-4">`);
					Badge($$renderer, {
						variant: "secondary",
						class: "w-fit font-bold tracking-widest",
						children: ($$renderer) => {
							$$renderer.push(`<!---->${escape_html(posts[0].category)}`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <h2 class="text-3xl md:text-4xl font-bold tracking-tight">${escape_html(posts[0].title)}</h2> <p class="text-muted-foreground text-lg leading-relaxed">${escape_html(posts[0].excerpt)}</p> <div class="flex items-center gap-4 text-sm text-muted-foreground pb-4"><span class="flex items-center gap-1">`);
					Calendar($$renderer, { size: 14 });
					$$renderer.push(`<!----> ${escape_html(posts[0].date)}</span> <span class="flex items-center gap-1">`);
					Clock($$renderer, { size: 14 });
					$$renderer.push(`<!----> ${escape_html(posts[0].readTime)}</span></div> `);
					Button($$renderer, {
						variant: "default",
						class: "w-fit rounded-full px-6",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Baca Selengkapnya`);
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
		$$renderer.push(`</div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
		const each_array = ensure_array_like(posts);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let post = each_array[$$index];
			$$renderer.push(`<article class="flex flex-col group cursor-pointer"><div class="relative aspect-[16/10] mb-4 overflow-hidden rounded-2xl bg-muted"><img${attr("src", post.image)}${attr("alt", post.title)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/> <div class="absolute bottom-3 left-3">`);
			Badge($$renderer, {
				class: "bg-white/90 text-black border-none backdrop-blur-sm hover:bg-white",
				children: ($$renderer) => {
					$$renderer.push(`<!---->${escape_html(post.category)}`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></div> <div class="space-y-3"><div class="flex items-center gap-3 text-xs text-muted-foreground font-medium"><span class="flex items-center gap-1">`);
			Calendar($$renderer, { size: 12 });
			$$renderer.push(`<!----> ${escape_html(post.date)}</span> <span>•</span> <span class="flex items-center gap-1">`);
			Clock($$renderer, { size: 12 });
			$$renderer.push(`<!----> ${escape_html(post.readTime)}</span></div> <h3 class="text-xl font-bold tracking-tight group-hover:text-primary transition-colors line-clamp-2">${escape_html(post.title)}</h3> <p class="text-muted-foreground text-sm leading-relaxed line-clamp-3">${escape_html(post.excerpt)}</p> `);
			Button($$renderer, {
				variant: "link",
				class: "p-0 text-primary group-hover:gap-2 transition-all",
				children: ($$renderer) => {
					$$renderer.push(`<!---->Read More `);
					Arrow_right($$renderer, {
						size: 16,
						class: "ml-1"
					});
					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></article>`);
		}
		$$renderer.push(`<!--]--></div></div>`);
	}
	do {
		$$settled = true;
		$$inner_renderer = $$renderer.copy();
		$$render_inner($$inner_renderer);
	} while (!$$settled);
	$$renderer.subsume($$inner_renderer);
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-CP_rSwaI.js.map