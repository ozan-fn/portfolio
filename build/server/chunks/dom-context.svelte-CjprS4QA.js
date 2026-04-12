import { I as hasContext, at as setContext, j as getContext, rt as run, x as derived } from "./dev-OC6EGoUN.js";
import "./index-server-DZlzaBwY.js";
import { r as on } from "./events-BEa1ajPz.js";
import { l as boxWith, v as isObject } from "./create-id-FjMUD0Is.js";
import { r as createSubscriber } from "./index-server2-Dhsx5REF.js";
//#region .svelte-kit/adapter-bun/chunks/dom-context.svelte.js
var defaultWindow = void 0;
/**
* Handles getting the active element in a document or shadow root.
* If the active element is within a shadow root, it will traverse the shadow root
* to find the active element.
* If not, it will return the active element in the document.
*
* @param document A document or shadow root to get the active element from.
* @returns The active element in the document or shadow root.
*/
function getActiveElement$1(document) {
	let activeElement = document.activeElement;
	while (activeElement?.shadowRoot) {
		const node = activeElement.shadowRoot.activeElement;
		if (node === activeElement) break;
		else activeElement = node;
	}
	return activeElement;
}
var ActiveElement = class {
	#document;
	#subscribe;
	constructor(options = {}) {
		const { window = defaultWindow, document = window?.document } = options;
		if (window === void 0) return;
		this.#document = document;
		this.#subscribe = createSubscriber((update) => {
			const cleanupFocusIn = on(window, "focusin", update);
			const cleanupFocusOut = on(window, "focusout", update);
			return () => {
				cleanupFocusIn();
				cleanupFocusOut();
			};
		});
	}
	get current() {
		this.#subscribe?.();
		if (!this.#document) return null;
		return getActiveElement$1(this.#document);
	}
};
new ActiveElement();
function isFunction(value) {
	return typeof value === "function";
}
var Context = class {
	#name;
	#key;
	/**
	* @param name The name of the context.
	* This is used for generating the context key and error messages.
	*/
	constructor(name) {
		this.#name = name;
		this.#key = Symbol(name);
	}
	/**
	* The key used to get and set the context.
	*
	* It is not recommended to use this value directly.
	* Instead, use the methods provided by this class.
	*/
	get key() {
		return this.#key;
	}
	/**
	* Checks whether this has been set in the context of a parent component.
	*
	* Must be called during component initialisation.
	*/
	exists() {
		return hasContext(this.#key);
	}
	/**
	* Retrieves the context that belongs to the closest parent component.
	*
	* Must be called during component initialisation.
	*
	* @throws An error if the context does not exist.
	*/
	get() {
		const context = getContext(this.#key);
		if (context === void 0) throw new Error(`Context "${this.#name}" not found`);
		return context;
	}
	/**
	* Retrieves the context that belongs to the closest parent component,
	* or the given fallback value if the context does not exist.
	*
	* Must be called during component initialisation.
	*/
	getOr(fallback) {
		const context = getContext(this.#key);
		if (context === void 0) return fallback;
		return context;
	}
	/**
	* Associates the given value with the current component and returns it.
	*
	* Must be called during component initialisation.
	*/
	set(context) {
		return setContext(this.#key, context);
	}
};
function runEffect(flush, effect) {
	switch (flush) {
		case "post": break;
		case "pre": break;
	}
}
function runWatcher(sources, flush, effect, options = {}) {
	const { lazy = false } = options;
	let active = !lazy;
	let previousValues = Array.isArray(sources) ? [] : void 0;
	runEffect(flush, () => {
		const values = Array.isArray(sources) ? sources.map((source) => source()) : sources();
		if (!active) {
			active = true;
			previousValues = values;
			return;
		}
		const cleanup = run(() => effect(values, previousValues));
		previousValues = values;
		return cleanup;
	});
}
function runWatcherOnce(sources, flush, effect) {}
function watch(sources, effect, options) {
	runWatcher(sources, "post", effect, options);
}
function watchPre(sources, effect, options) {
	runWatcher(sources, "pre", effect, options);
}
watch.pre = watchPre;
function watchOnce(source, effect) {
	runWatcherOnce(source, "post", effect);
}
function watchOncePre(source, effect) {
	runWatcherOnce(source, "pre", effect);
}
watchOnce.pre = watchOncePre;
function get(value) {
	if (isFunction(value)) return value();
	return value;
}
var ElementSize = class {
	#size = {
		width: 0,
		height: 0
	};
	#observed = false;
	#options;
	#node;
	#window;
	#width = derived(() => {
		this.#subscribe()?.();
		return this.getSize().width;
	});
	#height = derived(() => {
		this.#subscribe()?.();
		return this.getSize().height;
	});
	#subscribe = derived(() => {
		const node$ = get(this.#node);
		if (!node$) return;
		return createSubscriber((update) => {
			if (!this.#window) return;
			const observer = new this.#window.ResizeObserver((entries) => {
				this.#observed = true;
				for (const entry of entries) {
					const boxSize = this.#options.box === "content-box" ? entry.contentBoxSize : entry.borderBoxSize;
					const boxSizeArr = Array.isArray(boxSize) ? boxSize : [boxSize];
					this.#size.width = boxSizeArr.reduce((acc, size) => Math.max(acc, size.inlineSize), 0);
					this.#size.height = boxSizeArr.reduce((acc, size) => Math.max(acc, size.blockSize), 0);
				}
				update();
			});
			observer.observe(node$);
			return () => {
				this.#observed = false;
				observer.disconnect();
			};
		});
	});
	constructor(node, options = { box: "border-box" }) {
		this.#window = options.window ?? defaultWindow;
		this.#options = options;
		this.#node = node;
		this.#size = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		const element = get(this.#node);
		if (!element || !this.#window) return;
		const offsetWidth = element.offsetWidth;
		const offsetHeight = element.offsetHeight;
		if (this.#options.box === "border-box") return {
			width: offsetWidth,
			height: offsetHeight
		};
		const style = this.#window.getComputedStyle(element);
		const paddingWidth = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
		const paddingHeight = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
		const borderWidth = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
		const borderHeight = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
		return {
			width: offsetWidth - paddingWidth - borderWidth,
			height: offsetHeight - paddingHeight - borderHeight
		};
	}
	getSize() {
		return this.#observed ? this.#size : this.calculateSize() ?? this.#size;
	}
	get current() {
		this.#subscribe()?.();
		return this.getSize();
	}
	get width() {
		return this.#width();
	}
	get height() {
		return this.#height();
	}
};
function debounce(fn, delay) {
	let timeoutId;
	let lastResolve = null;
	return (...args) => {
		return new Promise((resolve) => {
			if (lastResolve) lastResolve(void 0);
			lastResolve = resolve;
			clearTimeout(timeoutId);
			timeoutId = setTimeout(async () => {
				const result = await fn(...args);
				if (lastResolve) {
					lastResolve(result);
					lastResolve = null;
				}
			}, delay);
		});
	};
}
function throttle(fn, delay) {
	let lastRun = 0;
	let lastPromise = null;
	return (...args) => {
		const now = Date.now();
		if (lastRun && now - lastRun < delay) return lastPromise ?? Promise.resolve(void 0);
		lastRun = now;
		lastPromise = fn(...args);
		return lastPromise;
	};
}
function runResource(source, fetcher, options = {}, effectFn) {
	const { lazy = false, once = false, initialValue, debounce: debounceTime, throttle: throttleTime } = options;
	let current = initialValue;
	let loading = false;
	let error = void 0;
	let cleanupFns = [];
	const runCleanup = () => {
		cleanupFns.forEach((fn) => fn());
		cleanupFns = [];
	};
	const onCleanup = (fn) => {
		cleanupFns = [...cleanupFns, fn];
	};
	const baseFetcher = async (value, previousValue, refetching = false) => {
		try {
			loading = true;
			error = void 0;
			runCleanup();
			const controller = new AbortController();
			onCleanup(() => controller.abort());
			const result = await fetcher(value, previousValue, {
				data: current,
				refetching,
				onCleanup,
				signal: controller.signal
			});
			current = result;
			return result;
		} catch (e) {
			if (!(e instanceof DOMException && e.name === "AbortError")) error = e;
			return;
		} finally {
			loading = false;
		}
	};
	const runFetcher = debounceTime ? debounce(baseFetcher, debounceTime) : throttleTime ? throttle(baseFetcher, throttleTime) : baseFetcher;
	const sources = Array.isArray(source) ? source : [source];
	let prevValues;
	effectFn((values, previousValues) => {
		if (once && prevValues) return;
		prevValues = values;
		runFetcher(Array.isArray(source) ? values : values[0], Array.isArray(source) ? previousValues : previousValues?.[0]);
	}, { lazy });
	return {
		get current() {
			return current;
		},
		get loading() {
			return loading;
		},
		get error() {
			return error;
		},
		mutate: (value) => {
			current = value;
		},
		refetch: (info) => {
			const values = sources.map((s) => s());
			return runFetcher(Array.isArray(source) ? values : values[0], Array.isArray(source) ? values : values[0], info ?? true);
		}
	};
}
function resource(source, fetcher, options) {
	return runResource(source, fetcher, options, (fn, options) => {
		const sources = Array.isArray(source) ? source : [source];
		const getters = () => sources.map((s) => s());
		watch(getters, (values, previousValues) => {
			fn(values, previousValues ?? []);
		}, options);
	});
}
function resourcePre(source, fetcher, options) {
	return runResource(source, fetcher, options, (fn, options) => {
		const sources = Array.isArray(source) ? source : [source];
		const getter = () => sources.map((s) => s());
		watch.pre(getter, (values, previousValues) => {
			fn(values, previousValues ?? []);
		}, options);
	});
}
resource.pre = resourcePre;
var ELEMENT_NODE = 1;
var DOCUMENT_NODE = 9;
var DOCUMENT_FRAGMENT_NODE = 11;
function isHTMLElement(node) {
	return isObject(node) && node.nodeType === ELEMENT_NODE && typeof node.nodeName === "string";
}
function isDocument(node) {
	return isObject(node) && node.nodeType === DOCUMENT_NODE;
}
function isWindow(node) {
	return isObject(node) && node.constructor?.name === "VisualViewport";
}
function isNode(node) {
	return isObject(node) && node.nodeType !== void 0;
}
function isShadowRoot(node) {
	return isNode(node) && node.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in node;
}
function contains(parent, child) {
	if (!parent || !child) return false;
	if (!isHTMLElement(parent) || !isHTMLElement(child)) return false;
	const rootNode = child.getRootNode?.();
	if (parent === child) return true;
	if (parent.contains(child)) return true;
	if (rootNode && isShadowRoot(rootNode)) {
		let next = child;
		while (next) {
			if (parent === next) return true;
			next = next.parentNode || next.host;
		}
	}
	return false;
}
function getDocument(node) {
	if (isDocument(node)) return node;
	if (isWindow(node)) return node.document;
	return node?.ownerDocument ?? document;
}
function getWindow(node) {
	if (isShadowRoot(node)) return getWindow(node.host);
	if (isDocument(node)) return node.defaultView ?? window;
	if (isHTMLElement(node)) return node.ownerDocument?.defaultView ?? window;
	return window;
}
function getActiveElement(rootNode) {
	let activeElement = rootNode.activeElement;
	while (activeElement?.shadowRoot) {
		const el = activeElement.shadowRoot.activeElement;
		if (el === activeElement) break;
		else activeElement = el;
	}
	return activeElement;
}
var DOMContext = class {
	element;
	#root = derived(() => {
		if (!this.element.current) return document;
		return this.element.current.getRootNode() ?? document;
	});
	get root() {
		return this.#root();
	}
	set root($$value) {
		return this.#root($$value);
	}
	constructor(element) {
		if (typeof element === "function") this.element = boxWith(element);
		else this.element = element;
	}
	getDocument = () => {
		return getDocument(this.root);
	};
	getWindow = () => {
		return this.getDocument().defaultView ?? window;
	};
	getActiveElement = () => {
		return getActiveElement(this.root);
	};
	isActiveElement = (node) => {
		return node === this.getActiveElement();
	};
	getElementById(id) {
		return this.root.getElementById(id);
	}
	querySelector = (selector) => {
		if (!this.root) return null;
		return this.root.querySelector(selector);
	};
	querySelectorAll = (selector) => {
		if (!this.root) return [];
		return this.root.querySelectorAll(selector);
	};
	setTimeout = (callback, delay) => {
		return this.getWindow().setTimeout(callback, delay);
	};
	clearTimeout = (timeoutId) => {
		return this.getWindow().clearTimeout(timeoutId);
	};
};
//#endregion
export { getDocument as a, contains as i, DOMContext as n, getWindow as o, ElementSize as r, watch as s, Context as t };

//# sourceMappingURL=dom-context.svelte-CjprS4QA.js.map