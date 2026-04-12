import { T as escape_html, c as attr, ft as stringify } from "./dev-OC6EGoUN.js";
import { t as Button } from "./button-BAli88Z_.js";
import { t as Input } from "./input-B4jit4xQ.js";
import { t as Label } from "./label-DnM6-HFi.js";
import { t as Trash_2 } from "./trash-2-C1TVGmo8.js";
import { t as Eye } from "./eye-Do5t-rz8.js";
import "./forms-nWoHtbL-.js";
import { t as Crud_header } from "./crud-header-5rxnVVzC.js";
import { t as Crud_form_layout } from "./crud-form-layout-DnsivRU_.js";
import { t as getFileUrl } from "./storage.client-BdaqK3xy.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/_id_/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
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
		function $$render_inner($$renderer) {
			{
				function actions($$renderer) {
					Button($$renderer, {
						variant: "outline",
						href: `/dashboard/projects/${stringify(data.project.id)}/view`,
						class: "gap-2",
						children: ($$renderer) => {
							Eye($$renderer, { class: "h-4 w-4" });
							$$renderer.push(`<!----> View Details`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <form method="POST" action="?/delete">`);
					Button($$renderer, {
						variant: "destructive",
						size: "icon",
						disabled: isLoading,
						children: ($$renderer) => {
							$$renderer.push("<!--[-1-->");
							Trash_2($$renderer, { class: "h-4 w-4" });
							$$renderer.push(`<!--]-->`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></form>`);
				}
				Crud_header($$renderer, {
					title: "Edit Project",
					description: "Update your project details and showcase your work.",
					backUrl: "/dashboard/projects",
					actions,
					$$slots: { actions: true }
				});
			}
			$$renderer.push(`<!----> `);
			{
				function main($$renderer) {
					$$renderer.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
					Label($$renderer, {
						for: "title",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Project Title`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "title",
						name: "title",
						value: data.project.title,
						placeholder: "e.g. My Awesome Portfolio",
						required: true
					});
					$$renderer.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer, {
						for: "description",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Short Description`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "description",
						name: "description",
						value: data.project.description,
						placeholder: "A brief summary of the project",
						required: true
					});
					$$renderer.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer, {
						for: "thumbnail",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Thumbnail Image (Auto-resize max 1200px)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "thumbnail",
						name: "thumbnail",
						type: "file",
						accept: "image/*",
						onchange: handleFileChange
					});
					$$renderer.push(`<!----> `);
					if (data.project.thumbnail) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<div class="mt-2 relative group w-40 aspect-video rounded-md overflow-hidden border"><img${attr("src", getFileUrl(data.project.thumbnail))} alt="Current thumbnail" class="object-cover w-full h-full"/></div> <p class="text-[10px] text-muted-foreground italic mt-1">Current: ${escape_html(data.project.thumbnail.split("/").pop())}</p>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div> <div class="grid gap-2">`);
					Label($$renderer, {
						for: "content",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Full Content (Markdown or HTML)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <textarea id="content" name="content" rows="12" placeholder="Describe your project in detail..." class="flex min-h-75 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-sans leading-relaxed">`);
					const $$body = escape_html(data.project.content || "");
					if ($$body) $$renderer.push(`${$$body}`);
					$$renderer.push(`</textarea></div></div>`);
				}
				function sidebar($$renderer) {
					$$renderer.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
					Label($$renderer, {
						for: "techStack",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Tech Stack (comma separated)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "techStack",
						name: "techStack",
						value: data.project.techStack.join(", "),
						placeholder: "SvelteKit, Tailwind CSS, Prisma"
					});
					$$renderer.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer, {
						for: "status",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Status`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					$$renderer.select({
						id: "status",
						name: "status",
						value: data.project.status,
						class: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					}, ($$renderer) => {
						$$renderer.option({ value: "COMPLETED" }, ($$renderer) => {
							$$renderer.push(`Completed`);
						});
						$$renderer.option({ value: "IN_PROGRESS" }, ($$renderer) => {
							$$renderer.push(`In Progress`);
						});
						$$renderer.option({ value: "ARCHIVED" }, ($$renderer) => {
							$$renderer.push(`Archived`);
						});
					});
					$$renderer.push(`</div> <div class="grid gap-2 pt-2">`);
					Label($$renderer, {
						for: "env",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Environment Variables (.env format)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <textarea id="env" name="env" rows="4" placeholder="API_KEY=your_key DB_URL=your_url" class="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono">`);
					const $$body_1 = escape_html(data.project.env || "");
					if ($$body_1) $$renderer.push(`${$$body_1}`);
					$$renderer.push(`</textarea></div> <div class="grid gap-2 pt-2 border-t mt-2">`);
					Label($$renderer, {
						for: "githubUrl",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Source Code URL`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "githubUrl",
						name: "githubUrl",
						type: "url",
						value: data.project.githubUrl,
						placeholder: "https://github.com/..."
					});
					$$renderer.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer, {
						for: "demoUrl",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Live Demo URL`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "demoUrl",
						name: "demoUrl",
						type: "url",
						value: data.project.demoUrl,
						placeholder: "https://demo.com"
					});
					$$renderer.push(`<!----></div></div>`);
				}
				Crud_form_layout($$renderer, {
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
			$$renderer.push(`<!---->`);
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

//# sourceMappingURL=_page.svelte-D5ukzgd4.js.map