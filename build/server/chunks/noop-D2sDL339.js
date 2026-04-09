const ARROW_DOWN = "ArrowDown";
const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const ARROW_UP = "ArrowUp";
const END = "End";
const ENTER = "Enter";
const ESCAPE = "Escape";
const HOME = "Home";
const SPACE = " ";
const isBrowser = typeof document !== "undefined";
const isIOS = getIsIOS();
function getIsIOS() {
  return isBrowser && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
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
function noop() {
}

export { ARROW_LEFT as A, END as E, HOME as H, SPACE as S, isElementOrSVGElement as a, ARROW_RIGHT as b, ARROW_UP as c, ARROW_DOWN as d, ENTER as e, isBrowser as f, ESCAPE as g, isIOS as h, isHTMLElement as i, isElement as j, isFocusVisible as k, isNotNull as l, noop as n };
//# sourceMappingURL=noop-D2sDL339.js.map
