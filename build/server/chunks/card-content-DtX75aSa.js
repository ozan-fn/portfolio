import { j as attributes, m as clsx, f as bind_props } from './index2-CKLX2A8l.js';
import { c as cn } from './button-DsqoR_hA.js';

function Card_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "card-content",
      class: clsx(cn("px-6 group-data-[size=sm]/card:px-4", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}

export { Card_content as C };
//# sourceMappingURL=card-content-DtX75aSa.js.map
