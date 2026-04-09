import { u as stringify, e as escape_html } from './index2-CKLX2A8l.js';
import { C as Crud_header } from './crud-header-DOfE-dIR.js';
import { C as Crud_form_layout } from './crud-form-layout-yO7UqqqA.js';
import { B as Button } from './button-DsqoR_hA.js';
import { I as Input } from './input-DQ7mUXR0.js';
import { L as Label } from './label-Ds0QBhUn.js';
import './root-BnY0kdZ5.js';
import './state.svelte-5-IPF-90.js';
import { E as Eye } from './eye-BbUa5Zul.js';
import { T as Trash_2 } from './trash-2-BJh4E8g_.js';
import './chevron-left-B0qZg6fL.js';
import './Icon-BSFcCQvO.js';
import './loader-circle-CkbHzCNm.js';
import './create-id-D4tMQ4vo.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let isLoading = false;
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
              {
                $$renderer5.push("<!--[-1-->");
                Trash_2($$renderer5, { class: "h-4 w-4" });
              }
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
              $$renderer5.push(`<!---->Thumbnail URL`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> `);
          Input($$renderer4, {
            id: "thumbnail",
            name: "thumbnail",
            value: data.project.thumbnail,
            placeholder: "https://example.com/image.jpg"
          });
          $$renderer4.push(`<!----></div> <div class="grid gap-2">`);
          Label($$renderer4, {
            for: "content",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->Full Content (Markdown or HTML)`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <textarea id="content" name="content" rows="12" placeholder="Describe your project in detail..." class="flex min-h-[300px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-sans leading-relaxed">`);
          const $$body = escape_html(data.project.content || "");
          if ($$body) {
            $$renderer4.push(`${$$body}`);
          }
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
          $$renderer4.select(
            {
              id: "status",
              name: "status",
              value: data.project.status,
              class: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            },
            ($$renderer5) => {
              $$renderer5.option({ value: "COMPLETED" }, ($$renderer6) => {
                $$renderer6.push(`Completed`);
              });
              $$renderer5.option({ value: "IN_PROGRESS" }, ($$renderer6) => {
                $$renderer6.push(`In Progress`);
              });
              $$renderer5.option({ value: "ARCHIVED" }, ($$renderer6) => {
                $$renderer6.push(`Archived`);
              });
            }
          );
          $$renderer4.push(`</div> <div class="grid gap-2 pt-2 border-t mt-2">`);
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
          $$slots: { main: true, sidebar: true }
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

export { _page as default };
//# sourceMappingURL=_page.svelte-CUArX_bn.js.map
