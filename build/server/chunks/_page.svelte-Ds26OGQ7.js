import { e as escape_html, u as stringify, a as attr, o as ensure_array_like, i as spread_props } from './index2-CKLX2A8l.js';
import { B as Button } from './button-DsqoR_hA.js';
import { B as Badge } from './badge-BuF609xh.js';
import { C as Chevron_left } from './chevron-left-B0qZg6fL.js';
import { E as External_link } from './external-link-DlfA5OfE.js';
import { P as Pencil } from './pencil-BXKX_sCY.js';
import { I as Icon } from './Icon-BSFcCQvO.js';
import { C as Calendar } from './calendar-B2pvl2qH.js';
import { C as Code } from './code-BLGJuZZp.js';
import { A as Arrow_up_right } from './arrow-up-right-CsSlxd-A.js';

function Layers($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
        }
      ],
      [
        "path",
        {
          "d": "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
        }
      ],
      [
        "path",
        {
          "d": "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "layers" },
      /**
       * @component @name Layers
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIuODMgMi4xOGEyIDIgMCAwIDAtMS42NiAwTDIuNiA2LjA4YTEgMSAwIDAgMCAwIDEuODNsOC41OCAzLjkxYTIgMiAwIDAgMCAxLjY2IDBsOC41OC0zLjlhMSAxIDAgMCAwIDAtMS44M3oiIC8+CiAgPHBhdGggZD0iTTIgMTJhMSAxIDAgMCAwIC41OC45MWw4LjYgMy45MWEyIDIgMCAwIDAgMS42NSAwbDguNTgtMy45QTEgMSAwIDAgMCAyMiAxMiIgLz4KICA8cGF0aCBkPSJNMiAxN2ExIDEgMCAwIDAgLjU4LjkxbDguNiAzLjkxYTIgMiAwIDAgMCAxLjY1IDBsOC41OC0zLjlBMSAxIDAgMCAwIDIyIDE3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/layers
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Info($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["circle", { "cx": "12", "cy": "12", "r": "10" }],
      ["path", { "d": "M12 16v-4" }],
      ["path", { "d": "M12 8h.01" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "info" },
      /**
       * @component @name Info
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTIgMTZ2LTQiIC8+CiAgPHBhdGggZD0iTTEyIDhoLjAxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/info
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const getStatusColor = (status) => {
      switch (status) {
        case "COMPLETED":
          return "default";
        case "IN_PROGRESS":
          return "secondary";
        case "ARCHIVED":
          return "outline";
        default:
          return "default";
      }
    };
    $$renderer2.push(`<div class="flex flex-col gap-6 p-6 max-w-5xl mx-auto"><div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div class="flex items-center gap-4">`);
    Button($$renderer2, {
      variant: "outline",
      size: "icon",
      href: "/dashboard/projects",
      children: ($$renderer3) => {
        Chevron_left($$renderer3, { class: "h-4 w-4" });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <div><div class="flex items-center gap-2"><h1 class="text-3xl font-bold tracking-tight">${escape_html(data.project.title)}</h1> `);
    Badge($$renderer2, {
      variant: getStatusColor(data.project.status),
      class: "ml-2",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->${escape_html(data.project.status.replace("_", " "))}`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> <p class="text-muted-foreground">Detailed project information and statistics.</p></div></div> <div class="flex items-center gap-2">`);
    Button($$renderer2, {
      variant: "outline",
      href: `/projects/${stringify(data.project.id)}`,
      target: "_blank",
      children: ($$renderer3) => {
        External_link($$renderer3, { class: "mr-2 h-4 w-4" });
        $$renderer3.push(`<!----> Public View`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Button($$renderer2, {
      href: `/dashboard/projects/${stringify(data.project.id)}`,
      children: ($$renderer3) => {
        Pencil($$renderer3, { class: "mr-2 h-4 w-4" });
        $$renderer3.push(`<!----> Edit Project`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div> <div class="grid gap-6 md:grid-cols-3"><div class="md:col-span-2 space-y-6"><div class="overflow-hidden rounded-xl border bg-card shadow-sm"><div class="border-b bg-muted/50 p-4"><h3 class="font-semibold flex items-center gap-2">`);
    Info($$renderer2, { class: "h-4 w-4 text-primary" });
    $$renderer2.push(`<!----> Project Media</h3></div> <div class="p-0">`);
    if (data.project.thumbnail) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<img${attr("src", data.project.thumbnail)}${attr("alt", data.project.title)} class="aspect-video w-full object-cover"/>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="flex aspect-video items-center justify-center bg-muted text-muted-foreground italic">No thumbnail provided</div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="rounded-xl border bg-card shadow-sm"><div class="border-b bg-muted/50 p-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Content &amp; Details</div> <div class="p-6 space-y-6"><div><h4 class="text-sm font-medium text-muted-foreground mb-2">Short Description</h4> <p class="text-lg leading-relaxed">${escape_html(data.project.description)}</p></div> <div class="pt-4 border-t"><h4 class="text-sm font-medium text-muted-foreground mb-4">Detailed Content</h4> <div class="prose prose-sm dark:prose-invert max-w-none">`);
    if (data.project.content) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="whitespace-pre-wrap rounded-lg bg-muted/30 p-4 border italic text-muted-foreground">${escape_html(data.project.content)}</div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<p class="italic text-muted-foreground">No detailed content written yet.</p>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div></div> <div class="space-y-6"><div class="rounded-xl border bg-card shadow-sm p-6 space-y-4"><h3 class="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Metadata</h3> <div class="space-y-3"><div class="flex items-center justify-between text-sm"><span class="flex items-center text-muted-foreground">`);
    Calendar($$renderer2, { class: "mr-2 h-4 w-4" });
    $$renderer2.push(`<!----> Created</span> <span class="font-medium">${escape_html(new Date(data.project.createdAt).toLocaleDateString())}</span></div> <div class="flex items-center justify-between text-sm"><span class="flex items-center text-muted-foreground">`);
    Layers($$renderer2, { class: "mr-2 h-4 w-4" });
    $$renderer2.push(`<!----> Status</span> <span class="font-medium">${escape_html(data.project.status)}</span></div></div></div> <div class="rounded-xl border bg-card shadow-sm p-6 space-y-4"><h3 class="font-semibold text-sm uppercase tracking-wider text-muted-foreground">External Links</h3> <div class="grid gap-2">`);
    if (data.project.githubUrl) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a${attr("href", data.project.githubUrl)} target="_blank" rel="noreferrer" class="flex items-center justify-between p-3 rounded-lg border bg-muted/20 hover:bg-muted/50 transition-colors text-sm"><span class="flex items-center font-medium">`);
      Code($$renderer2, { class: "mr-2 h-4 w-4 text-primary" });
      $$renderer2.push(`<!----> Source Code</span> `);
      Arrow_up_right($$renderer2, { class: "h-3 w-3 text-muted-foreground" });
      $$renderer2.push(`<!----></a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.project.demoUrl) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a${attr("href", data.project.demoUrl)} target="_blank" rel="noreferrer" class="flex items-center justify-between p-3 rounded-lg border bg-muted/20 hover:bg-muted/50 transition-colors text-sm"><span class="flex items-center font-medium">`);
      External_link($$renderer2, { class: "mr-2 h-4 w-4 text-primary" });
      $$renderer2.push(`<!----> Live Demo</span> `);
      Arrow_up_right($$renderer2, { class: "h-3 w-3 text-muted-foreground" });
      $$renderer2.push(`<!----></a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (!data.project.githubUrl && !data.project.demoUrl) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="text-sm text-muted-foreground italic">No links available</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div> <div class="rounded-xl border bg-card shadow-sm p-6 space-y-4"><h3 class="font-semibold text-sm uppercase tracking-wider text-muted-foreground text-xs">Technologies</h3> <div class="flex flex-wrap gap-2"><!--[-->`);
    const each_array = ensure_array_like(data.project.techStack);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tech = each_array[$$index];
      Badge($$renderer2, {
        variant: "secondary",
        class: "font-normal",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(tech)}`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--> `);
    if (data.project.techStack.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span class="text-sm text-muted-foreground italic">None specified</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div></div></div></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Ds26OGQ7.js.map
