import { A as bind_props, E as attr, I as ensure_array_like, L as escape_html, O as attr_style, P as derived, Z as props_id, it as stringify, k as attributes, nt as spread_props } from "./renderer-CoNnoy0x.js";
import { d as createBitsAttrs, f as createId, l as boxWith, n as attachRef, x as mergeProps } from "./create-id-vdhYoWyc.js";
import { t as Button } from "./button-Ch6ZWsjV.js";
import { t as Badge } from "./badge-C1NswtNY.js";
import { t as Card } from "./card-CnyBIkIo.js";
import { t as Icon } from "./Icon-CiEhqWrS.js";
import { t as Arrow_right } from "./arrow-right-CNhVEP9s.js";
import { n as Card_header, r as Card_title, t as Card_description } from "./card-title-JuB79r3h.js";
import { t as Card_footer } from "./card-footer-DY5qHY0f.js";
import { t as External_link } from "./external-link-yuuPrjC8.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/projects/_page.svelte.js
const aspectRatioAttrs = createBitsAttrs({
	component: "aspect-ratio",
	parts: ["root"]
});
var AspectRatioRootState = class AspectRatioRootState {
	static create(opts) {
		return new AspectRatioRootState(opts);
	}
	opts;
	attachment;
	constructor(opts) {
		this.opts = opts;
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		style: {
			position: "absolute",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		},
		[aspectRatioAttrs.root]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
function Aspect_ratio$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		const uid = props_id($$renderer2);
		let { ref = null, id = createId(uid), ratio = 1, children, child, $$slots, $$events, ...restProps } = $$props;
		const rootState = AspectRatioRootState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			ratio: boxWith(() => ratio)
		});
		const mergedProps = derived(() => mergeProps(restProps, rootState.props));
		$$renderer2.push(`<div${attr_style("", {
			position: "relative",
			width: "100%",
			"padding-bottom": `${stringify(ratio ? 100 / ratio : 0)}%`
		})}>`);
		if (child) {
			$$renderer2.push("<!--[0-->");
			child($$renderer2, { props: mergedProps() });
			$$renderer2.push(`<!---->`);
		} else {
			$$renderer2.push("<!--[-1-->");
			$$renderer2.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer2);
			$$renderer2.push(`<!----></div>`);
		}
		$$renderer2.push(`<!--]--></div>`);
		bind_props($$props, { ref });
	});
}
function Aspect_ratio($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			if (Aspect_ratio$1) {
				$$renderer3.push("<!--[-->");
				Aspect_ratio$1($$renderer3, spread_props([
					{ "data-slot": "aspect-ratio" },
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer3.push("<!--]-->");
			} else {
				$$renderer3.push("<!--[!-->");
				$$renderer3.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer2.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer2.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
function Computer($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "computer" },
		props,
		{ iconNode: [
			["rect", {
				"width": "14",
				"height": "8",
				"x": "5",
				"y": "2",
				"rx": "2"
			}],
			["rect", {
				"width": "20",
				"height": "8",
				"x": "2",
				"y": "14",
				"rx": "2"
			}],
			["path", { "d": "M6 18h2" }],
			["path", { "d": "M12 18h6" }]
		] }
	]));
}
function Code_xml($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "code-xml" },
		props,
		{ iconNode: [
			["path", { "d": "m18 16 4-4-4-4" }],
			["path", { "d": "m6 8-4 4 4 4" }],
			["path", { "d": "m14.5 4-5 16" }]
		] }
	]));
}
function _page($$renderer) {
	const projects = [
		{
			id: "1",
			title: "E-Commerce Microservices",
			description: "Arsitektur microservices performa tinggi menggunakan Golang dan gRPC. Dilengkapi dengan sistem pembayaran real-time dan manajemen inventaris yang skalabel.",
			thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
			status: "COMPLETED",
			techStack: [
				"Golang",
				"Nats",
				"PostgreSQL",
				"Redis"
			],
			githubUrl: "https://github.com",
			demoUrl: "https://demo.com"
		},
		{
			id: "2",
			title: "Rust Search Engine",
			description: "Mesin pencari teks lengkap (full-text search) yang dibangun dengan Rust. Fokus pada efisiensi memori dan kecepatan indexing jutaan dokumen dalam hitungan detik.",
			thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
			status: "IN_PROGRESS",
			techStack: [
				"Rust",
				"Tokio",
				"WebAssembly"
			],
			githubUrl: "https://github.com",
			demoUrl: null
		},
		{
			id: "3",
			title: "Portfolio Dashboard",
			description: "Dashboard admin interaktif untuk mengelola konten portfolio. Dibangun dengan SvelteKit 5 dan Better Auth untuk keamanan tingkat tinggi.",
			thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
			status: "COMPLETED",
			techStack: [
				"SvelteKit",
				"Tailwind",
				"Prisma"
			],
			githubUrl: "https://github.com",
			demoUrl: "https://demo.com"
		},
		{
			id: "4",
			title: "AI Chat Assistant",
			description: "Integrasi LLM untuk asisten koding cerdas. Menggunakan stream response untuk pengalaman pengguna yang lebih cepat dan responsif.",
			thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
			status: "ARCHIVED",
			techStack: [
				"Python",
				"OpenAI",
				"React"
			],
			githubUrl: null,
			demoUrl: null
		}
	];
	const statusMap = {
		COMPLETED: "border-green-500/20 bg-green-500/10 text-green-500",
		IN_PROGRESS: "border-amber-500/20 bg-amber-500/10 text-amber-500",
		ARCHIVED: "border-slate-500/20 bg-slate-500/10 text-slate-500"
	};
	$$renderer.push(`<div class="container mx-auto space-y-6"><div class="bg-primary/5 p-10 rounded-3xl border border-primary/10 relative overflow-hidden"><div class="absolute -right-20 -top-20 size-64 bg-primary/10 blur-3xl rounded-full"></div> <div class="relative z-10"><div class="flex items-center gap-2 mb-4 text-primary font-mono text-sm uppercase tracking-widest">`);
	Code_xml($$renderer, { size: 16 });
	$$renderer.push(`<!----> <span>Showcase</span></div> <h1 class="text-5xl font-black mb-4 tracking-tighter text-foreground">Projects 👋</h1> <p class="text-muted-foreground text-xl max-w-2xl leading-relaxed">Membangun solusi modern dengan <span class="text-foreground font-semibold">Golang</span>, <span class="text-foreground font-semibold">Rust</span>, dan <span class="text-foreground font-semibold">Svelte</span>. <br/><span class="text-sm italic text-primary/80">"Koding teruss sampe tipes, bobol mah urusan nanti dek."</span></p></div></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
	const each_array = ensure_array_like(projects);
	for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
		let project = each_array[$$index_1];
		if (Card) {
			$$renderer.push("<!--[-->");
			Card($$renderer, {
				class: "group overflow-hidden border-muted bg-card transition-all hover:shadow-2xl hover:-translate-y-1",
				children: ($$renderer2) => {
					$$renderer2.push(`<div class="relative overflow-hidden">`);
					if (Aspect_ratio) {
						$$renderer2.push("<!--[-->");
						Aspect_ratio($$renderer2, {
							ratio: 16 / 9,
							children: ($$renderer3) => {
								$$renderer3.push(`<img${attr("src", project.thumbnail)}${attr("alt", project.title)} class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"/>`);
							},
							$$slots: { default: true }
						});
						$$renderer2.push("<!--]-->");
					} else {
						$$renderer2.push("<!--[!-->");
						$$renderer2.push("<!--]-->");
					}
					$$renderer2.push(` <div class="absolute top-4 left-4">`);
					Badge($$renderer2, {
						variant: "outline",
						class: `backdrop-blur-md font-bold ${stringify(statusMap[project.status])}`,
						children: ($$renderer3) => {
							$$renderer3.push(`<!---->${escape_html(project.status.replace("_", " "))}`);
						},
						$$slots: { default: true }
					});
					$$renderer2.push(`<!----></div></div> `);
					if (Card_header) {
						$$renderer2.push("<!--[-->");
						Card_header($$renderer2, {
							class: "space-y-4",
							children: ($$renderer3) => {
								$$renderer3.push(`<div class="flex flex-wrap gap-2"><!--[-->`);
								const each_array_1 = ensure_array_like(project.techStack);
								for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
									let tech = each_array_1[$$index];
									Badge($$renderer3, {
										variant: "secondary",
										class: "rounded-md px-2 py-0 text-[10px] font-black uppercase tracking-widest opacity-80",
										children: ($$renderer4) => {
											$$renderer4.push(`<!---->${escape_html(tech)}`);
										},
										$$slots: { default: true }
									});
								}
								$$renderer3.push(`<!--]--></div> `);
								if (Card_title) {
									$$renderer3.push("<!--[-->");
									Card_title($$renderer3, {
										class: "text-2xl font-bold tracking-tight line-clamp-1",
										children: ($$renderer4) => {
											$$renderer4.push(`<!---->${escape_html(project.title)}`);
										},
										$$slots: { default: true }
									});
									$$renderer3.push("<!--]-->");
								} else {
									$$renderer3.push("<!--[!-->");
									$$renderer3.push("<!--]-->");
								}
								$$renderer3.push(` `);
								if (Card_description) {
									$$renderer3.push("<!--[-->");
									Card_description($$renderer3, {
										class: "text-sm leading-relaxed line-clamp-3 min-h-[4.5rem]",
										children: ($$renderer4) => {
											$$renderer4.push(`<!---->${escape_html(project.description)}`);
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
					$$renderer2.push(` `);
					if (Card_footer) {
						$$renderer2.push("<!--[-->");
						Card_footer($$renderer2, {
							class: "p-6 pt-0 flex items-center justify-between gap-4",
							children: ($$renderer3) => {
								$$renderer3.push(`<div class="flex items-center gap-2">`);
								if (project.githubUrl) {
									$$renderer3.push("<!--[0-->");
									Button($$renderer3, {
										variant: "ghost",
										size: "icon",
										href: project.githubUrl,
										target: "_blank",
										class: "rounded-full hover:bg-primary/10",
										children: ($$renderer4) => {
											Computer($$renderer4, { size: 20 });
										},
										$$slots: { default: true }
									});
								} else $$renderer3.push("<!--[-1-->");
								$$renderer3.push(`<!--]--> `);
								if (project.demoUrl) {
									$$renderer3.push("<!--[0-->");
									Button($$renderer3, {
										variant: "ghost",
										size: "icon",
										href: project.demoUrl,
										target: "_blank",
										class: "rounded-full hover:bg-primary/10",
										children: ($$renderer4) => {
											External_link($$renderer4, { size: 20 });
										},
										$$slots: { default: true }
									});
								} else $$renderer3.push("<!--[-1-->");
								$$renderer3.push(`<!--]--></div> `);
								Button($$renderer3, {
									variant: "link",
									class: "p-0 text-primary font-bold group/link",
									href: `/projects/${stringify(project.id)}`,
									children: ($$renderer4) => {
										$$renderer4.push(`<!---->View Details `);
										Arrow_right($$renderer4, {
											size: 16,
											class: "ml-1 transition-transform group-hover/link:translate-x-1"
										});
										$$renderer4.push(`<!---->`);
									},
									$$slots: { default: true }
								});
								$$renderer3.push(`<!---->`);
							},
							$$slots: { default: true }
						});
						$$renderer2.push("<!--]-->");
					} else {
						$$renderer2.push("<!--[!-->");
						$$renderer2.push("<!--]-->");
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
	$$renderer.push(`<!--]--></div></div>`);
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-BHLLQPBs.js.map