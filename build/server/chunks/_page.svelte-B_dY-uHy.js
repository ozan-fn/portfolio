import { C as ensure_array_like, L as head, T as escape_html, c as attr, d as attributes, l as attr_class, pt as stringify, u as attr_style, ut as spread_props, x as derived } from "./dev-D04rZKKe.js";
import { t as Button } from "./button-DA4j647p.js";
import { t as Card } from "./card-NgUFv-dy.js";
import { t as Icon } from "./Icon-BhN73e3z.js";
import { t as Mail } from "./mail-B6P3gOJH.js";
import { t as Input } from "./input-D59IkaTZ.js";
import { t as User } from "./user-CH-6g-vn.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/contact/_page.svelte.js
function Message_square($$renderer, $$props) {
	/**
	* @license @lucide/svelte v1.8.0 - ISC
	*
	* ISC License
	*
	* Copyright (c) 2026 Lucide Icons and Contributors
	*
	* Permission to use, copy, modify, and/or distribute this software for any
	* purpose with or without fee is hereby granted, provided that the above
	* copyright notice and this permission notice appear in all copies.
	*
	* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
	* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
	* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
	* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
	* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
	* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
	* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	*
	* ---
	*
	* The following Lucide icons are derived from the Feather project:
	*
	* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
	*
	* The MIT License (MIT) (for the icons listed above)
	*
	* Copyright (c) 2013-present Cole Bemis
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*
	*/
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "message-square" },
		props,
		{ iconNode: [["path", { "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }]] }
	]));
}
function Map_pin($$renderer, $$props) {
	/**
	* @license @lucide/svelte v1.8.0 - ISC
	*
	* ISC License
	*
	* Copyright (c) 2026 Lucide Icons and Contributors
	*
	* Permission to use, copy, modify, and/or distribute this software for any
	* purpose with or without fee is hereby granted, provided that the above
	* copyright notice and this permission notice appear in all copies.
	*
	* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
	* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
	* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
	* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
	* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
	* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
	* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	*
	* ---
	*
	* The following Lucide icons are derived from the Feather project:
	*
	* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
	*
	* The MIT License (MIT) (for the icons listed above)
	*
	* Copyright (c) 2013-present Cole Bemis
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*
	*/
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "map-pin" },
		props,
		{ iconNode: [["path", { "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["circle", {
			"cx": "12",
			"cy": "10",
			"r": "3"
		}]] }
	]));
}
function Send($$renderer, $$props) {
	/**
	* @license @lucide/svelte v1.8.0 - ISC
	*
	* ISC License
	*
	* Copyright (c) 2026 Lucide Icons and Contributors
	*
	* Permission to use, copy, modify, and/or distribute this software for any
	* purpose with or without fee is hereby granted, provided that the above
	* copyright notice and this permission notice appear in all copies.
	*
	* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
	* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
	* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
	* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
	* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
	* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
	* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	*
	* ---
	*
	* The following Lucide icons are derived from the Feather project:
	*
	* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
	*
	* The MIT License (MIT) (for the icons listed above)
	*
	* Copyright (c) 2013-present Cole Bemis
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*
	*/
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "send" },
		props,
		{ iconNode: [["path", { "d": "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" }], ["path", { "d": "m21.854 2.147-10.94 10.939" }]] }
	]));
}
function At_sign($$renderer, $$props) {
	/**
	* @license @lucide/svelte v1.8.0 - ISC
	*
	* ISC License
	*
	* Copyright (c) 2026 Lucide Icons and Contributors
	*
	* Permission to use, copy, modify, and/or distribute this software for any
	* purpose with or without fee is hereby granted, provided that the above
	* copyright notice and this permission notice appear in all copies.
	*
	* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
	* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
	* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
	* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
	* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
	* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
	* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	*
	* ---
	*
	* The following Lucide icons are derived from the Feather project:
	*
	* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
	*
	* The MIT License (MIT) (for the icons listed above)
	*
	* Copyright (c) 2013-present Cole Bemis
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*
	*/
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "at-sign" },
		props,
		{ iconNode: [["circle", {
			"cx": "12",
			"cy": "12",
			"r": "4"
		}], ["path", { "d": "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" }]] }
	]));
}
function Github($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { size = void 0, color = "#000000", strokeWidth = 2, background = "transparent", opacity = 1, rotation = 0, shadow = 0, flipHorizontal = false, flipVertical = false, padding = 0 } = $$props;
		let transforms = derived(() => [
			rotation !== 0 ? `rotate(${rotation}deg)` : "",
			flipHorizontal ? "scaleX(-1)" : "",
			flipVertical ? "scaleY(-1)" : ""
		].filter(Boolean).join(" "));
		let viewBoxSize = derived(() => 24 + padding * 2);
		let viewBoxOffset = derived(() => -padding);
		let viewBox = derived(() => `${viewBoxOffset()} ${viewBoxOffset()} ${viewBoxSize()} ${viewBoxSize()}`);
		let bgColor = derived(() => background !== "transparent" ? background : void 0);
		$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg"${attr("width", size)}${attr("height", size)}${attr("viewBox", viewBox())} fill="none"${attr("stroke", color)}${attr("stroke-width", strokeWidth)} stroke-linecap="round" stroke-linejoin="round"${attr_style(`opacity: ${stringify(opacity)}; transform: ${stringify(transforms())}; ${stringify(shadow > 0 ? `filter: drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))` : "")}; ${stringify(bgColor() ? `background-color: ${bgColor()}` : "")}`)}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>`);
	});
}
function Linkedin($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { size = void 0, color = "#000000", strokeWidth = 2, background = "transparent", opacity = 1, rotation = 0, shadow = 0, flipHorizontal = false, flipVertical = false, padding = 0, $$slots, $$events, ...rest } = $$props;
		const transforms = derived(() => [
			rotation !== 0 ? `rotate(${rotation}deg)` : "",
			flipHorizontal ? "scaleX(-1)" : "",
			flipVertical ? "scaleY(-1)" : ""
		].filter(Boolean).join(" "));
		const viewBoxSize = derived(() => 24 + padding * 2);
		const viewBoxOffset = derived(() => -padding);
		const viewBox = derived(() => `${viewBoxOffset()} ${viewBoxOffset()} ${viewBoxSize()} ${viewBoxSize()}`);
		const bgColor = derived(() => background !== "transparent" ? background : void 0);
		$$renderer.push(`<svg${attributes({
			xmlns: "http://www.w3.org/2000/svg",
			width: size,
			height: size,
			viewBox: viewBox(),
			fill: "none",
			stroke: color,
			"stroke-width": strokeWidth,
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			style: `opacity: ${stringify(opacity)}; transform: ${stringify(transforms())}; ${stringify(shadow > 0 ? `filter: drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3));` : "")} ${stringify(bgColor() ? `background-color: ${bgColor()};` : "")}`,
			...rest
		}, void 0, void 0, void 0, 3)}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>`);
	});
}
function _page($$renderer) {
	const contactInfo = [
		{
			id: "email",
			icon: Mail,
			label: "Email",
			value: "ozan@example.com",
			href: "mailto:ozan@example.com",
			color: "text-rose-500",
			bg: "bg-rose-500/10"
		},
		{
			id: "github",
			icon: Github,
			label: "GitHub",
			value: "github.com/zann",
			href: "https://github.com/zann",
			color: "text-foreground",
			bg: "bg-foreground/10"
		},
		{
			id: "linkedin",
			icon: Linkedin,
			label: "LinkedIn",
			value: "Akhmad Fauzan",
			href: "https://linkedin.com/in/akhmadfauzan",
			color: "text-blue-500",
			bg: "bg-blue-500/10"
		},
		{
			id: "location",
			icon: Map_pin,
			label: "Location",
			value: "Purbalingga, ID",
			href: null,
			color: "text-emerald-500",
			bg: "bg-emerald-500/10"
		}
	];
	let isSubmitting = false;
	head("pub15m", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Contact | Portfolio</title>`);
		});
	});
	$$renderer.push(`<div class="flex flex-col gap-8 pb-10"><div class="bg-primary/5 p-10 rounded-2xl border border-primary/10 relative overflow-hidden shadow-inner"><div class="absolute -right-10 -top-10 size-40 bg-primary/5 blur-3xl rounded-full"></div> <div class="relative z-10 space-y-3 text-center md:text-left"><div class="flex items-center justify-center md:justify-start gap-2">`);
	Message_square($$renderer, {
		size: 16,
		class: "text-primary"
	});
	$$renderer.push(`<!----> <span class="text-[10px] font-bold tracking-widest uppercase text-primary">Get In Touch</span></div> <h3 class="text-4xl font-black tracking-tight text-primary leading-tight">Contact 📬</h3> <p class="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">Punya ide proyek menarik atau sekadar ingin diskusi soal <strong class="text-foreground">Golang</strong>, <strong class="text-foreground">Rust</strong>, dan <strong class="text-foreground">Svelte</strong>?</p></div></div> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
	const each_array = ensure_array_like(contactInfo);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let info = each_array[$$index];
		if (info.href) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<a${attr("href", info.href)} target="_blank" rel="noopener noreferrer" class="group rounded-2xl border border-border bg-card p-6 flex flex-col items-center justify-center gap-4 transition-all hover:-translate-y-1 hover:shadow-lg text-center"><div${attr_class(`size-14 rounded-full flex items-center justify-center ${stringify(info.bg)} ${stringify(info.color)} transition-transform duration-500 group-hover:scale-110`)}>`);
			if (info.icon) {
				$$renderer.push("<!--[-->");
				info.icon($$renderer, {
					size: 24,
					strokeWidth: 1.5
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
			$$renderer.push(`</div> <div class="flex flex-col gap-1.5"><span class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">${escape_html(info.label)}</span> <span class="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">${escape_html(info.value)}</span></div></a>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="group rounded-2xl border border-border bg-card p-6 flex flex-col items-center justify-center gap-4 transition-all hover:-translate-y-1 hover:shadow-lg text-center"><div${attr_class(`size-14 rounded-full flex items-center justify-center ${stringify(info.bg)} ${stringify(info.color)} transition-transform duration-500 group-hover:scale-110`)}>`);
			if (info.icon) {
				$$renderer.push("<!--[-->");
				info.icon($$renderer, {
					size: 24,
					strokeWidth: 1.5
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
			$$renderer.push(`</div> <div class="flex flex-col gap-1.5"><span class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">${escape_html(info.label)}</span> <span class="text-sm font-semibold text-foreground">${escape_html(info.value)}</span></div></div>`);
		}
		$$renderer.push(`<!--]-->`);
	}
	$$renderer.push(`<!--]--></div> <div class="flex flex-col gap-4 mt-2"><div class="flex items-center gap-2 px-0.5 mb-1"><svg class="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg> <span class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">send a message</span></div> `);
	if (Card) {
		$$renderer.push("<!--[-->");
		Card($$renderer, {
			class: "rounded-2xl border border-border bg-card p-6 md:p-10",
			children: ($$renderer) => {
				$$renderer.push(`<form class="flex flex-col gap-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="space-y-2"><label for="name" class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground ml-1">Name</label> <div class="relative">`);
				User($$renderer, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" });
				$$renderer.push(`<!----> `);
				Input($$renderer, {
					id: "name",
					required: true,
					placeholder: "John Doe",
					class: "pl-10 h-12 bg-muted/30 border-border rounded-xl focus-visible:ring-primary text-sm transition-all"
				});
				$$renderer.push(`<!----></div></div> <div class="space-y-2"><label for="email" class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground ml-1">Email</label> <div class="relative">`);
				At_sign($$renderer, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" });
				$$renderer.push(`<!----> `);
				Input($$renderer, {
					id: "email",
					type: "email",
					required: true,
					placeholder: "john@example.com",
					class: "pl-10 h-12 bg-muted/30 border-border rounded-xl focus-visible:ring-primary text-sm transition-all"
				});
				$$renderer.push(`<!----></div></div></div> <div class="space-y-2"><label for="message" class="text-[10px] font-bold tracking-widest uppercase text-muted-foreground ml-1">Message</label> <textarea id="message" required="" placeholder="Halo Ozan, saya mau diskusi soal..." class="min-h-[180px] w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all resize-y"></textarea></div> <div class="pt-2">`);
				Button($$renderer, {
					type: "submit",
					disabled: isSubmitting,
					class: "w-full md:w-auto md:px-12 h-12 rounded-xl text-[10px] font-bold tracking-widest uppercase group transition-all relative overflow-hidden",
					children: ($$renderer) => {
						$$renderer.push("<!--[-1-->");
						$$renderer.push(`<span class="relative z-10 flex items-center justify-center gap-2">Kirim Pesan `);
						Send($$renderer, {
							size: 14,
							class: "transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
						});
						$$renderer.push(`<!----></span>`);
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></div></form>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push("<!--]-->");
	} else {
		$$renderer.push("<!--[!-->");
		$$renderer.push("<!--]-->");
	}
	$$renderer.push(`</div></div>`);
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-B_dY-uHy.js.map