import { X as noop, vt as writable } from "./dev-OC6EGoUN.js";
import { r as index_server_exports } from "./index-server-DZlzaBwY.js";
import { B as noop$1 } from "./internal-C5BTF4RS.js";
//#region .svelte-kit/adapter-bun/chunks/client.js
var PRELOAD_PRIORITIES = {
	tap: 1,
	hover: 2,
	viewport: 3,
	eager: 4,
	off: -1,
	false: -1
};
({ ...PRELOAD_PRIORITIES }), PRELOAD_PRIORITIES.hover;
/** @param {any} value */
function notifiable_store(value) {
	const store = writable(value);
	let ready = true;
	function notify() {
		ready = true;
		store.update((val) => val);
	}
	/** @param {any} new_value */
	function set(new_value) {
		ready = false;
		store.set(new_value);
	}
	/** @param {(value: any) => void} run */
	function subscribe(run) {
		/** @type {any} */
		let old_value;
		return store.subscribe((new_value) => {
			if (old_value === void 0 || ready && new_value !== old_value) run(old_value = new_value);
		});
	}
	return {
		notify,
		set,
		subscribe
	};
}
var updated_listener = { v: noop$1 };
function create_updated_store() {
	const { set, subscribe } = writable(false);
	return {
		subscribe,
		check: async () => false
	};
}
var navigating;
var updated;
var is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
var placeholder_url = "a:";
if (is_legacy) {
	new URL(placeholder_url);
	navigating = { current: null };
	updated = { current: false };
} else {
	new class Page {
		data = {};
		form = null;
		error = null;
		params = {};
		route = { id: null };
		state = {};
		status = -1;
		url = new URL(placeholder_url);
	}();
	navigating = new class Navigating {
		current = null;
	}();
	updated = new class Updated {
		current = false;
	}();
	updated_listener.v = () => updated.current = true;
}
/** @import { RemoteQueryCacheEntry } from './remote-functions/query.svelte.js' */
var { onMount, tick } = index_server_exports;
var stores = {
	url: /* @__PURE__ */ notifiable_store({}),
	page: /* @__PURE__ */ notifiable_store({}),
	navigating: /* @__PURE__ */ writable(null),
	updated: /* @__PURE__ */ create_updated_store()
};
/** @type {Set<(navigation: import('@sveltejs/kit').OnNavigate) => import('types').MaybePromise<(() => void) | void>>} */
var on_navigate_callbacks = /* @__PURE__ */ new Set();
/**
* @template {Function} T
* @param {Set<T>} callbacks
* @param {T} callback
*/
function add_navigation_callback(callbacks, callback) {
	onMount(() => {
		callbacks.add(callback);
		return () => {
			callbacks.delete(callback);
		};
	});
}
/**
* A lifecycle function that runs the supplied `callback` immediately before we navigate to a new URL except during full-page navigations.
*
* If you return a `Promise`, SvelteKit will wait for it to resolve before completing the navigation. This allows you to — for example — use `document.startViewTransition`. Avoid promises that are slow to resolve, since navigation will appear stalled to the user.
*
* If a function (or a `Promise` that resolves to a function) is returned from the callback, it will be called once the DOM has updated.
*
* `onNavigate` must be called during a component initialization. It remains active as long as the component is mounted.
* @param {(navigation: import('@sveltejs/kit').OnNavigate) => import('types').MaybePromise<(() => void) | void>} callback
* @returns {void}
*/
function onNavigate(callback) {
	add_navigation_callback(on_navigate_callbacks, callback);
}
/**
* Allows you to navigate programmatically to a given route, with options such as keeping the current element focused.
* Returns a Promise that resolves when SvelteKit navigates (or fails to navigate, in which case the promise rejects) to the specified `url`.
*
* For external URLs, use `window.location = url` instead of calling `goto(url)`.
*
* @param {string | URL} url Where to navigate to. Note that if you've set [`config.kit.paths.base`](https://svelte.dev/docs/kit/configuration#paths) and the URL is root-relative, you need to prepend the base path if you want to navigate within the app.
* @param {Object} [opts] Options related to the navigation
* @param {boolean} [opts.replaceState] If `true`, will replace the current `history` entry rather than creating a new one with `pushState`
* @param {boolean} [opts.noScroll] If `true`, the browser will maintain its scroll position rather than scrolling to the top of the page after navigation
* @param {boolean} [opts.keepFocus] If `true`, the currently focused element will retain focus after navigation. Otherwise, focus will be reset to the body
* @param {boolean} [opts.invalidateAll] If `true`, all `load` functions of the page will be rerun. See https://svelte.dev/docs/kit/load#rerunning-load-functions for more info on invalidation.
* @param {Array<string | URL | ((url: URL) => boolean)>} [opts.invalidate] Causes any load functions to re-run if they depend on one of the urls
* @param {App.PageState} [opts.state] An optional object that will be available as `page.state`
* @returns {Promise<void>}
*/
function goto(url, opts = {}) {
	throw new Error("Cannot call goto(...) on the server");
}
//#endregion
export { stores as i, navigating as n, onNavigate as r, goto as t };

//# sourceMappingURL=client-C_3X-bMK.js.map