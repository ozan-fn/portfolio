import { A as bind_props, P as derived, Z as props_id, j as clsx, k as attributes, nt as spread_props } from "./renderer-CoNnoy0x.js";
import { f as createId, l as boxWith, x as mergeProps } from "./create-id-vdhYoWyc.js";
import { i as cn, n as buttonVariants } from "./button-JWKRuBhr.js";
import { h as noop } from "./noop-8uyxhZin.js";
import { a as DialogRootState, c as Dialog_title, d as Focus_scope, f as Portal, g as afterSleep, h as Text_selection_layer, i as DialogContentState, l as Dismissible_layer, m as Scroll_lock, o as Dialog_description, s as Dialog_overlay, t as AlertDialogCancelState, u as Escape_layer } from "./dialog-description-CQMejHjJ.js";
//#region .svelte-kit/adapter-bun/chunks/alert-dialog-description.js
function Alert_dialog$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { open = false, onOpenChange = noop, onOpenChangeComplete = noop, children } = $$props;
		DialogRootState.create({
			variant: boxWith(() => "alert-dialog"),
			open: boxWith(() => open, (v) => {
				open = v;
				onOpenChange(v);
			}),
			onOpenChangeComplete: boxWith(() => onOpenChangeComplete)
		});
		children?.($$renderer2);
		$$renderer2.push(`<!---->`);
		bind_props($$props, { open });
	});
}
function Alert_dialog_cancel$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		const uid = props_id($$renderer2);
		let { id = createId(uid), ref = null, children, child, disabled = false, $$slots, $$events, ...restProps } = $$props;
		const cancelState = AlertDialogCancelState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			disabled: boxWith(() => Boolean(disabled))
		});
		const mergedProps = derived(() => mergeProps(restProps, cancelState.props));
		if (child) {
			$$renderer2.push("<!--[0-->");
			child($$renderer2, { props: mergedProps() });
			$$renderer2.push(`<!---->`);
		} else {
			$$renderer2.push("<!--[-1-->");
			$$renderer2.push(`<button${attributes({ ...mergedProps() })}>`);
			children?.($$renderer2);
			$$renderer2.push(`<!----></button>`);
		}
		$$renderer2.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
function Alert_dialog_content$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		const uid = props_id($$renderer2);
		let { id = createId(uid), children, child, ref = null, forceMount = false, interactOutsideBehavior = "ignore", onCloseAutoFocus = noop, onEscapeKeydown = noop, onOpenAutoFocus = noop, onInteractOutside = noop, preventScroll = true, trapFocus = true, restoreScrollDelay = null, $$slots, $$events, ...restProps } = $$props;
		const contentState = DialogContentState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, contentState.props));
		if (contentState.shouldRender || forceMount) {
			$$renderer2.push("<!--[0-->");
			{
				let focusScope = function($$renderer3, { props: focusScopeProps }) {
					Escape_layer($$renderer3, spread_props([mergedProps(), {
						enabled: contentState.root.opts.open.current,
						ref: contentState.opts.ref,
						onEscapeKeydown: (e) => {
							onEscapeKeydown(e);
							if (e.defaultPrevented) return;
							contentState.root.handleClose();
						},
						children: ($$renderer4) => {
							Dismissible_layer($$renderer4, spread_props([mergedProps(), {
								ref: contentState.opts.ref,
								enabled: contentState.root.opts.open.current,
								interactOutsideBehavior,
								onInteractOutside: (e) => {
									onInteractOutside(e);
									if (e.defaultPrevented) return;
									contentState.root.handleClose();
								},
								children: ($$renderer5) => {
									Text_selection_layer($$renderer5, spread_props([mergedProps(), {
										ref: contentState.opts.ref,
										enabled: contentState.root.opts.open.current,
										children: ($$renderer6) => {
											if (child) {
												$$renderer6.push("<!--[0-->");
												if (contentState.root.opts.open.current) {
													$$renderer6.push("<!--[0-->");
													Scroll_lock($$renderer6, {
														preventScroll,
														restoreScrollDelay
													});
												} else $$renderer6.push("<!--[-1-->");
												$$renderer6.push(`<!--]--> `);
												child($$renderer6, {
													props: mergeProps(mergedProps(), focusScopeProps),
													...contentState.snippetProps
												});
												$$renderer6.push(`<!---->`);
											} else {
												$$renderer6.push("<!--[-1-->");
												Scroll_lock($$renderer6, { preventScroll });
												$$renderer6.push(`<!----> <div${attributes({ ...mergeProps(mergedProps(), focusScopeProps) })}>`);
												children?.($$renderer6);
												$$renderer6.push(`<!----></div>`);
											}
											$$renderer6.push(`<!--]-->`);
										},
										$$slots: { default: true }
									}]));
								},
								$$slots: { default: true }
							}]));
						},
						$$slots: { default: true }
					}]));
				};
				Focus_scope($$renderer2, {
					ref: contentState.opts.ref,
					loop: true,
					trapFocus,
					enabled: contentState.root.opts.open.current,
					onCloseAutoFocus,
					onOpenAutoFocus: (e) => {
						onOpenAutoFocus(e);
						if (e.defaultPrevented) return;
						e.preventDefault();
						afterSleep(0, () => contentState.opts.ref.current?.focus());
					},
					focusScope
				});
			}
		} else $$renderer2.push("<!--[-1-->");
		$$renderer2.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
