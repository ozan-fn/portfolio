import "./root-B7evDd0u.js";
import { A as bind_props, D as attr_class, E as attr, F as element, I as ensure_array_like, L as escape_html, P as derived, Q as props_id, at as stringify, k as attributes, nt as setContext, rt as spread_props, z as getContext } from "./index2-v1oxlg_d.js";
import { n as writable } from "./index4-BiaCZLW1.js";
import "./state.svelte-CJnt2xD2.js";
import { t as page } from "./index3-ByBTU9op.js";
import { b as mergeProps, d as createBitsAttrs, f as createId, l as boxWith, n as attachRef } from "./create-id-D0NrfjXx.js";
import { r as cn } from "./button-Bb0vadXY.js";
import { c as onDestroy, d as watch, n as DOMContext, r as Separator, t as Context } from "./separator-C7LZ0gb8.js";
import { t as Badge } from "./badge-BJCt7Bzh.js";
import { t as Card } from "./card-BXUXQfdp.js";
import { t as Card_content } from "./card-content-5415gil-.js";
import { t as Icon } from "./Icon-CvnL3Gja.js";
import { t as Mode_toggle } from "./mode-toggle-Clb5TArZ.js";
import { t as X } from "./x-DJ0soeNM.js";
//#region node_modules/motion-utils/dist/es/array.mjs
function addUniqueItem(arr, item) {
	if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
	const index = arr.indexOf(item);
	if (index > -1) arr.splice(index, 1);
}
//#endregion
//#region node_modules/motion-utils/dist/es/clamp.mjs
const clamp = (min, max, v) => {
	if (v > max) return max;
	if (v < min) return min;
	return v;
};
//#endregion
//#region node_modules/motion-utils/dist/es/format-error-message.mjs
function formatErrorMessage(message, errorCode) {
	return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
//#endregion
//#region node_modules/motion-utils/dist/es/errors.mjs
let warning = () => {};
let invariant = () => {};
if (typeof process !== "undefined" && true) {
	warning = (check, message, errorCode) => {
		if (!check && typeof console !== "undefined") console.warn(formatErrorMessage(message, errorCode));
	};
	invariant = (check, message, errorCode) => {
		if (!check) throw new Error(formatErrorMessage(message, errorCode));
	};
}
//#endregion
//#region node_modules/motion-utils/dist/es/global-config.mjs
const MotionGlobalConfig = {};
//#endregion
//#region node_modules/motion-utils/dist/es/is-numerical-string.mjs
/**
* Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
*/
const isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
//#endregion
//#region node_modules/motion-utils/dist/es/is-object.mjs
function isObject(value) {
	return typeof value === "object" && value !== null;
}
//#endregion
//#region node_modules/motion-utils/dist/es/is-zero-value-string.mjs
/**
* Check if the value is a zero value string like "0px" or "0%"
*/
const isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);
//#endregion
//#region node_modules/motion-utils/dist/es/memo.mjs
/* @__NO_SIDE_EFFECTS__ */
function memo(callback) {
	let result;
	return () => {
		if (result === void 0) result = callback();
		return result;
	};
}
//#endregion
//#region node_modules/motion-utils/dist/es/noop.mjs
const noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;
//#endregion
//#region node_modules/motion-utils/dist/es/pipe.mjs
/**
* Pipe
* Compose other transformers to run linearily
* pipe(min(20), max(40))
* @param  {...functions} transformers
* @return {function}
*/
const combineFunctions = (a, b) => (v) => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);
//#endregion
//#region node_modules/motion-utils/dist/es/progress.mjs
const progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
	const toFromDifference = to - from;
	return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
//#endregion
//#region node_modules/motion-utils/dist/es/subscription-manager.mjs
var SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(handler) {
		addUniqueItem(this.subscriptions, handler);
		return () => removeItem(this.subscriptions, handler);
	}
	notify(a, b, c) {
		const numSubscriptions = this.subscriptions.length;
		if (!numSubscriptions) return;
		if (numSubscriptions === 1)
 /**
		* If there's only a single handler we can just call it without invoking a loop.
		*/
		this.subscriptions[0](a, b, c);
		else for (let i = 0; i < numSubscriptions; i++) {
			/**
			* Check whether the handler exists before firing as it's possible
			* the subscriptions were modified during this loop running.
			*/
			const handler = this.subscriptions[i];
			handler && handler(a, b, c);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
};
//#endregion
//#region node_modules/motion-utils/dist/es/time-conversion.mjs
/**
* Converts seconds to milliseconds
*
* @param seconds - Time in seconds.
* @return milliseconds - Converted time in milliseconds.
*/
const secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
const millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;
//#endregion
//#region node_modules/motion-utils/dist/es/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
	return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}
//#endregion
//#region node_modules/motion-utils/dist/es/warn-once.mjs
const warned = /* @__PURE__ */ new Set();
function warnOnce(condition, message, errorCode) {
	if (condition || warned.has(message)) return;
	console.warn(formatErrorMessage(message, errorCode));
	warned.add(message);
}
//#endregion
//#region node_modules/motion-utils/dist/es/wrap.mjs
const wrap = (min, max, v) => {
	const rangeSize = max - min;
	return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};
//#endregion
//#region node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
const calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
const subdivisionPrecision = 1e-7;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
	let currentX;
	let currentT;
	let i = 0;
	do {
		currentT = lowerBound + (upperBound - lowerBound) / 2;
		currentX = calcBezier(currentT, mX1, mX2) - x;
		if (currentX > 0) upperBound = currentT;
		else lowerBound = currentT;
	} while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
	return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
	if (mX1 === mY1 && mX2 === mY2) return noop;
	const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
	return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
