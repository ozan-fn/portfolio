import { a as attr, e as escape_html, f as bind_props, i as spread_props } from './index2-CKLX2A8l.js';
import './root-BnY0kdZ5.js';
import './state.svelte-5-IPF-90.js';
import { B as Button } from './button-DsqoR_hA.js';
import { L as Loader_circle } from './loader-circle-CkbHzCNm.js';
import { I as Icon } from './Icon-BSFcCQvO.js';

function Save($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
        }
      ],
      ["path", { "d": "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }],
      ["path", { "d": "M7 3v4a1 1 0 0 0 1 1h7" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "save" },
      /**
       * @component @name Save
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUuMiAzYTIgMiAwIDAgMSAxLjQuNmwzLjggMy44YTIgMiAwIDAgMSAuNiAxLjRWMTlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yeiIgLz4KICA8cGF0aCBkPSJNMTcgMjF2LTdhMSAxIDAgMCAwLTEtMUg4YTEgMSAwIDAgMC0xIDF2NyIgLz4KICA8cGF0aCBkPSJNNyAzdjRhMSAxIDAgMCAwIDEgMWg3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/save
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
function Crud_form_layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      action = "",
      isLoading = false,
      main,
      sidebar,
      cancelUrl,
      submitLabel = "Save Changes",
      onSuccess
    } = $$props;
    $$renderer2.push(`<form method="POST"${attr("action", action)} class="px-6 pb-6 max-w-7xl w-full mx-auto grid gap-6 lg:grid-cols-[1fr_300px]"><div class="space-y-6"><div class="grid gap-6 rounded-lg border bg-card p-6 shadow-sm">`);
    main($$renderer2);
    $$renderer2.push(`<!----></div></div> <div class="space-y-6"><div class="grid gap-6 rounded-lg border bg-card p-6 shadow-sm"><h3 class="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Options</h3> <div class="space-y-4">`);
    sidebar($$renderer2);
    $$renderer2.push(`<!----></div> <div class="flex flex-col gap-2 pt-4 border-t">`);
    Button($$renderer2, {
      type: "submit",
      disabled: isLoading,
      class: "w-full",
      children: ($$renderer3) => {
        if (isLoading) {
          $$renderer3.push("<!--[0-->");
          Loader_circle($$renderer3, { class: "mr-2 h-4 w-4 animate-spin" });
          $$renderer3.push(`<!----> Saving...`);
        } else {
          $$renderer3.push("<!--[-1-->");
          Save($$renderer3, { class: "mr-2 h-4 w-4" });
          $$renderer3.push(`<!----> ${escape_html(submitLabel)}`);
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Button($$renderer2, {
      variant: "ghost",
      href: cancelUrl,
      disabled: isLoading,
      class: "w-full",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Cancel`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div></div></form>`);
    bind_props($$props, { isLoading });
  });
}

export { Crud_form_layout as C };
//# sourceMappingURL=crud-form-layout-yO7UqqqA.js.map