function Alert_dialog($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { open = false, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			if (Alert_dialog$1) {
				$$renderer3.push("<!--[-->");
				Alert_dialog$1($$renderer3, spread_props([restProps, {
					get open() {
						return open;
					},
					set open($$value) {
						open = $$value;
						$$settled = false;
					}
				}]));
				$$renderer3.push("<!--]-->");
			} else {
				$$renderer3.push("<!--[!-->");
				$$renderer3.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer2.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer2.subsume($$inner_renderer);
		bind_props($$props, { open });
	});
}
function Alert_dialog_portal($$renderer, $$props) {
	let { $$slots, $$events, ...restProps } = $$props;
	if (Portal) {
		$$renderer.push("<!--[-->");
		Portal($$renderer, spread_props([restProps]));
		$$renderer.push("<!--]-->");
	} else {
		$$renderer.push("<!--[!-->");
		$$renderer.push("<!--]-->");
	}
}
function Alert_dialog_title($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			if (Dialog_title) {
				$$renderer3.push("<!--[-->");
				Dialog_title($$renderer3, spread_props([
					{
						"data-slot": "alert-dialog-title",
						class: cn("text-lg font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer3.push("<!--]-->");
			} else {
				$$renderer3.push("<!--[!-->");
				$$renderer3.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer2.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer2.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
function Alert_dialog_cancel($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, variant = "outline", size = "default", $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			if (Alert_dialog_cancel$1) {
				$$renderer3.push("<!--[-->");
				Alert_dialog_cancel$1($$renderer3, spread_props([
					{
						"data-slot": "alert-dialog-cancel",
						class: cn(buttonVariants({
							variant,
							size
						}), "cn-alert-dialog-cancel", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer3.push("<!--]-->");
			} else {
				$$renderer3.push("<!--[!-->");
				$$renderer3.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer2.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer2.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
function Alert_dialog_footer($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer2.push(`<div${attributes({
			"data-slot": "alert-dialog-footer",
			class: clsx(cn("cn-alert-dialog-footer flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end", className)),
			...restProps
		})}>`);
		children?.($$renderer2);
		$$renderer2.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
function Alert_dialog_header($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		$$renderer2.push(`<div${attributes({
			"data-slot": "alert-dialog-header",
			class: clsx(cn("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", className)),
			...restProps
		})}>`);
		children?.($$renderer2);
		$$renderer2.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
function Alert_dialog_overlay($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			if (Dialog_overlay) {
				$$renderer3.push("<!--[-->");
				Dialog_overlay($$renderer3, spread_props([
					{
						"data-slot": "alert-dialog-overlay",
						class: cn("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer3.push("<!--]-->");
			} else {
				$$renderer3.push("<!--[!-->");
				$$renderer3.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer2.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer2.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
function Alert_dialog_content($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, size = "default", portalProps, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			Alert_dialog_portal($$renderer3, spread_props([portalProps, {
				children: ($$renderer4) => {
					Alert_dialog_overlay($$renderer4, {});
					$$renderer4.push(`<!----> `);
					if (Alert_dialog_content$1) {
						$$renderer4.push("<!--[-->");
						Alert_dialog_content$1($$renderer4, spread_props([
							{
								"data-slot": "alert-dialog-content",
								"data-size": size,
								class: cn("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 bg-popover text-popover-foreground ring-foreground/10 gap-6 rounded-xl p-6 ring-1 duration-100 data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-lg group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 outline-none", className)
							},
							restProps,
							{
								get ref() {
									return ref;
								},
								set ref($$value) {
									ref = $$value;
									$$settled = false;
								}
							}
						]));
						$$renderer4.push("<!--]-->");
					} else {
						$$renderer4.push("<!--[!-->");
						$$renderer4.push("<!--]-->");
					}
				},
				$$slots: { default: true }
			}]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer2.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer2.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
function Alert_dialog_description($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			if (Dialog_description) {
				$$renderer3.push("<!--[-->");
				Dialog_description($$renderer3, spread_props([
					{
						"data-slot": "alert-dialog-description",
						class: cn("text-muted-foreground *:[a]:hover:text-foreground text-sm text-balance md:text-pretty *:[a]:underline *:[a]:underline-offset-3", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
				$$renderer3.push("<!--]-->");
			} else {
				$$renderer3.push("<!--[!-->");
				$$renderer3.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer2.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer2.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
export { Alert_dialog_footer as a, Alert_dialog_description as i, Alert_dialog_cancel as n, Alert_dialog_header as o, Alert_dialog_content as r, Alert_dialog_title as s, Alert_dialog as t };

//# sourceMappingURL=alert-dialog-description-DQ6tBYWu.js.map