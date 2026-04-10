import "./root-hPyMpEOi.js";
import { A as bind_props, D as attr_class, E as attr, F as element, I as ensure_array_like, L as escape_html, P as derived, Z as props_id, it as stringify, k as attributes, nt as spread_props, tt as setContext, z as getContext } from "./renderer-CoNnoy0x.js";
import { n as writable } from "./index3-Bgqu64K1.js";
import "./state.svelte-yQ996O6E.js";
import { t as page } from "./index2-D7oJTtU5.js";
import { d as createBitsAttrs, f as createId, l as boxWith, n as attachRef, x as mergeProps } from "./create-id-vdhYoWyc.js";
import { n as DOMContext, s as onDestroy, t as Context, u as watch } from "./dom-context.svelte-B0hCX5ib.js";
import { i as cn } from "./button-JWKRuBhr.js";
import { t as Badge } from "./badge-BhT1H9Q3.js";
import { t as Separator } from "./separator-BsZtnAO4.js";
import { t as Card } from "./card-BNT23Klg.js";
import { t as Card_content } from "./card-content-CoFPtkJo.js";
import { t as Icon } from "./Icon-DsjQn-Ts.js";
import { t as Mode_toggle } from "./mode-toggle-Bg6xnUBR.js";
import { t as X } from "./x-DUuZNArf.js";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/_layout.svelte.js
const isPlaywrightEnv = () => {
	if (typeof window === "undefined") return false;
	return window.location.search.includes("@isPlaywright=true");
};
const pwLog = (...args) => {};
function addUniqueItem(arr, item) {
	if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
	const index = arr.indexOf(item);
	if (index > -1) arr.splice(index, 1);
}
const clamp = (min, max, v) => {
	if (v > max) return max;
	if (v < min) return min;
	return v;
};
function formatErrorMessage(message, errorCode) {
	return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
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
const MotionGlobalConfig = {};
const isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
function isObject(value) {
	return typeof value === "object" && value !== null;
}
const isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);
/* @__NO_SIDE_EFFECTS__ */
function memo(callback) {
	let result;
	return () => {
		if (result === void 0) result = callback();
		return result;
	};
}
const noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;
const combineFunctions = (a, b) => (v) => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);
const progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
	const toFromDifference = to - from;
	return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
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
		if (numSubscriptions === 1) this.subscriptions[0](a, b, c);
		else for (let i = 0; i < numSubscriptions; i++) {
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
const secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
const millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;
function velocityPerSecond(velocity, frameDuration) {
	return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}
const warned = /* @__PURE__ */ new Set();
function warnOnce(condition, message, errorCode) {
	if (condition || warned.has(message)) return;
	console.warn(formatErrorMessage(message, errorCode));
	warned.add(message);
}
const wrap = (min, max, v) => {
	const rangeSize = max - min;
	return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};
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
const mirrorEasing = (easing) => (p) => p <= .5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
const reverseEasing = (easing) => (p) => 1 - easing(1 - p);
const backOut = /* @__PURE__ */ cubicBezier(.33, 1.53, .69, .99);
const backIn = /* @__PURE__ */ reverseEasing(backOut);
const backInOut = /* @__PURE__ */ mirrorEasing(backIn);
const anticipate = (p) => p >= 1 ? 1 : (p *= 2) < 1 ? .5 * backIn(p) : .5 * (2 - Math.pow(2, -10 * (p - 1)));
const circIn = (p) => 1 - Math.sin(Math.acos(p));
const circOut = reverseEasing(circIn);
const circInOut = mirrorEasing(circIn);
const easeIn = /* @__PURE__ */ cubicBezier(.42, 0, 1, 1);
const easeOut = /* @__PURE__ */ cubicBezier(0, 0, .58, 1);
const easeInOut = /* @__PURE__ */ cubicBezier(.42, 0, .58, 1);
const isEasingArray = (ease2) => {
	return Array.isArray(ease2) && typeof ease2[0] !== "number";
};
function getEasingForSegment(easing, i) {
	return isEasingArray(easing) ? easing[wrap(0, easing.length, i)] : easing;
}
const isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";
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
function createRenderStep(runNextFrame, stepName) {
	let thisFrame = /* @__PURE__ */ new Set();
	let nextFrame = /* @__PURE__ */ new Set();
	let isProcessing = false;
	let flushNextFrame = false;
	const toKeepAlive = /* @__PURE__ */ new WeakSet();
	let latestFrameData = {
		delta: 0,
		timestamp: 0,
		isProcessing: false
	};
	function triggerCallback(callback) {
		if (toKeepAlive.has(callback)) {
			step.schedule(callback);
			runNextFrame();
		}
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
		process: (frameData2) => {
			latestFrameData = frameData2;
			if (isProcessing) {
				flushNextFrame = true;
				return;
			}
			isProcessing = true;
			const prevFrame = thisFrame;
			thisFrame = nextFrame;
			nextFrame = prevFrame;
			thisFrame.forEach(triggerCallback);
			thisFrame.clear();
			isProcessing = false;
			if (flushNextFrame) {
				flushNextFrame = false;
				step.process(frameData2);
			}
		}
	};
	return step;
}
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
		acc[key] = createRenderStep(flagRunNextFrame);
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
		acc[key] = (process2, keepAlive = false, immediate = false) => {
			if (!runNextFrame) wake();
			return step.schedule(process2, keepAlive, immediate);
		};
		return acc;
	}, {});
	const cancel = (process2) => {
		for (let i = 0; i < stepsOrder.length; i++) steps[stepsOrder[i]].cancel(process2);
	};
	return {
		schedule,
		cancel,
		state,
		steps
	};
}
const { schedule: frame, cancel: cancelFrame, state: frameData } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);
let now;
function clearTime() {
	now = void 0;
}
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
const checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
const isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--");
const startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--");
const isCSSVariableToken = (value) => {
	if (!startsAsVariableToken(value)) return false;
	return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
const singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function containsCSSVariable(value) {
	if (typeof value !== "string") return false;
	return value.split("/*")[0].includes("var(--");
}
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
const sanitize = (v) => Math.round(v * 1e5) / 1e5;
const floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function isNullish(v) {
	return v == null;
}
const singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
const isColorString = (type, testProp) => (v) => {
	return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
};
const splitColor = (aName, bName, cName) => (v) => {
	if (typeof v !== "string") return v;
	const [a, b, c, alpha2] = v.match(floatRegex);
	return {
		[aName]: parseFloat(a),
		[bName]: parseFloat(b),
		[cName]: parseFloat(c),
		alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
	};
};
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
const hsla = {
	test: /* @__PURE__ */ isColorString("hsl", "hue"),
	parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
		return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
	}
};
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
const colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
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
function hueToRgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
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
		alpha: alpha2
	};
}
function mixImmediate(a, b) {
	return (p) => p > 0 ? b : a;
}
const mixNumber$1 = (from, to, progress2) => {
	return from + (to - from) * progress2;
};
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
function asRGBA(color2) {
	const type = getColorType(color2);
	warning(Boolean(type), `'${color2}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable");
	if (!Boolean(type)) return false;
	let model = type.parse(color2);
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
const invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
function mixVisibility(origin, target) {
	if (invisibleValues.has(origin)) return (p) => p <= 0 ? origin : target;
	else return (p) => p >= 1 ? target : origin;
}
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
function mix(from, to, p) {
	if (typeof from === "number" && typeof to === "number" && typeof p === "number") return mixNumber$1(from, to, p);
	return getMixer(from)(from, to);
}
const frameloopDriver = (update) => {
	const passTimestamp = ({ timestamp }) => update(timestamp);
	return {
		start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
		stop: () => cancelFrame(passTimestamp),
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
};
const generateLinearEasing = (easing, duration, resolution = 10) => {
	let points = "";
	const numPoints = Math.max(Math.round(duration / resolution), 2);
	for (let i = 0; i < numPoints; i++) points += Math.round(easing(i / (numPoints - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${points.substring(0, points.length - 2)})`;
};
const maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
	let duration = 0;
	const timeStep = 50;
	let state = generator.next(duration);
	while (!state.done && duration < maxGeneratorDuration) {
		duration += timeStep;
		state = generator.next(duration);
	}
	return duration >= maxGeneratorDuration ? Infinity : duration;
}
function createGeneratorEasing(options, scale2 = 100, createGenerator) {
	const generator = createGenerator({
		...options,
		keyframes: [0, scale2]
	});
	const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
	return {
		type: "keyframes",
		ease: (progress2) => {
			return generator.next(duration * progress2).value / scale2;
		},
		duration: /* @__PURE__ */ millisecondsToSeconds(duration)
	};
}
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
const safeMin = .001;
function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
	let envelope;
	let derivative;
	warning(duration <= /* @__PURE__ */ secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let dampingRatio = 1 - bounce;
	dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
	duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(duration));
	if (dampingRatio < 1) {
		envelope = (undampedFreq2) => {
			const exponentialDecay = undampedFreq2 * dampingRatio;
			const delta = exponentialDecay * duration;
			const a = exponentialDecay - velocity;
			const b = calcAngularFreq(undampedFreq2, dampingRatio);
			const c = Math.exp(-delta);
			return safeMin - a / b * c;
		};
		derivative = (undampedFreq2) => {
			const delta = undampedFreq2 * dampingRatio * duration;
			const d = delta * velocity + velocity;
			const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
			const f = Math.exp(-delta);
			const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
			return (-envelope(undampedFreq2) + safeMin > 0 ? -1 : 1) * ((d - e) * f) / g;
		};
	} else {
		envelope = (undampedFreq2) => {
			const a = Math.exp(-undampedFreq2 * duration);
			const b = (undampedFreq2 - velocity) * duration + 1;
			return -safeMin + a * b;
		};
		derivative = (undampedFreq2) => {
			return Math.exp(-undampedFreq2 * duration) * ((velocity - undampedFreq2) * (duration * duration));
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
			const derived2 = findSpring({
				...options,
				velocity: 0
			});
			springOptions = {
				...springOptions,
				...derived2,
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
	const isGranularScale = Math.abs(initialDelta) < 5;
	restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
	restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
	let resolveSpring;
	let resolveVelocity;
	let angularFreq;
	let A2;
	let sinCoeff;
	let cosCoeff;
	if (dampingRatio < 1) {
		angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
		A2 = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq;
		resolveSpring = (t) => {
			return target - Math.exp(-dampingRatio * undampedAngularFreq * t) * (A2 * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
		};
		sinCoeff = dampingRatio * undampedAngularFreq * A2 + initialDelta * angularFreq;
		cosCoeff = dampingRatio * undampedAngularFreq * initialDelta - A2 * angularFreq;
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
		const P2 = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / dampedAngularFreq;
		const sinhCoeff = dampingRatio * undampedAngularFreq * P2 - initialDelta * dampedAngularFreq;
		const coshCoeff = dampingRatio * undampedAngularFreq * initialDelta - P2 * dampedAngularFreq;
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
			if (!isResolvedFromDuration && dampingRatio < 1) {
				const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
				const sin = Math.sin(angularFreq * t);
				const cos = Math.cos(angularFreq * t);
				const current2 = target - envelope * (A2 * sin + initialDelta * cos);
				const currentVelocity = /* @__PURE__ */ secondsToMilliseconds(envelope * (sinCoeff * sin + cosCoeff * cos));
				state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current2) <= restDelta;
				state.value = state.done ? target : current2;
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
			const easing = generateLinearEasing((progress2) => generator.next(calculatedDuration * progress2).value, calculatedDuration, 30);
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
const velocitySampleDuration = 5;
function getGeneratorVelocity(resolveValue, t, current) {
	const prevT = Math.max(t - velocitySampleDuration, 0);
	return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}
function inertia({ keyframes: keyframes2, velocity = 0, power = .8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = .5, restSpeed }) {
	const origin = keyframes2[0];
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
	if (target !== ideal) amplitude = target - origin;
	const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
	const calcLatest = (t) => target + calcDelta(t);
	const applyFriction = (t) => {
		const delta = calcDelta(t);
		const latest = calcLatest(t);
		state.done = Math.abs(delta) <= restDelta;
		state.value = state.done ? target : latest;
	};
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
			let hasUpdatedFrame = false;
			if (!spring$1 && timeReachedBoundary === void 0) {
				hasUpdatedFrame = true;
				applyFriction(t);
				checkCatchBoundary(t);
			}
			if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) return spring$1.next(t - timeReachedBoundary);
			else {
				!hasUpdatedFrame && applyFriction(t);
				return state;
			}
		}
	};
}
function createMixers(output, ease2, customMixer) {
	const mixers = [];
	const mixerFactory = customMixer || MotionGlobalConfig.mix || mix;
	const numMixers = output.length - 1;
	for (let i = 0; i < numMixers; i++) {
		let mixer = mixerFactory(output[i], output[i + 1]);
		if (ease2) mixer = pipe(Array.isArray(ease2) ? ease2[i] || noop : ease2, mixer);
		mixers.push(mixer);
	}
	return mixers;
}
function interpolate(input, output, { clamp: isClamp = true, ease: ease2, mixer } = {}) {
	const inputLength = input.length;
	invariant(inputLength === output.length, "Both input and output ranges must be the same length", "range-length");
	if (inputLength === 1) return () => output[0];
	if (inputLength === 2 && output[0] === output[1]) return () => output[1];
	const isZeroDeltaRange = input[0] === input[1];
	if (input[0] > input[inputLength - 1]) {
		input = [...input].reverse();
		output = [...output].reverse();
	}
	const mixers = createMixers(output, ease2, mixer);
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
function fillOffset(offset, remaining) {
	const min = offset[offset.length - 1];
	for (let i = 1; i <= remaining; i++) {
		const offsetProgress = /* @__PURE__ */ progress(0, remaining, i);
		offset.push(mixNumber$1(min, 1, offsetProgress));
	}
}
function defaultOffset(arr) {
	const offset = [0];
	fillOffset(offset, arr.length - 1);
	return offset;
}
function convertOffsetToTimes(offset, duration) {
	return offset.map((o) => o * duration);
}
function defaultEasing(values, easing) {
	return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease: ease2 = "easeInOut" }) {
	const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
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
const isNotNull = (value) => value !== null;
function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
	const resolvedKeyframes = keyframes2.filter(isNotNull);
	const index = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
	return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
}
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
const percentToProgress = (percent2) => percent2 / 100;
var JSAnimation = class extends WithPromise {
	constructor(options) {
		super();
		this.state = "idle";
		this.startTime = null;
		this.isStopped = false;
		this.currentTime = 0;
		this.holdTime = null;
		this.playbackSpeed = 1;
		this.delayState = {
			done: false,
			value: void 0
		};
		this.stop = () => {
			const { motionValue: motionValue2 } = this.options;
			if (motionValue2 && motionValue2.updatedAt !== time.now()) this.tick(time.now());
			this.isStopped = true;
			if (this.state === "idle") return;
			this.teardown();
			this.options.onStop?.();
		};
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
		if (repeatType === "mirror") this.mirroredGenerator = generatorFactory({
			...options,
			keyframes: [...keyframes$1].reverse(),
			velocity: -velocity
		});
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
		const { delay = 0, keyframes: keyframes2, repeat, repeatType, repeatDelay, type, onUpdate, finalKeyframe } = this.options;
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
			const progress2 = Math.min(this.currentTime, totalDuration) / resolvedDuration;
			let currentIteration = Math.floor(progress2);
			let iterationProgress = progress2 % 1;
			if (!iterationProgress && progress2 >= 1) iterationProgress = 1;
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
		let state;
		if (isInDelayPhase) {
			this.delayState.value = keyframes2[0];
			state = this.delayState;
		} else state = frameGenerator.next(elapsed);
		if (mixKeyframes && !isInDelayPhase) state.value = mixKeyframes(state.value);
		let { done } = state;
		if (!isInDelayPhase && calculatedDuration !== null) done = this.playbackSpeed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
		const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
		if (isAnimationFinished && type !== inertia) state.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
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
		const now2 = this.driver.now();
		if (this.state === "finished") {
			this.updateFinished();
			this.startTime = now2;
		} else if (this.holdTime !== null) this.startTime = now2 - this.holdTime;
		else if (!this.startTime) this.startTime = startTime ?? now2;
		if (this.state === "finished" && this.speed < 0) this.startTime += this.calculatedDuration;
		this.holdTime = null;
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
function fillWildcards(keyframes2) {
	for (let i = 1; i < keyframes2.length; i++) keyframes2[i] ?? (keyframes2[i] = keyframes2[i - 1]);
}
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
const transformProps = new Set(transformPropOrder);
const isNumOrPxType = (v) => v === number || v === px;
const transformKeys = /* @__PURE__ */ new Set([
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
const toResolve = /* @__PURE__ */ new Set();
let isScheduled = false;
let anyNeedsMeasurement = false;
let isForced = false;
function measureAllKeyframes() {
	if (anyNeedsMeasurement) {
		const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
		const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
		const transformsToRestore = /* @__PURE__ */ new Map();
		elementsToMeasure.forEach((element2) => {
			const removedTransforms = removeNonTranslationalTransform(element2);
			if (!removedTransforms.length) return;
			transformsToRestore.set(element2, removedTransforms);
			element2.render();
		});
		resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
		elementsToMeasure.forEach((element2) => {
			element2.render();
			const restore = transformsToRestore.get(element2);
			if (restore) restore.forEach(([key, value]) => {
				element2.getValue(key)?.set(value);
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
	constructor(unresolvedKeyframes, onComplete, name, motionValue2, element2, isAsync = false) {
		this.state = "pending";
		this.isAsync = false;
		this.needsMeasurement = false;
		this.unresolvedKeyframes = [...unresolvedKeyframes];
		this.onComplete = onComplete;
		this.name = name;
		this.motionValue = motionValue2;
		this.element = element2;
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
		const { unresolvedKeyframes, name, element: element2, motionValue: motionValue2 } = this;
		if (unresolvedKeyframes[0] === null) {
			const currentValue = motionValue2?.get();
			const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
			if (currentValue !== void 0) unresolvedKeyframes[0] = currentValue;
			else if (element2 && name) {
				const valueAsRead = element2.readValue(name, finalKeyframe);
				if (valueAsRead !== void 0 && valueAsRead !== null) unresolvedKeyframes[0] = valueAsRead;
			}
			if (unresolvedKeyframes[0] === void 0) unresolvedKeyframes[0] = finalKeyframe;
			if (motionValue2 && currentValue === void 0) motionValue2.set(unresolvedKeyframes[0]);
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
const isCSSVar = (name) => name.startsWith("--");
function setStyle(element2, name, value) {
	isCSSVar(name) ? element2.style.setProperty(name, value) : element2.style[name] = value;
}
const supportsFlags = {};
function memoSupports(callback, supportsFlag) {
	const memoized = /* @__PURE__ */ memo(callback);
	return () => supportsFlags[supportsFlag] ?? memoized();
}
const supportsScrollTimeline = /* @__PURE__ */ memoSupports(() => window.ScrollTimeline !== void 0, "scrollTimeline");
const supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch (e) {
		return false;
	}
	return true;
}, "linearEasing");
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
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
function mapEasingToNativeEasing(easing, duration) {
	if (!easing) return;
	else if (typeof easing === "function") return supportsLinearEasing() ? generateLinearEasing(easing, duration) : "ease-out";
	else if (isBezierDefinition(easing)) return cubicBezierAsString(easing);
	else if (Array.isArray(easing)) return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
	else return supportedWaapiEasing[easing];
}
function startWaapiAnimation(element2, valueName, keyframes2, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease: ease2 = "easeOut", times } = {}, pseudoElement = void 0) {
	const keyframeOptions = { [valueName]: keyframes2 };
	if (times) keyframeOptions.offset = times;
	const easing = mapEasingToNativeEasing(ease2, duration);
	if (Array.isArray(easing)) keyframeOptions.easing = easing;
	const options = {
		delay,
		duration,
		easing: !Array.isArray(easing) ? easing : "linear",
		fill: "both",
		iterations: repeat + 1,
		direction: repeatType === "reverse" ? "alternate" : "normal"
	};
	if (pseudoElement) options.pseudoElement = pseudoElement;
	return element2.animate(keyframeOptions, options);
}
function isGenerator(type) {
	return typeof type === "function" && "applyToOptions" in type;
}
function applyGeneratorOptions({ type, ...options }) {
	if (isGenerator(type) && supportsLinearEasing()) return type.applyToOptions(options);
	else {
		options.duration ?? (options.duration = 300);
		options.ease ?? (options.ease = "easeOut");
	}
	return options;
}
var NativeAnimation = class extends WithPromise {
	constructor(options) {
		super();
		this.finishedTime = null;
		this.isStopped = false;
		this.manualStartTime = null;
		if (!options) return;
		const { element: element2, name, keyframes: keyframes2, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options;
		this.isPseudoElement = Boolean(pseudoElement);
		this.allowFlatten = allowFlatten;
		this.options = options;
		invariant(typeof options.type !== "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
		const transition = applyGeneratorOptions(options);
		this.animation = startWaapiAnimation(element2, name, keyframes2, transition, pseudoElement);
		if (transition.autoplay === false) this.animation.pause();
		this.animation.onfinish = () => {
			this.finishedTime = this.time;
			if (!pseudoElement) {
				const keyframe = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
				if (this.updateMotionValue) this.updateMotionValue(keyframe);
				setStyle(element2, name, keyframe);
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
		const element2 = this.options?.element;
		if (!this.isPseudoElement && element2?.isConnected) this.animation.commitStyles?.();
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
const sampleDelta = 10;
var NativeAnimationExtended = class extends NativeAnimation {
	constructor(options) {
		replaceStringEasing(options);
		replaceTransitionType(options);
		super(options);
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
		const { motionValue: motionValue2, onUpdate, onComplete, element: element2, ...options } = this.options;
		if (!motionValue2) return;
		if (value !== void 0) {
			motionValue2.set(value);
			return;
		}
		const sampleAnimation = new JSAnimation({
			...options,
			autoplay: false
		});
		const sampleTime = Math.max(sampleDelta, time.now() - this.startTime);
		const delta = clamp(0, sampleDelta, sampleTime - sampleDelta);
		const current = sampleAnimation.sample(sampleTime).value;
		const { name } = this.options;
		if (element2 && name) setStyle(element2, name, current);
		motionValue2.setWithVelocity(sampleAnimation.sample(Math.max(0, sampleTime - delta)).value, current, delta);
		sampleAnimation.stop();
	}
};
const isAnimatable = (value, name) => {
	if (name === "zIndex") return false;
	if (typeof value === "number" || Array.isArray(value)) return true;
	if (typeof value === "string" && (complex.test(value) || value === "0") && !value.startsWith("url(")) return true;
	return false;
};
function hasKeyframesChanged(keyframes2) {
	const current = keyframes2[0];
	if (keyframes2.length === 1) return true;
	for (let i = 0; i < keyframes2.length; i++) if (keyframes2[i] !== current) return true;
}
function canAnimate(keyframes2, name, type, velocity) {
	const originKeyframe = keyframes2[0];
	if (originKeyframe === null) return false;
	if (name === "display" || name === "visibility") return true;
	const targetKeyframe = keyframes2[keyframes2.length - 1];
	const isOriginAnimatable = isAnimatable(originKeyframe, name);
	const isTargetAnimatable = isAnimatable(targetKeyframe, name);
	warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". "${isOriginAnimatable ? targetKeyframe : originKeyframe}" is not an animatable value.`, "value-not-animatable");
	if (!isOriginAnimatable || !isTargetAnimatable) return false;
	return hasKeyframesChanged(keyframes2) || (type === "spring" || isGenerator(type)) && velocity;
}
function makeAnimationInstant(options) {
	options.duration = 0;
	options.type = "keyframes";
}
const acceleratedValues = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]);
const browserColorFunctions = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function hasBrowserOnlyColors(keyframes2) {
	for (let i = 0; i < keyframes2.length; i++) if (typeof keyframes2[i] === "string" && browserColorFunctions.test(keyframes2[i])) return true;
	return false;
}
const colorProperties = /* @__PURE__ */ new Set([
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
	const { motionValue: motionValue2, name, repeatDelay, repeatType, damping, type, keyframes: keyframes2 } = options;
	if (!(motionValue2?.owner?.current instanceof HTMLElement)) return false;
	const { onUpdate, transformTemplate } = motionValue2.owner.getProps();
	return supportsWaapi() && name && (acceleratedValues.has(name) || colorProperties.has(name) && hasBrowserOnlyColors(keyframes2)) && (name !== "transform" || !transformTemplate) && !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
}
const MAX_RESOLVE_DELAY = 40;
var AsyncMotionValueAnimation = class extends WithPromise {
	constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", keyframes: keyframes2, name, motionValue: motionValue2, element: element2, ...options }) {
		super();
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
			motionValue: motionValue2,
			element: element2,
			...options
		};
		this.keyframeResolver = new (element2?.KeyframeResolver || KeyframeResolver)(keyframes2, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue2, element2);
		this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(keyframes2, finalKeyframe, options, sync) {
		this.keyframeResolver = void 0;
		const { name, type, velocity, delay, isHandoff, onUpdate } = options;
		this.resolvedAt = time.now();
		let canAnimateValue = true;
		if (!canAnimate(keyframes2, name, type, velocity)) {
			canAnimateValue = false;
			if (MotionGlobalConfig.instantAnimations || !delay) onUpdate?.(getFinalKeyframe(keyframes2, options, finalKeyframe));
			keyframes2[0] = keyframes2[keyframes2.length - 1];
			makeAnimationInstant(options);
			options.repeat = 0;
		}
		const resolvedOptions = {
			startTime: sync ? !this.resolvedAt ? this.createdAt : this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe,
			...options,
			keyframes: keyframes2
		};
		const useWaapi = canAnimateValue && !isHandoff && supportsBrowserAnimation(resolvedOptions);
		const element2 = resolvedOptions.motionValue?.owner?.current;
		let animation;
		if (useWaapi) try {
			animation = new NativeAnimationExtended({
				...resolvedOptions,
				element: element2
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
	set time(time2) {
		this.setAll("time", time2);
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
var GroupAnimationWithThen = class extends GroupAnimation {
	then(onResolve, _onReject) {
		return this.finished.finally(onResolve).then(() => {});
	}
};
const splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
	const match = splitCSSVariableRegex.exec(current);
	if (!match) return [,];
	const [, token1, token2, fallback] = match;
	return [`--${token1 ?? token2}`, fallback];
}
const maxDepth = 4;
function getVariableValue(current, element2, depth = 1) {
	invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	const [token, fallback] = parseCSSVariable(current);
	if (!token) return;
	const resolved = window.getComputedStyle(element2).getPropertyValue(token);
	if (resolved) {
		const trimmed = resolved.trim();
		return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
	}
	return isCSSVariableToken(fallback) ? getVariableValue(fallback, element2, depth + 1) : fallback;
}
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
const getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => {
	if (keyframes2.length > 2) return keyframesTransition;
	else if (transformProps.has(valueKey)) return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
	return ease;
};
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
function getValueTransition$1(transition, key) {
	const valueTransition = transition?.[key] ?? transition?.["default"] ?? transition;
	if (valueTransition !== transition) return resolveTransition(valueTransition, transition);
	return valueTransition;
}
const orchestrationKeys = /* @__PURE__ */ new Set([
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
function isTransitionDefined(transition) {
	for (const key in transition) if (!orchestrationKeys.has(key)) return true;
	return false;
}
const animateMotionValue = (name, value, target, transition = {}, element2, isHandoff) => (onComplete) => {
	const valueTransition = getValueTransition$1(transition, name) || {};
	const delay = valueTransition.delay || transition.delay || 0;
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
		element: isHandoff ? void 0 : element2
	};
	if (!isTransitionDefined(valueTransition)) Object.assign(options, getDefaultTransition(name, options));
	options.duration && (options.duration = /* @__PURE__ */ secondsToMilliseconds(options.duration));
	options.repeatDelay && (options.repeatDelay = /* @__PURE__ */ secondsToMilliseconds(options.repeatDelay));
	if (options.from !== void 0) options.keyframes[0] = options.from;
	let shouldSkip = false;
	if (options.type === false || options.duration === 0 && !options.repeatDelay) {
		makeAnimationInstant(options);
		if (options.delay === 0) shouldSkip = true;
	}
	if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations || element2?.shouldSkipAnimations) {
		shouldSkip = true;
		makeAnimationInstant(options);
		options.delay = 0;
	}
	options.allowFlatten = !valueTransition.type && !valueTransition.ease;
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
function getValueState(visualElement) {
	const state = [{}, {}];
	visualElement?.values.forEach((value, key) => {
		state[0][key] = value.get();
		state[1][key] = value.getVelocity();
	});
	return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
	if (typeof definition === "function") {
		const [current, velocity] = getValueState(visualElement);
		definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
	}
	if (typeof definition === "string") definition = props.variants && props.variants[definition];
	if (typeof definition === "function") {
		const [current, velocity] = getValueState(visualElement);
		definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
	}
	return definition;
}
function resolveVariant$1(visualElement, definition, custom) {
	const props = visualElement.getProps();
	return resolveVariantFromProps(props, definition, props.custom, visualElement);
}
const positionalKeys = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...transformPropOrder
]);
const MAX_VELOCITY_DELTA = 30;
const isFloat = (value) => {
	return !isNaN(parseFloat(value));
};
var MotionValue = class {
	/**
	* @param init - The initiating value
	* @param config - Optional configuration options
	*
	* -  `transformer`: A function to transform incoming values with.
	*/
	constructor(init, options = {}) {
		this.canTrackVelocity = null;
		this.events = {};
		this.updateAndNotify = (v) => {
			const currentTime = time.now();
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
const isKeyframesTarget = (v) => {
	return Array.isArray(v);
};
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
const isMotionValue = (value) => Boolean(value && value.getVelocity);
function isWillChangeMotionValue(value) {
	return Boolean(isMotionValue(value) && value.add);
}
function addValueToWillChange(visualElement, key) {
	const willChange = visualElement.getValue("willChange");
	if (isWillChangeMotionValue(willChange)) return willChange.add(key);
	else if (!willChange && MotionGlobalConfig.WillChange) {
		const newWillChange = new MotionGlobalConfig.WillChange("auto");
		visualElement.addValue("willChange", newWillChange);
		newWillChange.add(key);
	}
}
function camelToDash(str) {
	return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
}
const optimizedAppearDataAttribute = "data-" + camelToDash("framerAppearId");
function getOptimisedAppearId(visualElement) {
	return visualElement.props[optimizedAppearDataAttribute];
}
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
		const currentValue = value.get();
		if (currentValue !== void 0 && !value.isAnimating() && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) {
			frame.update(() => value.set(valueTarget));
			continue;
		}
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
const auto = {
	test: (v) => v === "auto",
	parse: (v) => v
};
const testValueType = (v) => (type) => type.test(v);
const dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	auto
];
const findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));
function isNone(value) {
	if (typeof value === "number") return value === 0;
	else if (value !== null) return value === "none" || value === "0" || isZeroValueString(value);
	else return true;
}
const maxDefaults = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function applyDefaultFilter(v) {
	const [name, value] = v.slice(0, -1).split("(");
	if (name === "drop-shadow") return v;
	const [number2] = value.match(floatRegex) || [];
	if (!number2) return v;
	const unit = value.replace(number2, "");
	let defaultValue = maxDefaults.has(name) ? 1 : 0;
	if (number2 !== value) defaultValue *= 100;
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
const mask = {
	...complex,
	getAnimatableNone: (v) => {
		const parsed = complex.parse(v);
		return complex.createTransformer(v)(parsed.map((v2) => typeof v2 === "number" ? 0 : typeof v2 === "object" ? {
			...v2,
			alpha: 1
		} : v2));
	}
};
const int = {
	...number,
	transform: Math.round
};
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
const getDefaultValueType = (key) => defaultValueTypes[key];
const customTypes = /* @__PURE__ */ new Set([filter, mask]);
function getAnimatableNone(key, value) {
	let defaultValueType = getDefaultValueType(key);
	if (!customTypes.has(defaultValueType)) defaultValueType = complex;
	return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}
const invalidTemplates = /* @__PURE__ */ new Set([
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
var DOMKeyframesResolver = class extends KeyframeResolver {
	constructor(unresolvedKeyframes, onComplete, name, motionValue2, element2) {
		super(unresolvedKeyframes, onComplete, name, motionValue2, element2, true);
	}
	readKeyframes() {
		const { unresolvedKeyframes, element: element2, name } = this;
		if (!element2 || !element2.current) return;
		super.readKeyframes();
		for (let i = 0; i < unresolvedKeyframes.length; i++) {
			let keyframe = unresolvedKeyframes[i];
			if (typeof keyframe === "string") {
				keyframe = keyframe.trim();
				if (isCSSVariableToken(keyframe)) {
					const resolved = getVariableValue(keyframe, element2.current);
					if (resolved !== void 0) unresolvedKeyframes[i] = resolved;
					if (i === unresolvedKeyframes.length - 1) this.finalKeyframe = keyframe;
				}
			}
		}
		this.resolveNoneKeyframes();
		if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) return;
		const [origin, target] = unresolvedKeyframes;
		const originType = findDimensionValueType(origin);
		const targetType = findDimensionValueType(target);
		if (containsCSSVariable(origin) !== containsCSSVariable(target) && positionalValues[name]) {
			this.needsMeasurement = true;
			return;
		}
		if (originType === targetType) return;
		if (isNumOrPxType(originType) && isNumOrPxType(targetType)) for (let i = 0; i < unresolvedKeyframes.length; i++) {
			const value = unresolvedKeyframes[i];
			if (typeof value === "string") unresolvedKeyframes[i] = parseFloat(value);
		}
		else if (positionalValues[name]) this.needsMeasurement = true;
	}
	resolveNoneKeyframes() {
		const { unresolvedKeyframes, name } = this;
		const noneKeyframeIndexes = [];
		for (let i = 0; i < unresolvedKeyframes.length; i++) if (unresolvedKeyframes[i] === null || isNone(unresolvedKeyframes[i])) noneKeyframeIndexes.push(i);
		if (noneKeyframeIndexes.length) makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
	}
	measureInitialState() {
		const { element: element2, unresolvedKeyframes, name } = this;
		if (!element2 || !element2.current) return;
		if (name === "height") this.suspendedScrollY = window.pageYOffset;
		this.measuredOrigin = positionalValues[name](element2.measureViewportBox(), window.getComputedStyle(element2.current));
		unresolvedKeyframes[0] = this.measuredOrigin;
		const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
		if (measureKeyframe !== void 0) element2.getValue(name, measureKeyframe).jump(measureKeyframe, false);
	}
	measureEndState() {
		const { element: element2, name, unresolvedKeyframes } = this;
		if (!element2 || !element2.current) return;
		const value = element2.getValue(name);
		value && value.jump(this.measuredOrigin, false);
		const finalKeyframeIndex = unresolvedKeyframes.length - 1;
		const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
		unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element2.measureViewportBox(), window.getComputedStyle(element2.current));
		if (finalKeyframe !== null && this.finalKeyframe === void 0) this.finalKeyframe = finalKeyframe;
		if (this.removedTransforms?.length) this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
			element2.getValue(unsetTransformName).set(unsetTransformValue);
		});
		this.resolveNoneKeyframes();
	}
};
function resolveElements(elementOrSelector, scope, selectorCache) {
	if (elementOrSelector == null) return [];
	if (elementOrSelector instanceof EventTarget) return [elementOrSelector];
	else if (typeof elementOrSelector === "string") {
		let root = document;
		if (scope) root = scope.current;
		const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
		return elements ? Array.from(elements) : [];
	}
	return Array.from(elementOrSelector).filter((element2) => element2 != null);
}
const getValueAsType = (value, type) => {
	return type && typeof value === "number" ? type.transform(value) : value;
};
const { schedule: microtask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, false);
function isSVGElement(element2) {
	return isObject(element2) && "ownerSVGElement" in element2;
}
function isSVGSVGElement(element2) {
	return isSVGElement(element2) && element2.tagName === "svg";
}
const valueTypes = [
	...dimensionValueTypes,
	color,
	complex
];
const findValueType = (v) => valueTypes.find(testValueType(v));
const createAxis = () => ({
	min: 0,
	max: 0
});
const createBox = () => ({
	x: createAxis(),
	y: createAxis()
});
const visualElementStore = /* @__PURE__ */ new WeakMap();
function isAnimationControls(v) {
	return v !== null && typeof v === "object" && typeof v.start === "function";
}
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
function isControllingVariants(props) {
	return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
	return Boolean(isControllingVariants(props) || props.variants);
}
function updateMotionValuesFromProps(element2, next, prev) {
	for (const key in next) {
		const nextValue = next[key];
		const prevValue = prev[key];
		if (isMotionValue(nextValue)) element2.addValue(key, nextValue);
		else if (isMotionValue(prevValue)) element2.addValue(key, motionValue(nextValue, { owner: element2 }));
		else if (prevValue !== nextValue) if (element2.hasValue(key)) {
			const existingValue = element2.getValue(key);
			if (existingValue.liveStyle === true) existingValue.jump(nextValue);
			else if (!existingValue.hasAnimated) existingValue.set(nextValue);
		} else {
			const latestValue = element2.getStaticValue(key);
			element2.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element2 }));
		}
	}
	for (const key in prev) if (next[key] === void 0) element2.removeValue(key);
	return next;
}
const prefersReducedMotion = { current: null };
const hasReducedMotionListener = { current: false };
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
const propEventHandlers = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
];
let featureDefinitions = {};
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
		this.current = null;
		this.children = /* @__PURE__ */ new Set();
		this.isVariantNode = false;
		this.isControllingVariants = false;
		this.shouldReduceMotion = null;
		this.shouldSkipAnimations = false;
		this.values = /* @__PURE__ */ new Map();
		this.KeyframeResolver = KeyframeResolver;
		this.features = {};
		this.valueSubscriptions = /* @__PURE__ */ new Map();
		this.prevMotionValues = {};
		this.hasBeenMounted = false;
		this.events = {};
		this.propEventSubscriptions = {};
		this.notifyUpdate = () => this.notify("Update", this.latestValues);
		this.render = () => {
			if (!this.current) return;
			this.triggerBuild();
			this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
		};
		this.renderScheduledAt = 0;
		this.scheduleRender = () => {
			const now2 = time.now();
			if (this.renderScheduledAt < now2) {
				this.renderScheduledAt = now2;
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
		const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
		for (const key in initialMotionValues) {
			const value = initialMotionValues[key];
			if (latestValues[key] !== void 0 && isMotionValue(value)) value.set(latestValues[key]);
		}
	}
	mount(instance) {
		if (this.hasBeenMounted) for (const key in this.initialValues) {
			this.values.get(key)?.jump(this.initialValues[key]);
			this.latestValues[key] = this.initialValues[key];
		}
		this.current = instance;
		visualElementStore.set(instance, this);
		if (this.projection && !this.projection.instance) this.projection.mount(instance);
		if (this.parent && this.isVariantNode && !this.isControllingVariants) this.removeFromVariantTree = this.parent.addVariantChild(this);
		this.values.forEach((value, key) => this.bindToMotionValue(key, value));
		if (this.reducedMotionConfig === "never") this.shouldReduceMotion = false;
		else if (this.reducedMotionConfig === "always") this.shouldReduceMotion = true;
		else {
			if (!hasReducedMotionListener.current) initPrefersReducedMotion();
			this.shouldReduceMotion = prefersReducedMotion.current;
		}
		warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled");
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
			const { factory, keyframes: keyframes2, times, ease: ease2, duration } = value.accelerate;
			const animation = new NativeAnimation({
				element: this.current,
				name: key,
				keyframes: keyframes2,
				times,
				ease: ease2,
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
		if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) return 0;
		return this.sortInstanceNodePosition(this.current, other.current);
	}
	updateFeatures() {
		let key = "animation";
		for (key in featureDefinitions) {
			const featureDefinition = featureDefinitions[key];
			if (!featureDefinition) continue;
			const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
			if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) this.features[key] = new FeatureConstructor(this);
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
		if (initial && valueFromInitial !== void 0) return valueFromInitial;
		const target = this.getBaseTargetFromProps(this.props, key);
		if (target !== void 0 && !isMotionValue(target)) return target;
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
var DOMVisualElement = class extends VisualElement {
	constructor() {
		super(...arguments);
		this.KeyframeResolver = DOMKeyframesResolver;
	}
	sortInstanceNodePosition(a, b) {
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
function measureViewportBox(instance, transformPoint) {
	return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}
const translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
};
const numTransforms = transformPropOrder.length;
function buildTransform(latestValues, transform, transformTemplate) {
	let transformString = "";
	let transformIsDefault = true;
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
function buildHTMLStyles(state, latestValues, transformTemplate) {
	const { style, vars, transformOrigin } = state;
	let hasTransform = false;
	let hasTransformOrigin = false;
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
		else if (style.transform) style.transform = "none";
	}
	if (hasTransformOrigin) {
		const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
		style.transformOrigin = `${originX} ${originY} ${originZ}`;
	}
}
function renderHTML(element2, { style, vars }, styleProp, projection) {
	const elementStyle = element2.style;
	let key;
	for (key in style) elementStyle[key] = style[key];
	projection?.applyProjectionStyles(elementStyle, styleProp);
	for (key in vars) elementStyle.setProperty(key, vars[key]);
}
function pixelsToPercent(pixels, axis) {
	if (axis.max === axis.min) return 0;
	return pixels / (axis.max - axis.min) * 100;
}
const correctBorderRadius = { correct: (latest, node) => {
	if (!node.target) return latest;
	if (typeof latest === "string") if (px.test(latest)) latest = parseFloat(latest);
	else return latest;
	return `${pixelsToPercent(latest, node.target.x)}% ${pixelsToPercent(latest, node.target.y)}%`;
} };
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
	const averageScale = mixNumber$1(xScale, yScale, .5);
	if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
	if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
	return template(shadow);
} };
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
function isForcedMotionValue(key, { layout, layoutId }) {
	return transformProps.has(key) || key.startsWith("origin") || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}
function scrapeMotionValuesFromProps$1(props, prevProps, visualElement) {
	const style = props.style;
	const prevStyle = prevProps?.style;
	const newValues = {};
	if (!style) return newValues;
	for (const key in style) if (isMotionValue(style[key]) || prevStyle && isMotionValue(prevStyle[key]) || isForcedMotionValue(key, props) || visualElement?.getValue(key)?.liveStyle !== void 0) newValues[key] = style[key];
	return newValues;
}
function getComputedStyle$1(element2) {
	return window.getComputedStyle(element2);
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
const dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
};
const camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
	attrs.pathLength = 1;
	const keys = useDashCase ? dashKeys : camelKeys;
	attrs[keys.offset] = `${-offset}`;
	attrs[keys.array] = `${length} ${spacing}`;
}
const cssMotionPathProperties = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function buildSVGAttrs(state, { attrX, attrY, attrScale, pathLength, pathSpacing = 1, pathOffset = 0, ...latest }, isSVGTag2, transformTemplate, styleProp) {
	buildHTMLStyles(state, latest, transformTemplate);
	if (isSVGTag2) {
		if (state.style.viewBox) state.attrs.viewBox = state.style.viewBox;
		return;
	}
	state.attrs = state.style;
	state.style = {};
	const { attrs, style } = state;
	if (attrs.transform) {
		style.transform = attrs.transform;
		delete attrs.transform;
	}
	if (style.transform || attrs.transformOrigin) {
		style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
		delete attrs.transformOrigin;
	}
	if (style.transform) {
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
const camelCaseAttributes = /* @__PURE__ */ new Set([
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
const isSVGTag$1 = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";
function renderSVG(element2, renderState, _styleProp, projection) {
	renderHTML(element2, renderState, void 0, projection);
	for (const key in renderState.attrs) element2.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
}
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
	const newValues = scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
	for (const key in props) if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
		const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
		newValues[targetKey] = props[key];
	}
	return newValues;
}
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
function animateSingleValue(value, keyframes2, options) {
	const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
	motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options));
	return motionValue$1.animation;
}
function isDOMKeyframes(keyframes2) {
	return typeof keyframes2 === "object" && !Array.isArray(keyframes2);
}
function resolveSubjects(subject, keyframes2, scope, selectorCache) {
	if (subject == null) return [];
	if (typeof subject === "string" && isDOMKeyframes(keyframes2)) return resolveElements(subject, scope, selectorCache);
	else if (subject instanceof NodeList) return Array.from(subject);
	else if (Array.isArray(subject)) return subject.filter((s) => s != null);
	else return [subject];
}
function calculateRepeatDuration(duration, repeat, _repeatDelay) {
	return duration * (repeat + 1);
}
function calcNextTime(current, next, prev, labels) {
	if (typeof next === "number") return next;
	else if (next.startsWith("-") || next.startsWith("+")) return Math.max(0, current + parseFloat(next));
	else if (next === "<") return prev;
	else if (next.startsWith("<")) return Math.max(0, prev + parseFloat(next.slice(1)));
	else return labels.get(next) ?? current;
}
function eraseKeyframes(sequence, startTime, endTime) {
	for (let i = 0; i < sequence.length; i++) {
		const keyframe = sequence[i];
		if (keyframe.at > startTime && keyframe.at < endTime) {
			removeItem(sequence, keyframe);
			i--;
		}
	}
}
function addKeyframes(sequence, keyframes2, easing, offset, startTime, endTime) {
	eraseKeyframes(sequence, startTime, endTime);
	for (let i = 0; i < keyframes2.length; i++) sequence.push({
		value: keyframes2[i],
		at: mixNumber$1(startTime, endTime, offset[i]),
		easing: getEasingForSegment(easing, i)
	});
}
function normalizeTimes(times, repeat) {
	for (let i = 0; i < times.length; i++) times[i] = times[i] / (repeat + 1);
}
function compareByTime(a, b) {
	if (a.at === b.at) {
		if (a.value === null) return 1;
		if (b.value === null) return -1;
		return 0;
	} else return a.at - b.at;
}
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
	for (let i = 0; i < sequence.length; i++) {
		const segment = sequence[i];
		if (typeof segment === "string") {
			timeLabels.set(segment, currentTime);
			continue;
		} else if (!Array.isArray(segment)) {
			timeLabels.set(segment.name, calcNextTime(currentTime, segment.at, prevTime, timeLabels));
			continue;
		}
		let [subject, keyframes2, transition = {}] = segment;
		if (transition.at !== void 0) currentTime = calcNextTime(currentTime, transition.at, prevTime, timeLabels);
		let maxDuration = 0;
		const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0) => {
			const valueKeyframesAsList = keyframesAsList(valueKeyframes);
			const { delay = 0, times = defaultOffset(valueKeyframesAsList), type = defaultTransition.type || "keyframes", repeat, repeatType, repeatDelay = 0, ...remainingTransition } = valueTransition;
			let { ease: ease2 = defaultTransition.ease || "easeOut", duration } = valueTransition;
			const calculatedDelay = typeof delay === "function" ? delay(elementIndex, numSubjects) : delay;
			const numKeyframes = valueKeyframesAsList.length;
			const createGenerator = isGenerator(type) ? type : generators?.[type || "keyframes"];
			if (numKeyframes <= 2 && createGenerator) {
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
				ease2 = springEasing.ease;
				duration = springEasing.duration;
			}
			duration ?? (duration = defaultDuration);
			const startTime = currentTime + calculatedDelay;
			if (times.length === 1 && times[0] === 0) times[1] = 1;
			const remainder = times.length - valueKeyframesAsList.length;
			remainder > 0 && fillOffset(times, remainder);
			valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
			if (repeat) {
				invariant(repeat < MAX_REPEAT, "Repeat count too high, must be less than 20", "repeat-count-high");
				duration = calculateRepeatDuration(duration, repeat);
				const originalKeyframes = [...valueKeyframesAsList];
				const originalTimes = [...times];
				ease2 = Array.isArray(ease2) ? [...ease2] : [ease2];
				const originalEase = [...ease2];
				for (let repeatIndex = 0; repeatIndex < repeat; repeatIndex++) {
					valueKeyframesAsList.push(...originalKeyframes);
					for (let keyframeIndex = 0; keyframeIndex < originalKeyframes.length; keyframeIndex++) {
						times.push(originalTimes[keyframeIndex] + (repeatIndex + 1));
						ease2.push(keyframeIndex === 0 ? "linear" : getEasingForSegment(originalEase, keyframeIndex - 1));
					}
				}
				normalizeTimes(times, repeat);
			}
			const targetTime = startTime + duration;
			addKeyframes(valueSequence, valueKeyframesAsList, ease2, times, startTime, targetTime);
			maxDuration = Math.max(calculatedDelay + duration, maxDuration);
			totalDuration = Math.max(targetTime, totalDuration);
		};
		if (isMotionValue(subject)) {
			const subjectSequence = getSubjectSequence(subject, sequences);
			resolveValueSequence(keyframes2, transition, getValueSequence("default", subjectSequence));
		} else {
			const subjects = resolveSubjects(subject, keyframes2, scope, elementCache);
			const numSubjects = subjects.length;
			for (let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++) {
				keyframes2 = keyframes2;
				transition = transition;
				const thisSubject = subjects[subjectIndex];
				const subjectSequence = getSubjectSequence(thisSubject, sequences);
				for (const key in keyframes2) resolveValueSequence(keyframes2[key], getValueTransition(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
			}
		}
		prevTime = currentTime;
		currentTime += maxDuration;
	}
	sequences.forEach((valueSequences, element2) => {
		for (const key in valueSequences) {
			const valueSequence = valueSequences[key];
			valueSequence.sort(compareByTime);
			const keyframes2 = [];
			const valueOffset = [];
			const valueEasing = [];
			for (let i = 0; i < valueSequence.length; i++) {
				const { at, value, easing } = valueSequence[i];
				keyframes2.push(value);
				valueOffset.push(/* @__PURE__ */ progress(0, totalDuration, at));
				valueEasing.push(easing || "easeOut");
			}
			if (valueOffset[0] !== 0) {
				valueOffset.unshift(0);
				keyframes2.unshift(keyframes2[0]);
				valueEasing.unshift(defaultSegmentEasing);
			}
			if (valueOffset[valueOffset.length - 1] !== 1) {
				valueOffset.push(1);
				keyframes2.push(null);
			}
			if (!animationDefinitions.has(element2)) animationDefinitions.set(element2, {
				keyframes: {},
				transition: {}
			});
			const definition = animationDefinitions.get(element2);
			definition.keyframes[key] = keyframes2;
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
function keyframesAsList(keyframes2) {
	return Array.isArray(keyframes2) ? keyframes2 : [keyframes2];
}
function getValueTransition(transition, key) {
	return transition && transition[key] ? {
		...transition,
		...transition[key]
	} : { ...transition };
}
const isNumber = (keyframe) => typeof keyframe === "number";
const isNumberKeyframesArray = (keyframes2) => keyframes2.every(isNumber);
function createDOMVisualElement(element2) {
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
	const node = isSVGElement(element2) && !isSVGSVGElement(element2) ? new SVGVisualElement(options) : new HTMLVisualElement(options);
	node.mount(element2);
	visualElementStore.set(element2, node);
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
function isSingleValue(subject, keyframes2) {
	return isMotionValue(subject) || typeof subject === "number" || typeof subject === "string" && !isDOMKeyframes(keyframes2);
}
function animateSubject(subject, keyframes2, options, scope) {
	const animations = [];
	if (isSingleValue(subject, keyframes2)) animations.push(animateSingleValue(subject, isDOMKeyframes(keyframes2) ? keyframes2.default || keyframes2 : keyframes2, options ? options.default || options : options));
	else {
		if (subject == null) return animations;
		const subjects = resolveSubjects(subject, keyframes2, scope);
		const numSubjects = subjects.length;
		invariant(Boolean(numSubjects), "No valid elements provided.", "no-valid-elements");
		for (let i = 0; i < numSubjects; i++) {
			const thisSubject = subjects[i];
			const createVisualElement = thisSubject instanceof Element ? createDOMVisualElement : createObjectVisualElement;
			if (!visualElementStore.has(thisSubject)) createVisualElement(thisSubject);
			const visualElement = visualElementStore.get(thisSubject);
			const transition = { ...options };
			if ("delay" in transition && typeof transition.delay === "function") transition.delay = transition.delay(i, numSubjects);
			animations.push(...animateTarget(visualElement, {
				...keyframes2,
				transition
			}, {}));
		}
	}
	return animations;
}
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
	}), options, scope, { spring }).forEach(({ keyframes: keyframes2, transition }, subject) => {
		animations.push(...animateSubject(subject, keyframes2, transition));
	});
	return animations;
}
function isSequence(value) {
	return Array.isArray(value) && value.some(Array.isArray);
}
function createScopedAnimate(options = {}) {
	const { scope, reduceMotion } = options;
	function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options2) {
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
			const { onComplete, ...rest } = options2 || {};
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
		$$renderer2.push(`<div class="animate-presence-container svelte-2933f5">`);
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
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "circle" },
		props,
		{ iconNode: [["circle", {
			"cx": "12",
			"cy": "12",
			"r": "10"
		}]] }
	]));
}
function Folder_code($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "folder-code" },
		props,
		{ iconNode: [
			["path", { "d": "M10 10.5 8 13l2 2.5" }],
			["path", { "d": "m14 10.5 2 2.5-2 2.5" }],
			["path", { "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" }]
		] }
	]));
}
function Gamepad_2($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "gamepad-2" },
		props,
		{ iconNode: [
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
		] }
	]));
}
function House($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "house" },
		props,
		{ iconNode: [["path", { "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }], ["path", { "d": "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }]] }
	]));
}
function Mail($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "mail" },
		props,
		{ iconNode: [["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }], ["rect", {
			"x": "2",
			"y": "4",
			"width": "20",
			"height": "16",
			"rx": "2"
		}]] }
	]));
}
function Pen_tool($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "pen-tool" },
		props,
		{ iconNode: [
			["path", { "d": "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" }],
			["path", { "d": "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" }],
			["path", { "d": "m2.3 2.3 7.286 7.286" }],
			["circle", {
				"cx": "11",
				"cy": "11",
				"r": "2"
			}]
		] }
	]));
}
function Menu($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "menu" },
		props,
		{ iconNode: [
			["path", { "d": "M4 5h16" }],
			["path", { "d": "M4 12h16" }],
			["path", { "d": "M4 19h16" }]
		] }
	]));
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

//# sourceMappingURL=_layout.svelte-igMAtq1U.js.map