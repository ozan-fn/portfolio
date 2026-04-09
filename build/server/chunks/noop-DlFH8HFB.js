//#region .svelte-kit/adapter-bun/chunks/noop.js
const ARROW_DOWN = "ArrowDown";
const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const ARROW_UP = "ArrowUp";
const ENTER = "Enter";
const ESCAPE = "Escape";
const HOME = "Home";
const isBrowser = typeof document !== "undefined";
const isIOS = getIsIOS();
function getIsIOS() {
	return isBrowser && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function isHTMLElement(element) {
	return element instanceof HTMLElement;
}
function isElement(element) {
	return element instanceof Element;
}
function isElementOrSVGElement(element) {
	return element instanceof Element || element instanceof SVGElement;
}
function isFocusVisible(element) {
	return element.matches(":focus-visible");
}
function isNotNull(value) {
	return value !== null;
}
function noop() {}
//#endregion
export { ENTER as a, isBrowser as c, isFocusVisible as d, isHTMLElement as f, noop as h, ARROW_UP as i, isElement as l, isNotNull as m, ARROW_LEFT as n, ESCAPE as o, isIOS as p, ARROW_RIGHT as r, HOME as s, ARROW_DOWN as t, isElementOrSVGElement as u };

//# sourceMappingURL=noop-DlFH8HFB.js.map