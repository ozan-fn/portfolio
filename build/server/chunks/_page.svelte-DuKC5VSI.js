import "./root-hPyMpEOi.js";
import { E as attr, L as escape_html, it as stringify } from "./renderer-CoNnoy0x.js";
import "./state.svelte-yQ996O6E.js";
import { t as Button } from "./button-JWKRuBhr.js";
import { t as Input } from "./input-yKAcSgEU.js";
import { t as Label } from "./label-XufGbXy_.js";
import { t as Crud_header } from "./crud-header-8_9VZwFh.js";
import { t as Crud_form_layout } from "./crud-form-layout-4Vin_waV.js";
import { t as Eye } from "./eye-vfN4IFre.js";
import { t as Trash_2 } from "./trash-2-D7az2Ppd.js";
import { t as getFileUrl } from "./storage.client-B4KZJi2l.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/_id_/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { data } = $$props;
		let isLoading = false;
		async function handleFileChange(e) {
			const input = e.target;
			if (!input.files || input.files.length === 0) return;
			const file = input.files[0];
			if (!file.type.startsWith("image/")) return;
			const img = new Image();
			img.src = URL.createObjectURL(file);
			await new Promise((resolve) => img.onload = resolve);
			let width = img.width;
			let height = img.height;
			const maxSize = 1200;
			if (width > maxSize || height > maxSize) {
				if (width > height) {
					height = Math.round(height * maxSize / width);
					width = maxSize;
				} else {
					width = Math.round(width * maxSize / height);
					height = maxSize;
				}
				const canvas = document.createElement("canvas");
				canvas.width = width;
				canvas.height = height;
				canvas.getContext("2d")?.drawImage(img, 0, 0, width, height);
				canvas.toBlob((blob) => {
					if (blob) {
						const resizedFile = new File([blob], file.name, {
							type: file.type,
							lastModified: Date.now()
						});
						const dataTransfer = new DataTransfer();
						dataTransfer.items.add(resizedFile);
						input.files = dataTransfer.files;
					}
					URL.revokeObjectURL(img.src);
				}, file.type, .85);
			} else URL.revokeObjectURL(img.src);
		}
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			{
				let actions = function($$renderer4) {
					Button($$renderer4, {
						variant: "outline",
						href: `/dashboard/projects/${stringify(data.project.id)}/view`,
						class: "gap-2",
						children: ($$renderer5) => {
							Eye($$renderer5, { class: "h-4 w-4" });
							$$renderer5.push(`<!----> View Details`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> <form method="POST" action="?/delete">`);
					Button($$renderer4, {
						variant: "destructive",
						size: "icon",
						disabled: isLoading,
						children: ($$renderer5) => {
							$$renderer5.push("<!--[-1-->");
							Trash_2($$renderer5, { class: "h-4 w-4" });
							$$renderer5.push(`<!--]-->`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----></form>`);
				};
				Crud_header($$renderer3, {
					title: "Edit Project",
					description: "Update your project details and showcase your work.",
					backUrl: "/dashboard/projects",
					actions
				});
			}
			$$renderer3.push(`<!----> `);
			{
				let main = function($$renderer4) {
					$$renderer4.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
					Label($$renderer4, {
						for: "title",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Project Title`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
						id: "title",
						name: "title",
						value: data.project.title,
						placeholder: "e.g. My Awesome Portfolio",
						required: true
					});
					$$renderer4.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer4, {
						for: "description",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Short Description`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
						id: "description",
						name: "description",
						value: data.project.description,
						placeholder: "A brief summary of the project",
						required: true
					});
					$$renderer4.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer4, {
						for: "thumbnail",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Thumbnail Image (Auto-resize max 1200px)`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
						id: "thumbnail",
						name: "thumbnail",
						type: "file",
						accept: "image/*",
						onchange: handleFileChange
					});
					$$renderer4.push(`<!----> `);
					if (data.project.thumbnail) {
						$$renderer4.push("<!--[0-->");
						$$renderer4.push(`<div class="mt-2 relative group w-40 aspect-video rounded-md overflow-hidden border"><img${attr("src", getFileUrl(data.project.thumbnail))} alt="Current thumbnail" class="object-cover w-full h-full"/></div> <p class="text-[10px] text-muted-foreground italic mt-1">Current: ${escape_html(data.project.thumbnail.split("/").pop())}</p>`);
					} else $$renderer4.push("<!--[-1-->");
					$$renderer4.push(`<!--]--></div> <div class="grid gap-2">`);
					Label($$renderer4, {
						for: "content",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Full Content (Markdown or HTML)`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> <textarea id="content" name="content" rows="12" placeholder="Describe your project in detail..." class="flex min-h-75 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-sans leading-relaxed">`);
					const $$body = escape_html(data.project.content || "");
					if ($$body) $$renderer4.push(`${$$body}`);
					$$renderer4.push(`</textarea></div></div>`);
				}, sidebar = function($$renderer4) {
					$$renderer4.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
					Label($$renderer4, {
						for: "techStack",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Tech Stack (comma separated)`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
						id: "techStack",
						name: "techStack",
						value: data.project.techStack.join(", "),
						placeholder: "SvelteKit, Tailwind CSS, Prisma"
					});
					$$renderer4.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer4, {
						for: "status",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Status`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					$$renderer4.select({
						id: "status",
						name: "status",
						value: data.project.status,
						class: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					}, ($$renderer5) => {
						$$renderer5.option({ value: "COMPLETED" }, ($$renderer6) => {
							$$renderer6.push(`Completed`);
						});
						$$renderer5.option({ value: "IN_PROGRESS" }, ($$renderer6) => {
							$$renderer6.push(`In Progress`);
						});
						$$renderer5.option({ value: "ARCHIVED" }, ($$renderer6) => {
							$$renderer6.push(`Archived`);
						});
					});
					$$renderer4.push(`</div> <div class="grid gap-2 pt-2">`);
					Label($$renderer4, {
						for: "env",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Environment Variables (.env format)`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> <textarea id="env" name="env" rows="4" placeholder="API_KEY=your_key DB_URL=your_url" class="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono">`);
					const $$body_1 = escape_html(data.project.env || "");
					if ($$body_1) $$renderer4.push(`${$$body_1}`);
					$$renderer4.push(`</textarea></div> <div class="grid gap-2 pt-2 border-t mt-2">`);
					Label($$renderer4, {
						for: "githubUrl",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Source Code URL`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
						id: "githubUrl",
						name: "githubUrl",
						type: "url",
						value: data.project.githubUrl,
						placeholder: "https://github.com/..."
					});
					$$renderer4.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer4, {
						for: "demoUrl",
						children: ($$renderer5) => {
							$$renderer5.push(`<!---->Live Demo URL`);
						},
						$$slots: { default: true }
					});
					$$renderer4.push(`<!----> `);
					Input($$renderer4, {
						id: "demoUrl",
						name: "demoUrl",
						type: "url",
						value: data.project.demoUrl,
						placeholder: "https://demo.com"
					});
					$$renderer4.push(`<!----></div></div>`);
				};
				Crud_form_layout($$renderer3, {
					action: "?/update",
					enctype: "multipart/form-data",
					cancelUrl: "/dashboard/projects",
					submitLabel: "Update Project",
					get isLoading() {
						return isLoading;
					},
					set isLoading($$value) {
						isLoading = $$value;
						$$settled = false;
					},
					main,
					sidebar,
					$$slots: {
						main: true,
						sidebar: true
					}
				});
			}
			$$renderer3.push(`<!---->`);
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

//# sourceMappingURL=_page.svelte-DuKC5VSI.js.map