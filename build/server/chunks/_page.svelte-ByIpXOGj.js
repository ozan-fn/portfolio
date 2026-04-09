import { r as attr_class, e as escape_html, i as spread_props, u as stringify } from './index2-CKLX2A8l.js';
import { C as Card } from './card-DaxGg7cJ.js';
import { C as Card_content } from './card-content-DtX75aSa.js';
import { C as Card_header, c as Card_footer, a as Card_title, b as Card_description } from './card-title-33G8gCf4.js';
import { B as Button } from './button-DsqoR_hA.js';
import { I as Input } from './input-DQ7mUXR0.js';
import { L as Label } from './label-Ds0QBhUn.js';
import { a as authClient } from './auth-client-N-Lg9PmO.js';
import './root-BnY0kdZ5.js';
import './state.svelte-5-IPF-90.js';
import { I as Icon } from './Icon-BSFcCQvO.js';
import { L as Lock } from './lock-BvPBHFwO.js';
import { L as Loader_circle } from './loader-circle-CkbHzCNm.js';
import './create-id-D4tMQ4vo.js';
import './string-uNJHc6M8.js';

function User($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }],
      ["circle", { "cx": "12", "cy": "7", "r": "4" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "user" },
      /**
       * @component @name User
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTkgMjF2LTJhNCA0IDAgMCAwLTQtNEg5YTQgNCAwIDAgMC00IDR2MiIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/user
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
function Camera($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"
        }
      ],
      ["circle", { "cx": "12", "cy": "13", "r": "3" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "camera" },
      /**
       * @component @name Camera
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTMuOTk3IDRhMiAyIDAgMCAxIDEuNzYgMS4wNWwuNDg2LjlBMiAyIDAgMCAwIDE4LjAwMyA3SDIwYTIgMiAwIDAgMSAyIDJ2OWEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMlY5YTIgMiAwIDAgMSAyLTJoMS45OTdhMiAyIDAgMCAwIDEuNzU5LTEuMDQ4bC40ODktLjkwNEEyIDIgMCAwIDEgMTAuMDA0IDR6IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTMiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/camera
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
function Shield_check($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ],
      ["path", { "d": "m9 12 2 2 4-4" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "shield-check" },
      /**
       * @component @name ShieldCheck
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTNjMCA1LTMuNSA3LjUtNy42NiA4Ljk1YTEgMSAwIDAgMS0uNjctLjAxQzcuNSAyMC41IDQgMTggNCAxM1Y2YTEgMSAwIDAgMSAxLTFjMiAwIDQuNS0xLjIgNi4yNC0yLjcyYTEuMTcgMS4xNyAwIDAgMSAxLjUyIDBDMTQuNTEgMy44MSAxNyA1IDE5IDVhMSAxIDAgMCAxIDEgMXoiIC8+CiAgPHBhdGggZD0ibTkgMTIgMiAyIDQtNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/shield-check
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
function Circle_alert($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["circle", { "cx": "12", "cy": "12", "r": "10" }],
      ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "12" }],
      [
        "line",
        { "x1": "12", "x2": "12.01", "y1": "16", "y2": "16" }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "circle-alert" },
      /**
       * @component @name CircleAlert
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjgiIHkyPSIxMiIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMi4wMSIgeTE9IjE2IiB5Mj0iMTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/circle-alert
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
    let { data, form } = $$props;
    let isLoading = false;
    let message = { type: "", text: "" };
    let name = "";
    let currentPassword = "";
    let newPassword = "";
    let confirmPassword = "";
    async function changePassword() {
      if (!currentPassword || !newPassword || !confirmPassword) {
        message = { type: "error", text: "Isi semua field passwordnya dek." };
        return;
      }
      if (newPassword !== confirmPassword) {
        message = {
          type: "error",
          text: "Password konfirmasi gak cocok dek, fokus!"
        };
        return;
      }
      isLoading = true;
      message = { type: "", text: "" };
      const { error } = await authClient.changePassword({ newPassword, currentPassword, revokeOtherSessions: true });
      if (error) {
        message = {
          type: "error",
          text: error.message || "Gagal ganti password."
        };
      } else {
        message = {
          type: "success",
          text: "Password diganti! Jangan sampe lupa lagi."
        };
        currentPassword = "";
        newPassword = "";
        confirmPassword = "";
      }
      isLoading = false;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="flex flex-col gap-6 max-w-4xl mx-auto w-full p-4 lg:p-8"><div class="flex flex-col gap-1"><h1 class="text-3xl font-bold tracking-tight text-foreground">Settings</h1> <p class="text-muted-foreground italic text-sm">"Atur profilmu biar gak keliatan amatiran pas di-stalking HR, dek."</p></div> `);
      if (form?.message || message.text) {
        $$renderer3.push("<!--[0-->");
        const isError = form?.message?.includes("Gagal") || form?.success === false || message.type === "error";
        $$renderer3.push(`<div${attr_class(`flex items-center gap-2 rounded-lg border p-4 text-sm font-medium transition-all ${stringify(isError ? "bg-destructive/15 text-destructive border-destructive/20" : "bg-green-500/15 text-green-500 border-green-500/20")}`)}>`);
        if (isError) {
          $$renderer3.push("<!--[0-->");
          Circle_alert($$renderer3, { size: 18 });
        } else {
          $$renderer3.push("<!--[-1-->");
          Shield_check($$renderer3, { size: 18 });
        }
        $$renderer3.push(`<!--]--> ${escape_html(form?.message || message.text)}</div>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> <div class="flex flex-col gap-6"><form method="POST" action="?/uploadAvatar" enctype="multipart/form-data">`);
      if (Card) {
        $$renderer3.push("<!--[-->");
        Card($$renderer3, {
          children: ($$renderer4) => {
            if (Card_header) {
              $$renderer4.push("<!--[-->");
              Card_header($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="flex items-center gap-2">`);
                  Camera($$renderer5, { size: 18, class: "text-primary" });
                  $$renderer5.push(`<!----> `);
                  if (Card_title) {
                    $$renderer5.push("<!--[-->");
                    Card_title($$renderer5, {
                      class: "text-xl font-bold",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->Profile Picture`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push("<!--]-->");
                  } else {
                    $$renderer5.push("<!--[!-->");
                    $$renderer5.push("<!--]-->");
                  }
                  $$renderer5.push(`</div> `);
                  if (Card_description) {
                    $$renderer5.push("<!--[-->");
                    Card_description($$renderer5, {
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->Foto lama otomatis dihapus dari S3 dek.`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push("<!--]-->");
                  } else {
                    $$renderer5.push("<!--[!-->");
                    $$renderer5.push("<!--]-->");
                  }
                },
                $$slots: { default: true }
              });
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
            $$renderer4.push(` `);
            if (Card_content) {
              $$renderer4.push("<!--[-->");
              Card_content($$renderer4, {
                class: "flex flex-col items-center gap-4 py-2",
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="relative group"><input type="file" name="avatar" accept="image/*" class="hidden"/> <button type="button" class="relative flex size-32 items-center justify-center overflow-hidden rounded-full bg-muted border-2 border-dashed border-primary/20 transition-all hover:border-primary/50">`);
                  {
                    $$renderer5.push("<!--[-1-->");
                    User($$renderer5, { size: 48, class: "text-muted-foreground" });
                  }
                  $$renderer5.push(`<!--]--> <div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">`);
                  Camera($$renderer5, { size: 24, class: "text-white" });
                  $$renderer5.push(`<!----></div></button></div> <p class="text-[10px] italic text-muted-foreground">Klik foto buat ganti, dek.</p>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
            $$renderer4.push(` `);
            if (Card_footer) {
              $$renderer4.push("<!--[-->");
              Card_footer($$renderer4, {
                class: "border-t ",
                children: ($$renderer5) => {
                  Button($$renderer5, {
                    type: "submit",
                    disabled: isLoading,
                    class: "ml-auto font-bold min-w-[140px]",
                    children: ($$renderer6) => {
                      if (isLoading) {
                        $$renderer6.push("<!--[0-->");
                        Loader_circle($$renderer6, { class: "mr-2 size-4 animate-spin" });
                        $$renderer6.push(`<!----> Uploading...`);
                      } else {
                        $$renderer6.push("<!--[-1-->");
                        $$renderer6.push(`Update Foto`);
                      }
                      $$renderer6.push(`<!--]-->`);
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
          },
          $$slots: { default: true }
        });
        $$renderer3.push("<!--]-->");
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push("<!--]-->");
      }
      $$renderer3.push(`</form> <form method="POST" action="?/updateProfile">`);
      if (Card) {
        $$renderer3.push("<!--[-->");
        Card($$renderer3, {
          children: ($$renderer4) => {
            if (Card_header) {
              $$renderer4.push("<!--[-->");
              Card_header($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="flex items-center gap-2">`);
                  User($$renderer5, { size: 18, class: "text-primary" });
                  $$renderer5.push(`<!----> `);
                  if (Card_title) {
                    $$renderer5.push("<!--[-->");
                    Card_title($$renderer5, {
                      class: "text-xl font-bold",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->Basic Information`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push("<!--]-->");
                  } else {
                    $$renderer5.push("<!--[!-->");
                    $$renderer5.push("<!--]-->");
                  }
                  $$renderer5.push(`</div>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
            $$renderer4.push(` `);
            if (Card_content) {
              $$renderer4.push("<!--[-->");
              Card_content($$renderer4, {
                class: "space-y-4",
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="space-y-2">`);
                  Label($$renderer5, {
                    for: "name",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->Display Name`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Input($$renderer5, {
                    id: "name",
                    name: "name",
                    placeholder: "Nama beken kamu",
                    disabled: isLoading,
                    get value() {
                      return name;
                    },
                    set value($$value) {
                      name = $$value;
                      $$settled = false;
                    }
                  });
                  $$renderer5.push(`<!----></div> <div class="space-y-2">`);
                  Label($$renderer5, {
                    for: "email",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->Email Address`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Input($$renderer5, {
                    id: "email",
                    type: "email",
                    value: data.user?.email,
                    disabled: true,
                    class: "bg-muted/50 cursor-not-allowed"
                  });
                  $$renderer5.push(`<!----></div>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
            $$renderer4.push(` `);
            if (Card_footer) {
              $$renderer4.push("<!--[-->");
              Card_footer($$renderer4, {
                class: "border-t ",
                children: ($$renderer5) => {
                  Button($$renderer5, {
                    type: "submit",
                    disabled: isLoading,
                    class: "ml-auto font-bold min-w-[140px]",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(isLoading ? "Nyimpen..." : "Simpan Nama")}`);
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
          },
          $$slots: { default: true }
        });
        $$renderer3.push("<!--]-->");
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push("<!--]-->");
      }
      $$renderer3.push(`</form> `);
      if (Card) {
        $$renderer3.push("<!--[-->");
        Card($$renderer3, {
          children: ($$renderer4) => {
            if (Card_header) {
              $$renderer4.push("<!--[-->");
              Card_header($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="flex items-center gap-2">`);
                  Lock($$renderer5, { size: 18, class: "text-orange-500" });
                  $$renderer5.push(`<!----> `);
                  if (Card_title) {
                    $$renderer5.push("<!--[-->");
                    Card_title($$renderer5, {
                      class: "text-xl font-bold",
                      children: ($$renderer6) => {
                        $$renderer6.push(`<!---->Security`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push("<!--]-->");
                  } else {
                    $$renderer5.push("<!--[!-->");
                    $$renderer5.push("<!--]-->");
                  }
                  $$renderer5.push(`</div>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
            $$renderer4.push(` `);
            if (Card_content) {
              $$renderer4.push("<!--[-->");
              Card_content($$renderer4, {
                class: "space-y-4",
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="space-y-2">`);
                  Label($$renderer5, {
                    for: "current",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->Password Sekarang`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Input($$renderer5, {
                    id: "current",
                    type: "password",
                    placeholder: "••••••••",
                    disabled: isLoading,
                    get value() {
                      return currentPassword;
                    },
                    set value($$value) {
                      currentPassword = $$value;
                      $$settled = false;
                    }
                  });
                  $$renderer5.push(`<!----></div> <div class="space-y-2">`);
                  Label($$renderer5, {
                    for: "new",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->Password Baru`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Input($$renderer5, {
                    id: "new",
                    type: "password",
                    placeholder: "••••••••",
                    disabled: isLoading,
                    get value() {
                      return newPassword;
                    },
                    set value($$value) {
                      newPassword = $$value;
                      $$settled = false;
                    }
                  });
                  $$renderer5.push(`<!----></div> <div class="space-y-2">`);
                  Label($$renderer5, {
                    for: "confirm",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->Konfirmasi Password`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Input($$renderer5, {
                    id: "confirm",
                    type: "password",
                    placeholder: "••••••••",
                    disabled: isLoading,
                    get value() {
                      return confirmPassword;
                    },
                    set value($$value) {
                      confirmPassword = $$value;
                      $$settled = false;
                    }
                  });
                  $$renderer5.push(`<!----></div>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
            $$renderer4.push(` `);
            if (Card_footer) {
              $$renderer4.push("<!--[-->");
              Card_footer($$renderer4, {
                class: "border-t ",
                children: ($$renderer5) => {
                  Button($$renderer5, {
                    variant: "outline",
                    onclick: changePassword,
                    disabled: isLoading,
                    class: "ml-auto font-bold border-orange-500/20 text-orange-600 hover:bg-orange-500/10",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->Ganti Password`);
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
          },
          $$slots: { default: true }
        });
        $$renderer3.push("<!--]-->");
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push("<!--]-->");
      }
      $$renderer3.push(`</div></div>`);
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
//# sourceMappingURL=_page.svelte-ByIpXOGj.js.map