//#endregion
//#region node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
const mirrorEasing = (easing) => (p) => p <= .5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
//#endregion
//#region node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
const reverseEasing = (easing) => (p) => 1 - easing(1 - p);
//#endregion
//#region node_modules/motion-utils/dist/es/easing/back.mjs
const backOut = /* @__PURE__ */ cubicBezier(.33, 1.53, .69, .99);
const backIn = /* @__PURE__ */ reverseEasing(backOut);
const backInOut = /* @__PURE__ */ mirrorEasing(backIn);
//#endregion
//#region node_modules/motion-utils/dist/es/easing/anticipate.mjs
const anticipate = (p) => p >= 1 ? 1 : (p *= 2) < 1 ? .5 * backIn(p) : .5 * (2 - Math.pow(2, -10 * (p - 1)));
//#endregion
//#region node_modules/motion-utils/dist/es/easing/circ.mjs
const circIn = (p) => 1 - Math.sin(Math.acos(p));
const circOut = reverseEasing(circIn);
const circInOut = mirrorEasing(circIn);
//#endregion
//#region node_modules/motion-utils/dist/es/easing/ease.mjs
const easeIn = /* @__PURE__ */ cubicBezier(.42, 0, 1, 1);
const easeOut = /* @__PURE__ */ cubicBezier(0, 0, .58, 1);
const easeInOut = /* @__PURE__ */ cubicBezier(.42, 0, .58, 1);
//#endregion
//#region node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
const isEasingArray = (ease) => {
	return Array.isArray(ease) && typeof ease[0] !== "number";
};
//#endregion
//#region node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs
function getEasingForSegment(easing, i) {
	return isEasingArray(easing) ? easing[wrap(0, easing.length, i)] : easing;
}
//#endregion
//#region node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
const isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";
//#endregion
//#region node_modules/motion-utils/dist/es/easing/utils/map.mjs
const easingLookup = {
	linear: noop,
	easeIn,
	easeInOut,
	easeOut,
	circIn,
	circInOut,
	circOut,
	backIn,
	backInOut,
	backOut,
	anticipate
};
const isValidEasing = (easing) => {
	return typeof easing === "string";
};
const easingDefinitionToFunction = (definition) => {
	if (isBezierDefinition(definition)) {
		invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
		const [x1, y1, x2, y2] = definition;
		return cubicBezier(x1, y1, x2, y2);
	} else if (isValidEasing(definition)) {
		invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`, "invalid-easing-type");
		return easingLookup[definition];
	}
	return definition;
};
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/order.mjs
const stepsOrder = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
];
//#endregion
//#region node_modules/motion-dom/dist/es/stats/buffer.mjs
const statsBuffer = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function createRenderStep(runNextFrame, stepName) {
	/**
	* We create and reuse two queues, one to queue jobs for the current frame
	* and one for the next. We reuse to avoid triggering GC after x frames.
	*/
	let thisFrame = /* @__PURE__ */ new Set();
	let nextFrame = /* @__PURE__ */ new Set();
	/**
	* Track whether we're currently processing jobs in this step. This way
	* we can decide whether to schedule new jobs for this frame or next.
	*/
	let isProcessing = false;
	let flushNextFrame = false;
	/**
	* A set of processes which were marked keepAlive when scheduled.
	*/
	const toKeepAlive = /* @__PURE__ */ new WeakSet();
	let latestFrameData = {
		delta: 0,
		timestamp: 0,
		isProcessing: false
	};
	let numCalls = 0;
	function triggerCallback(callback) {
		if (toKeepAlive.has(callback)) {
			step.schedule(callback);
			runNextFrame();
		}
		numCalls++;
		callback(latestFrameData);
	}
	const step = {
		schedule: (callback, keepAlive = false, immediate = false) => {
			const queue = immediate && isProcessing ? thisFrame : nextFrame;
			if (keepAlive) toKeepAlive.add(callback);
			queue.add(callback);
			return callback;
		},
		cancel: (callback) => {
			nextFrame.delete(callback);
			toKeepAlive.delete(callback);
		},
		process: (frameData) => {
			latestFrameData = frameData;
			/**
			* If we're already processing we've probably been triggered by a flushSync
			* inside an existing process. Instead of executing, mark flushNextFrame
			* as true and ensure we flush the following frame at the end of this one.
			*/
			if (isProcessing) {
				flushNextFrame = true;
				return;
			}
			isProcessing = true;
			const prevFrame = thisFrame;
			thisFrame = nextFrame;
			nextFrame = prevFrame;
			thisFrame.forEach(triggerCallback);
			/**
			* If we're recording stats then
			*/
			if (stepName && statsBuffer.value) statsBuffer.value.frameloop[stepName].push(numCalls);
			numCalls = 0;
			thisFrame.clear();
			isProcessing = false;
			if (flushNextFrame) {
				flushNextFrame = false;
				step.process(frameData);
			}
		}
	};
	return step;
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/batcher.mjs
const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
	let runNextFrame = false;
	let useDefaultElapsed = true;
	const state = {
		delta: 0,
		timestamp: 0,
		isProcessing: false
	};
	const flagRunNextFrame = () => runNextFrame = true;
	const steps = stepsOrder.reduce((acc, key) => {
		acc[key] = createRenderStep(flagRunNextFrame, allowKeepAlive ? key : void 0);
		return acc;
	}, {});
	const { setup, read, resolveKeyframes, preUpdate, update, preRender, render, postRender } = steps;
	const processBatch = () => {
		const useManualTiming = MotionGlobalConfig.useManualTiming;
		const timestamp = useManualTiming ? state.timestamp : performance.now();
		runNextFrame = false;
		if (!useManualTiming) state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
		state.timestamp = timestamp;
		state.isProcessing = true;
		setup.process(state);
		read.process(state);
		resolveKeyframes.process(state);
		preUpdate.process(state);
		update.process(state);
		preRender.process(state);
		render.process(state);
		postRender.process(state);
		state.isProcessing = false;
		if (runNextFrame && allowKeepAlive) {
			useDefaultElapsed = false;
			scheduleNextBatch(processBatch);
		}
	};
	const wake = () => {
		runNextFrame = true;
		useDefaultElapsed = true;
		if (!state.isProcessing) scheduleNextBatch(processBatch);
	};
	const schedule = stepsOrder.reduce((acc, key) => {
		const step = steps[key];
		acc[key] = (process, keepAlive = false, immediate = false) => {
			if (!runNextFrame) wake();
			return step.schedule(process, keepAlive, immediate);
		};
		return acc;
	}, {});
	const cancel = (process) => {
		for (let i = 0; i < stepsOrder.length; i++) steps[stepsOrder[i]].cancel(process);
	};
	return {
		schedule,
		cancel,
		state,
		steps
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/frame.mjs
const { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/sync-time.mjs
let now;
function clearTime() {
	now = void 0;
}
/**
* An eventloop-synchronous alternative to performance.now().
*
* Ensures that time measurements remain consistent within a synchronous context.
* Usually calling performance.now() twice within the same synchronous context
* will return different values which isn't useful for animations when we're usually
* trying to sync animations to the same frame.
*/
const time = {
	now: () => {
		if (now === void 0) time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
		return now;
	},
	set: (newTime) => {
		now = newTime;
		queueMicrotask(clearTime);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/stats/animation-count.mjs
const activeAnimations = {
	layout: 0,
	mainThread: 0,
	waapi: 0
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
const checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
const isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--");
const startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--");
const isCSSVariableToken = (value) => {
	if (!startsAsVariableToken(value)) return false;
	return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
const singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
/**
* Check if a value contains a CSS variable anywhere (e.g. inside calc()).
* Unlike isCSSVariableToken which checks if the value IS a var() token,
* this checks if the value CONTAINS var() somewhere in the string.
*/
function containsCSSVariable(value) {
	if (typeof value !== "string") return false;
	return value.split("/*")[0].includes("var(--");
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
const number = {
	test: (v) => typeof v === "number",
	parse: parseFloat,
	transform: (v) => v
};
const alpha = {
	...number,
	transform: (v) => clamp(0, 1, v)
};
const scale = {
	...number,
	default: 1
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs
const sanitize = (v) => Math.round(v * 1e5) / 1e5;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
const floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function isNullish(v) {
	return v == null;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
const singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/utils.mjs
/**
* Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
* but false if a number or multiple colors
*/
const isColorString = (type, testProp) => (v) => {
	return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
};
const splitColor = (aName, bName, cName) => (v) => {
	if (typeof v !== "string") return v;
	const [a, b, c, alpha] = v.match(floatRegex);
	return {
		[aName]: parseFloat(a),
		[bName]: parseFloat(b),
		[cName]: parseFloat(c),
		alpha: alpha !== void 0 ? parseFloat(alpha) : 1
	};
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/rgba.mjs
const clampRgbUnit = (v) => clamp(0, 255, v);
const rgbUnit = {
	...number,
	transform: (v) => Math.round(clampRgbUnit(v))
};
const rgba = {
	test: /* @__PURE__ */ isColorString("rgb", "red"),
	parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
	transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function parseHex(v) {
	let r = "";
	let g = "";
	let b = "";
	let a = "";
	if (v.length > 5) {
		r = v.substring(1, 3);
		g = v.substring(3, 5);
		b = v.substring(5, 7);
		a = v.substring(7, 9);
	} else {
		r = v.substring(1, 2);
		g = v.substring(2, 3);
		b = v.substring(3, 4);
		a = v.substring(4, 5);
		r += r;
		g += g;
		b += b;
		a += a;
	}
	return {
		red: parseInt(r, 16),
		green: parseInt(g, 16),
		blue: parseInt(b, 16),
		alpha: a ? parseInt(a, 16) / 255 : 1
	};
}
const hex = {
	test: /* @__PURE__ */ isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/numbers/units.mjs
const createUnitType = /* @__NO_SIDE_EFFECTS__ */ (unit) => ({
	test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
	parse: parseFloat,
	transform: (v) => `${v}${unit}`
});
const degrees = /* @__PURE__ */ createUnitType("deg");
const percent = /* @__PURE__ */ createUnitType("%");
const px = /* @__PURE__ */ createUnitType("px");
const vh = /* @__PURE__ */ createUnitType("vh");
const vw = /* @__PURE__ */ createUnitType("vw");
const progressPercentage = {
	...percent,
	parse: (v) => percent.parse(v) / 100,
	transform: (v) => percent.transform(v * 100)
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hsla.mjs
const hsla = {
	test: /* @__PURE__ */ isColorString("hsl", "hue"),
	parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
		return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/index.mjs
const color = {
	test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
	parse: (v) => {
		if (rgba.test(v)) return rgba.parse(v);
		else if (hsla.test(v)) return hsla.parse(v);
		else return hex.parse(v);
	},
	transform: (v) => {
		return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
	},
	getAnimatableNone: (v) => {
		const parsed = color.parse(v);
		parsed.alpha = 0;
		return color.transform(parsed);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs
const colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function test(v) {
	return isNaN(v) && typeof v === "string" && (v.match(floatRegex)?.length || 0) + (v.match(colorRegex)?.length || 0) > 0;
}
const NUMBER_TOKEN = "number";
const COLOR_TOKEN = "color";
const VAR_TOKEN = "var";
const VAR_FUNCTION_TOKEN = "var(";
const SPLIT_TOKEN = "${}";
const complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
	const originalValue = value.toString();
	const values = [];
	const indexes = {
		color: [],
		number: [],
		var: []
	};
	const types = [];
	let i = 0;
	return {
		values,
		split: originalValue.replace(complexRegex, (parsedValue) => {
			if (color.test(parsedValue)) {
				indexes.color.push(i);
				types.push(COLOR_TOKEN);
				values.push(color.parse(parsedValue));
			} else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
				indexes.var.push(i);
				types.push(VAR_TOKEN);
				values.push(parsedValue);
			} else {
				indexes.number.push(i);
				types.push(NUMBER_TOKEN);
				values.push(parseFloat(parsedValue));
			}
			++i;
			return SPLIT_TOKEN;
		}).split(SPLIT_TOKEN),
		indexes,
		types
	};
}
function parseComplexValue(v) {
	return analyseComplexValue(v).values;
}
function buildTransformer({ split, types }) {
	const numSections = split.length;
	return (v) => {
		let output = "";
		for (let i = 0; i < numSections; i++) {
			output += split[i];
			if (v[i] !== void 0) {
				const type = types[i];
				if (type === NUMBER_TOKEN) output += sanitize(v[i]);
				else if (type === COLOR_TOKEN) output += color.transform(v[i]);
				else output += v[i];
			}
		}
		return output;
	};
}
function createTransformer(source) {
	return buildTransformer(analyseComplexValue(source));
}
const convertNumbersToZero = (v) => typeof v === "number" ? 0 : color.test(v) ? color.getAnimatableNone(v) : v;
/**
* Convert a parsed value to its zero equivalent, but preserve numbers
* that act as divisors in CSS calc() expressions.
*
* analyseComplexValue extracts numbers from CSS strings and puts the
* surrounding text into a `split` template array. For example:
*   "calc(var(--gap) / 5)"  →  values: [var(--gap), 5]
*                               split:  ["calc(", " / ", ")"]
*
* When building a zero-equivalent for animation, naively zeroing all
* numbers turns the divisor into 0 → "calc(var(--gap) / 0)" → NaN.
* We detect this by checking whether the text preceding a number
* (split[i]) ends with "/" — the CSS calc division operator.
*/
const convertToZero = (value, splitBefore) => {
	if (typeof value === "number") return splitBefore?.trim().endsWith("/") ? value : 0;
	return convertNumbersToZero(value);
};
function getAnimatableNone$1(v) {
	const info = analyseComplexValue(v);
	return buildTransformer(info)(info.values.map((value, i) => convertToZero(value, info.split[i])));
}
const complex = {
	test,
	parse: parseComplexValue,
	createTransformer,
	getAnimatableNone: getAnimatableNone$1
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
	hue /= 360;
	saturation /= 100;
	lightness /= 100;
	let red = 0;
	let green = 0;
	let blue = 0;
	if (!saturation) red = green = blue = lightness;
	else {
		const q = lightness < .5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
		const p = 2 * lightness - q;
		red = hueToRgb(p, q, hue + 1 / 3);
		green = hueToRgb(p, q, hue);
		blue = hueToRgb(p, q, hue - 1 / 3);
	}
	return {
		red: Math.round(red * 255),
		green: Math.round(green * 255),
		blue: Math.round(blue * 255),
		alpha
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function mixImmediate(a, b) {
	return (p) => p > 0 ? b : a;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/number.mjs
const mixNumber$1 = (from, to, progress) => {
	return from + (to - from) * progress;
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/color.mjs
const mixLinearColor = (from, to, v) => {
	const fromExpo = from * from;
	const expo = v * (to * to - fromExpo) + fromExpo;
	return expo < 0 ? 0 : Math.sqrt(expo);
};
const colorTypes = [
	hex,
	rgba,
	hsla
];
const getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color) {
	const type = getColorType(color);
	warning(Boolean(type), `'${color}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable");
	if (!Boolean(type)) return false;
	let model = type.parse(color);
	if (type === hsla) model = hslaToRgba(model);
	return model;
}
const mixColor = (from, to) => {
	const fromRGBA = asRGBA(from);
	const toRGBA = asRGBA(to);
	if (!fromRGBA || !toRGBA) return mixImmediate(from, to);
	const blended = { ...fromRGBA };
	return (v) => {
		blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
		blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
		blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
		blended.alpha = mixNumber$1(fromRGBA.alpha, toRGBA.alpha, v);
		return rgba.transform(blended);
	};
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/visibility.mjs
const invisibleValues = new Set(["none", "hidden"]);
/**
* Returns a function that, when provided a progress value between 0 and 1,
* will return the "none" or "hidden" string only when the progress is that of
* the origin or target.
*/
function mixVisibility(origin, target) {
	if (invisibleValues.has(origin)) return (p) => p <= 0 ? origin : target;
	else return (p) => p >= 1 ? target : origin;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function mixNumber(a, b) {
	return (p) => mixNumber$1(a, b, p);
}
function getMixer(a) {
	if (typeof a === "number") return mixNumber;
	else if (typeof a === "string") return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
	else if (Array.isArray(a)) return mixArray;
	else if (typeof a === "object") return color.test(a) ? mixColor : mixObject;
	return mixImmediate;
}
function mixArray(a, b) {
	const output = [...a];
	const numValues = output.length;
	const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
	return (p) => {
		for (let i = 0; i < numValues; i++) output[i] = blendValue[i](p);
		return output;
	};
}
function mixObject(a, b) {
	const output = {
		...a,
		...b
	};
	const blendValue = {};
	for (const key in output) if (a[key] !== void 0 && b[key] !== void 0) blendValue[key] = getMixer(a[key])(a[key], b[key]);
	return (v) => {
		for (const key in blendValue) output[key] = blendValue[key](v);
		return output;
	};
}
function matchOrder(origin, target) {
	const orderedOrigin = [];
	const pointers = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < target.values.length; i++) {
		const type = target.types[i];
		const originIndex = origin.indexes[type][pointers[type]];
		orderedOrigin[i] = origin.values[originIndex] ?? 0;
		pointers[type]++;
	}
	return orderedOrigin;
}
const mixComplex = (origin, target) => {
	const template = complex.createTransformer(target);
	const originStats = analyseComplexValue(origin);
	const targetStats = analyseComplexValue(target);
	if (originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length) {
		if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) return mixVisibility(origin, target);
		return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
	} else {
		warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different");
		return mixImmediate(origin, target);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/index.mjs
function mix(from, to, p) {
	if (typeof from === "number" && typeof to === "number" && typeof p === "number") return mixNumber$1(from, to, p);
	return getMixer(from)(from, to);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
const frameloopDriver = (update) => {
	const passTimestamp = ({ timestamp }) => update(timestamp);
	return {
		start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
		stop: () => cancelFrame(passTimestamp),
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
const generateLinearEasing = (easing, duration, resolution = 10) => {
	let points = "";
	const numPoints = Math.max(Math.round(duration / resolution), 2);
	for (let i = 0; i < numPoints; i++) points += Math.round(easing(i / (numPoints - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${points.substring(0, points.length - 2)})`;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
/**
* Implement a practical max duration for keyframe generation
* to prevent infinite loops
*/
const maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
	let duration = 0;
	const timeStep = 50;
	let state = generator.next(duration);
	while (!state.done && duration < 2e4) {
		duration += timeStep;
		state = generator.next(duration);
	}
	return duration >= 2e4 ? Infinity : duration;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
/**
* Create a progress => progress easing function from a generator.
*/
function createGeneratorEasing(options, scale = 100, createGenerator) {
	const generator = createGenerator({
		...options,
		keyframes: [0, scale]
	});
	const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
	return {
		type: "keyframes",
		ease: (progress) => {
			return generator.next(duration * progress).value / scale;
		},
		duration: /* @__PURE__ */ millisecondsToSeconds(duration)
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/spring.mjs
const springDefaults = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
};
function calcAngularFreq(undampedFreq, dampingRatio) {
	return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
	let result = initialGuess;
	for (let i = 1; i < rootIterations; i++) result = result - envelope(result) / derivative(result);
	return result;
}
/**
* This is ported from the Framer implementation of duration-based spring resolution.
*/
const safeMin = .001;
function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
	let envelope;
	let derivative;
	warning(duration <= /* @__PURE__ */ secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let dampingRatio = 1 - bounce;
	/**
	* Restrict dampingRatio and duration to within acceptable ranges.
	*/
	dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
	duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(duration));
	if (dampingRatio < 1) {
		/**
		* Underdamped spring
		*/
		envelope = (undampedFreq) => {
			const exponentialDecay = undampedFreq * dampingRatio;
			const delta = exponentialDecay * duration;
			const a = exponentialDecay - velocity;
			const b = calcAngularFreq(undampedFreq, dampingRatio);
			const c = Math.exp(-delta);
			return safeMin - a / b * c;
		};
		derivative = (undampedFreq) => {
			const delta = undampedFreq * dampingRatio * duration;
			const d = delta * velocity + velocity;
			const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
			const f = Math.exp(-delta);
			const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
			return (-envelope(undampedFreq) + safeMin > 0 ? -1 : 1) * ((d - e) * f) / g;
		};
	} else {
		/**
		* Critically-damped spring
		*/
		envelope = (undampedFreq) => {
			const a = Math.exp(-undampedFreq * duration);
			const b = (undampedFreq - velocity) * duration + 1;
			return -safeMin + a * b;
		};
		derivative = (undampedFreq) => {
			return Math.exp(-undampedFreq * duration) * ((velocity - undampedFreq) * (duration * duration));
		};
	}
	const initialGuess = 5 / duration;
	const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
	duration = /* @__PURE__ */ secondsToMilliseconds(duration);
	if (isNaN(undampedFreq)) return {
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		duration
	};
	else {
		const stiffness = Math.pow(undampedFreq, 2) * mass;
		return {
			stiffness,
			damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
			duration
		};
	}
}
const durationKeys = ["duration", "bounce"];
const physicsKeys = [
	"stiffness",
	"damping",
	"mass"
];
function isSpringType(options, keys) {
	return keys.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
	let springOptions = {
		velocity: springDefaults.velocity,
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		mass: springDefaults.mass,
		isResolvedFromDuration: false,
		...options
	};
	if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
		springOptions.velocity = 0;
		if (options.visualDuration) {
			const visualDuration = options.visualDuration;
			const root = 2 * Math.PI / (visualDuration * 1.2);
			const stiffness = root * root;
			const damping = 2 * clamp(.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
			springOptions = {
				...springOptions,
				mass: springDefaults.mass,
				stiffness,
				damping
			};
		} else {
			const derived = findSpring({
				...options,
				velocity: 0
			});
			springOptions = {
				...springOptions,
				...derived,
				mass: springDefaults.mass
			};
			springOptions.isResolvedFromDuration = true;
		}
	}
	return springOptions;
}
function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
	const options = typeof optionsOrVisualDuration !== "object" ? {
		visualDuration: optionsOrVisualDuration,
		keyframes: [0, 1],
		bounce
	} : optionsOrVisualDuration;
	let { restSpeed, restDelta } = options;
	const origin = options.keyframes[0];
	const target = options.keyframes[options.keyframes.length - 1];
	/**
	* This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
	* to reduce GC during animation.
	*/
	const state = {
		done: false,
		value: origin
	};
	const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
		...options,
		velocity: -/* @__PURE__ */ millisecondsToSeconds(options.velocity || 0)
	});
	const initialVelocity = velocity || 0;
	const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
	const initialDelta = target - origin;
	const undampedAngularFreq = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(stiffness / mass));
	/**
	* If we're working on a granular scale, use smaller defaults for determining
	* when the spring is finished.
	*
	* These defaults have been selected emprically based on what strikes a good
	* ratio between feeling good and finishing as soon as changes are imperceptible.
	*/
	const isGranularScale = Math.abs(initialDelta) < 5;
	restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
	restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
	let resolveSpring;
	let resolveVelocity;
	let angularFreq;
	let A;
	let sinCoeff;
	let cosCoeff;
	if (dampingRatio < 1) {
		angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
		A = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq;
		resolveSpring = (t) => {
			return target - Math.exp(-dampingRatio * undampedAngularFreq * t) * (A * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
		};
		sinCoeff = dampingRatio * undampedAngularFreq * A + initialDelta * angularFreq;
		cosCoeff = dampingRatio * undampedAngularFreq * initialDelta - A * angularFreq;
		resolveVelocity = (t) => {
			return Math.exp(-dampingRatio * undampedAngularFreq * t) * (sinCoeff * Math.sin(angularFreq * t) + cosCoeff * Math.cos(angularFreq * t));
		};
	} else if (dampingRatio === 1) {
		resolveSpring = (t) => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
		const C = initialVelocity + undampedAngularFreq * initialDelta;
		resolveVelocity = (t) => Math.exp(-undampedAngularFreq * t) * (undampedAngularFreq * C * t - initialVelocity);
	} else {
		const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
		resolveSpring = (t) => {
			const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
			const freqForT = Math.min(dampedAngularFreq * t, 300);
			return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
		};
		const P = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / dampedAngularFreq;
		const sinhCoeff = dampingRatio * undampedAngularFreq * P - initialDelta * dampedAngularFreq;
		const coshCoeff = dampingRatio * undampedAngularFreq * initialDelta - P * dampedAngularFreq;
		resolveVelocity = (t) => {
			const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
			const freqForT = Math.min(dampedAngularFreq * t, 300);
			return envelope * (sinhCoeff * Math.sinh(freqForT) + coshCoeff * Math.cosh(freqForT));
		};
	}
	const generator = {
		calculatedDuration: isResolvedFromDuration ? duration || null : null,
		velocity: (t) => /* @__PURE__ */ secondsToMilliseconds(resolveVelocity(t)),
		next: (t) => {
			/**
			* For underdamped physics springs we need both position and
			* velocity each tick. Compute shared trig values once to avoid
			* duplicate Math.exp/sin/cos calls on the hot path.
			*/
			if (!isResolvedFromDuration && dampingRatio < 1) {
				const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
				const sin = Math.sin(angularFreq * t);
				const cos = Math.cos(angularFreq * t);
				const current = target - envelope * (A * sin + initialDelta * cos);
				const currentVelocity = /* @__PURE__ */ secondsToMilliseconds(envelope * (sinCoeff * sin + cosCoeff * cos));
				state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current) <= restDelta;
				state.value = state.done ? target : current;
				return state;
			}
			const current = resolveSpring(t);
			if (!isResolvedFromDuration) {
				const currentVelocity = /* @__PURE__ */ secondsToMilliseconds(resolveVelocity(t));
				state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current) <= restDelta;
			} else state.done = t >= duration;
			state.value = state.done ? target : current;
			return state;
		},
		toString: () => {
			const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
			const easing = generateLinearEasing((progress) => generator.next(calculatedDuration * progress).value, calculatedDuration, 30);
			return calculatedDuration + "ms " + easing;
		},
		toTransition: () => {}
	};
	return generator;
}
spring.applyToOptions = (options) => {
	const generatorOptions = createGeneratorEasing(options, 100, spring);
	options.ease = generatorOptions.ease;
	options.duration = /* @__PURE__ */ secondsToMilliseconds(generatorOptions.duration);
	options.type = "keyframes";
	return options;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
const velocitySampleDuration = 5;
function getGeneratorVelocity(resolveValue, t, current) {
	const prevT = Math.max(t - velocitySampleDuration, 0);
	return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function inertia({ keyframes, velocity = 0, power = .8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = .5, restSpeed }) {
	const origin = keyframes[0];
	const state = {
		done: false,
		value: origin
	};
	const isOutOfBounds = (v) => min !== void 0 && v < min || max !== void 0 && v > max;
	const nearestBoundary = (v) => {
		if (min === void 0) return max;
		if (max === void 0) return min;
		return Math.abs(min - v) < Math.abs(max - v) ? min : max;
	};
	let amplitude = power * velocity;
	const ideal = origin + amplitude;
	const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
	/**
	* If the target has changed we need to re-calculate the amplitude, otherwise
	* the animation will start from the wrong position.
	*/
	if (target !== ideal) amplitude = target - origin;
	const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
	const calcLatest = (t) => target + calcDelta(t);
	const applyFriction = (t) => {
		const delta = calcDelta(t);
		const latest = calcLatest(t);
		state.done = Math.abs(delta) <= restDelta;
		state.value = state.done ? target : latest;
	};
	/**
	* Ideally this would resolve for t in a stateless way, we could
	* do that by always precalculating the animation but as we know
	* this will be done anyway we can assume that spring will
	* be discovered during that.
	*/
	let timeReachedBoundary;
	let spring$1;
	const checkCatchBoundary = (t) => {
		if (!isOutOfBounds(state.value)) return;
		timeReachedBoundary = t;
		spring$1 = spring({
			keyframes: [state.value, nearestBoundary(state.value)],
			velocity: getGeneratorVelocity(calcLatest, t, state.value),
			damping: bounceDamping,
			stiffness: bounceStiffness,
			restDelta,
			restSpeed
		});
	};
	checkCatchBoundary(0);
	return {
		calculatedDuration: null,
		next: (t) => {
			/**
			* We need to resolve the friction to figure out if we need a
			* spring but we don't want to do this twice per frame. So here
			* we flag if we updated for this frame and later if we did
			* we can skip doing it again.
			*/
			let hasUpdatedFrame = false;
			if (!spring$1 && timeReachedBoundary === void 0) {
				hasUpdatedFrame = true;
				applyFriction(t);
				checkCatchBoundary(t);
			}
			/**
			* If we have a spring and the provided t is beyond the moment the friction
			* animation crossed the min/max boundary, use the spring.
			*/
			if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) return spring$1.next(t - timeReachedBoundary);
			else {
				!hasUpdatedFrame && applyFriction(t);
				return state;
			}
		}
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/interpolate.mjs
function createMixers(output, ease, customMixer) {
	const mixers = [];
	const mixerFactory = customMixer || MotionGlobalConfig.mix || mix;
	const numMixers = output.length - 1;
	for (let i = 0; i < numMixers; i++) {
		let mixer = mixerFactory(output[i], output[i + 1]);
		if (ease) mixer = pipe(Array.isArray(ease) ? ease[i] || noop : ease, mixer);
		mixers.push(mixer);
	}
	return mixers;
}
/**
* Create a function that maps from a numerical input array to a generic output array.
*
* Accepts:
*   - Numbers
*   - Colors (hex, hsl, hsla, rgb, rgba)
*   - Complex (combinations of one or more numbers or strings)
*
* ```jsx
* const mixColor = interpolate([0, 1], ['#fff', '#000'])
*
* mixColor(0.5) // 'rgba(128, 128, 128, 1)'
* ```
*
* TODO Revisit this approach once we've moved to data models for values,
* probably not needed to pregenerate mixer functions.
*
* @public
*/
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
	const inputLength = input.length;
	invariant(inputLength === output.length, "Both input and output ranges must be the same length", "range-length");
	/**
	* If we're only provided a single input, we can just make a function
	* that returns the output.
	*/
	if (inputLength === 1) return () => output[0];
	if (inputLength === 2 && output[0] === output[1]) return () => output[1];
	const isZeroDeltaRange = input[0] === input[1];
	if (input[0] > input[inputLength - 1]) {
		input = [...input].reverse();
		output = [...output].reverse();
	}
	const mixers = createMixers(output, ease, mixer);
	const numMixers = mixers.length;
	const interpolator = (v) => {
		if (isZeroDeltaRange && v < input[0]) return output[0];
		let i = 0;
		if (numMixers > 1) {
			for (; i < input.length - 2; i++) if (v < input[i + 1]) break;
		}
		const progressInRange = /* @__PURE__ */ progress(input[i], input[i + 1], v);
		return mixers[i](progressInRange);
	};
	return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function fillOffset(offset, remaining) {
	const min = offset[offset.length - 1];
	for (let i = 1; i <= remaining; i++) {
		const offsetProgress = /* @__PURE__ */ progress(0, remaining, i);
		offset.push(mixNumber$1(min, 1, offsetProgress));
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function defaultOffset(arr) {
	const offset = [0];
	fillOffset(offset, arr.length - 1);
	return offset;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
	return offset.map((o) => o * duration);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
	return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut" }) {
	/**
	* Easing functions can be externally defined as strings. Here we convert them
	* into actual functions.
	*/
	const easingFunctions = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
	/**
	* This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
	* to reduce GC during animation.
	*/
	const state = {
		done: false,
		value: keyframeValues[0]
	};
	const mapTimeToKeyframe = interpolate(convertOffsetToTimes(times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration), keyframeValues, { ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions) });
	return {
		calculatedDuration: duration,
		next: (t) => {
			state.value = mapTimeToKeyframe(t);
			state.done = t >= duration;
			return state;
		}
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
const isNotNull = (value) => value !== null;
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
	const resolvedKeyframes = keyframes.filter(isNotNull);
	const index = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
	return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
const transitionTypeMap = {
	decay: inertia,
	inertia,
	tween: keyframes,
	keyframes,
	spring
};
function replaceTransitionType(transition) {
	if (typeof transition.type === "string") transition.type = transitionTypeMap[transition.type];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var WithPromise = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((resolve) => {
			this.resolve = resolve;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	/**
	* Allows the animation to be awaited.
	*
	* @deprecated Use `finished` instead.
	*/
	then(onResolve, onReject) {
		return this.finished.then(onResolve, onReject);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/JSAnimation.mjs
const percentToProgress = (percent) => percent / 100;
var JSAnimation = class extends WithPromise {
	constructor(options) {
		super();
		this.state = "idle";
		this.startTime = null;
		this.isStopped = false;
		/**
		* The current time of the animation.
		*/
		this.currentTime = 0;
		/**
		* The time at which the animation was paused.
		*/
		this.holdTime = null;
		/**
		* Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
		*/
		this.playbackSpeed = 1;
		/**
		* Reusable state object for the delay phase to avoid
		* allocating a new object every frame.
		*/
		this.delayState = {
			done: false,
			value: void 0
		};
		/**
		* This method is bound to the instance to fix a pattern where
		* animation.stop is returned as a reference from a useEffect.
		*/
		this.stop = () => {
			const { motionValue } = this.options;
			if (motionValue && motionValue.updatedAt !== time.now()) this.tick(time.now());
			this.isStopped = true;
			if (this.state === "idle") return;
			this.teardown();
			this.options.onStop?.();
		};
		activeAnimations.mainThread++;
		this.options = options;
		this.initAnimation();
		this.play();
		if (options.autoplay === false) this.pause();
	}
	initAnimation() {
		const { options } = this;
		replaceTransitionType(options);
		const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
		let { keyframes: keyframes$1 } = options;
		const generatorFactory = type || keyframes;
		if (generatorFactory !== keyframes) invariant(keyframes$1.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`, "spring-two-frames");
		if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
			this.mixKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
			keyframes$1 = [0, 100];
		}
		const generator = generatorFactory({
			...options,
			keyframes: keyframes$1
		});
		/**
		* If we have a mirror repeat type we need to create a second generator that outputs the
		* mirrored (not reversed) animation and later ping pong between the two generators.
		*/
		if (repeatType === "mirror") this.mirroredGenerator = generatorFactory({
			...options,
			keyframes: [...keyframes$1].reverse(),
			velocity: -velocity
		});
		/**
		* If duration is undefined and we have repeat options,
		* we need to calculate a duration from the generator.
		*
		* We set it to the generator itself to cache the duration.
		* Any timeline resolver will need to have already precalculated
		* the duration by this step.
		*/
		if (generator.calculatedDuration === null) generator.calculatedDuration = calcGeneratorDuration(generator);
		const { calculatedDuration } = generator;
		this.calculatedDuration = calculatedDuration;
		this.resolvedDuration = calculatedDuration + repeatDelay;
		this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
		this.generator = generator;
	}
	updateTime(timestamp) {
		const animationTime = Math.round(timestamp - this.startTime) * this.playbackSpeed;
		if (this.holdTime !== null) this.currentTime = this.holdTime;
		else this.currentTime = animationTime;
	}
	tick(timestamp, sample = false) {
		const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration, calculatedDuration } = this;
		if (this.startTime === null) return generator.next(0);
		const { delay = 0, keyframes, repeat, repeatType, repeatDelay, type, onUpdate, finalKeyframe } = this.options;
		/**
		* requestAnimationFrame timestamps can come through as lower than
		* the startTime as set by performance.now(). Here we prevent this,
		* though in the future it could be possible to make setting startTime
		* a pending operation that gets resolved here.
		*/
		if (this.speed > 0) this.startTime = Math.min(this.startTime, timestamp);
		else if (this.speed < 0) this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
		if (sample) this.currentTime = timestamp;
		else this.updateTime(timestamp);
		const timeWithoutDelay = this.currentTime - delay * (this.playbackSpeed >= 0 ? 1 : -1);
		const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
		this.currentTime = Math.max(timeWithoutDelay, 0);
		if (this.state === "finished" && this.holdTime === null) this.currentTime = totalDuration;
		let elapsed = this.currentTime;
		let frameGenerator = generator;
		if (repeat) {
			/**
			* Get the current progress (0-1) of the animation. If t is >
			* than duration we'll get values like 2.5 (midway through the
			* third iteration)
			*/
			const progress = Math.min(this.currentTime, totalDuration) / resolvedDuration;
			/**
			* Get the current iteration (0 indexed). For instance the floor of
			* 2.5 is 2.
			*/
			let currentIteration = Math.floor(progress);
			/**
			* Get the current progress of the iteration by taking the remainder
			* so 2.5 is 0.5 through iteration 2
			*/
			let iterationProgress = progress % 1;
			/**
			* If iteration progress is 1 we count that as the end
			* of the previous iteration.
			*/
			if (!iterationProgress && progress >= 1) iterationProgress = 1;
			iterationProgress === 1 && currentIteration--;
			currentIteration = Math.min(currentIteration, repeat + 1);
			if (Boolean(currentIteration % 2)) {
				if (repeatType === "reverse") {
					iterationProgress = 1 - iterationProgress;
					if (repeatDelay) iterationProgress -= repeatDelay / resolvedDuration;
				} else if (repeatType === "mirror") frameGenerator = mirroredGenerator;
			}
			elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
		}
		/**
		* If we're in negative time, set state as the initial keyframe.
		* This prevents delay: x, duration: 0 animations from finishing
		* instantly.
		*/
		let state;
		if (isInDelayPhase) {
			this.delayState.value = keyframes[0];
			state = this.delayState;
		} else state = frameGenerator.next(elapsed);
		if (mixKeyframes && !isInDelayPhase) state.value = mixKeyframes(state.value);
		let { done } = state;
		if (!isInDelayPhase && calculatedDuration !== null) done = this.playbackSpeed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
		const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
		if (isAnimationFinished && type !== inertia) state.value = getFinalKeyframe(keyframes, this.options, finalKeyframe, this.speed);
		if (onUpdate) onUpdate(state.value);
		if (isAnimationFinished) this.finish();
		return state;
	}
	/**
	* Allows the returned animation to be awaited or promise-chained. Currently
	* resolves when the animation finishes at all but in a future update could/should
	* reject if its cancels.
	*/
	then(resolve, reject) {
		return this.finished.then(resolve, reject);
	}
	get duration() {
		return /* @__PURE__ */ millisecondsToSeconds(this.calculatedDuration);
	}
	get iterationDuration() {
		const { delay = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(delay);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	set time(newTime) {
		newTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
		this.currentTime = newTime;
		if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) this.holdTime = newTime;
		else if (this.driver) this.startTime = this.driver.now() - newTime / this.playbackSpeed;
		if (this.driver) this.driver.start(false);
		else {
			this.startTime = 0;
			this.state = "paused";
			this.holdTime = newTime;
			this.tick(newTime);
		}
	}
	/**
	* Returns the generator's velocity at the current time in units/second.
	* Uses the analytical derivative when available (springs), avoiding
	* the MotionValue's frame-dependent velocity estimation.
	*/
	getGeneratorVelocity() {
		const t = this.currentTime;
		if (t <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(t);
		const current = this.generator.next(t).value;
		return getGeneratorVelocity((s) => this.generator.next(s).value, t, current);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(newSpeed) {
		const hasChanged = this.playbackSpeed !== newSpeed;
		if (hasChanged && this.driver) this.updateTime(time.now());
		this.playbackSpeed = newSpeed;
		if (hasChanged && this.driver) this.time = /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	play() {
		if (this.isStopped) return;
		const { driver = frameloopDriver, startTime } = this.options;
		if (!this.driver) this.driver = driver((timestamp) => this.tick(timestamp));
		this.options.onPlay?.();
		const now = this.driver.now();
		if (this.state === "finished") {
			this.updateFinished();
			this.startTime = now;
		} else if (this.holdTime !== null) this.startTime = now - this.holdTime;
		else if (!this.startTime) this.startTime = startTime ?? now;
		if (this.state === "finished" && this.speed < 0) this.startTime += this.calculatedDuration;
		this.holdTime = null;
		/**
		* Set playState to running only after we've used it in
		* the previous logic.
		*/
		this.state = "running";
		this.driver.start();
	}
	pause() {
		this.state = "paused";
		this.updateTime(time.now());
		this.holdTime = this.currentTime;
	}
	complete() {
		if (this.state !== "running") this.play();
		this.state = "finished";
		this.holdTime = null;
	}
	finish() {
		this.notifyFinished();
		this.teardown();
		this.state = "finished";
		this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null;
		this.startTime = 0;
		this.tick(0);
		this.teardown();
		this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle";
		this.stopDriver();
		this.startTime = this.holdTime = null;
		activeAnimations.mainThread--;
	}
	stopDriver() {
		if (!this.driver) return;
		this.driver.stop();
		this.driver = void 0;
	}
	sample(sampleTime) {
		this.startTime = 0;
		return this.tick(sampleTime, true);
	}
	attachTimeline(timeline) {
		if (this.options.allowFlatten) {
			this.options.type = "keyframes";
			this.options.ease = "linear";
			this.initAnimation();
		}
		this.driver?.stop();
		return timeline.observe(this);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function fillWildcards(keyframes) {
	for (let i = 1; i < keyframes.length; i++) keyframes[i] ?? (keyframes[i] = keyframes[i - 1]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
const radToDeg = (rad) => rad * 180 / Math.PI;
const rotate = (v) => {
	return rebaseAngle(radToDeg(Math.atan2(v[1], v[0])));
};
const matrix2dParsers = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
	rotate,
	rotateZ: rotate,
	skewX: (v) => radToDeg(Math.atan(v[1])),
	skewY: (v) => radToDeg(Math.atan(v[2])),
	skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2
};
const rebaseAngle = (angle) => {
	angle = angle % 360;
	if (angle < 0) angle += 360;
	return angle;
};
const rotateZ = rotate;
const scaleX = (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]);
const scaleY = (v) => Math.sqrt(v[4] * v[4] + v[5] * v[5]);
const matrix3dParsers = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX,
	scaleY,
	scale: (v) => (scaleX(v) + scaleY(v)) / 2,
	rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
	rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
	rotateZ,
	rotate: rotateZ,
	skewX: (v) => radToDeg(Math.atan(v[4])),
	skewY: (v) => radToDeg(Math.atan(v[1])),
	skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2
};
function defaultTransformValue(name) {
	return name.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(transform, name) {
	if (!transform || transform === "none") return defaultTransformValue(name);
	const matrix3dMatch = transform.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
	let parsers;
	let match;
	if (matrix3dMatch) {
		parsers = matrix3dParsers;
		match = matrix3dMatch;
	} else {
		const matrix2dMatch = transform.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		parsers = matrix2dParsers;
		match = matrix2dMatch;
	}
	if (!match) return defaultTransformValue(name);
	const valueParser = parsers[name];
	const values = match[1].split(",").map(convertTransformToNumber);
	return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
}
const readTransformValue = (instance, name) => {
	const { transform = "none" } = getComputedStyle(instance);
	return parseValueFromTransform(transform, name);
};
function convertTransformToNumber(value) {
	return parseFloat(value.trim());
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
/**
* Generate a list of every possible transform key.
*/
const transformPropOrder = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
];
/**
* A quick lookup for transform props.
*/
const transformProps = new Set(transformPropOrder);
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
const isNumOrPxType = (v) => v === number || v === px;
const transformKeys = new Set([
	"x",
	"y",
	"z"
]);
const nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
	const removedTransforms = [];
	nonTranslationalTransformKeys.forEach((key) => {
		const value = visualElement.getValue(key);
		if (value !== void 0) {
			removedTransforms.push([key, value.get()]);
			value.set(key.startsWith("scale") ? 1 : 0);
		}
	});
	return removedTransforms;
}
const positionalValues = {
	width: ({ x }, { paddingLeft = "0", paddingRight = "0", boxSizing }) => {
		const width = x.max - x.min;
		return boxSizing === "border-box" ? width : width - parseFloat(paddingLeft) - parseFloat(paddingRight);
	},
	height: ({ y }, { paddingTop = "0", paddingBottom = "0", boxSizing }) => {
		const height = y.max - y.min;
		return boxSizing === "border-box" ? height : height - parseFloat(paddingTop) - parseFloat(paddingBottom);
	},
	top: (_bbox, { top }) => parseFloat(top),
	left: (_bbox, { left }) => parseFloat(left),
	bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
	right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
	x: (_bbox, { transform }) => parseValueFromTransform(transform, "x"),
	y: (_bbox, { transform }) => parseValueFromTransform(transform, "y")
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
const toResolve = /* @__PURE__ */ new Set();
let isScheduled = false;
let anyNeedsMeasurement = false;
let isForced = false;
function measureAllKeyframes() {
	if (anyNeedsMeasurement) {
		const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
		const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
		const transformsToRestore = /* @__PURE__ */ new Map();
		/**
		* Write pass
		* If we're measuring elements we want to remove bounding box-changing transforms.
		*/
		elementsToMeasure.forEach((element) => {
			const removedTransforms = removeNonTranslationalTransform(element);
			if (!removedTransforms.length) return;
			transformsToRestore.set(element, removedTransforms);
			element.render();
		});
		resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
		elementsToMeasure.forEach((element) => {
			element.render();
			const restore = transformsToRestore.get(element);
			if (restore) restore.forEach(([key, value]) => {
				element.getValue(key)?.set(value);
			});
		});
		resolversToMeasure.forEach((resolver) => resolver.measureEndState());
		resolversToMeasure.forEach((resolver) => {
			if (resolver.suspendedScrollY !== void 0) window.scrollTo(0, resolver.suspendedScrollY);
		});
	}
	anyNeedsMeasurement = false;
	isScheduled = false;
	toResolve.forEach((resolver) => resolver.complete(isForced));
	toResolve.clear();
}
function readAllKeyframes() {
	toResolve.forEach((resolver) => {
		resolver.readKeyframes();
		if (resolver.needsMeasurement) anyNeedsMeasurement = true;
	});
}
function flushKeyframeResolvers() {
	isForced = true;
	readAllKeyframes();
	measureAllKeyframes();
	isForced = false;
}
var KeyframeResolver = class {
	constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false) {
		this.state = "pending";
		/**
		* Track whether this resolver is async. If it is, it'll be added to the
		* resolver queue and flushed in the next frame. Resolvers that aren't going
		* to trigger read/write thrashing don't need to be async.
		*/
		this.isAsync = false;
		/**
		* Track whether this resolver needs to perform a measurement
		* to resolve its keyframes.
		*/
		this.needsMeasurement = false;
		this.unresolvedKeyframes = [...unresolvedKeyframes];
		this.onComplete = onComplete;
		this.name = name;
		this.motionValue = motionValue;
		this.element = element;
		this.isAsync = isAsync;
	}
	scheduleResolve() {
		this.state = "scheduled";
		if (this.isAsync) {
			toResolve.add(this);
			if (!isScheduled) {
				isScheduled = true;
				frame.read(readAllKeyframes);
				frame.resolveKeyframes(measureAllKeyframes);
			}
		} else {
			this.readKeyframes();
			this.complete();
		}
	}
	readKeyframes() {
		const { unresolvedKeyframes, name, element, motionValue } = this;
		if (unresolvedKeyframes[0] === null) {
			const currentValue = motionValue?.get();
			const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
			if (currentValue !== void 0) unresolvedKeyframes[0] = currentValue;
			else if (element && name) {
				const valueAsRead = element.readValue(name, finalKeyframe);
				if (valueAsRead !== void 0 && valueAsRead !== null) unresolvedKeyframes[0] = valueAsRead;
			}
			if (unresolvedKeyframes[0] === void 0) unresolvedKeyframes[0] = finalKeyframe;
			if (motionValue && currentValue === void 0) motionValue.set(unresolvedKeyframes[0]);
		}
		fillWildcards(unresolvedKeyframes);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(isForcedComplete = false) {
		this.state = "complete";
		this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
		toResolve.delete(this);
	}
	cancel() {
		if (this.state === "scheduled") {
			toResolve.delete(this);
			this.state = "pending";
		}
	}
	resume() {
		if (this.state === "pending") this.scheduleResolve();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
const isCSSVar = (name) => name.startsWith("--");
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function setStyle(element, name, value) {
	isCSSVar(name) ? element.style.setProperty(name, value) : element.style[name] = value;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/flags.mjs
/**
* Add the ability for test suites to manually set support flags
* to better test more environments.
*/
const supportsFlags = {};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function memoSupports(callback, supportsFlag) {
	const memoized = /* @__PURE__ */ memo(callback);
	return () => supportsFlags[supportsFlag] ?? memoized();
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
const supportsScrollTimeline = /* @__PURE__ */ memoSupports(() => window.ScrollTimeline !== void 0, "scrollTimeline");
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
const supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch (e) {
		return false;
	}
	return true;
}, "linearEasing");
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs
const supportedWaapiEasing = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /* @__PURE__ */ cubicBezierAsString([
		0,
		.65,
		.55,
		1
	]),
	circOut: /* @__PURE__ */ cubicBezierAsString([
		.55,
		0,
		1,
		.45
	]),
	backIn: /* @__PURE__ */ cubicBezierAsString([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /* @__PURE__ */ cubicBezierAsString([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function mapEasingToNativeEasing(easing, duration) {
	if (!easing) return;
	else if (typeof easing === "function") return supportsLinearEasing() ? generateLinearEasing(easing, duration) : "ease-out";
	else if (isBezierDefinition(easing)) return cubicBezierAsString(easing);
	else if (Array.isArray(easing)) return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
	else return supportedWaapiEasing[easing];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function startWaapiAnimation(element, valueName, keyframes, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeOut", times } = {}, pseudoElement = void 0) {
	const keyframeOptions = { [valueName]: keyframes };
	if (times) keyframeOptions.offset = times;
	const easing = mapEasingToNativeEasing(ease, duration);
	/**
	* If this is an easing array, apply to keyframes, not animation as a whole
	*/
	if (Array.isArray(easing)) keyframeOptions.easing = easing;
	if (statsBuffer.value) activeAnimations.waapi++;
	const options = {
		delay,
		duration,
		easing: !Array.isArray(easing) ? easing : "linear",
		fill: "both",
		iterations: repeat + 1,
		direction: repeatType === "reverse" ? "alternate" : "normal"
	};
	if (pseudoElement) options.pseudoElement = pseudoElement;
	const animation = element.animate(keyframeOptions, options);
	if (statsBuffer.value) animation.finished.finally(() => {
		activeAnimations.waapi--;
	});
	return animation;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function isGenerator(type) {
	return typeof type === "function" && "applyToOptions" in type;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function applyGeneratorOptions({ type, ...options }) {
	if (isGenerator(type) && supportsLinearEasing()) return type.applyToOptions(options);
	else {
		options.duration ?? (options.duration = 300);
		options.ease ?? (options.ease = "easeOut");
	}
	return options;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
/**
* NativeAnimation implements AnimationPlaybackControls for the browser's Web Animations API.
*/
var NativeAnimation = class extends WithPromise {
	constructor(options) {
		super();
		this.finishedTime = null;
		this.isStopped = false;
		/**
		* Tracks a manually-set start time that takes precedence over WAAPI's
		* dynamic startTime. This is cleared when play() or time setter is called,
		* allowing WAAPI to take over timing.
		*/
		this.manualStartTime = null;
		if (!options) return;
		const { element, name, keyframes, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options;
		this.isPseudoElement = Boolean(pseudoElement);
		this.allowFlatten = allowFlatten;
		this.options = options;
		invariant(typeof options.type !== "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
		const transition = applyGeneratorOptions(options);
		this.animation = startWaapiAnimation(element, name, keyframes, transition, pseudoElement);
		if (transition.autoplay === false) this.animation.pause();
		this.animation.onfinish = () => {
			this.finishedTime = this.time;
			if (!pseudoElement) {
				const keyframe = getFinalKeyframe(keyframes, this.options, finalKeyframe, this.speed);
				if (this.updateMotionValue) this.updateMotionValue(keyframe);
				/**
				* If we can, we want to commit the final style as set by the user,
				* rather than the computed keyframe value supplied by the animation.
				* We always do this, even when a motion value is present, to prevent
				* a visual flash in Firefox where the WAAPI animation's fill is removed
				* during cancel() before the scheduled render can apply the correct value.
				*/
				setStyle(element, name, keyframe);
				this.animation.cancel();
			}
			onComplete?.();
			this.notifyFinished();
		};
	}
	play() {
		if (this.isStopped) return;
		this.manualStartTime = null;
		this.animation.play();
		if (this.state === "finished") this.updateFinished();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch (e) {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = true;
		const { state } = this;
		if (state === "idle" || state === "finished") return;
		if (this.updateMotionValue) this.updateMotionValue();
		else this.commitStyles();
		if (!this.isPseudoElement) this.cancel();
	}
	/**
	* WAAPI doesn't natively have any interruption capabilities.
	*
	* In this method, we commit styles back to the DOM before cancelling
	* the animation.
	*
	* This is designed to be overridden by NativeAnimationExtended, which
	* will create a renderless JS animation and sample it twice to calculate
	* its current value, "previous" value, and therefore allow
	* Motion to also correctly calculate velocity for any subsequent animation
	* while deferring the commit until the next animation frame.
	*/
	commitStyles() {
		const element = this.options?.element;
		if (!this.isPseudoElement && element?.isConnected) this.animation.commitStyles?.();
	}
	get duration() {
		const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ millisecondsToSeconds(Number(duration));
	}
	get iterationDuration() {
		const { delay = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(delay);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(Number(this.animation.currentTime) || 0);
	}
	set time(newTime) {
		const wasFinished = this.finishedTime !== null;
		this.manualStartTime = null;
		this.finishedTime = null;
		this.animation.currentTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
		if (wasFinished) this.animation.pause();
	}
	/**
	* The playback speed of the animation.
	* 1 = normal speed, 2 = double speed, 0.5 = half speed.
	*/
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(newSpeed) {
		if (newSpeed < 0) this.finishedTime = null;
		this.animation.playbackRate = newSpeed;
	}
	get state() {
		return this.finishedTime !== null ? "finished" : this.animation.playState;
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(newStartTime) {
		this.manualStartTime = this.animation.startTime = newStartTime;
	}
	/**
	* Attaches a timeline to the animation, for instance the `ScrollTimeline`.
	*/
	attachTimeline({ timeline, rangeStart, rangeEnd, observe }) {
		if (this.allowFlatten) this.animation.effect?.updateTiming({ easing: "linear" });
		this.animation.onfinish = null;
		if (timeline && supportsScrollTimeline()) {
			this.animation.timeline = timeline;
			if (rangeStart) this.animation.rangeStart = rangeStart;
			if (rangeEnd) this.animation.rangeEnd = rangeEnd;
			return noop;
		} else return observe(this);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs
const unsupportedEasingFunctions = {
	anticipate,
	backInOut,
	circInOut
};
function isUnsupportedEase(key) {
	return key in unsupportedEasingFunctions;
}
function replaceStringEasing(transition) {
	if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) transition.ease = unsupportedEasingFunctions[transition.ease];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
/**
* 10ms is chosen here as it strikes a balance between smooth
* results (more than one keyframe per frame at 60fps) and
* keyframe quantity.
*/
const sampleDelta = 10;
var NativeAnimationExtended = class extends NativeAnimation {
	constructor(options) {
		/**
		* The base NativeAnimation function only supports a subset
		* of Motion easings, and WAAPI also only supports some
		* easing functions via string/cubic-bezier definitions.
		*
		* This function replaces those unsupported easing functions
		* with a JS easing function. This will later get compiled
		* to a linear() easing function.
		*/
		replaceStringEasing(options);
		/**
		* Ensure we replace the transition type with a generator function
		* before passing to WAAPI.
		*
		* TODO: Does this have a better home? It could be shared with
		* JSAnimation.
		*/
		replaceTransitionType(options);
		super(options);
		/**
		* Only set startTime when the animation should autoplay.
		* Setting startTime on a paused WAAPI animation unpauses it
		* (per the WAAPI spec), which breaks autoplay: false.
		*/
		if (options.startTime !== void 0 && options.autoplay !== false) this.startTime = options.startTime;
		this.options = options;
	}
	/**
	* WAAPI doesn't natively have any interruption capabilities.
	*
	* Rather than read committed styles back out of the DOM, we can
	* create a renderless JS animation and sample it twice to calculate
	* its current value, "previous" value, and therefore allow
	* Motion to calculate velocity for any subsequent animation.
	*/
	updateMotionValue(value) {
		const { motionValue, onUpdate, onComplete, element, ...options } = this.options;
		if (!motionValue) return;
		if (value !== void 0) {
			motionValue.set(value);
			return;
		}
		const sampleAnimation = new JSAnimation({
			...options,
			autoplay: false
		});
		/**
		* Use wall-clock elapsed time for sampling.
		* Under CPU load, WAAPI's currentTime may not reflect actual
		* elapsed time, causing incorrect sampling and visual jumps.
		*/
		const sampleTime = Math.max(sampleDelta, time.now() - this.startTime);
		const delta = clamp(0, sampleDelta, sampleTime - sampleDelta);
		const current = sampleAnimation.sample(sampleTime).value;
		/**
		* Write the estimated value to inline style so it persists
		* after cancel(), covering the async gap before the next
		* animation starts.
		*/
		const { name } = this.options;
		if (element && name) setStyle(element, name, current);
		motionValue.setWithVelocity(sampleAnimation.sample(Math.max(0, sampleTime - delta)).value, current, delta);
		sampleAnimation.stop();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs
/**
* Check if a value is animatable. Examples:
*
* ✅: 100, "100px", "#fff"
* ❌: "block", "url(2.jpg)"
* @param value
*
* @internal
*/
const isAnimatable = (value, name) => {
	if (name === "zIndex") return false;
	if (typeof value === "number" || Array.isArray(value)) return true;
	if (typeof value === "string" && (complex.test(value) || value === "0") && !value.startsWith("url(")) return true;
	return false;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function hasKeyframesChanged(keyframes) {
	const current = keyframes[0];
	if (keyframes.length === 1) return true;
	for (let i = 0; i < keyframes.length; i++) if (keyframes[i] !== current) return true;
}
function canAnimate(keyframes, name, type, velocity) {
	/**
	* Check if we're able to animate between the start and end keyframes,
	* and throw a warning if we're attempting to animate between one that's
	* animatable and another that isn't.
	*/
	const originKeyframe = keyframes[0];
	if (originKeyframe === null) return false;
	/**
	* These aren't traditionally animatable but we do support them.
	* In future we could look into making this more generic or replacing
	* this function with mix() === mixImmediate
	*/
	if (name === "display" || name === "visibility") return true;
	const targetKeyframe = keyframes[keyframes.length - 1];
	const isOriginAnimatable = isAnimatable(originKeyframe, name);
	const isTargetAnimatable = isAnimatable(targetKeyframe, name);
	warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". "${isOriginAnimatable ? targetKeyframe : originKeyframe}" is not an animatable value.`, "value-not-animatable");
	if (!isOriginAnimatable || !isTargetAnimatable) return false;
	return hasKeyframesChanged(keyframes) || (type === "spring" || isGenerator(type)) && velocity;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function makeAnimationInstant(options) {
	options.duration = 0;
	options.type = "keyframes";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
/**
* A list of values that can be hardware-accelerated.
*/
const acceleratedValues = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]);
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/is-browser-color.mjs
const browserColorFunctions = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function hasBrowserOnlyColors(keyframes) {
	for (let i = 0; i < keyframes.length; i++) if (typeof keyframes[i] === "string" && browserColorFunctions.test(keyframes[i])) return true;
	return false;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
const colorProperties = new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]);
const supportsWaapi = /* @__PURE__ */ memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function supportsBrowserAnimation(options) {
	const { motionValue, name, repeatDelay, repeatType, damping, type, keyframes } = options;
	/**
	* We use this check instead of isHTMLElement() because we explicitly
	* **don't** want elements in different timing contexts (i.e. popups)
	* to be accelerated, as it's not possible to sync these animations
	* properly with those driven from the main window frameloop.
	*/
	if (!(motionValue?.owner?.current instanceof HTMLElement)) return false;
	const { onUpdate, transformTemplate } = motionValue.owner.getProps();
	return supportsWaapi() && name && (acceleratedValues.has(name) || colorProperties.has(name) && hasBrowserOnlyColors(keyframes)) && (name !== "transform" || !transformTemplate) && !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
/**
* Maximum time allowed between an animation being created and it being
* resolved for us to use the latter as the start time.
*
* This is to ensure that while we prefer to "start" an animation as soon
* as it's triggered, we also want to avoid a visual jump if there's a big delay
* between these two moments.
*/
const MAX_RESOLVE_DELAY = 40;
var AsyncMotionValueAnimation = class extends WithPromise {
	constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", keyframes, name, motionValue, element, ...options }) {
		super();
		/**
		* Bound to support return animation.stop pattern
		*/
		this.stop = () => {
			if (this._animation) {
				this._animation.stop();
				this.stopTimeline?.();
			}
			this.keyframeResolver?.cancel();
		};
		this.createdAt = time.now();
		const optionsWithDefaults = {
			autoplay,
			delay,
			type,
			repeat,
			repeatDelay,
			repeatType,
			name,
			motionValue,
			element,
			...options
		};
		this.keyframeResolver = new (element?.KeyframeResolver || KeyframeResolver)(keyframes, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue, element);
		this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(keyframes, finalKeyframe, options, sync) {
		this.keyframeResolver = void 0;
		const { name, type, velocity, delay, isHandoff, onUpdate } = options;
		this.resolvedAt = time.now();
		/**
		* If we can't animate this value with the resolved keyframes
		* then we should complete it immediately.
		*/
		let canAnimateValue = true;
		if (!canAnimate(keyframes, name, type, velocity)) {
			canAnimateValue = false;
			if (MotionGlobalConfig.instantAnimations || !delay) onUpdate?.(getFinalKeyframe(keyframes, options, finalKeyframe));
			keyframes[0] = keyframes[keyframes.length - 1];
			makeAnimationInstant(options);
			options.repeat = 0;
		}
		const resolvedOptions = {
			startTime: sync ? !this.resolvedAt ? this.createdAt : this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe,
			...options,
			keyframes
		};
		/**
		* Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
		* WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
		* optimised animation.
		*
		* Also skip WAAPI when keyframes aren't animatable, as the resolved
		* values may not be valid CSS and would trigger browser warnings.
		*/
		const useWaapi = canAnimateValue && !isHandoff && supportsBrowserAnimation(resolvedOptions);
		const element = resolvedOptions.motionValue?.owner?.current;
		let animation;
		if (useWaapi) try {
			animation = new NativeAnimationExtended({
				...resolvedOptions,
				element
			});
		} catch {
			animation = new JSAnimation(resolvedOptions);
		}
		else animation = new JSAnimation(resolvedOptions);
		animation.finished.then(() => {
			this.notifyFinished();
		}).catch(noop);
		if (this.pendingTimeline) {
			this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
			this.pendingTimeline = void 0;
		}
		this._animation = animation;
	}
	get finished() {
		if (!this._animation) return this._finished;
		else return this.animation.finished;
	}
	then(onResolve, _onReject) {
		return this.finished.finally(onResolve).then(() => {});
	}
	get animation() {
		if (!this._animation) {
			this.keyframeResolver?.resume();
			flushKeyframeResolvers();
		}
		return this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(newTime) {
		this.animation.time = newTime;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(newSpeed) {
		this.animation.speed = newSpeed;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(timeline) {
		if (this._animation) this.stopTimeline = this.animation.attachTimeline(timeline);
		else this.pendingTimeline = timeline;
		return () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		if (this._animation) this.animation.cancel();
		this.keyframeResolver?.cancel();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/GroupAnimation.mjs
var GroupAnimation = class {
	constructor(animations) {
		this.stop = () => this.runAll("stop");
		this.animations = animations.filter(Boolean);
	}
	get finished() {
		return Promise.all(this.animations.map((animation) => animation.finished));
	}
	/**
	* TODO: Filter out cancelled or stopped animations before returning
	*/
	getAll(propName) {
		return this.animations[0][propName];
	}
	setAll(propName, newValue) {
		for (let i = 0; i < this.animations.length; i++) this.animations[i][propName] = newValue;
	}
	attachTimeline(timeline) {
		const subscriptions = this.animations.map((animation) => animation.attachTimeline(timeline));
		return () => {
			subscriptions.forEach((cancel, i) => {
				cancel && cancel();
				this.animations[i].stop();
			});
		};
	}
	get time() {
		return this.getAll("time");
	}
	set time(time) {
		this.setAll("time", time);
	}
	get speed() {
		return this.getAll("speed");
	}
	set speed(speed) {
		this.setAll("speed", speed);
	}
	get state() {
		return this.getAll("state");
	}
	get startTime() {
		return this.getAll("startTime");
	}
	get duration() {
		return getMax(this.animations, "duration");
	}
	get iterationDuration() {
		return getMax(this.animations, "iterationDuration");
	}
	runAll(methodName) {
		this.animations.forEach((controls) => controls[methodName]());
	}
	play() {
		this.runAll("play");
	}
	pause() {
		this.runAll("pause");
	}
	cancel() {
		this.runAll("cancel");
	}
	complete() {
		this.runAll("complete");
	}
};
function getMax(animations, propName) {
	let max = 0;
	for (let i = 0; i < animations.length; i++) {
		const value = animations[i][propName];
		if (value !== null && value > max) max = value;
	}
	return max;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs
var GroupAnimationWithThen = class extends GroupAnimation {
	then(onResolve, _onReject) {
		return this.finished.finally(onResolve).then(() => {});
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
/**
* Parse Framer's special CSS variable format into a CSS token and a fallback.
*
* ```
* `var(--foo, #fff)` => [`--foo`, '#fff']
* ```
*
* @param current
*/
const splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
	const match = splitCSSVariableRegex.exec(current);
	if (!match) return [,];
	const [, token1, token2, fallback] = match;
	return [`--${token1 ?? token2}`, fallback];
}
const maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
	invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	const [token, fallback] = parseCSSVariable(current);
	if (!token) return;
	const resolved = window.getComputedStyle(element).getPropertyValue(token);
	if (resolved) {
		const trimmed = resolved.trim();
		return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
	}
	return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
const underDampedSpring = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
};
const criticallyDampedSpring = (target) => ({
	type: "spring",
	stiffness: 550,
	damping: target === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
});
const keyframesTransition = {
	type: "keyframes",
	duration: .8
};
/**
* Default easing curve is a slightly shallower version of
* the default browser easing curve.
*/
const ease = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
};
const getDefaultTransition = (valueKey, { keyframes }) => {
	if (keyframes.length > 2) return keyframesTransition;
	else if (transformProps.has(valueKey)) return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes[1]) : underDampedSpring;
	return ease;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
/**
* If `transition` has `inherit: true`, shallow-merge it with
* `parentTransition` (child keys win) and strip the `inherit` key.
* Otherwise return `transition` unchanged.
*/
function resolveTransition(transition, parentTransition) {
	if (transition?.inherit && parentTransition) {
		const { inherit: _, ...rest } = transition;
		return {
			...parentTransition,
			...rest
		};
	}
	return transition;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function getValueTransition$1(transition, key) {
	const valueTransition = transition?.[key] ?? transition?.["default"] ?? transition;
	if (valueTransition !== transition) return resolveTransition(valueTransition, transition);
	return valueTransition;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
const orchestrationKeys = new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed"
]);
/**
* Decide whether a transition is defined on a given Transition.
* This filters out orchestration options and returns true
* if any options are left.
*/
function isTransitionDefined(transition) {
	for (const key in transition) if (!orchestrationKeys.has(key)) return true;
	return false;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
const animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
	const valueTransition = getValueTransition$1(transition, name) || {};
	/**
	* Most transition values are currently completely overwritten by value-specific
	* transitions. In the future it'd be nicer to blend these transitions. But for now
	* delay actually does inherit from the root transition if not value-specific.
	*/
	const delay = valueTransition.delay || transition.delay || 0;
	/**
	* Elapsed isn't a public transition option but can be passed through from
	* optimized appear effects in milliseconds.
	*/
	let { elapsed = 0 } = transition;
	elapsed = elapsed - /* @__PURE__ */ secondsToMilliseconds(delay);
	const options = {
		keyframes: Array.isArray(target) ? target : [null, target],
		ease: "easeOut",
		velocity: value.getVelocity(),
		...valueTransition,
		delay: -elapsed,
		onUpdate: (v) => {
			value.set(v);
			valueTransition.onUpdate && valueTransition.onUpdate(v);
		},
		onComplete: () => {
			onComplete();
			valueTransition.onComplete && valueTransition.onComplete();
		},
		name,
		motionValue: value,
		element: isHandoff ? void 0 : element
	};
	/**
	* If there's no transition defined for this value, we can generate
	* unique transition settings for this value.
	*/
	if (!isTransitionDefined(valueTransition)) Object.assign(options, getDefaultTransition(name, options));
	/**
	* Both WAAPI and our internal animation functions use durations
	* as defined by milliseconds, while our external API defines them
	* as seconds.
	*/
	options.duration && (options.duration = /* @__PURE__ */ secondsToMilliseconds(options.duration));
	options.repeatDelay && (options.repeatDelay = /* @__PURE__ */ secondsToMilliseconds(options.repeatDelay));
	/**
	* Support deprecated way to set initial value. Prefer keyframe syntax.
	*/
	if (options.from !== void 0) options.keyframes[0] = options.from;
	let shouldSkip = false;
	if (options.type === false || options.duration === 0 && !options.repeatDelay) {
		makeAnimationInstant(options);
		if (options.delay === 0) shouldSkip = true;
	}
	if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations || element?.shouldSkipAnimations) {
		shouldSkip = true;
		makeAnimationInstant(options);
		options.delay = 0;
	}
	/**
	* If the transition type or easing has been explicitly set by the user
	* then we don't want to allow flattening the animation.
	*/
	options.allowFlatten = !valueTransition.type && !valueTransition.ease;
	/**
	* If we can or must skip creating the animation, and apply only
	* the final keyframe, do so. We also check once keyframes are resolved but
	* this early check prevents the need to create an animation at all.
	*/
	if (shouldSkip && !isHandoff && value.get() !== void 0) {
		const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
		if (finalKeyframe !== void 0) {
			frame.update(() => {
				options.onUpdate(finalKeyframe);
				options.onComplete();
			});
			return;
		}
	}
	return valueTransition.isSync ? new JSAnimation(options) : new AsyncMotionValueAnimation(options);
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function getValueState(visualElement) {
	const state = [{}, {}];
	visualElement?.values.forEach((value, key) => {
		state[0][key] = value.get();
		state[1][key] = value.getVelocity();
	});
	return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
	/**
	* If the variant definition is a function, resolve.
	*/
	if (typeof definition === "function") {
		const [current, velocity] = getValueState(visualElement);
		definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
	}
	/**
	* If the variant definition is a variant label, or
	* the function returned a variant label, resolve.
	*/
	if (typeof definition === "string") definition = props.variants && props.variants[definition];
	/**
	* At this point we've resolved both functions and variant labels,
	* but the resolved variant label might itself have been a function.
	* If so, resolve. This can only have returned a valid target object.
	*/
	if (typeof definition === "function") {
		const [current, velocity] = getValueState(visualElement);
		definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
	}
	return definition;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function resolveVariant$1(visualElement, definition, custom) {
	const props = visualElement.getProps();
	return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, visualElement);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
const positionalKeys = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...transformPropOrder
]);
//#endregion
//#region node_modules/motion-dom/dist/es/value/index.mjs
/**
* Maximum time between the value of two frames, beyond which we
* assume the velocity has since been 0.
*/
const MAX_VELOCITY_DELTA = 30;
const isFloat = (value) => {
	return !isNaN(parseFloat(value));
};
const collectMotionValues = { current: void 0 };
/**
* `MotionValue` is used to track the state and velocity of motion values.
*
* @public
*/
var MotionValue = class {
	/**
	* @param init - The initiating value
	* @param config - Optional configuration options
	*
	* -  `transformer`: A function to transform incoming values with.
	*/
	constructor(init, options = {}) {
		/**
		* Tracks whether this value can output a velocity. Currently this is only true
		* if the value is numerical, but we might be able to widen the scope here and support
		* other value types.
		*
		* @internal
		*/
		this.canTrackVelocity = null;
		/**
		* An object containing a SubscriptionManager for each active event.
		*/
		this.events = {};
		this.updateAndNotify = (v) => {
			const currentTime = time.now();
			/**
			* If we're updating the value during another frame or eventloop
			* than the previous frame, then the we set the previous frame value
			* to current.
			*/
			if (this.updatedAt !== currentTime) this.setPrevFrameValue();
			this.prev = this.current;
			this.setCurrent(v);
			if (this.current !== this.prev) {
				this.events.change?.notify(this.current);
				if (this.dependents) for (const dependent of this.dependents) dependent.dirty();
			}
		};
		this.hasAnimated = false;
		this.setCurrent(init);
		this.owner = options.owner;
	}
	setCurrent(current) {
		this.current = current;
		this.updatedAt = time.now();
		if (this.canTrackVelocity === null && current !== void 0) this.canTrackVelocity = isFloat(this.current);
	}
	setPrevFrameValue(prevFrameValue = this.current) {
		this.prevFrameValue = prevFrameValue;
		this.prevUpdatedAt = this.updatedAt;
	}
	/**
	* Adds a function that will be notified when the `MotionValue` is updated.
	*
	* It returns a function that, when called, will cancel the subscription.
	*
	* When calling `onChange` inside a React component, it should be wrapped with the
	* `useEffect` hook. As it returns an unsubscribe function, this should be returned
	* from the `useEffect` function to ensure you don't add duplicate subscribers..
	*
	* ```jsx
	* export const MyComponent = () => {
	*   const x = useMotionValue(0)
	*   const y = useMotionValue(0)
	*   const opacity = useMotionValue(1)
	*
	*   useEffect(() => {
	*     function updateOpacity() {
	*       const maxXY = Math.max(x.get(), y.get())
	*       const newOpacity = transform(maxXY, [0, 100], [1, 0])
	*       opacity.set(newOpacity)
	*     }
	*
	*     const unsubscribeX = x.on("change", updateOpacity)
	*     const unsubscribeY = y.on("change", updateOpacity)
	*
	*     return () => {
	*       unsubscribeX()
	*       unsubscribeY()
	*     }
	*   }, [])
	*
	*   return <motion.div style={{ x }} />
	* }
	* ```
	*
	* @param subscriber - A function that receives the latest value.
	* @returns A function that, when called, will cancel this subscription.
	*
	* @deprecated
	*/
	onChange(subscription) {
		warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
		return this.on("change", subscription);
	}
	on(eventName, callback) {
		if (!this.events[eventName]) this.events[eventName] = new SubscriptionManager();
		const unsubscribe = this.events[eventName].add(callback);
		if (eventName === "change") return () => {
			unsubscribe();
			/**
			* If we have no more change listeners by the start
			* of the next frame, stop active animations.
			*/
			frame.read(() => {
				if (!this.events.change.getSize()) this.stop();
			});
		};
		return unsubscribe;
	}
	clearListeners() {
		for (const eventManagers in this.events) this.events[eventManagers].clear();
	}
	/**
	* Attaches a passive effect to the `MotionValue`.
	*/
	attach(passiveEffect, stopPassiveEffect) {
		this.passiveEffect = passiveEffect;
		this.stopPassiveEffect = stopPassiveEffect;
	}
	/**
	* Sets the state of the `MotionValue`.
	*
	* @remarks
	*
	* ```jsx
	* const x = useMotionValue(0)
	* x.set(10)
	* ```
	*
	* @param latest - Latest value to set.
	* @param render - Whether to notify render subscribers. Defaults to `true`
	*
	* @public
	*/
	set(v) {
		if (!this.passiveEffect) this.updateAndNotify(v);
		else this.passiveEffect(v, this.updateAndNotify);
	}
	setWithVelocity(prev, current, delta) {
		this.set(current);
		this.prev = void 0;
		this.prevFrameValue = prev;
		this.prevUpdatedAt = this.updatedAt - delta;
	}
	/**
	* Set the state of the `MotionValue`, stopping any active animations,
	* effects, and resets velocity to `0`.
	*/
	jump(v, endAnimation = true) {
		this.updateAndNotify(v);
		this.prev = v;
		this.prevUpdatedAt = this.prevFrameValue = void 0;
		endAnimation && this.stop();
		if (this.stopPassiveEffect) this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(dependent) {
		if (!this.dependents) this.dependents = /* @__PURE__ */ new Set();
		this.dependents.add(dependent);
	}
	removeDependent(dependent) {
		if (this.dependents) this.dependents.delete(dependent);
	}
	/**
	* Returns the latest state of `MotionValue`
	*
	* @returns - The latest state of `MotionValue`
	*
	* @public
	*/
	get() {
		if (collectMotionValues.current) collectMotionValues.current.push(this);
		return this.current;
	}
	/**
	* @public
	*/
	getPrevious() {
		return this.prev;
	}
	/**
	* Returns the latest velocity of `MotionValue`
	*
	* @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
	*
	* @public
	*/
	getVelocity() {
		const currentTime = time.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
		const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
		return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
	}
	/**
	* Registers a new animation to control this `MotionValue`. Only one
	* animation can drive a `MotionValue` at one time.
	*
	* ```jsx
	* value.start()
	* ```
	*
	* @param animation - A function that starts the provided animation
	*/
	start(startAnimation) {
		this.stop();
		return new Promise((resolve) => {
			this.hasAnimated = true;
			this.animation = startAnimation(resolve);
			if (this.events.animationStart) this.events.animationStart.notify();
		}).then(() => {
			if (this.events.animationComplete) this.events.animationComplete.notify();
			this.clearAnimation();
		});
	}
	/**
	* Stop the currently active animation.
	*
	* @public
	*/
	stop() {
		if (this.animation) {
			this.animation.stop();
			if (this.events.animationCancel) this.events.animationCancel.notify();
		}
		this.clearAnimation();
	}
	/**
	* Returns `true` if this value is currently animating.
	*
	* @public
	*/
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	/**
	* Destroy and clean up subscribers to this `MotionValue`.
	*
	* The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
	* handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
	* created a `MotionValue` via the `motionValue` function.
	*
	* @public
	*/
	destroy() {
		this.dependents?.clear();
		this.events.destroy?.notify();
		this.clearListeners();
		this.stop();
		if (this.stopPassiveEffect) this.stopPassiveEffect();
	}
};
function motionValue(init, options) {
	return new MotionValue(init, options);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
const isKeyframesTarget = (v) => {
	return Array.isArray(v);
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/setters.mjs
/**
* Set VisualElement's MotionValue, creating a new MotionValue for it if
* it doesn't exist.
*/
function setMotionValue(visualElement, key, value) {
	if (visualElement.hasValue(key)) visualElement.getValue(key).set(value);
	else visualElement.addValue(key, motionValue(value));
}
function resolveFinalValueInKeyframes(v) {
	return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
}
function setTarget(visualElement, definition) {
	let { transitionEnd = {}, transition = {}, ...target } = resolveVariant$1(visualElement, definition) || {};
	target = {
		...target,
		...transitionEnd
	};
	for (const key in target) setMotionValue(visualElement, key, resolveFinalValueInKeyframes(target[key]));
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
const isMotionValue = (value) => Boolean(value && value.getVelocity);
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/is.mjs
function isWillChangeMotionValue(value) {
	return Boolean(isMotionValue(value) && value.add);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function addValueToWillChange(visualElement, key) {
	const willChange = visualElement.getValue("willChange");
	/**
	* It could be that a user has set willChange to a regular MotionValue,
	* in which case we can't add the value to it.
	*/
	if (isWillChangeMotionValue(willChange)) return willChange.add(key);
	else if (!willChange && MotionGlobalConfig.WillChange) {
		const newWillChange = new MotionGlobalConfig.WillChange("auto");
		visualElement.addValue("willChange", newWillChange);
		newWillChange.add(key);
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function camelToDash(str) {
	return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
}
const optimizedAppearDataAttribute = "data-" + camelToDash("framerAppearId");
//#endregion
//#region node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function getOptimisedAppearId(visualElement) {
	return visualElement.props[optimizedAppearDataAttribute];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
/**
* Decide whether we should block this animation. Previously, we achieved this
* just by checking whether the key was listed in protectedKeys, but this
* posed problems if an animation was triggered by afterChildren and protectedKeys
* had been set to true in the meantime.
*/
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
	const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
	needsAnimating[key] = false;
	return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay = 0, transitionOverride, type } = {}) {
	let { transition, transitionEnd, ...target } = targetAndTransition;
	const defaultTransition = visualElement.getDefaultTransition();
	transition = transition ? resolveTransition(transition, defaultTransition) : defaultTransition;
	const reduceMotion = transition?.reduceMotion;
	if (transitionOverride) transition = transitionOverride;
	const animations = [];
	const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
	for (const key in target) {
		const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
		const valueTarget = target[key];
		if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) continue;
		const valueTransition = {
			delay,
			...getValueTransition$1(transition || {}, key)
		};
		/**
		* If the value is already at the defined target, skip the animation.
		* We still re-assert the value via frame.update to take precedence
		* over any stale transitionEnd callbacks from previous animations.
		*/
		const currentValue = value.get();
		if (currentValue !== void 0 && !value.isAnimating() && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) {
			frame.update(() => value.set(valueTarget));
			continue;
		}
		/**
		* If this is the first time a value is being animated, check
		* to see if we're handling off from an existing animation.
		*/
		let isHandoff = false;
		if (window.MotionHandoffAnimation) {
			const appearId = getOptimisedAppearId(visualElement);
			if (appearId) {
				const startTime = window.MotionHandoffAnimation(appearId, key, frame);
				if (startTime !== null) {
					valueTransition.startTime = startTime;
					isHandoff = true;
				}
			}
		}
		addValueToWillChange(visualElement, key);
		const shouldReduceMotion = reduceMotion ?? visualElement.shouldReduceMotion;
		value.start(animateMotionValue(key, value, valueTarget, shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
		const animation = value.animation;
		if (animation) animations.push(animation);
	}
	if (transitionEnd) {
		const applyTransitionEnd = () => frame.update(() => {
			transitionEnd && setTarget(visualElement, transitionEnd);
		});
		if (animations.length) Promise.all(animations).then(applyTransitionEnd);
		else applyTransitionEnd();
	}
	return animations;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/auto.mjs
/**
* ValueType for "auto"
*/
const auto = {
	test: (v) => v === "auto",
	parse: (v) => v
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/test.mjs
/**
* Tests a provided value against a ValueType
*/
const testValueType = (v) => (type) => type.test(v);
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/dimensions.mjs
/**
* A list of value types commonly used for dimensions
*/
const dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	auto
];
/**
* Tests a dimensional value against the list of dimension ValueTypes
*/
const findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function isNone(value) {
	if (typeof value === "number") return value === 0;
	else if (value !== null) return value === "none" || value === "0" || isZeroValueString(value);
	else return true;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
/**
* Properties that should default to 1 or 100%
*/
const maxDefaults = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function applyDefaultFilter(v) {
	const [name, value] = v.slice(0, -1).split("(");
	if (name === "drop-shadow") return v;
	const [number] = value.match(floatRegex) || [];
	if (!number) return v;
	const unit = value.replace(number, "");
	let defaultValue = maxDefaults.has(name) ? 1 : 0;
	if (number !== value) defaultValue *= 100;
	return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /\b([a-z-]*)\(.*?\)/gu;
const filter = {
	...complex,
	getAnimatableNone: (v) => {
		const functions = v.match(functionRegex);
		return functions ? functions.map(applyDefaultFilter).join(" ") : v;
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/mask.mjs
const mask = {
	...complex,
	getAnimatableNone: (v) => {
		const parsed = complex.parse(v);
		return complex.createTransformer(v)(parsed.map((v) => typeof v === "number" ? 0 : typeof v === "object" ? {
			...v,
			alpha: 1
		} : v));
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/int.mjs
const int = {
	...number,
	transform: Math.round
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/maps/number.mjs
const numberValueTypes = {
	borderWidth: px,
	borderTopWidth: px,
	borderRightWidth: px,
	borderBottomWidth: px,
	borderLeftWidth: px,
	borderRadius: px,
	borderTopLeftRadius: px,
	borderTopRightRadius: px,
	borderBottomRightRadius: px,
	borderBottomLeftRadius: px,
	width: px,
	maxWidth: px,
	height: px,
	maxHeight: px,
	top: px,
	right: px,
	bottom: px,
	left: px,
	inset: px,
	insetBlock: px,
	insetBlockStart: px,
	insetBlockEnd: px,
	insetInline: px,
	insetInlineStart: px,
	insetInlineEnd: px,
	padding: px,
	paddingTop: px,
	paddingRight: px,
	paddingBottom: px,
	paddingLeft: px,
	paddingBlock: px,
	paddingBlockStart: px,
	paddingBlockEnd: px,
	paddingInline: px,
	paddingInlineStart: px,
	paddingInlineEnd: px,
	margin: px,
	marginTop: px,
	marginRight: px,
	marginBottom: px,
	marginLeft: px,
	marginBlock: px,
	marginBlockStart: px,
	marginBlockEnd: px,
	marginInline: px,
	marginInlineStart: px,
	marginInlineEnd: px,
	fontSize: px,
	backgroundPositionX: px,
	backgroundPositionY: px,
	rotate: degrees,
	rotateX: degrees,
	rotateY: degrees,
	rotateZ: degrees,
	scale,
	scaleX: scale,
	scaleY: scale,
	scaleZ: scale,
	skew: degrees,
	skewX: degrees,
	skewY: degrees,
	distance: px,
	translateX: px,
	translateY: px,
	translateZ: px,
	x: px,
	y: px,
	z: px,
	perspective: px,
	transformPerspective: px,
	opacity: alpha,
	originX: progressPercentage,
	originY: progressPercentage,
	originZ: px,
	zIndex: int,
	fillOpacity: alpha,
	strokeOpacity: alpha,
	numOctaves: int
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs
/**
* A map of default value types for common values
*/
const defaultValueTypes = {
	...numberValueTypes,
	color,
	backgroundColor: color,
	outlineColor: color,
	fill: color,
	stroke: color,
	borderColor: color,
	borderTopColor: color,
	borderRightColor: color,
	borderBottomColor: color,
	borderLeftColor: color,
	filter,
	WebkitFilter: filter,
	mask,
	WebkitMask: mask
};
/**
* Gets the default ValueType for the provided value key
*/
const getDefaultValueType = (key) => defaultValueTypes[key];
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs
const customTypes = /* @__PURE__ */ new Set([filter, mask]);
function getAnimatableNone(key, value) {
	let defaultValueType = getDefaultValueType(key);
	if (!customTypes.has(defaultValueType)) defaultValueType = complex;
	return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
/**
* If we encounter keyframes like "none" or "0" and we also have keyframes like
* "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
* the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
* zero equivalents, i.e. "#fff0" or "0px 0px".
*/
const invalidTemplates = new Set([
	"auto",
	"none",
	"0"
]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
	let i = 0;
	let animatableTemplate = void 0;
	while (i < unresolvedKeyframes.length && !animatableTemplate) {
		const keyframe = unresolvedKeyframes[i];
		if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && analyseComplexValue(keyframe).values.length) animatableTemplate = unresolvedKeyframes[i];
		i++;
	}
	if (animatableTemplate && name) for (const noneIndex of noneKeyframeIndexes) unresolvedKeyframes[noneIndex] = getAnimatableNone(name, animatableTemplate);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var DOMKeyframesResolver = class extends KeyframeResolver {
	constructor(unresolvedKeyframes, onComplete, name, motionValue, element) {
		super(unresolvedKeyframes, onComplete, name, motionValue, element, true);
	}
	readKeyframes() {
		const { unresolvedKeyframes, element, name } = this;
		if (!element || !element.current) return;
		super.readKeyframes();
		/**
		* If any keyframe is a CSS variable, we need to find its value by sampling the element
		*/
		for (let i = 0; i < unresolvedKeyframes.length; i++) {
			let keyframe = unresolvedKeyframes[i];
			if (typeof keyframe === "string") {
				keyframe = keyframe.trim();
				if (isCSSVariableToken(keyframe)) {
					const resolved = getVariableValue(keyframe, element.current);
					if (resolved !== void 0) unresolvedKeyframes[i] = resolved;
					if (i === unresolvedKeyframes.length - 1) this.finalKeyframe = keyframe;
				}
			}
		}
		/**
		* Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
		* This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
		* have a far bigger performance impact.
		*/
		this.resolveNoneKeyframes();
		/**
		* Check to see if unit type has changed. If so schedule jobs that will
		* temporarily set styles to the destination keyframes.
		* Skip if we have more than two keyframes or this isn't a positional value.
		* TODO: We can throw if there are multiple keyframes and the value type changes.
		*/
		if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) return;
		const [origin, target] = unresolvedKeyframes;
		const originType = findDimensionValueType(origin);
		const targetType = findDimensionValueType(target);
		if (containsCSSVariable(origin) !== containsCSSVariable(target) && positionalValues[name]) {
			this.needsMeasurement = true;
			return;
		}
		/**
		* Either we don't recognise these value types or we can animate between them.
		*/
		if (originType === targetType) return;
		/**
		* If both values are numbers or pixels, we can animate between them by
		* converting them to numbers.
		*/
		if (isNumOrPxType(originType) && isNumOrPxType(targetType)) for (let i = 0; i < unresolvedKeyframes.length; i++) {
			const value = unresolvedKeyframes[i];
			if (typeof value === "string") unresolvedKeyframes[i] = parseFloat(value);
		}
		else if (positionalValues[name])
 /**
		* Else, the only way to resolve this is by measuring the element.
		*/
		this.needsMeasurement = true;
	}
	resolveNoneKeyframes() {
		const { unresolvedKeyframes, name } = this;
		const noneKeyframeIndexes = [];
		for (let i = 0; i < unresolvedKeyframes.length; i++) if (unresolvedKeyframes[i] === null || isNone(unresolvedKeyframes[i])) noneKeyframeIndexes.push(i);
		if (noneKeyframeIndexes.length) makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
	}
	measureInitialState() {
		const { element, unresolvedKeyframes, name } = this;
		if (!element || !element.current) return;
		if (name === "height") this.suspendedScrollY = window.pageYOffset;
		this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
		unresolvedKeyframes[0] = this.measuredOrigin;
		const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
		if (measureKeyframe !== void 0) element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
	}
	measureEndState() {
		const { element, name, unresolvedKeyframes } = this;
		if (!element || !element.current) return;
		const value = element.getValue(name);
		value && value.jump(this.measuredOrigin, false);
		const finalKeyframeIndex = unresolvedKeyframes.length - 1;
		const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
		unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
		if (finalKeyframe !== null && this.finalKeyframe === void 0) this.finalKeyframe = finalKeyframe;
		if (this.removedTransforms?.length) this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
			element.getValue(unsetTransformName).set(unsetTransformValue);
		});
		this.resolveNoneKeyframes();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function resolveElements(elementOrSelector, scope, selectorCache) {
	if (elementOrSelector == null) return [];
	if (elementOrSelector instanceof EventTarget) return [elementOrSelector];
	else if (typeof elementOrSelector === "string") {
		let root = document;
		if (scope) root = scope.current;
		const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
		return elements ? Array.from(elements) : [];
	}
	return Array.from(elementOrSelector).filter((element) => element != null);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
/**
* Provided a value and a ValueType, returns the value as that value type.
*/
const getValueAsType = (value, type) => {
	return type && typeof value === "number" ? type.transform(value) : value;
};
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/microtask.mjs
const { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, false);
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
/**
* Checks if an element is an SVG element in a way
* that works across iframes
*/
function isSVGElement(element) {
	return isObject(element) && "ownerSVGElement" in element;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
/**
* Checks if an element is specifically an SVGSVGElement (the root SVG element)
* in a way that works across iframes
*/
function isSVGSVGElement(element) {
	return isSVGElement(element) && element.tagName === "svg";
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/find.mjs
/**
* A list of all ValueTypes
*/
const valueTypes = [
	...dimensionValueTypes,
	color,
	complex
];
/**
* Tests a value against the list of ValueTypes
*/
const findValueType = (v) => valueTypes.find(testValueType(v));
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/models.mjs
const createAxis = () => ({
	min: 0,
	max: 0
});
const createBox = () => ({
	x: createAxis(),
	y: createAxis()
});
//#endregion
//#region node_modules/motion-dom/dist/es/render/store.mjs
const visualElementStore = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function isAnimationControls(v) {
	return v !== null && typeof v === "object" && typeof v.start === "function";
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
/**
* Decides if the supplied variable is variant label
*/
function isVariantLabel(v) {
	return typeof v === "string" || Array.isArray(v);
}
const variantProps = ["initial", ...[
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
]];
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
	return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
	return Boolean(isControllingVariants(props) || props.variants);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
/**
* Updates motion values from props changes.
* Uses `any` type for element to avoid circular dependencies with VisualElement.
*/
function updateMotionValuesFromProps(element, next, prev) {
	for (const key in next) {
		const nextValue = next[key];
		const prevValue = prev[key];
		if (isMotionValue(nextValue))
 /**
		* If this is a motion value found in props or style, we want to add it
		* to our visual element's motion value map.
		*/
		element.addValue(key, nextValue);
		else if (isMotionValue(prevValue))
 /**
		* If we're swapping from a motion value to a static value,
		* create a new motion value from that
		*/
		element.addValue(key, motionValue(nextValue, { owner: element }));
		else if (prevValue !== nextValue)
 /**
		* If this is a flat value that has changed, update the motion value
		* or create one if it doesn't exist. We only want to do this if we're
		* not handling the value with our animation state.
		*/
		if (element.hasValue(key)) {
			const existingValue = element.getValue(key);
			if (existingValue.liveStyle === true) existingValue.jump(nextValue);
			else if (!existingValue.hasAnimated) existingValue.set(nextValue);
		} else {
			const latestValue = element.getStaticValue(key);
			element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
		}
	}
	for (const key in prev) if (next[key] === void 0) element.removeValue(key);
	return next;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
const prefersReducedMotion = { current: null };
const hasReducedMotionListener = { current: false };
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs
const isBrowser = typeof window !== "undefined";
function initPrefersReducedMotion() {
	hasReducedMotionListener.current = true;
	if (!isBrowser) return;
	if (window.matchMedia) {
		const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
		const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
		motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
		setReducedMotionPreferences();
	} else prefersReducedMotion.current = false;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/VisualElement.mjs
const propEventHandlers = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
];
/**
* Static feature definitions - can be injected by framework layer
*/
let featureDefinitions = {};
/**
* A VisualElement is an imperative abstraction around UI elements such as
* HTMLElement, SVGElement, Three.Object3D etc.
*/
var VisualElement = class {
	/**
	* This method takes React props and returns found MotionValues. For example, HTML
	* MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
	*
	* This isn't an abstract method as it needs calling in the constructor, but it is
	* intended to be one.
	*/
	scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
		return {};
	}
	constructor({ parent, props, presenceContext, reducedMotionConfig, skipAnimations, blockInitialAnimation, visualState }, options = {}) {
		/**
		* A reference to the current underlying Instance, e.g. a HTMLElement
		* or Three.Mesh etc.
		*/
		this.current = null;
		/**
		* A set containing references to this VisualElement's children.
		*/
		this.children = /* @__PURE__ */ new Set();
		/**
		* Determine what role this visual element should take in the variant tree.
		*/
		this.isVariantNode = false;
		this.isControllingVariants = false;
		/**
		* Decides whether this VisualElement should animate in reduced motion
		* mode.
		*
		* TODO: This is currently set on every individual VisualElement but feels
		* like it could be set globally.
		*/
		this.shouldReduceMotion = null;
		/**
		* Decides whether animations should be skipped for this VisualElement.
		* Useful for E2E tests and visual regression testing.
		*/
		this.shouldSkipAnimations = false;
		/**
		* A map of all motion values attached to this visual element. Motion
		* values are source of truth for any given animated value. A motion
		* value might be provided externally by the component via props.
		*/
		this.values = /* @__PURE__ */ new Map();
		this.KeyframeResolver = KeyframeResolver;
		/**
		* Cleanup functions for active features (hover/tap/exit etc)
		*/
		this.features = {};
		/**
		* A map of every subscription that binds the provided or generated
		* motion values onChange listeners to this visual element.
		*/
		this.valueSubscriptions = /* @__PURE__ */ new Map();
		/**
		* A reference to the previously-provided motion values as returned
		* from scrapeMotionValuesFromProps. We use the keys in here to determine
		* if any motion values need to be removed after props are updated.
		*/
		this.prevMotionValues = {};
		/**
		* Track whether this element has been mounted before, to detect
		* remounts after Suspense unmount/remount cycles.
		*/
		this.hasBeenMounted = false;
		/**
		* An object containing a SubscriptionManager for each active event.
		*/
		this.events = {};
		/**
		* An object containing an unsubscribe function for each prop event subscription.
		* For example, every "Update" event can have multiple subscribers via
		* VisualElement.on(), but only one of those can be defined via the onUpdate prop.
		*/
		this.propEventSubscriptions = {};
		this.notifyUpdate = () => this.notify("Update", this.latestValues);
		this.render = () => {
			if (!this.current) return;
			this.triggerBuild();
			this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
		};
		this.renderScheduledAt = 0;
		this.scheduleRender = () => {
			const now = time.now();
			if (this.renderScheduledAt < now) {
				this.renderScheduledAt = now;
				frame.render(this.render, false, true);
			}
		};
		const { latestValues, renderState } = visualState;
		this.latestValues = latestValues;
		this.baseTarget = { ...latestValues };
		this.initialValues = props.initial ? { ...latestValues } : {};
		this.renderState = renderState;
		this.parent = parent;
		this.props = props;
		this.presenceContext = presenceContext;
		this.depth = parent ? parent.depth + 1 : 0;
		this.reducedMotionConfig = reducedMotionConfig;
		this.skipAnimationsConfig = skipAnimations;
		this.options = options;
		this.blockInitialAnimation = Boolean(blockInitialAnimation);
		this.isControllingVariants = isControllingVariants(props);
		this.isVariantNode = isVariantNode(props);
		if (this.isVariantNode) this.variantChildren = /* @__PURE__ */ new Set();
		this.manuallyAnimateOnMount = Boolean(parent && parent.current);
		/**
		* Any motion values that are provided to the element when created
		* aren't yet bound to the element, as this would technically be impure.
		* However, we iterate through the motion values and set them to the
		* initial values for this component.
		*
		* TODO: This is impure and we should look at changing this to run on mount.
		* Doing so will break some tests but this isn't necessarily a breaking change,
		* more a reflection of the test.
		*/
		const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
		for (const key in initialMotionValues) {
			const value = initialMotionValues[key];
			if (latestValues[key] !== void 0 && isMotionValue(value)) value.set(latestValues[key]);
		}
	}
	mount(instance) {
		/**
		* If this element has been mounted before (e.g. after a Suspense
		* unmount/remount), reset motion values to their initial state
		* so animations replay correctly from initial → animate.
		*/
		if (this.hasBeenMounted) for (const key in this.initialValues) {
			this.values.get(key)?.jump(this.initialValues[key]);
			this.latestValues[key] = this.initialValues[key];
		}
		this.current = instance;
		visualElementStore.set(instance, this);
		if (this.projection && !this.projection.instance) this.projection.mount(instance);
		if (this.parent && this.isVariantNode && !this.isControllingVariants) this.removeFromVariantTree = this.parent.addVariantChild(this);
		this.values.forEach((value, key) => this.bindToMotionValue(key, value));
		/**
		* Determine reduced motion preference. Only initialize the matchMedia
		* listener if we actually need the dynamic value (i.e., when config
		* is neither "never" nor "always").
		*/
		if (this.reducedMotionConfig === "never") this.shouldReduceMotion = false;
		else if (this.reducedMotionConfig === "always") this.shouldReduceMotion = true;
		else {
			if (!hasReducedMotionListener.current) initPrefersReducedMotion();
			this.shouldReduceMotion = prefersReducedMotion.current;
		}
		warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled");
		/**
		* Set whether animations should be skipped based on the config.
		*/
		this.shouldSkipAnimations = this.skipAnimationsConfig ?? false;
		this.parent?.addChild(this);
		this.update(this.props, this.presenceContext);
		this.hasBeenMounted = true;
	}
	unmount() {
		this.projection && this.projection.unmount();
		cancelFrame(this.notifyUpdate);
		cancelFrame(this.render);
		this.valueSubscriptions.forEach((remove) => remove());
		this.valueSubscriptions.clear();
		this.removeFromVariantTree && this.removeFromVariantTree();
		this.parent?.removeChild(this);
		for (const key in this.events) this.events[key].clear();
		for (const key in this.features) {
			const feature = this.features[key];
			if (feature) {
				feature.unmount();
				feature.isMounted = false;
			}
		}
		this.current = null;
	}
	addChild(child) {
		this.children.add(child);
		this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set());
		this.enteringChildren.add(child);
	}
	removeChild(child) {
		this.children.delete(child);
		this.enteringChildren && this.enteringChildren.delete(child);
	}
	bindToMotionValue(key, value) {
		if (this.valueSubscriptions.has(key)) this.valueSubscriptions.get(key)();
		if (value.accelerate && acceleratedValues.has(key) && this.current instanceof HTMLElement) {
			const { factory, keyframes, times, ease, duration } = value.accelerate;
			const animation = new NativeAnimation({
				element: this.current,
				name: key,
				keyframes,
				times,
				ease,
				duration: /* @__PURE__ */ secondsToMilliseconds(duration)
			});
			const cleanup = factory(animation);
			this.valueSubscriptions.set(key, () => {
				cleanup();
				animation.cancel();
			});
			return;
		}
		const valueIsTransform = transformProps.has(key);
		if (valueIsTransform && this.onBindTransform) this.onBindTransform();
		const removeOnChange = value.on("change", (latestValue) => {
			this.latestValues[key] = latestValue;
			this.props.onUpdate && frame.preRender(this.notifyUpdate);
			if (valueIsTransform && this.projection) this.projection.isTransformDirty = true;
			this.scheduleRender();
		});
		let removeSyncCheck;
		if (typeof window !== "undefined" && window.MotionCheckAppearSync) removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
		this.valueSubscriptions.set(key, () => {
			removeOnChange();
			if (removeSyncCheck) removeSyncCheck();
			if (value.owner) value.stop();
		});
	}
	sortNodePosition(other) {
		/**
		* If these nodes aren't even of the same type we can't compare their depth.
		*/
		if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) return 0;
		return this.sortInstanceNodePosition(this.current, other.current);
	}
	updateFeatures() {
		let key = "animation";
		for (key in featureDefinitions) {
			const featureDefinition = featureDefinitions[key];
			if (!featureDefinition) continue;
			const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
			/**
			* If this feature is enabled but not active, make a new instance.
			*/
			if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) this.features[key] = new FeatureConstructor(this);
			/**
			* If we have a feature, mount or update it.
			*/
			if (this.features[key]) {
				const feature = this.features[key];
				if (feature.isMounted) feature.update();
				else {
					feature.mount();
					feature.isMounted = true;
				}
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	/**
	* Measure the current viewport box with or without transforms.
	* Only measures axis-aligned boxes, rotate and skew must be manually
	* removed with a re-render to work.
	*/
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
	}
	getStaticValue(key) {
		return this.latestValues[key];
	}
	setStaticValue(key, value) {
		this.latestValues[key] = value;
	}
	/**
	* Update the provided props. Ensure any newly-added motion values are
	* added to our map, old ones removed, and listeners updated.
	*/
	update(props, presenceContext) {
		if (props.transformTemplate || this.props.transformTemplate) this.scheduleRender();
		this.prevProps = this.props;
		this.props = props;
		this.prevPresenceContext = this.presenceContext;
		this.presenceContext = presenceContext;
		/**
		* Update prop event handlers ie onAnimationStart, onAnimationComplete
		*/
		for (let i = 0; i < propEventHandlers.length; i++) {
			const key = propEventHandlers[i];
			if (this.propEventSubscriptions[key]) {
				this.propEventSubscriptions[key]();
				delete this.propEventSubscriptions[key];
			}
			const listener = props["on" + key];
			if (listener) this.propEventSubscriptions[key] = this.on(key, listener);
		}
		this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps || {}, this), this.prevMotionValues);
		if (this.handleChildMotionValue) this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	/**
	* Returns the variant definition with a given name.
	*/
	getVariant(name) {
		return this.props.variants ? this.props.variants[name] : void 0;
	}
	/**
	* Returns the defined default transition on this component.
	*/
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	/**
	* Add a child visual element to our set of children.
	*/
	addVariantChild(child) {
		const closestVariantNode = this.getClosestVariantNode();
		if (closestVariantNode) {
			closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
			return () => closestVariantNode.variantChildren.delete(child);
		}
	}
	/**
	* Add a motion value and bind it to this visual element.
	*/
	addValue(key, value) {
		const existingValue = this.values.get(key);
		if (value !== existingValue) {
			if (existingValue) this.removeValue(key);
			this.bindToMotionValue(key, value);
			this.values.set(key, value);
			this.latestValues[key] = value.get();
		}
	}
	/**
	* Remove a motion value and unbind any active subscriptions.
	*/
	removeValue(key) {
		this.values.delete(key);
		const unsubscribe = this.valueSubscriptions.get(key);
		if (unsubscribe) {
			unsubscribe();
			this.valueSubscriptions.delete(key);
		}
		delete this.latestValues[key];
		this.removeValueFromRenderState(key, this.renderState);
	}
	/**
	* Check whether we have a motion value for this key
	*/
	hasValue(key) {
		return this.values.has(key);
	}
	getValue(key, defaultValue) {
		if (this.props.values && this.props.values[key]) return this.props.values[key];
		let value = this.values.get(key);
		if (value === void 0 && defaultValue !== void 0) {
			value = motionValue(defaultValue === null ? void 0 : defaultValue, { owner: this });
			this.addValue(key, value);
		}
		return value;
	}
	/**
	* If we're trying to animate to a previously unencountered value,
	* we need to check for it in our state and as a last resort read it
	* directly from the instance (which might have performance implications).
	*/
	readValue(key, target) {
		let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : this.getBaseTargetFromProps(this.props, key) ?? this.readValueFromInstance(this.current, key, this.options);
		if (value !== void 0 && value !== null) {
			if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) value = parseFloat(value);
			else if (!findValueType(value) && complex.test(target)) value = getAnimatableNone(key, target);
			this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
		}
		return isMotionValue(value) ? value.get() : value;
	}
	/**
	* Set the base target to later animate back to. This is currently
	* only hydrated on creation and when we first read a value.
	*/
	setBaseTarget(key, value) {
		this.baseTarget[key] = value;
	}
	/**
	* Find the base target for a value thats been removed from all animation
	* props.
	*/
	getBaseTarget(key) {
		const { initial } = this.props;
		let valueFromInitial;
		if (typeof initial === "string" || typeof initial === "object") {
			const variant = resolveVariantFromProps(this.props, initial, this.presenceContext?.custom);
			if (variant) valueFromInitial = variant[key];
		}
		/**
		* If this value still exists in the current initial variant, read that.
		*/
		if (initial && valueFromInitial !== void 0) return valueFromInitial;
		/**
		* Alternatively, if this VisualElement config has defined a getBaseTarget
		* so we can read the value from an alternative source, try that.
		*/
		const target = this.getBaseTargetFromProps(this.props, key);
		if (target !== void 0 && !isMotionValue(target)) return target;
		/**
		* If the value was initially defined on initial, but it doesn't any more,
		* return undefined. Otherwise return the value as initially read from the DOM.
		*/
		return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
	}
	on(eventName, callback) {
		if (!this.events[eventName]) this.events[eventName] = new SubscriptionManager();
		return this.events[eventName].add(callback);
	}
	notify(eventName, ...args) {
		if (this.events[eventName]) this.events[eventName].notify(...args);
	}
	scheduleRenderMicrotask() {
		microtask.render(this.render);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
	constructor() {
		super(...arguments);
		this.KeyframeResolver = DOMKeyframesResolver;
	}
	sortInstanceNodePosition(a, b) {
		/**
		* compareDocumentPosition returns a bitmask, by using the bitwise &
		* we're returning true if 2 in that bitmask is set to true. 2 is set
		* to true if b preceeds a.
		*/
		return a.compareDocumentPosition(b) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(props, key) {
		const style = props.style;
		return style ? style[key] : void 0;
	}
	removeValueFromRenderState(key, { vars, style }) {
		delete vars[key];
		delete style[key];
	}
	handleChildMotionValue() {
		if (this.childSubscription) {
			this.childSubscription();
			delete this.childSubscription;
		}
		const { children } = this.props;
		if (isMotionValue(children)) this.childSubscription = children.on("change", (latest) => {
			if (this.current) this.current.textContent = `${latest}`;
		});
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
/**
* Bounding boxes tend to be defined as top, left, right, bottom. For various operations
* it's easier to consider each axis individually. This function returns a bounding box
* as a map of single-axis min/max values.
*/
function convertBoundingBoxToBox({ top, left, right, bottom }) {
	return {
		x: {
			min: left,
			max: right
		},
		y: {
			min: top,
			max: bottom
		}
	};
}
/**
* Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
* provided by Framer to allow measured points to be corrected for device scaling. This is used
* when measuring DOM elements and DOM event points.
*/
function transformBoxPoints(point, transformPoint) {
	if (!transformPoint) return point;
	const topLeft = transformPoint({
		x: point.left,
		y: point.top
	});
	const bottomRight = transformPoint({
		x: point.right,
		y: point.bottom
	});
	return {
		top: topLeft.y,
		left: topLeft.x,
		bottom: bottomRight.y,
		right: bottomRight.x
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint) {
	return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
const translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
};
const numTransforms = transformPropOrder.length;
/**
* Build a CSS transform style from individual x/y/scale etc properties.
*
* This outputs with a default order of transforms/scales/rotations, this can be customised by
* providing a transformTemplate function.
*/
function buildTransform(latestValues, transform, transformTemplate) {
	let transformString = "";
	let transformIsDefault = true;
	/**
	* Loop over all possible transforms in order, adding the ones that
	* are present to the transform string.
	*/
	for (let i = 0; i < numTransforms; i++) {
		const key = transformPropOrder[i];
		const value = latestValues[key];
		if (value === void 0) continue;
		let valueIsDefault = true;
		if (typeof value === "number") valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
		else {
			const parsed = parseFloat(value);
			valueIsDefault = key.startsWith("scale") ? parsed === 1 : parsed === 0;
		}
		if (!valueIsDefault || transformTemplate) {
			const valueAsType = getValueAsType(value, numberValueTypes[key]);
			if (!valueIsDefault) {
				transformIsDefault = false;
				const transformName = translateAlias[key] || key;
				transformString += `${transformName}(${valueAsType}) `;
			}
			if (transformTemplate) transform[key] = valueAsType;
		}
	}
	transformString = transformString.trim();
	if (transformTemplate) transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
	else if (transformIsDefault) transformString = "none";
	return transformString;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, transformTemplate) {
	const { style, vars, transformOrigin } = state;
	let hasTransform = false;
	let hasTransformOrigin = false;
	/**
	* Loop over all our latest animated values and decide whether to handle them
	* as a style or CSS variable.
	*
	* Transforms and transform origins are kept separately for further processing.
	*/
	for (const key in latestValues) {
		const value = latestValues[key];
		if (transformProps.has(key)) {
			hasTransform = true;
			continue;
		} else if (isCSSVariableName(key)) {
			vars[key] = value;
			continue;
		} else {
			const valueAsType = getValueAsType(value, numberValueTypes[key]);
			if (key.startsWith("origin")) {
				hasTransformOrigin = true;
				transformOrigin[key] = valueAsType;
			} else style[key] = valueAsType;
		}
	}
	if (!latestValues.transform) {
		if (hasTransform || transformTemplate) style.transform = buildTransform(latestValues, state.transform, transformTemplate);
		else if (style.transform)
 /**
		* If we have previously created a transform but currently don't have any,
		* reset transform style to none.
		*/
		style.transform = "none";
	}
	/**
	* Build a transformOrigin style. Uses the same defaults as the browser for
	* undefined origins.
	*/
	if (hasTransformOrigin) {
		const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
		style.transformOrigin = `${originX} ${originY} ${originZ}`;
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
	const elementStyle = element.style;
	let key;
	for (key in style) elementStyle[key] = style[key];
	projection?.applyProjectionStyles(elementStyle, styleProp);
	for (key in vars) elementStyle.setProperty(key, vars[key]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
	if (axis.max === axis.min) return 0;
	return pixels / (axis.max - axis.min) * 100;
}
/**
* We always correct borderRadius as a percentage rather than pixels to reduce paints.
* For example, if you are projecting a box that is 100px wide with a 10px borderRadius
* into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
* borderRadius in both states. If we animate between the two in pixels that will trigger
* a paint each time. If we animate between the two in percentage we'll avoid a paint.
*/
const correctBorderRadius = { correct: (latest, node) => {
	if (!node.target) return latest;
	/**
	* If latest is a string, if it's a percentage we can return immediately as it's
	* going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
	*/
	if (typeof latest === "string") if (px.test(latest)) latest = parseFloat(latest);
	else return latest;
	return `${pixelsToPercent(latest, node.target.x)}% ${pixelsToPercent(latest, node.target.y)}%`;
} };
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/scale-box-shadow.mjs
const correctBoxShadow = { correct: (latest, { treeScale, projectionDelta }) => {
	const original = latest;
	const shadow = complex.parse(latest);
	if (shadow.length > 5) return original;
	const template = complex.createTransformer(latest);
	const offset = typeof shadow[0] !== "number" ? 1 : 0;
	const xScale = projectionDelta.x.scale * treeScale.x;
	const yScale = projectionDelta.y.scale * treeScale.y;
	shadow[0 + offset] /= xScale;
	shadow[1 + offset] /= yScale;
	/**
	* Ideally we'd correct x and y scales individually, but because blur and
	* spread apply to both we have to take a scale average and apply that instead.
	* We could potentially improve the outcome of this by incorporating the ratio between
	* the two scales.
	*/
	const averageScale = mixNumber$1(xScale, yScale, .5);
	if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
	if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
	return template(shadow);
} };
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs
const scaleCorrectors = {
	borderRadius: {
		...correctBorderRadius,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: correctBorderRadius,
	borderTopRightRadius: correctBorderRadius,
	borderBottomLeftRadius: correctBorderRadius,
	borderBottomRightRadius: correctBorderRadius,
	boxShadow: correctBoxShadow
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, { layout, layoutId }) {
	return transformProps.has(key) || key.startsWith("origin") || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps$1(props, prevProps, visualElement) {
	const style = props.style;
	const prevStyle = prevProps?.style;
	const newValues = {};
	if (!style) return newValues;
	for (const key in style) if (isMotionValue(style[key]) || prevStyle && isMotionValue(prevStyle[key]) || isForcedMotionValue(key, props) || visualElement?.getValue(key)?.liveStyle !== void 0) newValues[key] = style[key];
	return newValues;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle$1(element) {
	return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments);
		this.type = "html";
		this.renderInstance = renderHTML;
	}
	readValueFromInstance(instance, key) {
		if (transformProps.has(key)) return this.projection?.isProjecting ? defaultTransformValue(key) : readTransformValue(instance, key);
		else {
			const computedStyle = getComputedStyle$1(instance);
			const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
			return typeof value === "string" ? value.trim() : value;
		}
	}
	measureInstanceViewportBox(instance, { transformPagePoint }) {
		return measureViewportBox(instance, transformPagePoint);
	}
	build(renderState, latestValues, props) {
		buildHTMLStyles(renderState, latestValues, props.transformTemplate);
	}
	scrapeMotionValuesFromProps(props, prevProps, visualElement) {
		return scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/object/ObjectVisualElement.mjs
function isObjectKey(key, object) {
	return key in object;
}
var ObjectVisualElement = class extends VisualElement {
	constructor() {
		super(...arguments);
		this.type = "object";
	}
	readValueFromInstance(instance, key) {
		if (isObjectKey(key, instance)) {
			const value = instance[key];
			if (typeof value === "string" || typeof value === "number") return value;
		}
	}
	getBaseTargetFromProps() {}
	removeValueFromRenderState(key, renderState) {
		delete renderState.output[key];
	}
	measureInstanceViewportBox() {
		return createBox();
	}
	build(renderState, latestValues) {
		Object.assign(renderState.output, latestValues);
	}
	renderInstance(instance, { output }) {
		Object.assign(instance, output);
	}
	sortInstanceNodePosition() {
		return 0;
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/path.mjs
const dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
};
const camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
/**
* Build SVG path properties. Uses the path's measured length to convert
* our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
* and stroke-dasharray attributes.
*
* This function is mutative to reduce per-frame GC.
*
* Note: We use unitless values for stroke-dasharray and stroke-dashoffset
* because Safari incorrectly scales px values when the page is zoomed.
*/
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
	attrs.pathLength = 1;
	const keys = useDashCase ? dashKeys : camelKeys;
	attrs[keys.offset] = `${-offset}`;
	attrs[keys.array] = `${length} ${spacing}`;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
/**
* CSS Motion Path properties that should remain as CSS styles on SVG elements.
*/
const cssMotionPathProperties = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
/**
* Build SVG visual attributes, like cx and style.transform
*/
function buildSVGAttrs(state, { attrX, attrY, attrScale, pathLength, pathSpacing = 1, pathOffset = 0, ...latest }, isSVGTag, transformTemplate, styleProp) {
	buildHTMLStyles(state, latest, transformTemplate);
	/**
	* For svg tags we just want to make sure viewBox is animatable and treat all the styles
	* as normal HTML tags.
	*/
	if (isSVGTag) {
		if (state.style.viewBox) state.attrs.viewBox = state.style.viewBox;
		return;
	}
	state.attrs = state.style;
	state.style = {};
	const { attrs, style } = state;
	/**
	* However, we apply transforms as CSS transforms.
	* So if we detect a transform, transformOrigin we take it from attrs and copy it into style.
	*/
	if (attrs.transform) {
		style.transform = attrs.transform;
		delete attrs.transform;
	}
	if (style.transform || attrs.transformOrigin) {
		style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
		delete attrs.transformOrigin;
	}
	if (style.transform) {
		/**
		* SVG's element transform-origin uses its own median as a reference.
		* Therefore, transformBox becomes a fill-box
		*/
		style.transformBox = styleProp?.transformBox ?? "fill-box";
		delete attrs.transformBox;
	}
	for (const key of cssMotionPathProperties) if (attrs[key] !== void 0) {
		style[key] = attrs[key];
		delete attrs[key];
	}
	if (attrX !== void 0) attrs.x = attrX;
	if (attrY !== void 0) attrs.y = attrY;
	if (attrScale !== void 0) attrs.scale = attrScale;
	if (pathLength !== void 0) buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
/**
* A set of attribute names that are always read/written as camel case.
*/
const camelCaseAttributes = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]);
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/is-svg-tag.mjs
const isSVGTag$1 = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
	renderHTML(element, renderState, void 0, projection);
	for (const key in renderState.attrs) element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
	const newValues = scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
	for (const key in props) if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
		const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
		newValues[targetKey] = props[key];
	}
	return newValues;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments);
		this.type = "svg";
		this.isSVGTag = false;
		this.measureInstanceViewportBox = createBox;
	}
	getBaseTargetFromProps(props, key) {
		return props[key];
	}
	readValueFromInstance(instance, key) {
		if (transformProps.has(key)) {
			const defaultType = getDefaultValueType(key);
			return defaultType ? defaultType.default || 0 : 0;
		}
		key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
		return instance.getAttribute(key);
	}
	scrapeMotionValuesFromProps(props, prevProps, visualElement) {
		return scrapeMotionValuesFromProps(props, prevProps, visualElement);
	}
	build(renderState, latestValues, props) {
		buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
	}
	renderInstance(instance, renderState, styleProp, projection) {
		renderSVG(instance, renderState, styleProp, projection);
	}
	mount(instance) {
		this.isSVGTag = isSVGTag$1(instance.tagName);
		super.mount(instance);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function animateSingleValue(value, keyframes, options) {
	const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
	motionValue$1.start(animateMotionValue("", motionValue$1, keyframes, options));
	return motionValue$1.animation;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function isDOMKeyframes(keyframes) {
	return typeof keyframes === "object" && !Array.isArray(keyframes);
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
function resolveSubjects(subject, keyframes, scope, selectorCache) {
	if (subject == null) return [];
	if (typeof subject === "string" && isDOMKeyframes(keyframes)) return resolveElements(subject, scope, selectorCache);
	else if (subject instanceof NodeList) return Array.from(subject);
	else if (Array.isArray(subject)) return subject.filter((s) => s != null);
	else return [subject];
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs
function calculateRepeatDuration(duration, repeat, _repeatDelay) {
	return duration * (repeat + 1);
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
/**
* Given a absolute or relative time definition and current/prev time state of the sequence,
* calculate an absolute time for the next keyframes.
*/
function calcNextTime(current, next, prev, labels) {
	if (typeof next === "number") return next;
	else if (next.startsWith("-") || next.startsWith("+")) return Math.max(0, current + parseFloat(next));
	else if (next === "<") return prev;
	else if (next.startsWith("<")) return Math.max(0, prev + parseFloat(next.slice(1)));
	else return labels.get(next) ?? current;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function eraseKeyframes(sequence, startTime, endTime) {
	for (let i = 0; i < sequence.length; i++) {
		const keyframe = sequence[i];
		if (keyframe.at > startTime && keyframe.at < endTime) {
			removeItem(sequence, keyframe);
			i--;
		}
	}
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
	/**
	* Erase every existing value between currentTime and targetTime,
	* this will essentially splice this timeline into any currently
	* defined ones.
	*/
	eraseKeyframes(sequence, startTime, endTime);
	for (let i = 0; i < keyframes.length; i++) sequence.push({
		value: keyframes[i],
		at: mixNumber$1(startTime, endTime, offset[i]),
		easing: getEasingForSegment(easing, i)
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs
/**
* Take an array of times that represent repeated keyframes. For instance
* if we have original times of [0, 0.5, 1] then our repeated times will
* be [0, 0.5, 1, 1, 1.5, 2]. Loop over the times and scale them back
* down to a 0-1 scale.
*/
function normalizeTimes(times, repeat) {
	for (let i = 0; i < times.length; i++) times[i] = times[i] / (repeat + 1);
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function compareByTime(a, b) {
	if (a.at === b.at) {
		if (a.value === null) return 1;
		if (b.value === null) return -1;
		return 0;
	} else return a.at - b.at;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/create.mjs
const defaultSegmentEasing = "easeInOut";
const MAX_REPEAT = 20;
function createAnimationsFromSequence(sequence, { defaultTransition = {}, ...sequenceTransition } = {}, scope, generators) {
	const defaultDuration = defaultTransition.duration || .3;
	const animationDefinitions = /* @__PURE__ */ new Map();
	const sequences = /* @__PURE__ */ new Map();
	const elementCache = {};
	const timeLabels = /* @__PURE__ */ new Map();
	let prevTime = 0;
	let currentTime = 0;
	let totalDuration = 0;
	/**
	* Build the timeline by mapping over the sequence array and converting
	* the definitions into keyframes and offsets with absolute time values.
	* These will later get converted into relative offsets in a second pass.
	*/
	for (let i = 0; i < sequence.length; i++) {
		const segment = sequence[i];
		/**
		* If this is a timeline label, mark it and skip the rest of this iteration.
		*/
		if (typeof segment === "string") {
			timeLabels.set(segment, currentTime);
			continue;
		} else if (!Array.isArray(segment)) {
			timeLabels.set(segment.name, calcNextTime(currentTime, segment.at, prevTime, timeLabels));
			continue;
		}
		let [subject, keyframes, transition = {}] = segment;
		/**
		* If a relative or absolute time value has been specified we need to resolve
		* it in relation to the currentTime.
		*/
		if (transition.at !== void 0) currentTime = calcNextTime(currentTime, transition.at, prevTime, timeLabels);
		/**
		* Keep track of the maximum duration in this definition. This will be
		* applied to currentTime once the definition has been parsed.
		*/
		let maxDuration = 0;
		const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0) => {
			const valueKeyframesAsList = keyframesAsList(valueKeyframes);
			const { delay = 0, times = defaultOffset(valueKeyframesAsList), type = defaultTransition.type || "keyframes", repeat, repeatType, repeatDelay = 0, ...remainingTransition } = valueTransition;
			let { ease = defaultTransition.ease || "easeOut", duration } = valueTransition;
			/**
			* Resolve stagger() if defined.
			*/
			const calculatedDelay = typeof delay === "function" ? delay(elementIndex, numSubjects) : delay;
			/**
			* If this animation should and can use a spring, generate a spring easing function.
			*/
			const numKeyframes = valueKeyframesAsList.length;
			const createGenerator = isGenerator(type) ? type : generators?.[type || "keyframes"];
			if (numKeyframes <= 2 && createGenerator) {
				/**
				* As we're creating an easing function from a spring,
				* ideally we want to generate it using the real distance
				* between the two keyframes. However this isn't always
				* possible - in these situations we use 0-100.
				*/
				let absoluteDelta = 100;
				if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
					const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
					absoluteDelta = Math.abs(delta);
				}
				const springTransition = {
					...defaultTransition,
					...remainingTransition
				};
				if (duration !== void 0) springTransition.duration = /* @__PURE__ */ secondsToMilliseconds(duration);
				const springEasing = createGeneratorEasing(springTransition, absoluteDelta, createGenerator);
				ease = springEasing.ease;
				duration = springEasing.duration;
			}
			duration ?? (duration = defaultDuration);
			const startTime = currentTime + calculatedDelay;
			/**
			* If there's only one time offset of 0, fill in a second with length 1
			*/
			if (times.length === 1 && times[0] === 0) times[1] = 1;
			/**
			* Fill out if offset if fewer offsets than keyframes
			*/
			const remainder = times.length - valueKeyframesAsList.length;
			remainder > 0 && fillOffset(times, remainder);
			/**
			* If only one value has been set, ie [1], push a null to the start of
			* the keyframe array. This will let us mark a keyframe at this point
			* that will later be hydrated with the previous value.
			*/
			valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
			/**
			* Handle repeat options
			*/
			if (repeat) {
				invariant(repeat < MAX_REPEAT, "Repeat count too high, must be less than 20", "repeat-count-high");
				duration = calculateRepeatDuration(duration, repeat);
				const originalKeyframes = [...valueKeyframesAsList];
				const originalTimes = [...times];
				ease = Array.isArray(ease) ? [...ease] : [ease];
				const originalEase = [...ease];
				for (let repeatIndex = 0; repeatIndex < repeat; repeatIndex++) {
					valueKeyframesAsList.push(...originalKeyframes);
					for (let keyframeIndex = 0; keyframeIndex < originalKeyframes.length; keyframeIndex++) {
						times.push(originalTimes[keyframeIndex] + (repeatIndex + 1));
						ease.push(keyframeIndex === 0 ? "linear" : getEasingForSegment(originalEase, keyframeIndex - 1));
					}
				}
				normalizeTimes(times, repeat);
			}
			const targetTime = startTime + duration;
			/**
			* Add keyframes, mapping offsets to absolute time.
			*/
			addKeyframes(valueSequence, valueKeyframesAsList, ease, times, startTime, targetTime);
			maxDuration = Math.max(calculatedDelay + duration, maxDuration);
			totalDuration = Math.max(targetTime, totalDuration);
		};
		if (isMotionValue(subject)) {
			const subjectSequence = getSubjectSequence(subject, sequences);
			resolveValueSequence(keyframes, transition, getValueSequence("default", subjectSequence));
		} else {
			const subjects = resolveSubjects(subject, keyframes, scope, elementCache);
			const numSubjects = subjects.length;
			/**
			* For every element in this segment, process the defined values.
			*/
			for (let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++) {
				/**
				* Cast necessary, but we know these are of this type
				*/
				keyframes = keyframes;
				transition = transition;
				const thisSubject = subjects[subjectIndex];
				const subjectSequence = getSubjectSequence(thisSubject, sequences);
				for (const key in keyframes) resolveValueSequence(keyframes[key], getValueTransition(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
			}
		}
		prevTime = currentTime;
		currentTime += maxDuration;
	}
	/**
	* For every element and value combination create a new animation.
	*/
	sequences.forEach((valueSequences, element) => {
		for (const key in valueSequences) {
			const valueSequence = valueSequences[key];
			/**
			* Arrange all the keyframes in ascending time order.
			*/
			valueSequence.sort(compareByTime);
			const keyframes = [];
			const valueOffset = [];
			const valueEasing = [];
			/**
			* For each keyframe, translate absolute times into
			* relative offsets based on the total duration of the timeline.
			*/
			for (let i = 0; i < valueSequence.length; i++) {
				const { at, value, easing } = valueSequence[i];
				keyframes.push(value);
				valueOffset.push(/* @__PURE__ */ progress(0, totalDuration, at));
				valueEasing.push(easing || "easeOut");
			}
			/**
			* If the first keyframe doesn't land on offset: 0
			* provide one by duplicating the initial keyframe. This ensures
			* it snaps to the first keyframe when the animation starts.
			*/
			if (valueOffset[0] !== 0) {
				valueOffset.unshift(0);
				keyframes.unshift(keyframes[0]);
				valueEasing.unshift(defaultSegmentEasing);
			}
			/**
			* If the last keyframe doesn't land on offset: 1
			* provide one with a null wildcard value. This will ensure it
			* stays static until the end of the animation.
			*/
			if (valueOffset[valueOffset.length - 1] !== 1) {
				valueOffset.push(1);
				keyframes.push(null);
			}
			if (!animationDefinitions.has(element)) animationDefinitions.set(element, {
				keyframes: {},
				transition: {}
			});
			const definition = animationDefinitions.get(element);
			definition.keyframes[key] = keyframes;
			/**
			* Exclude `type` from defaultTransition since springs have been
			* converted to duration-based easing functions in resolveValueSequence.
			* Including `type: "spring"` would cause JSAnimation to error when
			* the merged keyframes array has more than 2 keyframes.
			*/
			const { type: _type, ...remainingDefaultTransition } = defaultTransition;
			definition.transition[key] = {
				...remainingDefaultTransition,
				duration: totalDuration,
				ease: valueEasing,
				times: valueOffset,
				...sequenceTransition
			};
		}
	});
	return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
	!sequences.has(subject) && sequences.set(subject, {});
	return sequences.get(subject);
}
function getValueSequence(name, sequences) {
	if (!sequences[name]) sequences[name] = [];
	return sequences[name];
}
function keyframesAsList(keyframes) {
	return Array.isArray(keyframes) ? keyframes : [keyframes];
}
function getValueTransition(transition, key) {
	return transition && transition[key] ? {
		...transition,
		...transition[key]
	} : { ...transition };
}
const isNumber = (keyframe) => typeof keyframe === "number";
const isNumberKeyframesArray = (keyframes) => keyframes.every(isNumber);
//#endregion
//#region node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs
function createDOMVisualElement(element) {
	const options = {
		presenceContext: null,
		props: {},
		visualState: {
			renderState: {
				transform: {},
				transformOrigin: {},
				style: {},
				vars: {},
				attrs: {}
			},
			latestValues: {}
		}
	};
	const node = isSVGElement(element) && !isSVGSVGElement(element) ? new SVGVisualElement(options) : new HTMLVisualElement(options);
	node.mount(element);
	visualElementStore.set(element, node);
}
function createObjectVisualElement(subject) {
	const node = new ObjectVisualElement({
		presenceContext: null,
		props: {},
		visualState: {
			renderState: { output: {} },
			latestValues: {}
		}
	});
	node.mount(subject);
	visualElementStore.set(subject, node);
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/animate/subject.mjs
function isSingleValue(subject, keyframes) {
	return isMotionValue(subject) || typeof subject === "number" || typeof subject === "string" && !isDOMKeyframes(keyframes);
}
/**
* Implementation
*/
function animateSubject(subject, keyframes, options, scope) {
	const animations = [];
	if (isSingleValue(subject, keyframes)) animations.push(animateSingleValue(subject, isDOMKeyframes(keyframes) ? keyframes.default || keyframes : keyframes, options ? options.default || options : options));
	else {
		if (subject == null) return animations;
		const subjects = resolveSubjects(subject, keyframes, scope);
		const numSubjects = subjects.length;
		invariant(Boolean(numSubjects), "No valid elements provided.", "no-valid-elements");
		for (let i = 0; i < numSubjects; i++) {
			const thisSubject = subjects[i];
			const createVisualElement = thisSubject instanceof Element ? createDOMVisualElement : createObjectVisualElement;
			if (!visualElementStore.has(thisSubject)) createVisualElement(thisSubject);
			const visualElement = visualElementStore.get(thisSubject);
			const transition = { ...options };
			/**
			* Resolve stagger function if provided.
			*/
			if ("delay" in transition && typeof transition.delay === "function") transition.delay = transition.delay(i, numSubjects);
			animations.push(...animateTarget(visualElement, {
				...keyframes,
				transition
			}, {}));
		}
	}
	return animations;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/animate/sequence.mjs
function animateSequence(sequence, options, scope) {
	const animations = [];
	createAnimationsFromSequence(sequence.map((segment) => {
		if (Array.isArray(segment) && typeof segment[0] === "function") {
			const callback = segment[0];
			const mv = motionValue(0);
			mv.on("change", callback);
			if (segment.length === 1) return [mv, [0, 1]];
			else if (segment.length === 2) return [
				mv,
				[0, 1],
				segment[1]
			];
			else return [
				mv,
				segment[1],
				segment[2]
			];
		}
		return segment;
	}), options, scope, { spring }).forEach(({ keyframes, transition }, subject) => {
		animations.push(...animateSubject(subject, keyframes, transition));
	});
	return animations;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/animate/index.mjs
function isSequence(value) {
	return Array.isArray(value) && value.some(Array.isArray);
}
/**
* Creates an animation function that is optionally scoped
* to a specific element.
*/
function createScopedAnimate(options = {}) {
	const { scope, reduceMotion } = options;
	/**
	* Implementation
	*/
	function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options) {
		let animations = [];
		let animationOnComplete;
		if (isSequence(subjectOrSequence)) {
			const { onComplete, ...sequenceOptions } = optionsOrKeyframes || {};
			if (typeof onComplete === "function") animationOnComplete = onComplete;
			animations = animateSequence(subjectOrSequence, reduceMotion !== void 0 ? {
				reduceMotion,
				...sequenceOptions
			} : sequenceOptions, scope);
		} else {
			const { onComplete, ...rest } = options || {};
			if (typeof onComplete === "function") animationOnComplete = onComplete;
			animations = animateSubject(subjectOrSequence, optionsOrKeyframes, reduceMotion !== void 0 ? {
				reduceMotion,
				...rest
			} : rest, scope);
		}
		const animation = new GroupAnimationWithThen(animations);
		if (animationOnComplete) animation.finished.then(animationOnComplete);
		if (scope) {
			scope.animations.push(animation);
			animation.finished.then(() => {
				removeItem(scope.animations, animation);
			});
		}
		return animation;
	}
	return scopedAnimate;
}
const animate = createScopedAnimate();
//#endregion
//#region .svelte-kit/adapter-bun/entries/pages/(app)/_layout.svelte.js
const isPlaywrightEnv = () => {
	if (typeof window === "undefined") return false;
	return window.location.search.includes("@isPlaywright=true");
};
const pwLog = (...args) => {};
const mergeTransitions = (...args) => {
	return args.reduce((acc, next) => {
		return {
			...acc,
			...next
		};
	}, {});
};
const ANIMATE_PRESENCE_CONTEXT = /* @__PURE__ */ Symbol("animate-presence-context");
const PRESENCE_DEPTH_CONTEXT = /* @__PURE__ */ Symbol("presence-depth-context");
const resetTransforms = (element2) => {
	const s = element2.style;
	s.transform = "none";
	s.webkitTransform = "none";
	s.msTransform = "none";
	s.MozTransform = "none";
	s.OTransform = "none";
};
const createAnimatePresenceContext = (context) => {
	const initial = context.initial !== false;
	const mode = context.mode ?? "sync";
	let isInitialRenderPhase = context.initial === false;
	const seenKeys = /* @__PURE__ */ new Set();
	const exitedKeys = /* @__PURE__ */ new Set();
	let enterBlocked = false;
	const enterUnblockedCallbacks = /* @__PURE__ */ new Set();
	if (isInitialRenderPhase && typeof window !== "undefined") requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			isInitialRenderPhase = false;
		});
	});
	const shouldAnimateEnter = (key) => {
		if (exitedKeys.has(key)) return true;
		if (!isInitialRenderPhase) return true;
		return seenKeys.has(key);
	};
	const isEnterBlocked = () => {
		return mode === "wait" && inFlightExits > 0;
	};
	const onEnterUnblocked = (callback) => {
		enterUnblockedCallbacks.add(callback);
		return () => {
			enterUnblockedCallbacks.delete(callback);
		};
	};
	const notifyEnterUnblocked = () => {
		pwLog("[presence] notifyEnterUnblocked", { callbackCount: enterUnblockedCallbacks.size });
		const callbacks = Array.from(enterUnblockedCallbacks);
		enterUnblockedCallbacks.clear();
		callbacks.forEach((cb) => {
			try {
				cb();
			} catch (e) {
				console.error("[presence] onEnterUnblocked callback error:", e);
			}
		});
	};
	pwLog("[presence] createContext", {
		initial,
		mode,
		isInitialRenderPhase,
		onExitComplete: !!context.onExitComplete
	});
	const children = /* @__PURE__ */ new Map();
	let inFlightExits = 0;
	const registerChild = (key, element2, exit, mergedTransition) => {
		const initialRect = element2.getBoundingClientRect();
		const initialStyle = getComputedStyle(element2);
		const wasExited = exitedKeys.has(key);
		seenKeys.add(key);
		if (wasExited) exitedKeys.delete(key);
		pwLog("[presence] registerChild", {
			key,
			hasExit: !!exit,
			exit,
			wasExited,
			mode,
			enterBlocked,
			rect: {
				w: initialRect.width,
				h: initialRect.height
			}
		});
		children.set(key, {
			element: element2,
			exit,
			mergedTransition,
			lastRect: initialRect,
			lastComputedStyle: initialStyle
		});
	};
	const updateChildState = (key, rect, computedStyle) => {
		const child = children.get(key);
		if (child && rect.width > 0 && rect.height > 0) {
			child.lastRect = rect;
			child.lastComputedStyle = computedStyle;
		}
	};
	const updateChildAnimatedStyle = (key, opacity, transform) => {
		const child = children.get(key);
		if (child) {
			child.lastAnimatedOpacity = opacity;
			child.lastAnimatedTransform = transform;
		}
	};
	const unregisterChild = (key) => {
		const child = children.get(key);
		pwLog("[presence] unregisterChild", {
			key,
			mode,
			found: !!child,
			hasExit: !!child?.exit,
			exit: child?.exit
		});
		if (!child) return;
		exitedKeys.add(key);
		if (!child.exit) {
			children.delete(key);
			return;
		}
		if (mode === "wait") enterBlocked = true;
		const rect = child.lastRect;
		const computed = child.lastComputedStyle;
		const shouldPreserveLayout = mode !== "popLayout";
		let placeholder = null;
		const layoutParent = child.element.parentElement;
		if (shouldPreserveLayout && layoutParent) {
			placeholder = document.createElement(child.element.tagName.toLowerCase());
			placeholder.setAttribute("data-presence-placeholder", "true");
			placeholder.style.display = computed.display === "contents" ? "block" : computed.display;
			placeholder.style.width = `${rect.width}px`;
			placeholder.style.height = `${rect.height}px`;
			placeholder.style.margin = computed.margin;
			placeholder.style.boxSizing = computed.boxSizing;
			placeholder.style.position = "static";
			placeholder.style.visibility = "hidden";
			placeholder.style.pointerEvents = "none";
			if (computed.flex) placeholder.style.flex = computed.flex;
			if (computed.alignSelf) placeholder.style.alignSelf = computed.alignSelf;
			layoutParent.insertBefore(placeholder, child.element);
		}
		const clone = child.element.cloneNode(true);
		if (clone.id) clone.removeAttribute("id");
		try {
			for (let i = 0; i < computed.length; i += 1) {
				const prop = computed[i];
				if (/transform/i.test(prop)) continue;
				const value = computed.getPropertyValue(prop);
				const priority = computed.getPropertyPriority(prop);
				if (value) clone.style.setProperty(prop, value, priority);
			}
			resetTransforms(clone);
		} catch {}
		if (child.lastAnimatedOpacity != null) clone.style.opacity = child.lastAnimatedOpacity;
		let parent = child.element.parentElement ?? document.body;
		let positioningParent = parent;
		while (positioningParent && positioningParent !== document.body) {
			if (getComputedStyle(positioningParent).display !== "contents") break;
			positioningParent = positioningParent.parentElement ?? document.body;
		}
		const parentRect = positioningParent.getBoundingClientRect();
		if (getComputedStyle(positioningParent).position === "static") positioningParent.style.position = "relative";
		parent = positioningParent;
		const originalDisplay = computed.display;
		clone.style.position = "absolute";
		clone.style.top = `${rect.top - parentRect.top + (parent.scrollTop ?? 0)}px`;
		clone.style.left = `${rect.left - parentRect.left + (parent.scrollLeft ?? 0)}px`;
		clone.style.width = `${rect.width}px`;
		clone.style.height = `${rect.height}px`;
		clone.style.pointerEvents = "none";
		clone.style.visibility = "visible";
		if (originalDisplay === "none" || originalDisplay === "contents") clone.style.display = "block";
		clone.style.margin = "0";
		clone.style.boxSizing = "border-box";
		resetTransforms(clone);
		try {
			const siblings = Array.from(parent.children);
			let maxZ = 0;
			for (const sib of siblings) {
				if (sib === clone) continue;
				const z = parseInt(getComputedStyle(sib).zIndex || "0", 10);
				if (!Number.isNaN(z)) maxZ = Math.max(maxZ, z);
			}
			clone.style.zIndex = String(maxZ + 1 || 9999);
		} catch {
			clone.style.zIndex = "9999";
		}
		clone.setAttribute("data-clone", "true");
		clone.setAttribute("data-exiting", "true");
		clone.setAttribute("data-mode", mode);
		pwLog("[presence] clone created", {
			key,
			mode,
			rect: {
				w: rect.width,
				h: rect.height,
				top: rect.top,
				left: rect.left
			}
		});
		parent.appendChild(clone);
		const { ease: exitEase, transition: __, ...exitKeyframes } = child.exit ?? {};
		const exitObj = child.exit ?? {};
		const finalTransition = mergeTransitions({ duration: .35 }, child.mergedTransition ?? {}, exitObj.transition ?? {}, exitEase ? { ease: exitEase } : {});
		const exitingElement = child.element;
		inFlightExits += 1;
		requestAnimationFrame(() => {
			animate(clone, exitKeyframes, finalTransition).finished.catch(() => {}).finally(() => {
				try {
					clone.style.zIndex = "";
				} catch {}
				clone.remove();
				placeholder?.remove();
				pwLog("[presence] clone REMOVED from DOM", {
					key,
					mode,
					clonesInDOM: document.querySelectorAll("[data-clone=\"true\"]").length,
					boxesInDOM: document.querySelectorAll("[data-testid=\"box\"]").length
				});
				const currentChild = children.get(key);
				if (currentChild && currentChild.element === exitingElement) children.delete(key);
				else pwLog("[presence] child NOT deleted (re-entry registered new element)", {
					key,
					hasCurrentChild: !!currentChild,
					isSameElement: currentChild?.element === exitingElement
				});
				pwLog("[presence] element count after exit", {
					childrenMapSize: children.size,
					inFlightExits: inFlightExits - 1,
					clonesInDOM: document.querySelectorAll("[data-clone=\"true\"]").length
				});
				inFlightExits -= 1;
				if (inFlightExits === 0) {
					context.onExitComplete?.();
					if (mode === "wait" && enterBlocked) {
						enterBlocked = false;
						notifyEnterUnblocked();
					}
				}
			});
		});
	};
	return {
		initial,
		mode,
		shouldAnimateEnter,
		isEnterBlocked,
		onEnterUnblocked,
		onExitComplete: context.onExitComplete,
		registerChild,
		updateChildState,
		updateChildAnimatedStyle,
		unregisterChild
	};
};
const getAnimatePresenceContext = () => {
	return getContext(ANIMATE_PRESENCE_CONTEXT);
};
const setAnimatePresenceContext = (context) => {
	setContext(ANIMATE_PRESENCE_CONTEXT, context);
};
const getPresenceDepth = () => getContext(PRESENCE_DEPTH_CONTEXT);
const setPresenceDepth = (depth) => {
	setContext(PRESENCE_DEPTH_CONTEXT, depth);
};
function AnimatePresence($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		const { children, initial = true, mode = "sync", onExitComplete } = $$props;
		setAnimatePresenceContext(createAnimatePresenceContext({
			initial,
			mode,
			onExitComplete
		}));
		setPresenceDepth(0);
		$$renderer2.push(`<div class="animate-presence-container svelte-dzo2eg">`);
		children?.($$renderer2);
		$$renderer2.push(`<!----></div>`);
	});
}
const isEmpty = (obj) => {
	if (!obj) return true;
	return Object.keys(obj).length === 0;
};
const isNotEmpty = (obj) => {
	return !isEmpty(obj);
};
const VOID_TAGS = /* @__PURE__ */ new Set([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr"
]);
const mergeInlineStyles = (existingStyle, initial, animateFallback) => {
	const base = parseStyleString(typeof existingStyle === "string" ? existingStyle : "");
	const source = initial && Object.keys(initial).length > 0 ? initial : animateFallback ?? null;
	if (!source) return stringifyStyleObject(base);
	const transformParts = [];
	const setProp = (cssProp, value) => {
		if (value == null) return;
		const v = Array.isArray(value) ? value[0] : value;
		if (v == null) return;
		base[cssProp] = String(v);
	};
	const setPx = (cssProp, value) => {
		if (value == null) return;
		const v = Array.isArray(value) ? value[0] : value;
		if (v == null) return;
		base[cssProp] = typeof v === "number" ? `${v}px` : String(v);
	};
	const addTransform = (fn, value, unit) => {
		if (value == null) return;
		const v = Array.isArray(value) ? value[0] : value;
		if (v == null) return;
		const val = typeof v === "number" ? `${v}${unit}` : String(v);
		transformParts.push(`${fn}(${val})`);
	};
	for (const key of Object.keys(source)) {
		const value = source[key];
		switch (key) {
			case "opacity":
				setProp("opacity", value);
				break;
			case "backgroundColor":
				setProp("background-color", value);
				break;
			case "borderRadius":
				setProp("border-radius", value);
				break;
			case "width":
				setPx("width", value);
				break;
			case "height":
				setPx("height", value);
				break;
			case "x":
				addTransform("translateX", value, "px");
				break;
			case "y":
				addTransform("translateY", value, "px");
				break;
			case "z":
				addTransform("translateZ", value, "px");
				break;
			case "scale":
				addTransform("scale", value, "");
				break;
			case "scaleX":
				addTransform("scaleX", value, "");
				break;
			case "scaleY":
				addTransform("scaleY", value, "");
				break;
			case "rotate":
				addTransform("rotate", value, typeof (Array.isArray(value) ? value[0] : value) === "number" ? "deg" : "");
				break;
			case "rotateX":
				addTransform("rotateX", value, typeof (Array.isArray(value) ? value[0] : value) === "number" ? "deg" : "");
				break;
			case "rotateY":
				addTransform("rotateY", value, typeof (Array.isArray(value) ? value[0] : value) === "number" ? "deg" : "");
				break;
			case "rotateZ":
				addTransform("rotateZ", value, typeof (Array.isArray(value) ? value[0] : value) === "number" ? "deg" : "");
				break;
			case "skew":
			case "skewX":
			case "skewY":
				addTransform(key, value, typeof (Array.isArray(value) ? value[0] : value) === "number" ? "deg" : "");
				break;
			case "pointerEvents":
				base["pointer-events"] = String(Array.isArray(value) ? value[0] : value);
				break;
			case "cursor":
				setProp("cursor", value);
				break;
			case "pathLength":
			case "pathOffset":
			case "pathSpacing":
			case "strokeDasharray":
			case "stroke-dasharray":
			case "strokeDashoffset":
			case "stroke-dashoffset": break;
			default:
				if (typeof value === "string" || typeof value === "number") base[toKebabCase(key)] = String(value);
				break;
		}
	}
	if (transformParts.length > 0) base["transform"] = transformParts.join(" ");
	return stringifyStyleObject(base);
};
const parseStyleString = (style) => {
	const out = {};
	style.split(";").map((s) => s.trim()).filter(Boolean).forEach((decl) => {
		const idx = decl.indexOf(":");
		if (idx === -1) return;
		const prop = decl.slice(0, idx).trim();
		const value = decl.slice(idx + 1).trim();
		if (prop) out[prop] = value;
	});
	return out;
};
const stringifyStyleObject = (obj) => Object.entries(obj).map(([k, v]) => `${k}: ${v}`).join("; ");
const toKebabCase = (s) => s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
const isNativelyFocusable = (tag, attrs = {}) => {
	if (attrs.tabindex != null) return true;
	if (attrs.tabIndex != null) return true;
	if (attrs.contenteditable != null) return true;
	switch (tag) {
		case "a": return Boolean(attrs.href);
		case "button":
		case "input":
		case "select":
		case "textarea":
		case "summary": return true;
		default: return false;
	}
};
const getInitialKeyframes = (initial) => {
	return initial === false ? void 0 : initial;
};
const resolveVariant = (variants, key) => {
	if (!variants || !key) return void 0;
	return variants[key];
};
const resolveInitial = (initial, variants) => {
	if (initial === false) return false;
	if (initial === void 0) return void 0;
	if (typeof initial === "string") return resolveVariant(variants, initial);
	return initial;
};
const resolveAnimate = (animate2, variants) => {
	if (animate2 === void 0) return void 0;
	if (typeof animate2 === "string") return resolveVariant(variants, animate2);
	return animate2;
};
const VARIANT_CONTEXT_KEY = /* @__PURE__ */ Symbol("variant-context");
const INITIAL_FALSE_CONTEXT_KEY = /* @__PURE__ */ Symbol("initial-false-context");
const setVariantContext = (store) => {
	setContext(VARIANT_CONTEXT_KEY, store);
};
const getVariantContext = () => {
	return getContext(VARIANT_CONTEXT_KEY);
};
const setInitialFalseContext = (value) => {
	setContext(INITIAL_FALSE_CONTEXT_KEY, value);
};
const getInitialFalseContext = () => {
	return getContext(INITIAL_FALSE_CONTEXT_KEY) ?? false;
};
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const SVG_TAGS = /* @__PURE__ */ new Set([
	"svg",
	"animate",
	"animatemotion",
	"animatetransform",
	"circle",
	"clippath",
	"defs",
	"desc",
	"ellipse",
	"feblend",
	"fecolormatrix",
	"fecomponenttransfer",
	"fecomposite",
	"feconvolvematrix",
	"fediffuselighting",
	"fedisplacementmap",
	"fedistantlight",
	"fedropshadow",
	"feflood",
	"fefunca",
	"fefuncb",
	"fefuncg",
	"fefuncr",
	"fegaussianblur",
	"feimage",
	"femerge",
	"femergenode",
	"femorphology",
	"feoffset",
	"fepointlight",
	"fespecularlighting",
	"fespotlight",
	"fetile",
	"feturbulence",
	"filter",
	"foreignobject",
	"g",
	"image",
	"line",
	"lineargradient",
	"marker",
	"mask",
	"metadata",
	"mpath",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"radialgradient",
	"rect",
	"set",
	"stop",
	"switch",
	"symbol",
	"text",
	"textpath",
	"title",
	"tref",
	"tspan",
	"use",
	"view"
]);
const isSVGTag = (tag) => {
	return SVG_TAGS.has(tag.toLowerCase());
};
const computeNormalizedSVGInitialAttrs = (initial) => {
	if (!initial) return null;
	if (!("pathLength" in initial || "pathSpacing" in initial || "pathOffset" in initial)) return null;
	const toPx = (v) => typeof v === "number" ? `${v}px` : String(v);
	const negatePx = (v) => {
		if (typeof v === "number") return `${-v}px`;
		const s = String(v);
		return s.startsWith("-") ? s : /^[\d.]+(px)?$/i.test(s) ? `-${s}` : s;
	};
	const len = initial.pathLength ?? 0;
	const spa = initial.pathSpacing ?? (typeof len === "number" ? 1 - len : 1);
	const off = initial.pathOffset ?? 0;
	return {
		pathLength: "1",
		"stroke-dasharray": `${toPx(len)} ${toPx(spa)}`,
		"stroke-dashoffset": negatePx(off)
	};
};
let keyCounter = 0;
function _MotionContainer($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, tag = "div", key: keyProp, variants: variantsProp, initial: initialProp, animate: animateProp, exit: exitProp, transition: transitionProp, onAnimationStart: onAnimationStartProp, onAnimationComplete: onAnimationCompleteProp, style: styleProp, class: classProp, whileTap: whileTapProp, whileHover: whileHoverProp, whileFocus: whileFocusProp, whileInView: whileInViewProp, whileDrag: whileDragProp, onHoverStart: onHoverStartProp, onHoverEnd: onHoverEndProp, onFocusStart: onFocusStartProp, onFocusEnd: onFocusEndProp, onInViewStart: onInViewStartProp, onInViewEnd: onInViewEndProp, onTapStart: onTapStartProp, onTap: onTapProp, onTapCancel: onTapCancelProp, onDragStart: onDragStartProp, onDrag: onDragProp, onDragEnd: onDragEndProp, onDirectionLock: onDirectionLockProp, onDragTransitionEnd: onDragTransitionEndProp, drag: dragProp, dragConstraints: dragConstraintsProp, dragElastic: dragElasticProp, dragMomentum: dragMomentumProp, dragTransition: dragTransitionProp, dragDirectionLock: dragDirectionLockProp, dragPropagation: dragPropagationProp, dragSnapToOrigin: dragSnapToOriginProp, dragListener: dragListenerProp, dragControls: dragControlsProp, layout: layoutProp, layoutId: layoutIdProp, ref: element$1 = null, $$slots, $$events, ...rest } = $$props;
		let isLoaded = "mounting";
		let dataPath = -1;
		const context = getAnimatePresenceContext();
		const presenceDepth = getPresenceDepth();
		if (context && presenceDepth === 0 && !keyProp) throw new Error("motion elements that are direct children of AnimatePresence must have a `key` prop. Example: <motion.div key=\"unique-id\" />");
		if (presenceDepth !== void 0) setPresenceDepth(presenceDepth + 1);
		const presenceKey = keyProp ?? `motion-${++keyCounter}`;
		if (context) onDestroy(() => {
			context.unregisterChild(presenceKey);
		});
		const isPlaywright = isPlaywrightEnv();
		const isVoidTag = derived(() => VOID_TAGS.has(tag));
		const parentVariantStore = getVariantContext();
		let initialInheritedVariant = void 0;
		if (parentVariantStore) parentVariantStore.subscribe((v) => initialInheritedVariant = v)();
		const localVariantStore = writable(typeof animateProp === "string" ? animateProp : variantsProp && initialInheritedVariant || void 0);
		let inheritedVariant = initialInheritedVariant;
		const effectiveAnimate = derived(() => animateProp ?? (variantsProp ? inheritedVariant ?? initialInheritedVariant : void 0));
		const parentInitialFalse = getInitialFalseContext();
		const effectiveInitialProp = (context ? !context.shouldAnimateEnter(presenceKey) : false) ? false : initialProp !== void 0 ? initialProp : parentInitialFalse && variantsProp ? false : void 0;
		if (initialProp === false) setInitialFalseContext(true);
		setVariantContext(localVariantStore);
		const resolvedInitial = derived(() => resolveInitial(effectiveInitialProp, variantsProp));
		const resolvedAnimate = derived(() => resolveAnimate(effectiveAnimate(), variantsProp));
		const initialKeyframes = derived(() => getInitialKeyframes(resolvedInitial()));
		const derivedAttrs = derived(() => ({
			...rest,
			...whileTapProp && !isNativelyFocusable(tag, rest) && (rest?.tabindex ?? rest?.tabIndex ?? void 0) === void 0 ? { tabindex: 0 } : {},
			...isPlaywright ? {
				"data-playwright": isPlaywright,
				"data-is-loaded": isLoaded,
				"data-path": dataPath
			} : {},
			...(() => {
				if (!initialKeyframes()) return {};
				const attrs = computeNormalizedSVGInitialAttrs(initialKeyframes());
				if (attrs) return attrs;
				return {};
			})(),
			style: mergeInlineStyles(initialKeyframes() && "pathLength" in initialKeyframes() && isLoaded === "mounting" ? `${styleProp || ""};visibility:hidden` : styleProp, initialKeyframes(), isNotEmpty(initialKeyframes()) ? void 0 : resolvedAnimate()),
			class: classProp
		}));
		if (isVoidTag()) {
			$$renderer2.push("<!--[0-->");
			if (isSVGTag(String(tag))) {
				$$renderer2.push("<!--[0-->");
				element($$renderer2, tag, () => {
					$$renderer2.push(`${attributes({
						xmlns: SVG_NAMESPACE,
						...derivedAttrs()
					})}`);
				});
			} else {
				$$renderer2.push("<!--[-1-->");
				element($$renderer2, tag, () => {
					$$renderer2.push(`${attributes({ ...derivedAttrs() })}`);
				});
			}
			$$renderer2.push(`<!--]-->`);
		} else if (isSVGTag(String(tag))) {
			$$renderer2.push("<!--[1-->");
			element($$renderer2, tag, () => {
				$$renderer2.push(`${attributes({
					xmlns: SVG_NAMESPACE,
					...derivedAttrs()
				})}`);
			}, () => {
				children?.($$renderer2);
				$$renderer2.push(`<!---->`);
			});
		} else {
			$$renderer2.push("<!--[-1-->");
			element($$renderer2, tag, () => {
				$$renderer2.push(`${attributes({ ...derivedAttrs() })}`);
			}, () => {
				children?.($$renderer2);
				$$renderer2.push(`<!---->`);
			});
		}
		$$renderer2.push(`<!--]-->`);
		bind_props($$props, { ref: element$1 });
	});
}
function A($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "a" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Abbr($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "abbr" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Address($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "address" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Animate($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "animate" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Animatemotion($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "animatemotion" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Animatetransform($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "animatetransform" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Area($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "area" },
				rest,
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
function Article($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "article" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Aside($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "aside" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Audio($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "audio" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function B($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "b" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Base($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "base" },
				rest,
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
function Bdi($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "bdi" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Bdo($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "bdo" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Blockquote($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "blockquote" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Br($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "br" },
				rest,
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
function Button($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "button" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Canvas($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "canvas" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Caption($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "caption" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Circle$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "circle" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Cite($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "cite" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Clippath($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "clippath" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Code($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "code" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Col($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "col" },
				rest,
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
function Colgroup($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "colgroup" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Cursor($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "cursor" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Data($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "data" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Datalist($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "datalist" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Dd($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "dd" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Defs($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "defs" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Del($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "del" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Desc($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "desc" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Details($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "details" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Dfn($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "dfn" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Dialog($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "dialog" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Div($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "div" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Dl($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "dl" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Dt($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "dt" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Ellipse($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "ellipse" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Em($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "em" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Embed($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "embed" },
				rest,
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
function Feblend($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "feblend" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Fecolormatrix($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "fecolormatrix" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Fecomponenttransfer($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "fecomponenttransfer" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Fecomposite($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "fecomposite" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Feconvolvematrix($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "feconvolvematrix" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Fediffuselighting($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "fediffuselighting" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Fedisplacementmap($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "fedisplacementmap" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Fedistantlight($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "fedistantlight" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Feflood($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "feflood" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Fefunca($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "fefunca" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Fefuncb($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "fefuncb" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Fefuncg($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "fefuncg" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Fefuncr($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "fefuncr" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Fegaussianblur($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "fegaussianblur" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Feimage($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "feimage" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Femerge($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "femerge" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Femergenode($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "femergenode" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Femorphology($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "femorphology" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Feoffset($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "feoffset" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Fepointlight($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "fepointlight" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Fespecularlighting($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "fespecularlighting" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Fespotlight($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "fespotlight" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Fetile($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "fetile" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Feturbulence($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "feturbulence" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Fieldset($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "fieldset" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Figcaption($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "figcaption" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Figure($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "figure" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Filter($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "filter" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Footer($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "footer" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Foreignobject($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "foreignobject" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Form($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "form" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function G($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "g" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function H1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "h1" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function H2($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "h2" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function H3($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "h3" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function H4($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "h4" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function H5($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "h5" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function H6($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "h6" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Header($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "header" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Hgroup($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "hgroup" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Hr($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "hr" },
				rest,
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
function I($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "i" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Iframe($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "iframe" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Image$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "image" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Img($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "img" },
				rest,
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
function Input($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "input" },
				rest,
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
function Ins($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "ins" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Kbd($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "kbd" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Label($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "label" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Legend($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "legend" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Li($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "li" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Line($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "line" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Lineargradient($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "lineargradient" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Main($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "main" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Map$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "map" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Mark($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "mark" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Marker($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "marker" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Mask($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "mask" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Math$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "math" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Menu$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "menu" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Metadata($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "metadata" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Meter($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "meter" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Mpath($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "mpath" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Nav($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "nav" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Noscript($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "noscript" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Object$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "object" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Ol($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "ol" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Optgroup($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "optgroup" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Option($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "option" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Output($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "output" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function P($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "p" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Path($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "path" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Pattern($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "pattern" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Picture($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "picture" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Polygon($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "polygon" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Polyline($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "polyline" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Pre($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "pre" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Progress($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "progress" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Q($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "q" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Radialgradient($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "radialgradient" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Rect($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "rect" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Rp($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "rp" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Rt($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "rt" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Ruby($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "ruby" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function S($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "s" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Samp($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "samp" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Script($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "script" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Search($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "search" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Section($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "section" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Select($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "select" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Selectedcontent($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "selectedcontent" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Set$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "set" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Slot($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "slot" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Small($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "small" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Source($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "source" },
				rest,
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
function Span($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "span" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Stop($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "stop" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Strong($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "strong" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Style($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "style" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Sub($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "sub" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Summary($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "summary" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Sup($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "sup" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Svg($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "svg" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Switch($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "switch" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Symbol$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "symbol" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Table($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "table" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Tbody($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "tbody" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Td($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "td" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Template($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "template" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Text($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "text" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Textarea($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "textarea" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Textpath($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "textpath" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Tfoot($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "tfoot" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Th($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "th" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Thead($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "thead" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Time($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "time" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Title($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "title" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Tr($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "tr" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Track($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "track" },
				rest,
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
function Tref($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "tref" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Tspan($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "tspan" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function U($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "u" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Ul($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "ul" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Use($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "use" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Var($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "var" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Video($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "video" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function View($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children, ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "view" },
				rest,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer4) => {
						children?.($$renderer4);
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				}
			]));
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
function Wbr($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, $$slots, $$events, ...rest } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			_MotionContainer($$renderer3, spread_props([
				{ tag: "wbr" },
				rest,
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
const motion = Object.fromEntries(Object.entries(/* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	A,
	Abbr,
	Address,
	Animate,
	Animatemotion,
	Animatetransform,
	Area,
	Article,
	Aside,
	Audio,
	B,
	Base,
	Bdi,
	Bdo,
	Blockquote,
	Br,
	Button,
	Canvas,
	Caption,
	Circle: Circle$1,
	Cite,
	Clippath,
	Code,
	Col,
	Colgroup,
	Cursor,
	Data,
	Datalist,
	Dd,
	Defs,
	Del,
	Desc,
	Details,
	Dfn,
	Dialog,
	Div,
	Dl,
	Dt,
	Ellipse,
	Em,
	Embed,
	Feblend,
	Fecolormatrix,
	Fecomponenttransfer,
	Fecomposite,
	Feconvolvematrix,
	Fediffuselighting,
	Fedisplacementmap,
	Fedistantlight,
	Feflood,
	Fefunca,
	Fefuncb,
	Fefuncg,
	Fefuncr,
	Fegaussianblur,
	Feimage,
	Femerge,
	Femergenode,
	Femorphology,
	Feoffset,
	Fepointlight,
	Fespecularlighting,
	Fespotlight,
	Fetile,
	Feturbulence,
	Fieldset,
	Figcaption,
	Figure,
	Filter,
	Footer,
	Foreignobject,
	Form,
	G,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	Header,
	Hgroup,
	Hr,
	I,
	Iframe,
	Image: Image$1,
	Img,
	Input,
	Ins,
	Kbd,
	Label,
	Legend,
	Li,
	Line,
	Lineargradient,
	Main,
	Map: Map$1,
	Mark,
	Marker,
	Mask,
	Math: Math$1,
	Menu: Menu$1,
	Metadata,
	Meter,
	Mpath,
	Nav,
	Noscript,
	Object: Object$1,
	Ol,
	Optgroup,
	Option,
	Output,
	P,
	Path,
	Pattern,
	Picture,
	Polygon,
	Polyline,
	Pre,
	Progress,
	Q,
	Radialgradient,
	Rect,
	Rp,
	Rt,
	Ruby,
	S,
	Samp,
	Script,
	Search,
	Section,
	Select,
	Selectedcontent,
	Set: Set$1,
	Slot,
	Small,
	Source,
	Span,
	Stop,
	Strong,
	Style,
	Sub,
	Summary,
	Sup,
	Svg,
	Switch,
	Symbol: Symbol$1,
	Table,
	Tbody,
	Td,
	Template,
	Text,
	Textarea,
	Textpath,
	Tfoot,
	Th,
	Thead,
	Time,
	Title,
	Tr,
	Track,
	Tref,
	Tspan,
	U,
	Ul,
	Use,
	Var,
	Video,
	View,
	Wbr
}, Symbol.toStringTag, { value: "Module" }))).map(([key, component]) => [key.toLowerCase(), component]));
const profile = "/_app/immutable/assets/Kaguya.BlaQlxYU.avif";
const avatarAttrs = createBitsAttrs({
	component: "avatar",
	parts: [
		"root",
		"image",
		"fallback"
	]
});
const AvatarRootContext = new Context("Avatar.Root");
var AvatarRootState = class AvatarRootState {
	static create(opts) {
		return AvatarRootContext.set(new AvatarRootState(opts));
	}
	opts;
	domContext;
	attachment;
	constructor(opts) {
		this.opts = opts;
		this.domContext = new DOMContext(this.opts.ref);
		this.loadImage = this.loadImage.bind(this);
		this.attachment = attachRef(this.opts.ref);
	}
	loadImage(src, crossorigin, referrerPolicy) {
		if (this.opts.loadingStatus.current === "loaded") return;
		let imageTimerId;
		const image = new Image();
		image.src = src;
		if (crossorigin !== void 0) image.crossOrigin = crossorigin;
		if (referrerPolicy) image.referrerPolicy = referrerPolicy;
		this.opts.loadingStatus.current = "loading";
		image.onload = () => {
			imageTimerId = this.domContext.setTimeout(() => {
				this.opts.loadingStatus.current = "loaded";
			}, this.opts.delayMs.current);
		};
		image.onerror = () => {
			this.opts.loadingStatus.current = "error";
		};
		return () => {
			if (!imageTimerId) return;
			this.domContext.clearTimeout(imageTimerId);
		};
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		[avatarAttrs.root]: "",
		"data-status": this.opts.loadingStatus.current,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var AvatarImageState = class AvatarImageState {
	static create(opts) {
		return new AvatarImageState(opts, AvatarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
		watch.pre([() => this.opts.src.current, () => this.opts.crossOrigin.current], ([src, crossOrigin]) => {
			if (!src) {
				this.root.opts.loadingStatus.current = "error";
				return;
			}
			this.root.loadImage(src, crossOrigin, this.opts.referrerPolicy.current);
		});
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		style: { display: this.root.opts.loadingStatus.current === "loaded" ? "block" : "none" },
		"data-status": this.root.opts.loadingStatus.current,
		[avatarAttrs.image]: "",
		src: this.opts.src.current,
		crossorigin: this.opts.crossOrigin.current,
		referrerpolicy: this.opts.referrerPolicy.current,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var AvatarFallbackState = class AvatarFallbackState {
	static create(opts) {
		return new AvatarFallbackState(opts, AvatarRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}
	#style = derived(() => this.root.opts.loadingStatus.current === "loaded" ? { display: "none" } : void 0);
	get style() {
		return this.#style();
	}
	set style($$value) {
		return this.#style($$value);
	}
	#props = derived(() => ({
		style: this.style,
		"data-status": this.root.opts.loadingStatus.current,
		[avatarAttrs.fallback]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
function Avatar$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		const uid = props_id($$renderer2);
		let { delayMs = 0, loadingStatus = "loading", onLoadingStatusChange, child, children, id = createId(uid), ref = null, $$slots, $$events, ...restProps } = $$props;
		const rootState = AvatarRootState.create({
			delayMs: boxWith(() => delayMs),
			loadingStatus: boxWith(() => loadingStatus, (v) => {
				if (loadingStatus !== v) {
					loadingStatus = v;
					onLoadingStatusChange?.(v);
				}
			}),
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, rootState.props));
		if (child) {
			$$renderer2.push("<!--[0-->");
			child($$renderer2, { props: mergedProps() });
			$$renderer2.push(`<!---->`);
		} else {
			$$renderer2.push("<!--[-1-->");
			$$renderer2.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer2);
			$$renderer2.push(`<!----></div>`);
		}
		$$renderer2.push(`<!--]-->`);
		bind_props($$props, {
			loadingStatus,
			ref
		});
	});
}
function Avatar_image$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		const uid = props_id($$renderer2);
		let { src, child, id = createId(uid), ref = null, crossorigin = void 0, referrerpolicy = void 0, $$slots, $$events, ...restProps } = $$props;
		const imageState = AvatarImageState.create({
			src: boxWith(() => src),
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			crossOrigin: boxWith(() => crossorigin),
			referrerPolicy: boxWith(() => referrerpolicy)
		});
		const mergedProps = derived(() => mergeProps(restProps, imageState.props));
		if (child) {
			$$renderer2.push("<!--[0-->");
			child($$renderer2, { props: mergedProps() });
			$$renderer2.push(`<!---->`);
		} else {
			$$renderer2.push("<!--[-1-->");
			$$renderer2.push(`<img${attributes({
				...mergedProps(),
				src
			})} onload="this.__e=event" onerror="this.__e=event"/>`);
		}
		$$renderer2.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
function Avatar_fallback$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		const uid = props_id($$renderer2);
		let { children, child, id = createId(uid), ref = null, $$slots, $$events, ...restProps } = $$props;
		const fallbackState = AvatarFallbackState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, fallbackState.props));
		if (child) {
			$$renderer2.push("<!--[0-->");
			child($$renderer2, { props: mergedProps() });
			$$renderer2.push(`<!---->`);
		} else {
			$$renderer2.push("<!--[-1-->");
			$$renderer2.push(`<span${attributes({ ...mergedProps() })}>`);
			children?.($$renderer2);
			$$renderer2.push(`<!----></span>`);
		}
		$$renderer2.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
function Avatar($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, loadingStatus = "loading", size = "default", class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			if (Avatar$1) {
				$$renderer3.push("<!--[-->");
				Avatar$1($$renderer3, spread_props([
					{
						"data-slot": "avatar",
						"data-size": size,
						class: cn("size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						},
						get loadingStatus() {
							return loadingStatus;
						},
						set loadingStatus($$value) {
							loadingStatus = $$value;
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
		bind_props($$props, {
			ref,
			loadingStatus
		});
	});
}
function Avatar_image($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			if (Avatar_image$1) {
				$$renderer3.push("<!--[-->");
				Avatar_image$1($$renderer3, spread_props([
					{
						"data-slot": "avatar-image",
						class: cn("rounded-full aspect-square size-full object-cover", className)
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
function Avatar_fallback($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			if (Avatar_fallback$1) {
				$$renderer3.push("<!--[-->");
				Avatar_fallback$1($$renderer3, spread_props([
					{
						"data-slot": "avatar-fallback",
						class: cn("bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", className)
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
function Circle($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer2, spread_props([
			{ name: "circle" },
			props,
			{
				iconNode: [["circle", {
					"cx": "12",
					"cy": "12",
					"r": "10"
				}]],
				children: ($$renderer3) => {
					props.children?.($$renderer3);
					$$renderer3.push(`<!---->`);
				},
				$$slots: { default: true }
			}
		]));
	});
}
function Folder_code($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer2, spread_props([
			{ name: "folder-code" },
			props,
			{
				iconNode: [
					["path", { "d": "M10 10.5 8 13l2 2.5" }],
					["path", { "d": "m14 10.5 2 2.5-2 2.5" }],
					["path", { "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" }]
				],
				children: ($$renderer3) => {
					props.children?.($$renderer3);
					$$renderer3.push(`<!---->`);
				},
				$$slots: { default: true }
			}
		]));
	});
}
function Gamepad_2($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer2, spread_props([
			{ name: "gamepad-2" },
			props,
			{
				iconNode: [
					["line", {
						"x1": "6",
						"x2": "10",
						"y1": "11",
						"y2": "11"
					}],
					["line", {
						"x1": "8",
						"x2": "8",
						"y1": "9",
						"y2": "13"
					}],
					["line", {
						"x1": "15",
						"x2": "15.01",
						"y1": "12",
						"y2": "12"
					}],
					["line", {
						"x1": "18",
						"x2": "18.01",
						"y1": "10",
						"y2": "10"
					}],
					["path", { "d": "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" }]
				],
				children: ($$renderer3) => {
					props.children?.($$renderer3);
					$$renderer3.push(`<!---->`);
				},
				$$slots: { default: true }
			}
		]));
	});
}
function House($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer2, spread_props([
			{ name: "house" },
			props,
			{
				iconNode: [["path", { "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }], ["path", { "d": "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }]],
				children: ($$renderer3) => {
					props.children?.($$renderer3);
					$$renderer3.push(`<!---->`);
				},
				$$slots: { default: true }
			}
		]));
	});
}
function Mail($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer2, spread_props([
			{ name: "mail" },
			props,
			{
				iconNode: [["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }], ["rect", {
					"x": "2",
					"y": "4",
					"width": "20",
					"height": "16",
					"rx": "2"
				}]],
				children: ($$renderer3) => {
					props.children?.($$renderer3);
					$$renderer3.push(`<!---->`);
				},
				$$slots: { default: true }
			}
		]));
	});
}
function Pen_tool($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer2, spread_props([
			{ name: "pen-tool" },
			props,
			{
				iconNode: [
					["path", { "d": "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" }],
					["path", { "d": "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" }],
					["path", { "d": "m2.3 2.3 7.286 7.286" }],
					["circle", {
						"cx": "11",
						"cy": "11",
						"r": "2"
					}]
				],
				children: ($$renderer3) => {
					props.children?.($$renderer3);
					$$renderer3.push(`<!---->`);
				},
				$$slots: { default: true }
			}
		]));
	});
}
function Menu($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer2, spread_props([
			{ name: "menu" },
			props,
			{
				iconNode: [
					["path", { "d": "M4 5h16" }],
					["path", { "d": "M4 12h16" }],
					["path", { "d": "M4 19h16" }]
				],
				children: ($$renderer3) => {
					props.children?.($$renderer3);
					$$renderer3.push(`<!---->`);
				},
				$$slots: { default: true }
			}
		]));
	});
}
function Sidebar($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		const menuItems = [
			{
				id: "home",
				label: "Home",
				icon: House,
				path: "/"
			},
			{
				id: "projects",
				label: "Projects",
				icon: Folder_code,
				path: "/projects"
			},
			{
				id: "blog",
				label: "Blog",
				icon: Pen_tool,
				path: "/blog"
			},
			{
				id: "contact",
				label: "Contact",
				icon: Mail,
				path: "/contact"
			},
			{
				id: "game",
				label: "Mini Game",
				icon: Gamepad_2,
				path: "/game"
			}
		];
		const techStack = [
			"Golang",
			"Rust",
			"Next.js",
			"Svelte",
			"Wails",
			"Roblox"
		];
		let activeTab = derived(() => page.url.pathname === "/" ? "home" : page.url.pathname.split("/")[1]);
		$$renderer2.push(`<div class="md:hidden flex items-center justify-between w-full bg-card border border-muted/50 p-4 rounded-xl shadow-sm"><div class="flex items-center gap-3">`);
		Avatar($$renderer2, {
			class: "size-10 ring-2 ring-muted/20",
			children: ($$renderer3) => {
				Avatar_image($$renderer3, {
					src: profile,
					alt: "Akhmad Fauzan"
				});
				$$renderer3.push(`<!----> `);
				Avatar_fallback($$renderer3, {
					children: ($$renderer4) => {
						$$renderer4.push(`<!---->AF`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!---->`);
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----> <div><h2 class="font-bold text-sm tracking-tight">Akhmad Fauzan</h2> <p class="text-[10px] text-muted-foreground font-mono uppercase">Developer</p></div></div> <div class="flex items-center gap-2">`);
		Mode_toggle($$renderer2);
		$$renderer2.push(`<!----> <button class="p-2 hover:bg-muted rounded-md transition-colors">`);
		Menu($$renderer2, { class: "size-6" });
		$$renderer2.push(`<!----></button></div></div> `);
		$$renderer2.push("<!--[-1-->");
		$$renderer2.push(`<!--]--> <aside${attr_class(` fixed inset-y-0 left-0 z-50 w-70 bg-background md:bg-transparent transform transition-transform duration-300 ease-in-out md:relative md:transform-none md:w-full md:max-w-70 shrink-0 ${stringify("-translate-x-full md:translate-x-0 md:shadow-none md:border-none")} `)}>`);
		Card($$renderer2, {
			class: "h-full md:h-auto border-none md:border-solid md:border-muted/50 rounded-none md:rounded-xl shadow-none md:shadow-sm overflow-y-auto md:overflow-visible sticky top-10",
			children: ($$renderer3) => {
				Card_content($$renderer3, {
					class: "pt-10 px-6 pb-8 min-h-full relative",
					children: ($$renderer4) => {
						$$renderer4.push(`<button class="absolute top-4 right-4 md:hidden p-2 hover:bg-muted rounded-md transition-colors">`);
						X($$renderer4, { class: "size-5" });
						$$renderer4.push(`<!----></button> <div class="absolute top-4 right-4 hidden md:block">`);
						Mode_toggle($$renderer4);
						$$renderer4.push(`<!----></div> <div class="flex flex-col items-center text-center mb-8"><div class="relative mb-5">`);
						Avatar($$renderer4, {
							class: "size-24 ring-4 ring-muted/20",
							children: ($$renderer5) => {
								Avatar_image($$renderer5, {
									src: profile,
									alt: "Akhmad Fauzan"
								});
								$$renderer5.push(`<!----> `);
								Avatar_fallback($$renderer5, {
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->AF`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!---->`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----> <div class="absolute bottom-1 right-1 size-5 bg-background rounded-full flex items-center justify-center border-2 border-background shadow-sm">`);
						Circle($$renderer4, { class: "size-3 fill-green-500 text-green-500" });
						$$renderer4.push(`<!----></div></div> <h2 class="text-xl font-bold tracking-tight">Akhmad Fauzan</h2> <p class="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em] mt-1.5 opacity-80">Developer • Purbalingga</p></div> `);
						Separator($$renderer4, { class: "mb-8 opacity-50" });
						$$renderer4.push(`<!----> <nav class="flex flex-col gap-1.5 relative"><!--[-->`);
						const each_array = ensure_array_like(menuItems);
						for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
							let item = each_array[$$index];
							$$renderer4.push(`<a${attr("href", item.path)}${attr_class("relative group flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all outline-none", void 0, {
								"text-primary": activeTab() === item.id,
								"text-muted-foreground": activeTab() !== item.id
							})}>`);
							if (activeTab() === item.id) {
								$$renderer4.push("<!--[0-->");
								if (motion.div) {
									$$renderer4.push("<!--[-->");
									motion.div($$renderer4, {
										layoutId: "active-pill",
										class: "absolute inset-0 bg-secondary rounded-lg -z-10",
										transition: {
											type: "spring",
											stiffness: 380,
											damping: 30
										}
									});
									$$renderer4.push("<!--]-->");
								} else {
									$$renderer4.push("<!--[!-->");
									$$renderer4.push("<!--]-->");
								}
							} else $$renderer4.push("<!--[-1-->");
							$$renderer4.push(`<!--]--> `);
							if (item.icon) {
								$$renderer4.push("<!--[-->");
								item.icon($$renderer4, { class: `size-4.5 relative z-10 ${stringify(activeTab() === item.id ? "text-primary" : "group-hover:text-primary transition-colors")}` });
								$$renderer4.push("<!--]-->");
							} else {
								$$renderer4.push("<!--[!-->");
								$$renderer4.push("<!--]-->");
							}
							$$renderer4.push(` <span class="relative z-10">${escape_html(item.label)}</span></a>`);
						}
						$$renderer4.push(`<!--]--></nav> `);
						Separator($$renderer4, { class: "my-8 opacity-50" });
						$$renderer4.push(`<!----> <div class="px-2"><p class="text-[10px] uppercase font-black text-muted-foreground/50 tracking-widest mb-4">Tech Stack</p> <div class="flex flex-wrap gap-2"><!--[-->`);
						const each_array_1 = ensure_array_like(techStack);
						for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
							let tech = each_array_1[$$index_1];
							Badge($$renderer4, {
								variant: "secondary",
								class: "text-[10px] font-bold bg-muted/40 border-none rounded-md",
								children: ($$renderer5) => {
									$$renderer5.push(`<!---->${escape_html(tech)}`);
								},
								$$slots: { default: true }
							});
						}
						$$renderer4.push(`<!--]--></div></div>`);
					},
					$$slots: { default: true }
				});
			},
			$$slots: { default: true }
		});
		$$renderer2.push(`<!----></aside>`);
	});
}
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { children } = $$props;
		let currentKey = page.url.pathname;
		$$renderer2.push(`<div class="max-w-7xl mx-auto min-h-screen flex py-6 md:py-10 px-4 w-full bg-background text-foreground"><div class="flex flex-col md:flex-row flex-1 gap-8">`);
		Sidebar($$renderer2);
		$$renderer2.push(`<!----> <main class="flex-1 flex">`);
		AnimatePresence($$renderer2, {
			mode: "wait",
			children: ($$renderer3) => {
				$$renderer3.push(`<!---->`);
				if (motion.div) {
					$$renderer3.push("<!--[-->");
					motion.div($$renderer3, {
						key: currentKey,
						initial: {
							opacity: 0,
							y: -15
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: 15
						},
						transition: {
							duration: .3,
							ease: "easeOut"
						},
						class: "flex-1 flex flex-col",
						children: ($$renderer4) => {
							children($$renderer4);
							$$renderer4.push(`<!---->`);
						},
						$$slots: { default: true }
					});
					$$renderer3.push("<!--]-->");
				} else {
					$$renderer3.push("<!--[!-->");
					$$renderer3.push("<!--]-->");
				}
				$$renderer3.push(`<!---->`);
			}
		});
		$$renderer2.push(`<!----></main></div></div>`);
	});
}
//#endregion
export { _layout as default };

//# sourceMappingURL=_layout.svelte-BDZG46TK.js.map