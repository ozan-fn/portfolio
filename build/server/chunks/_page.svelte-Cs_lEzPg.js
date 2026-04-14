import { x as derived } from "./dev-D04rZKKe.js";
import { t as Input } from "./input-D59IkaTZ.js";
import { t as Label } from "./label-CGw7bmi2.js";
import { t as Crud_header } from "./crud-header-fXwgJuKI.js";
import { t as Crud_form_layout } from "./crud-form-layout-BaJ00bOq.js";
//#region .svelte-kit/adapter-bun/entries/pages/(protected)/dashboard/projects/new/_page.svelte.js
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let isLoading = false;
		let title = "";
		let slug = derived(() => title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, ""));
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
			Crud_header($$renderer, {
				title: "New Project",
				description: "Add a new project to your portfolio.",
				backUrl: "/dashboard/projects"
			});
			$$renderer.push(`<!----> `);
			{
				function main($$renderer) {
					$$renderer.push(`<div class="flex flex-col gap-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="grid gap-2">`);
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
						placeholder: "e.g. My Awesome Portfolio",
						required: true,
						get value() {
							return title;
						},
						set value($$value) {
							title = $$value;
							$$settled = false;
						}
					});
					$$renderer.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer, {
						for: "slug",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Slug (URL)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "slug",
						name: "slug",
						value: slug(),
						placeholder: "e.g. my-awesome-portfolio",
						readonly: true,
						required: true,
						class: "bg-muted"
					});
					$$renderer.push(`<!----></div></div> <div class="grid gap-2">`);
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
						placeholder: "A brief summary of the project",
						required: true
					});
					$$renderer.push(`<!----></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="grid gap-2">`);
					Label($$renderer, {
						for: "order",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Display Order`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> `);
					Input($$renderer, {
						id: "order",
						name: "order",
						type: "number",
						value: "0"
					});
					$$renderer.push(`<!----></div> <div class="flex items-center space-x-2 pt-8"><input type="checkbox" id="featured" name="featured" class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"/> `);
					Label($$renderer, {
						for: "featured",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Featured Project`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></div></div> <div class="grid gap-2">`);
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
					$$renderer.push(`<!----></div> <div class="grid gap-2">`);
					Label($$renderer, {
						for: "content",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Full Content (Markdown or HTML)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <textarea id="content" name="content" rows="12" placeholder="Describe your project in detail..." class="flex min-h-50 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-sans"></textarea></div></div>`);
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
					$$renderer.push(`<!----> <select id="status" name="status" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">`);
					$$renderer.option({ value: "COMPLETED" }, ($$renderer) => {
						$$renderer.push(`Completed`);
					});
					$$renderer.option({ value: "IN_PROGRESS" }, ($$renderer) => {
						$$renderer.push(`In Progress`);
					});
					$$renderer.option({ value: "ARCHIVED" }, ($$renderer) => {
						$$renderer.push(`Archived`);
					});
					$$renderer.push(`</select></div> <div class="grid gap-2 pt-2">`);
					Label($$renderer, {
						for: "env",
						children: ($$renderer) => {
							$$renderer.push(`<!---->Environment Variables (.env format)`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----> <textarea id="env" name="env" rows="4" placeholder="API_KEY=your_key DB_URL=your_url" class="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono"></textarea></div> <div class="grid gap-2">`);
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
						placeholder: "https://demo.com"
					});
					$$renderer.push(`<!----></div></div>`);
				}
				Crud_form_layout($$renderer, {
					enctype: "multipart/form-data",
					cancelUrl: "/dashboard/projects",
					submitLabel: "Create Project",
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

//# sourceMappingURL=_page.svelte-Cs_lEzPg.js.map