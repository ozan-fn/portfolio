import { C as Crud_header } from './crud-header-DOfE-dIR.js';
import { C as Crud_form_layout } from './crud-form-layout-yO7UqqqA.js';
import { I as Input } from './input-DQ7mUXR0.js';
import { L as Label } from './label-Ds0QBhUn.js';
import './index2-CKLX2A8l.js';
import './button-DsqoR_hA.js';
import './chevron-left-B0qZg6fL.js';
import './Icon-BSFcCQvO.js';
import './root-BnY0kdZ5.js';
import './state.svelte-5-IPF-90.js';
import './loader-circle-CkbHzCNm.js';
import './create-id-D4tMQ4vo.js';

function _page($$renderer) {
  let isLoading = false;
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    Crud_header($$renderer2, {
      title: "New Project",
      description: "Add a new project to your portfolio.",
      backUrl: "/dashboard/projects"
    });
    $$renderer2.push(`<!----> `);
    {
      let main = function($$renderer3) {
        $$renderer3.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
        Label($$renderer3, {
          for: "title",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Project Title`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Input($$renderer3, {
          id: "title",
          name: "title",
          placeholder: "e.g. My Awesome Portfolio",
          required: true
        });
        $$renderer3.push(`<!----></div> <div class="grid gap-2">`);
        Label($$renderer3, {
          for: "description",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Short Description`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Input($$renderer3, {
          id: "description",
          name: "description",
          placeholder: "A brief summary of the project",
          required: true
        });
        $$renderer3.push(`<!----></div> <div class="grid gap-2">`);
        Label($$renderer3, {
          for: "thumbnail",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Thumbnail URL`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Input($$renderer3, {
          id: "thumbnail",
          name: "thumbnail",
          placeholder: "https://example.com/image.jpg"
        });
        $$renderer3.push(`<!----></div> <div class="grid gap-2">`);
        Label($$renderer3, {
          for: "content",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Full Content (Markdown or HTML)`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <textarea id="content" name="content" rows="12" placeholder="Describe your project in detail..." class="flex min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-sans"></textarea></div></div>`);
      }, sidebar = function($$renderer3) {
        $$renderer3.push(`<div class="flex flex-col gap-4"><div class="grid gap-2">`);
        Label($$renderer3, {
          for: "techStack",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Tech Stack (comma separated)`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Input($$renderer3, {
          id: "techStack",
          name: "techStack",
          placeholder: "SvelteKit, Tailwind CSS, Prisma"
        });
        $$renderer3.push(`<!----></div> <div class="grid gap-2">`);
        Label($$renderer3, {
          for: "status",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Status`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <select id="status" name="status" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">`);
        $$renderer3.option({ value: "COMPLETED" }, ($$renderer4) => {
          $$renderer4.push(`Completed`);
        });
        $$renderer3.option({ value: "IN_PROGRESS" }, ($$renderer4) => {
          $$renderer4.push(`In Progress`);
        });
        $$renderer3.option({ value: "ARCHIVED" }, ($$renderer4) => {
          $$renderer4.push(`Archived`);
        });
        $$renderer3.push(`</select></div> <div class="grid gap-2 pt-2">`);
        Label($$renderer3, {
          for: "githubUrl",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Source Code URL`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Input($$renderer3, {
          id: "githubUrl",
          name: "githubUrl",
          type: "url",
          placeholder: "https://github.com/..."
        });
        $$renderer3.push(`<!----></div> <div class="grid gap-2">`);
        Label($$renderer3, {
          for: "demoUrl",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Live Demo URL`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Input($$renderer3, {
          id: "demoUrl",
          name: "demoUrl",
          type: "url",
          placeholder: "https://demo.com"
        });
        $$renderer3.push(`<!----></div></div>`);
      };
      Crud_form_layout($$renderer2, {
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
        $$slots: { main: true, sidebar: true }
      });
    }
    $$renderer2.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DsJxTAGE.js.map
