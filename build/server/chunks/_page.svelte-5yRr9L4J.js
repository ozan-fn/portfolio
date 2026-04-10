import { $ as run, A as bind_props, D as attr_class, E as attr, I as ensure_array_like, L as escape_html, O as attr_style, P as derived, U as head, Z as props_id, it as stringify, j as clsx, k as attributes, nt as spread_props } from "./renderer-CoNnoy0x.js";
import { n as SvelteMap } from "./index-server-B-CYOcL8.js";
import { _ as isBox, b as isWritableSymbol, c as boxFrom, d as createBitsAttrs, f as createId, i as boolToStr, l as boxWith, n as attachRef, o as boolToTrueOrUndef, r as boolToEmptyStrOrUndef, s as boxFlatten, t as BoxSymbol, w as toReadonlyBox, x as mergeProps, y as isWritableBox } from "./create-id-vdhYoWyc.js";
import { n as DOMContext, s as onDestroy, t as Context, u as watch } from "./dom-context.svelte-B0hCX5ib.js";
import { i as cn, s as tv, t as Button } from "./button-JWKRuBhr.js";
import { t as Badge } from "./badge-BhT1H9Q3.js";
import { t as Separator } from "./separator-BsZtnAO4.js";
import { t as Card } from "./card-BNT23Klg.js";
import { t as Card_content } from "./card-content-CoFPtkJo.js";
import { t as Input } from "./input-yKAcSgEU.js";
import { n as Card_header, r as Card_title, t as Card_description } from "./card-title-BhI6TCaP.js";
import { t as Card_footer } from "./card-footer-B61i72Uo.js";
import { f as isHTMLElement, h as noop, i as ARROW_UP, n as ARROW_LEFT, r as ARROW_RIGHT, s as HOME, t as ARROW_DOWN, u as isElementOrSVGElement } from "./noop-8uyxhZin.js";
import { t as Label } from "./label-XufGbXy_.js";
import mqtt from "mqtt";
//#region .svelte-kit/adapter-bun/entries/pages/(app)/game/_page.svelte.js
function box(initialValue) {
	let current = initialValue;
	return {
		[BoxSymbol]: true,
		[isWritableSymbol]: true,
		get current() {
			return current;
		},
		set current(v) {
			current = v;
		}
	};
}
box.from = boxFrom;
box.with = boxWith;
box.flatten = boxFlatten;
box.readonly = toReadonlyBox;
box.isBox = isBox;
box.isWritableBox = isWritableBox;
function getElemDirection(elem) {
	return window.getComputedStyle(elem).getPropertyValue("direction");
}
function getNextKey(dir = "ltr", orientation = "horizontal") {
	return {
		horizontal: dir === "rtl" ? ARROW_LEFT : ARROW_RIGHT,
		vertical: ARROW_DOWN
	}[orientation];
}
function getPrevKey(dir = "ltr", orientation = "horizontal") {
	return {
		horizontal: dir === "rtl" ? ARROW_RIGHT : ARROW_LEFT,
		vertical: ARROW_UP
	}[orientation];
}
function getDirectionalKeys(dir = "ltr", orientation = "horizontal") {
	if (!["ltr", "rtl"].includes(dir)) dir = "ltr";
	if (!["horizontal", "vertical"].includes(orientation)) orientation = "horizontal";
	return {
		nextKey: getNextKey(dir, orientation),
		prevKey: getPrevKey(dir, orientation)
	};
}
var RovingFocusGroup = class {
	#opts;
	#currentTabStopId = box(null);
	constructor(opts) {
		this.#opts = opts;
	}
	getCandidateNodes() {
		return [];
	}
	focusFirstCandidate() {
		const items = this.getCandidateNodes();
		if (!items.length) return;
		items[0]?.focus();
	}
	handleKeydown(node, e, both = false) {
		const rootNode = this.#opts.rootNode.current;
		if (!rootNode || !node) return;
		const items = this.getCandidateNodes();
		if (!items.length) return;
		const currentIndex = items.indexOf(node);
		const { nextKey, prevKey } = getDirectionalKeys(getElemDirection(rootNode), this.#opts.orientation.current);
		const loop = this.#opts.loop.current;
		const keyToIndex = {
			[nextKey]: currentIndex + 1,
			[prevKey]: currentIndex - 1,
			[HOME]: 0,
			["End"]: items.length - 1
		};
		if (both) {
			const altNextKey = nextKey === "ArrowDown" ? ARROW_RIGHT : ARROW_DOWN;
			const altPrevKey = prevKey === "ArrowUp" ? ARROW_LEFT : ARROW_UP;
			keyToIndex[altNextKey] = currentIndex + 1;
			keyToIndex[altPrevKey] = currentIndex - 1;
		}
		let itemIndex = keyToIndex[e.key];
		if (itemIndex === void 0) return;
		e.preventDefault();
		if (itemIndex < 0 && loop) itemIndex = items.length - 1;
		else if (itemIndex === items.length && loop) itemIndex = 0;
		const itemToFocus = items[itemIndex];
		if (!itemToFocus) return;
		itemToFocus.focus();
		this.#currentTabStopId.current = itemToFocus.id;
		this.#opts.onCandidateFocus?.(itemToFocus);
		return itemToFocus;
	}
	getTabIndex(node) {
		const items = this.getCandidateNodes();
		const anyActive = this.#currentTabStopId.current !== null;
		if (node && !anyActive && items[0] === node) {
			this.#currentTabStopId.current = node.id;
			return 0;
		} else if (node?.id === this.#currentTabStopId.current) return 0;
		return -1;
	}
	setCurrentTabStopId(id) {
		this.#currentTabStopId.current = id;
	}
	focusCurrentTabStop() {
		const currentTabStopId = this.#currentTabStopId.current;
		if (!currentTabStopId) return;
		const currentTabStop = this.#opts.rootNode.current?.querySelector(`#${currentTabStopId}`);
		if (!currentTabStop || !isHTMLElement(currentTabStop)) return;
		currentTabStop.focus();
	}
};
function isValidIndex(index, arr) {
	return index >= 0 && index < arr.length;
}
var SvelteResizeObserver = class {
	#node;
	#onResize;
	constructor(node, onResize) {
		this.#node = node;
		this.#onResize = onResize;
		this.handler = this.handler.bind(this);
	}
	handler() {
		let rAF = 0;
		const _node = this.#node();
		if (!_node) return;
		const resizeObserver = new ResizeObserver(() => {
			cancelAnimationFrame(rAF);
			rAF = window.requestAnimationFrame(this.#onResize);
		});
		resizeObserver.observe(_node);
		return () => {
			window.cancelAnimationFrame(rAF);
			resizeObserver.unobserve(_node);
		};
	}
};
function getRangeStyles(direction, min, max) {
	const styles = { position: "absolute" };
	if (direction === "lr") {
		styles.left = `${min}%`;
		styles.right = `${max}%`;
	} else if (direction === "rl") {
		styles.right = `${min}%`;
		styles.left = `${max}%`;
	} else if (direction === "bt") {
		styles.bottom = `${min}%`;
		styles.top = `${max}%`;
	} else {
		styles.top = `${min}%`;
		styles.bottom = `${max}%`;
	}
	return styles;
}
function getThumbStyles(direction, thumbPos) {
	const styles = { position: "absolute" };
	if (direction === "lr") {
		styles.left = `${thumbPos}%`;
		styles.translate = "-50% 0";
	} else if (direction === "rl") {
		styles.right = `${thumbPos}%`;
		styles.translate = "50% 0";
	} else if (direction === "bt") {
		styles.bottom = `${thumbPos}%`;
		styles.translate = "0 50%";
	} else {
		styles.top = `${thumbPos}%`;
		styles.translate = "0 -50%";
	}
	return styles;
}
function getTickStyles(direction, tickPosition, offsetPercentage) {
	const style = { position: "absolute" };
	if (direction === "lr") {
		style.left = `${tickPosition}%`;
		style.translate = `${offsetPercentage}% 0`;
	} else if (direction === "rl") {
		style.right = `${tickPosition}%`;
		style.translate = `${-offsetPercentage}% 0`;
	} else if (direction === "bt") {
		style.bottom = `${tickPosition}%`;
		style.translate = `0 ${-offsetPercentage}%`;
	} else {
		style.top = `${tickPosition}%`;
		style.translate = `0 ${offsetPercentage}%`;
	}
	return style;
}
function getDecimalPlaces(num) {
	if (Math.floor(num) === num) return 0;
	const str = num.toString();
	if (str.indexOf(".") !== -1 && str.indexOf("e-") === -1) return str.split(".")[1].length;
	else if (str.indexOf("e-") !== -1) {
		const parts = str.split("e-");
		return parseInt(parts[1], 10);
	}
	return 0;
}
function roundToPrecision(num, precision) {
	const factor = Math.pow(10, precision);
	return Math.round(num * factor) / factor;
}
function normalizeSteps(step, min, max) {
	if (typeof step === "number") {
		const difference = max - min;
		let count = Math.ceil(difference / step);
		const precision = getDecimalPlaces(step);
		const factor = Math.pow(10, precision);
		if (Math.round(difference * factor) % Math.round(step * factor) === 0) count++;
		const steps = [];
		for (let i = 0; i < count; i++) {
			const roundedValue = roundToPrecision(min + i * step, precision);
			steps.push(roundedValue);
		}
		return steps;
	}
	return [...new Set(step)].filter((value) => value >= min && value <= max).sort((a, b) => a - b);
}
function snapValueToCustomSteps(value, steps) {
	if (steps.length === 0) return value;
	let closest = steps[0];
	let minDistance = Math.abs(value - closest);
	for (const step of steps) {
		const distance = Math.abs(value - step);
		if (distance < minDistance) {
			minDistance = distance;
			closest = step;
		}
	}
	return closest;
}
function getAdjacentStepValue(currentValue, steps, direction) {
	const currentIndex = steps.indexOf(currentValue);
	if (currentIndex === -1) return snapValueToCustomSteps(currentValue, steps);
	if (direction === "next") return currentIndex < steps.length - 1 ? steps[currentIndex + 1] : currentValue;
	else return currentIndex > 0 ? steps[currentIndex - 1] : currentValue;
}
function linearScale(domain, range, clamp = true) {
	const [d0, d1] = domain;
	const [r0, r1] = range;
	const slope = (r1 - r0) / (d1 - d0);
	return (x) => {
		const result = r0 + slope * (x - d0);
		if (!clamp) return result;
		if (result > Math.max(r0, r1)) return Math.max(r0, r1);
		if (result < Math.min(r0, r1)) return Math.min(r0, r1);
		return result;
	};
}
const sliderAttrs = createBitsAttrs({
	component: "slider",
	parts: [
		"root",
		"thumb",
		"range",
		"tick",
		"tick-label",
		"thumb-label"
	]
});
const SliderRootContext = new Context("Slider.Root");
var SliderBaseRootState = class {
	opts;
	attachment;
	isActive = false;
	#layoutVersion = 0;
	#direction = derived(() => {
		if (this.opts.orientation.current === "horizontal") return this.opts.dir.current === "rtl" ? "rl" : "lr";
		else return this.opts.dir.current === "rtl" ? "tb" : "bt";
	});
	get direction() {
		return this.#direction();
	}
	set direction($$value) {
		return this.#direction($$value);
	}
	#normalizedSteps = derived(() => {
		return normalizeSteps(this.opts.step.current, this.opts.min.current, this.opts.max.current);
	});
	get normalizedSteps() {
		return this.#normalizedSteps();
	}
	set normalizedSteps($$value) {
		return this.#normalizedSteps($$value);
	}
	domContext;
	constructor(opts) {
		this.opts = opts;
		this.attachment = attachRef(opts.ref);
		this.domContext = new DOMContext(this.opts.ref);
		new SvelteResizeObserver(() => this.opts.ref.current, this.#handleLayoutChange);
	}
	#handleLayoutChange = () => {
		this.#layoutVersion += 1;
	};
	isThumbActive(_index) {
		return this.isActive;
	}
	#touchAction = derived(() => {
		if (this.opts.disabled.current) return void 0;
		return this.opts.orientation.current === "horizontal" ? "pan-y" : "pan-x";
	});
	getAllThumbs = () => {
		const node = this.opts.ref.current;
		if (!node) return [];
		return Array.from(node.querySelectorAll(sliderAttrs.selector("thumb")));
	};
	getThumbScale = () => {
		this.#layoutVersion;
		const trackPadding = this.opts.trackPadding?.current;
		if (trackPadding !== void 0 && trackPadding > 0) return [trackPadding, 100 - trackPadding];
		if (this.opts.thumbPositioning.current === "exact") return [0, 100];
		const isVertical = this.opts.orientation.current === "vertical";
		const activeThumb = this.getAllThumbs()[0];
		const thumbSize = isVertical ? activeThumb?.offsetHeight : activeThumb?.offsetWidth;
		if (thumbSize === void 0 || Number.isNaN(thumbSize) || thumbSize === 0) return [0, 100];
		const trackSize = isVertical ? this.opts.ref.current?.offsetHeight : this.opts.ref.current?.offsetWidth;
		if (trackSize === void 0 || Number.isNaN(trackSize) || trackSize === 0) return [0, 100];
		const percentPadding = thumbSize / 2 / trackSize * 100;
		return [percentPadding, 100 - percentPadding];
	};
	getPositionFromValue = (thumbValue) => {
		const thumbScale = this.getThumbScale();
		return linearScale([this.opts.min.current, this.opts.max.current], thumbScale)(thumbValue);
	};
	#props = derived(() => ({
		id: this.opts.id.current,
		"data-orientation": this.opts.orientation.current,
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		style: { touchAction: this.#touchAction() },
		[sliderAttrs.root]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var SliderSingleRootState = class extends SliderBaseRootState {
	opts;
	isMulti = false;
	constructor(opts) {
		super(opts);
		this.opts = opts;
		watch([
			() => this.opts.step.current,
			() => this.opts.min.current,
			() => this.opts.max.current,
			() => this.opts.value.current
		], ([step, min, max, value]) => {
			const steps = normalizeSteps(step, min, max);
			const isValidValue = (v) => {
				return steps.includes(v);
			};
			const gcv = (v) => {
				return snapValueToCustomSteps(v, steps);
			};
			if (!isValidValue(value)) this.opts.value.current = gcv(value);
		});
	}
	isTickValueSelected = (tickValue) => {
		return this.opts.value.current === tickValue;
	};
	applyPosition({ clientXY, start, end }) {
		const min = this.opts.min.current;
		const max = this.opts.max.current;
		const val = (clientXY - start) / (end - start) * (max - min) + min;
		if (val < min) this.updateValue(min);
		else if (val > max) this.updateValue(max);
		else {
			const steps = this.normalizedSteps;
			const newValue = snapValueToCustomSteps(val, steps);
			this.updateValue(newValue);
		}
	}
	updateValue = (newValue) => {
		this.opts.value.current = snapValueToCustomSteps(newValue, this.normalizedSteps);
	};
	handlePointerMove = (e) => {
		if (!this.isActive || this.opts.disabled.current) return;
		e.preventDefault();
		e.stopPropagation();
		const sliderNode = this.opts.ref.current;
		const activeThumb = this.getAllThumbs()[0];
		if (!sliderNode || !activeThumb) return;
		activeThumb.focus();
		const { left, right, top, bottom } = sliderNode.getBoundingClientRect();
		if (this.direction === "lr") this.applyPosition({
			clientXY: e.clientX,
			start: left,
			end: right
		});
		else if (this.direction === "rl") this.applyPosition({
			clientXY: e.clientX,
			start: right,
			end: left
		});
		else if (this.direction === "bt") this.applyPosition({
			clientXY: e.clientY,
			start: bottom,
			end: top
		});
		else if (this.direction === "tb") this.applyPosition({
			clientXY: e.clientY,
			start: top,
			end: bottom
		});
	};
	handlePointerDown = (e) => {
		if (e.button !== 0 || this.opts.disabled.current) return;
		const sliderNode = this.opts.ref.current;
		const closestThumb = this.getAllThumbs()[0];
		if (!closestThumb || !sliderNode) return;
		const target = e.composedPath()[0] ?? e.target;
		if (!isElementOrSVGElement(target) || !sliderNode.contains(target)) return;
		e.preventDefault();
		closestThumb.focus();
		this.isActive = true;
		this.handlePointerMove(e);
	};
	handlePointerUp = () => {
		if (this.opts.disabled.current) return;
		if (this.isActive) this.opts.onValueCommit.current(run(() => this.opts.value.current));
		this.isActive = false;
	};
	#thumbsPropsArr = derived(() => {
		const currValue = this.opts.value.current;
		return Array.from({ length: 1 }, () => {
			const thumbValue = currValue;
			const thumbPosition = this.getPositionFromValue(thumbValue);
			const style = getThumbStyles(this.direction, thumbPosition);
			return {
				role: "slider",
				"aria-valuemin": this.opts.min.current,
				"aria-valuemax": this.opts.max.current,
				"aria-valuenow": thumbValue,
				"aria-disabled": boolToStr(this.opts.disabled.current),
				"aria-orientation": this.opts.orientation.current,
				"data-value": thumbValue,
				"data-orientation": this.opts.orientation.current,
				style,
				[sliderAttrs.thumb]: ""
			};
		});
	});
	get thumbsPropsArr() {
		return this.#thumbsPropsArr();
	}
	set thumbsPropsArr($$value) {
		return this.#thumbsPropsArr($$value);
	}
	#thumbsRenderArr = derived(() => {
		return this.thumbsPropsArr.map((_, i) => i);
	});
	get thumbsRenderArr() {
		return this.#thumbsRenderArr();
	}
	set thumbsRenderArr($$value) {
		return this.#thumbsRenderArr($$value);
	}
	#ticksPropsArr = derived(() => {
		const steps = this.normalizedSteps;
		const currValue = this.opts.value.current;
		return steps.map((tickValue, i) => {
			const tickPosition = this.getPositionFromValue(tickValue);
			const isFirst = i === 0;
			const isLast = i === steps.length - 1;
			const offsetPercentage = isFirst ? 0 : isLast ? -100 : -50;
			const style = getTickStyles(this.direction, tickPosition, offsetPercentage);
			const bounded = tickValue <= currValue;
			return {
				"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
				"data-orientation": this.opts.orientation.current,
				"data-bounded": bounded ? "" : void 0,
				"data-value": tickValue,
				"data-selected": this.isTickValueSelected(tickValue) ? "" : void 0,
				style,
				[sliderAttrs.tick]: ""
			};
		});
	});
	get ticksPropsArr() {
		return this.#ticksPropsArr();
	}
	set ticksPropsArr($$value) {
		return this.#ticksPropsArr($$value);
	}
	#ticksRenderArr = derived(() => {
		return this.ticksPropsArr.map((_, i) => i);
	});
	get ticksRenderArr() {
		return this.#ticksRenderArr();
	}
	set ticksRenderArr($$value) {
		return this.#ticksRenderArr($$value);
	}
	#tickItemsArr = derived(() => {
		return this.ticksPropsArr.map((tick, i) => ({
			value: tick["data-value"],
			index: i
		}));
	});
	get tickItemsArr() {
		return this.#tickItemsArr();
	}
	set tickItemsArr($$value) {
		return this.#tickItemsArr($$value);
	}
	#thumbItemsArr = derived(() => {
		return [{
			value: this.opts.value.current,
			index: 0
		}];
	});
	get thumbItemsArr() {
		return this.#thumbItemsArr();
	}
	set thumbItemsArr($$value) {
		return this.#thumbItemsArr($$value);
	}
	#snippetProps = derived(() => ({
		ticks: this.ticksRenderArr,
		thumbs: this.thumbsRenderArr,
		tickItems: this.tickItemsArr,
		thumbItems: this.thumbItemsArr
	}));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
};
var SliderMultiRootState = class extends SliderBaseRootState {
	opts;
	isMulti = true;
	activeThumb = null;
	currentThumbIdx = 0;
	constructor(opts) {
		super(opts);
		this.opts = opts;
		watch([
			() => this.opts.step.current,
			() => this.opts.min.current,
			() => this.opts.max.current,
			() => this.opts.value.current
		], ([step, min, max, value]) => {
			const steps = normalizeSteps(step, min, max);
			const isValidValue = (v) => {
				return steps.includes(v);
			};
			const gcv = (v) => {
				return snapValueToCustomSteps(v, steps);
			};
			if (value.some((v) => !isValidValue(v))) this.opts.value.current = value.map(gcv);
		});
	}
	isTickValueSelected = (tickValue) => {
		return this.opts.value.current.includes(tickValue);
	};
	isThumbActive(index) {
		return this.isActive && this.activeThumb?.idx === index;
	}
	applyPosition({ clientXY, activeThumbIdx, start, end }) {
		const min = this.opts.min.current;
		const max = this.opts.max.current;
		const val = (clientXY - start) / (end - start) * (max - min) + min;
		if (val < min) this.updateValue(min, activeThumbIdx);
		else if (val > max) this.updateValue(max, activeThumbIdx);
		else {
			const steps = this.normalizedSteps;
			const newValue = snapValueToCustomSteps(val, steps);
			this.updateValue(newValue, activeThumbIdx);
		}
	}
	#getClosestThumb = (e) => {
		const thumbs = this.getAllThumbs();
		if (!thumbs.length) return;
		for (const thumb of thumbs) thumb.blur();
		const distances = thumbs.map((thumb) => {
			if (this.opts.orientation.current === "horizontal") {
				const { left, right } = thumb.getBoundingClientRect();
				return Math.abs(e.clientX - (left + right) / 2);
			} else {
				const { top, bottom } = thumb.getBoundingClientRect();
				return Math.abs(e.clientY - (top + bottom) / 2);
			}
		});
		const node = thumbs[distances.indexOf(Math.min(...distances))];
		return {
			node,
			idx: thumbs.indexOf(node)
		};
	};
	handlePointerMove = (e) => {
		if (!this.isActive || this.opts.disabled.current) return;
		e.preventDefault();
		e.stopPropagation();
		const sliderNode = this.opts.ref.current;
		const activeThumb = this.activeThumb;
		if (!sliderNode || !activeThumb) return;
		activeThumb.node.focus();
		const { left, right, top, bottom } = sliderNode.getBoundingClientRect();
		const direction = this.direction;
		if (direction === "lr") this.applyPosition({
			clientXY: e.clientX,
			activeThumbIdx: activeThumb.idx,
			start: left,
			end: right
		});
		else if (direction === "rl") this.applyPosition({
			clientXY: e.clientX,
			activeThumbIdx: activeThumb.idx,
			start: right,
			end: left
		});
		else if (direction === "bt") this.applyPosition({
			clientXY: e.clientY,
			activeThumbIdx: activeThumb.idx,
			start: bottom,
			end: top
		});
		else if (direction === "tb") this.applyPosition({
			clientXY: e.clientY,
			activeThumbIdx: activeThumb.idx,
			start: top,
			end: bottom
		});
	};
	handlePointerDown = (e) => {
		if (e.button !== 0 || this.opts.disabled.current) return;
		const sliderNode = this.opts.ref.current;
		const closestThumb = this.#getClosestThumb(e);
		if (!closestThumb || !sliderNode) return;
		const target = e.composedPath()[0] ?? e.target;
		if (!isElementOrSVGElement(target) || !sliderNode.contains(target)) return;
		e.preventDefault();
		this.activeThumb = closestThumb;
		closestThumb.node.focus();
		this.isActive = true;
		this.handlePointerMove(e);
	};
	handlePointerUp = () => {
		if (this.opts.disabled.current) return;
		if (this.isActive) this.opts.onValueCommit.current(run(() => this.opts.value.current));
		this.isActive = false;
	};
	getAllThumbs = () => {
		const node = this.opts.ref.current;
		if (!node) return [];
		return Array.from(node.querySelectorAll(sliderAttrs.selector("thumb")));
	};
	updateValue = (thumbValue, idx) => {
		const currValue = this.opts.value.current;
		if (!currValue.length) {
			this.opts.value.current.push(thumbValue);
			return;
		}
		if (currValue[idx] === thumbValue) return;
		const newValue = [...currValue];
		if (!isValidIndex(idx, newValue)) return;
		const direction = newValue[idx] > thumbValue ? -1 : 1;
		const swap = () => {
			const diffIndex = idx + direction;
			newValue[idx] = newValue[diffIndex];
			newValue[diffIndex] = thumbValue;
			const thumbs = this.getAllThumbs();
			if (!thumbs.length) return;
			thumbs[diffIndex]?.focus();
			this.activeThumb = {
				node: thumbs[diffIndex],
				idx: diffIndex
			};
		};
		if (this.opts.autoSort.current && (direction === -1 && thumbValue < newValue[idx - 1] || direction === 1 && thumbValue > newValue[idx + 1])) {
			swap();
			this.opts.value.current = newValue;
			return;
		}
		const steps = this.normalizedSteps;
		newValue[idx] = snapValueToCustomSteps(thumbValue, steps);
		this.opts.value.current = newValue;
	};
	#thumbsPropsArr = derived(() => {
		const currValue = this.opts.value.current;
		return Array.from({ length: currValue.length || 1 }, (_, i) => {
			const currThumb = run(() => this.currentThumbIdx);
			if (currThumb < currValue.length) run(() => {
				this.currentThumbIdx = currThumb + 1;
			});
			const thumbValue = currValue[i];
			const thumbPosition = this.getPositionFromValue(thumbValue ?? 0);
			const style = getThumbStyles(this.direction, thumbPosition);
			return {
				role: "slider",
				"aria-valuemin": this.opts.min.current,
				"aria-valuemax": this.opts.max.current,
				"aria-valuenow": thumbValue,
				"aria-disabled": boolToStr(this.opts.disabled.current),
				"aria-orientation": this.opts.orientation.current,
				"data-value": thumbValue,
				"data-orientation": this.opts.orientation.current,
				style,
				[sliderAttrs.thumb]: ""
			};
		});
	});
	get thumbsPropsArr() {
		return this.#thumbsPropsArr();
	}
	set thumbsPropsArr($$value) {
		return this.#thumbsPropsArr($$value);
	}
	#thumbsRenderArr = derived(() => {
		return this.thumbsPropsArr.map((_, i) => i);
	});
	get thumbsRenderArr() {
		return this.#thumbsRenderArr();
	}
	set thumbsRenderArr($$value) {
		return this.#thumbsRenderArr($$value);
	}
	#ticksPropsArr = derived(() => {
		const steps = this.normalizedSteps;
		const currValue = this.opts.value.current;
		return steps.map((tickValue, i) => {
			const tickPosition = this.getPositionFromValue(tickValue);
			const isFirst = i === 0;
			const isLast = i === steps.length - 1;
			const offsetPercentage = isFirst ? 0 : isLast ? -100 : -50;
			const style = getTickStyles(this.direction, tickPosition, offsetPercentage);
			const bounded = currValue.length === 1 ? tickValue <= currValue[0] : currValue[0] <= tickValue && tickValue <= currValue[currValue.length - 1];
			return {
				"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
				"data-orientation": this.opts.orientation.current,
				"data-bounded": bounded ? "" : void 0,
				"data-value": tickValue,
				style,
				[sliderAttrs.tick]: ""
			};
		});
	});
	get ticksPropsArr() {
		return this.#ticksPropsArr();
	}
	set ticksPropsArr($$value) {
		return this.#ticksPropsArr($$value);
	}
	#ticksRenderArr = derived(() => {
		return this.ticksPropsArr.map((_, i) => i);
	});
	get ticksRenderArr() {
		return this.#ticksRenderArr();
	}
	set ticksRenderArr($$value) {
		return this.#ticksRenderArr($$value);
	}
	#tickItemsArr = derived(() => {
		return this.ticksPropsArr.map((tick, i) => ({
			value: tick["data-value"],
			index: i
		}));
	});
	get tickItemsArr() {
		return this.#tickItemsArr();
	}
	set tickItemsArr($$value) {
		return this.#tickItemsArr($$value);
	}
	#thumbItemsArr = derived(() => {
		return this.opts.value.current.map((value, index) => ({
			value,
			index
		}));
	});
	get thumbItemsArr() {
		return this.#thumbItemsArr();
	}
	set thumbItemsArr($$value) {
		return this.#thumbItemsArr($$value);
	}
	#snippetProps = derived(() => ({
		ticks: this.ticksRenderArr,
		thumbs: this.thumbsRenderArr,
		tickItems: this.tickItemsArr,
		thumbItems: this.thumbItemsArr
	}));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
};
var SliderRootState = class {
	static create(opts) {
		const { type, ...rest } = opts;
		const rootState = type === "single" ? new SliderSingleRootState(rest) : new SliderMultiRootState(rest);
		return SliderRootContext.set(rootState);
	}
};
const VALID_SLIDER_KEYS = [
	ARROW_LEFT,
	ARROW_RIGHT,
	ARROW_UP,
	ARROW_DOWN,
	HOME,
	"End"
];
var SliderRangeState = class SliderRangeState {
	static create(opts) {
		return new SliderRangeState(opts, SliderRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(opts.ref);
	}
	#rangeStyles = derived(() => {
		if (Array.isArray(this.root.opts.value.current)) {
			const min = this.root.opts.value.current.length > 1 ? this.root.getPositionFromValue(Math.min(...this.root.opts.value.current) ?? 0) : 0;
			const max = 100 - this.root.getPositionFromValue(Math.max(...this.root.opts.value.current) ?? 0);
			return {
				position: "absolute",
				...getRangeStyles(this.root.direction, min, max)
			};
		} else {
			const trackPadding = this.root.opts.trackPadding?.current;
			const currentValue = this.root.opts.value.current;
			const maxValue = this.root.opts.max.current;
			const min = 0;
			const max = trackPadding !== void 0 && trackPadding > 0 && currentValue === maxValue ? 0 : 100 - this.root.getPositionFromValue(currentValue);
			return {
				position: "absolute",
				...getRangeStyles(this.root.direction, min, max)
			};
		}
	});
	get rangeStyles() {
		return this.#rangeStyles();
	}
	set rangeStyles($$value) {
		return this.#rangeStyles($$value);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		"data-orientation": this.root.opts.orientation.current,
		"data-disabled": boolToEmptyStrOrUndef(this.root.opts.disabled.current),
		style: this.rangeStyles,
		[sliderAttrs.range]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var SliderThumbState = class SliderThumbState {
	static create(opts) {
		return new SliderThumbState(opts, SliderRootContext.get());
	}
	opts;
	root;
	attachment;
	#isDisabled = derived(() => this.root.opts.disabled.current || this.opts.disabled.current);
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(opts.ref);
		this.onkeydown = this.onkeydown.bind(this);
	}
	#updateValue(newValue) {
		if (this.root.isMulti) this.root.updateValue(newValue, this.opts.index.current);
		else this.root.updateValue(newValue);
	}
	onkeydown(e) {
		if (this.#isDisabled()) return;
		const currNode = this.opts.ref.current;
		if (!currNode) return;
		const thumbs = this.root.getAllThumbs();
		if (!thumbs.length) return;
		const idx = thumbs.indexOf(currNode);
		if (this.root.isMulti) this.root.currentThumbIdx = idx;
		if (!VALID_SLIDER_KEYS.includes(e.key)) return;
		e.preventDefault();
		const min = this.root.opts.min.current;
		const max = this.root.opts.max.current;
		const value = this.root.opts.value.current;
		const thumbValue = Array.isArray(value) ? value[idx] : value;
		const orientation = this.root.opts.orientation.current;
		const direction = this.root.direction;
		const steps = this.root.normalizedSteps;
		switch (e.key) {
			case HOME:
				this.#updateValue(min);
				break;
			case "End":
				this.#updateValue(max);
				break;
			case ARROW_LEFT:
				if (orientation !== "horizontal") break;
				if (e.metaKey) {
					const newValue = direction === "rl" ? max : min;
					this.#updateValue(newValue);
				} else {
					const newValue = getAdjacentStepValue(thumbValue, steps, direction === "rl" ? "next" : "prev");
					this.#updateValue(newValue);
				}
				break;
			case ARROW_RIGHT:
				if (orientation !== "horizontal") break;
				if (e.metaKey) {
					const newValue = direction === "rl" ? min : max;
					this.#updateValue(newValue);
				} else {
					const newValue = getAdjacentStepValue(thumbValue, steps, direction === "rl" ? "prev" : "next");
					this.#updateValue(newValue);
				}
				break;
			case ARROW_UP:
				if (e.metaKey) {
					const newValue = direction === "tb" ? min : max;
					this.#updateValue(newValue);
				} else {
					const newValue = getAdjacentStepValue(thumbValue, steps, direction === "tb" ? "prev" : "next");
					this.#updateValue(newValue);
				}
				break;
			case ARROW_DOWN:
				if (e.metaKey) {
					const newValue = direction === "tb" ? max : min;
					this.#updateValue(newValue);
				} else {
					const newValue = getAdjacentStepValue(thumbValue, steps, direction === "tb" ? "next" : "prev");
					this.#updateValue(newValue);
				}
				break;
		}
		this.root.opts.onValueCommit.current(this.root.opts.value.current);
	}
	#props = derived(() => ({
		...this.root.thumbsPropsArr[this.opts.index.current],
		id: this.opts.id.current,
		onkeydown: this.onkeydown,
		"data-active": this.root.isThumbActive(this.opts.index.current) ? "" : void 0,
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current || this.root.opts.disabled.current),
		tabindex: this.opts.disabled.current || this.root.opts.disabled.current ? -1 : 0,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
function Slider$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		const uid = props_id($$renderer2);
		let { children, child, id = createId(uid), ref = null, value = void 0, type, onValueChange = noop, onValueCommit = noop, disabled = false, min: minProp, max: maxProp, step = 1, dir = "ltr", autoSort = true, orientation = "horizontal", thumbPositioning = "contain", trackPadding, $$slots, $$events, ...restProps } = $$props;
		const min = derived(() => {
			if (minProp !== void 0) return minProp;
			if (Array.isArray(step)) return Math.min(...step);
			return 0;
		});
		const max = derived(() => {
			if (maxProp !== void 0) return maxProp;
			if (Array.isArray(step)) return Math.max(...step);
			return 100;
		});
		function handleDefaultValue() {
			if (value !== void 0) return;
			if (type === "single") return min();
			return [];
		}
		handleDefaultValue();
		watch.pre(() => value, () => {
			handleDefaultValue();
		});
		const rootState = SliderRootState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			value: boxWith(() => value, (v) => {
				value = v;
				onValueChange(v);
			}),
			onValueCommit: boxWith(() => onValueCommit),
			disabled: boxWith(() => disabled),
			min: boxWith(() => min()),
			max: boxWith(() => max()),
			step: boxWith(() => step),
			dir: boxWith(() => dir),
			autoSort: boxWith(() => autoSort),
			orientation: boxWith(() => orientation),
			thumbPositioning: boxWith(() => thumbPositioning),
			type,
			trackPadding: boxWith(() => trackPadding)
		});
		const mergedProps = derived(() => mergeProps(restProps, rootState.props));
		if (child) {
			$$renderer2.push("<!--[0-->");
			child($$renderer2, {
				props: mergedProps(),
				...rootState.snippetProps
			});
			$$renderer2.push(`<!---->`);
		} else {
			$$renderer2.push("<!--[-1-->");
			$$renderer2.push(`<span${attributes({ ...mergedProps() })}>`);
			children?.($$renderer2, rootState.snippetProps);
			$$renderer2.push(`<!----></span>`);
		}
		$$renderer2.push(`<!--]-->`);
		bind_props($$props, {
			ref,
			value
		});
	});
}
function Slider_range($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		const uid = props_id($$renderer2);
		let { children, child, ref = null, id = createId(uid), $$slots, $$events, ...restProps } = $$props;
		const rangeState = SliderRangeState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, rangeState.props));
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
function Slider_thumb($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		const uid = props_id($$renderer2);
		let { children, child, ref = null, id = createId(uid), index, disabled = false, $$slots, $$events, ...restProps } = $$props;
		const thumbState = SliderThumbState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			index: boxWith(() => index),
			disabled: boxWith(() => disabled)
		});
		const mergedProps = derived(() => mergeProps(restProps, thumbState.props));
		if (child) {
			$$renderer2.push("<!--[0-->");
			child($$renderer2, {
				active: thumbState.root.isThumbActive(thumbState.opts.index.current),
				props: mergedProps()
			});
			$$renderer2.push(`<!---->`);
		} else {
			$$renderer2.push("<!--[-1-->");
			$$renderer2.push(`<span${attributes({ ...mergedProps() })}>`);
			children?.($$renderer2, { active: thumbState.root.isThumbActive(thumbState.opts.index.current) });
			$$renderer2.push(`<!----></span>`);
		}
		$$renderer2.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
const tabsAttrs = createBitsAttrs({
	component: "tabs",
	parts: [
		"root",
		"list",
		"trigger",
		"content"
	]
});
const TabsRootContext = new Context("Tabs.Root");
var TabsRootState = class TabsRootState {
	static create(opts) {
		return TabsRootContext.set(new TabsRootState(opts));
	}
	opts;
	attachment;
	rovingFocusGroup;
	triggerIds = [];
	valueToTriggerId = new SvelteMap();
	valueToContentId = new SvelteMap();
	constructor(opts) {
		this.opts = opts;
		this.attachment = attachRef(opts.ref);
		this.rovingFocusGroup = new RovingFocusGroup({
			candidateAttr: tabsAttrs.trigger,
			rootNode: this.opts.ref,
			loop: this.opts.loop,
			orientation: this.opts.orientation
		});
	}
	registerTrigger(id, value) {
		this.triggerIds.push(id);
		this.valueToTriggerId.set(value, id);
		return () => {
			this.triggerIds = this.triggerIds.filter((triggerId) => triggerId !== id);
			this.valueToTriggerId.delete(value);
		};
	}
	registerContent(id, value) {
		this.valueToContentId.set(value, id);
		return () => {
			this.valueToContentId.delete(value);
		};
	}
	setValue(v) {
		this.opts.value.current = v;
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		"data-orientation": this.opts.orientation.current,
		[tabsAttrs.root]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var TabsListState = class TabsListState {
	static create(opts) {
		return new TabsListState(opts, TabsRootContext.get());
	}
	opts;
	root;
	attachment;
	#isDisabled = derived(() => this.root.opts.disabled.current);
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(opts.ref);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: "tablist",
		"aria-orientation": this.root.opts.orientation.current,
		"data-orientation": this.root.opts.orientation.current,
		[tabsAttrs.list]: "",
		"data-disabled": boolToEmptyStrOrUndef(this.#isDisabled()),
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var TabsTriggerState = class TabsTriggerState {
	static create(opts) {
		return new TabsTriggerState(opts, TabsRootContext.get());
	}
	opts;
	root;
	attachment;
	#tabIndex = 0;
	#isActive = derived(() => this.root.opts.value.current === this.opts.value.current);
	#isDisabled = derived(() => this.opts.disabled.current || this.root.opts.disabled.current);
	#ariaControls = derived(() => this.root.valueToContentId.get(this.opts.value.current));
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(opts.ref);
		watch([() => this.opts.id.current, () => this.opts.value.current], ([id, value]) => {
			return this.root.registerTrigger(id, value);
		});
		this.onfocus = this.onfocus.bind(this);
		this.onclick = this.onclick.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
	}
	#activate() {
		if (this.root.opts.value.current === this.opts.value.current) return;
		this.root.setValue(this.opts.value.current);
	}
	onfocus(_) {
		if (this.root.opts.activationMode.current !== "automatic" || this.#isDisabled()) return;
		this.#activate();
	}
	onclick(_) {
		if (this.#isDisabled()) return;
		this.#activate();
	}
	onkeydown(e) {
		if (this.#isDisabled()) return;
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			this.#activate();
			return;
		}
		this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, e);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: "tab",
		"data-state": getTabDataState(this.#isActive()),
		"data-value": this.opts.value.current,
		"data-orientation": this.root.opts.orientation.current,
		"data-disabled": boolToEmptyStrOrUndef(this.#isDisabled()),
		"aria-selected": boolToStr(this.#isActive()),
		"aria-controls": this.#ariaControls(),
		[tabsAttrs.trigger]: "",
		disabled: boolToTrueOrUndef(this.#isDisabled()),
		tabindex: this.#tabIndex,
		onclick: this.onclick,
		onfocus: this.onfocus,
		onkeydown: this.onkeydown,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var TabsContentState = class TabsContentState {
	static create(opts) {
		return new TabsContentState(opts, TabsRootContext.get());
	}
	opts;
	root;
	attachment;
	#isActive = derived(() => this.root.opts.value.current === this.opts.value.current);
	#ariaLabelledBy = derived(() => this.root.valueToTriggerId.get(this.opts.value.current));
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(opts.ref);
		watch([() => this.opts.id.current, () => this.opts.value.current], ([id, value]) => {
			return this.root.registerContent(id, value);
		});
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: "tabpanel",
		hidden: boolToTrueOrUndef(!this.#isActive()),
		tabindex: 0,
		"data-value": this.opts.value.current,
		"data-state": getTabDataState(this.#isActive()),
		"aria-labelledby": this.#ariaLabelledBy(),
		"data-orientation": this.root.opts.orientation.current,
		[tabsAttrs.content]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
function getTabDataState(condition) {
	return condition ? "active" : "inactive";
}
function Tabs$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		const uid = props_id($$renderer2);
		let { id = createId(uid), ref = null, value = "", onValueChange = noop, orientation = "horizontal", loop = true, activationMode = "automatic", disabled = false, children, child, $$slots, $$events, ...restProps } = $$props;
		const rootState = TabsRootState.create({
			id: boxWith(() => id),
			value: boxWith(() => value, (v) => {
				value = v;
				onValueChange(v);
			}),
			orientation: boxWith(() => orientation),
			loop: boxWith(() => loop),
			activationMode: boxWith(() => activationMode),
			disabled: boxWith(() => disabled),
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
			ref,
			value
		});
	});
}
function Tabs_content$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		const uid = props_id($$renderer2);
		let { children, child, id = createId(uid), ref = null, value, $$slots, $$events, ...restProps } = $$props;
		const contentState = TabsContentState.create({
			value: boxWith(() => value),
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, contentState.props));
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
		bind_props($$props, { ref });
	});
}
function Tabs_list$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		const uid = props_id($$renderer2);
		let { child, children, id = createId(uid), ref = null, $$slots, $$events, ...restProps } = $$props;
		const listState = TabsListState.create({
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, listState.props));
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
		bind_props($$props, { ref });
	});
}
function Tabs_trigger$1($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		const uid = props_id($$renderer2);
		let { child, children, disabled = false, id = createId(uid), type = "button", value, ref = null, $$slots, $$events, ...restProps } = $$props;
		const triggerState = TabsTriggerState.create({
			id: boxWith(() => id),
			disabled: boxWith(() => disabled ?? false),
			value: boxWith(() => value),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, triggerState.props, { type }));
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
function Slider($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, value = void 0, orientation = "horizontal", class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			{
				let children = function($$renderer4, { thumbItems }) {
					$$renderer4.push(`<span data-slot="slider-track"${attr("data-orientation", orientation)}${attr_class(clsx(cn("bg-muted rounded-full data-horizontal:h-1.5 data-horizontal:w-full data-vertical:h-full data-vertical:w-1.5 bg-muted relative grow overflow-hidden data-horizontal:w-full data-vertical:h-full")))}>`);
					if (Slider_range) {
						$$renderer4.push("<!--[-->");
						Slider_range($$renderer4, {
							"data-slot": "slider-range",
							class: cn("bg-primary absolute select-none data-horizontal:h-full data-vertical:w-full")
						});
						$$renderer4.push("<!--]-->");
					} else {
						$$renderer4.push("<!--[!-->");
						$$renderer4.push("<!--]-->");
					}
					$$renderer4.push(`</span> <!--[-->`);
					const each_array = ensure_array_like(thumbItems);
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let thumb = each_array[$$index];
						if (Slider_thumb) {
							$$renderer4.push("<!--[-->");
							Slider_thumb($$renderer4, {
								"data-slot": "slider-thumb",
								index: thumb.index,
								class: "border-primary ring-ring/50 size-4 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden block shrink-0 select-none disabled:pointer-events-none disabled:opacity-50"
							});
							$$renderer4.push("<!--]-->");
						} else {
							$$renderer4.push("<!--[!-->");
							$$renderer4.push("<!--]-->");
						}
					}
					$$renderer4.push(`<!--]-->`);
				};
				if (Slider$1) {
					$$renderer3.push("<!--[-->");
					Slider$1($$renderer3, spread_props([
						{
							"data-slot": "slider",
							orientation,
							class: cn("data-vertical:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col", className)
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
							get value() {
								return value;
							},
							set value($$value) {
								value = $$value;
								$$settled = false;
							},
							children,
							$$slots: { default: true }
						}
					]));
					$$renderer3.push("<!--]-->");
				} else {
					$$renderer3.push("<!--[!-->");
					$$renderer3.push("<!--]-->");
				}
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
			value
		});
	});
}
function Tabs($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, value = "", class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			if (Tabs$1) {
				$$renderer3.push("<!--[-->");
				Tabs$1($$renderer3, spread_props([
					{
						"data-slot": "tabs",
						class: cn("gap-2 group/tabs flex data-[orientation=horizontal]:flex-col", className)
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
						get value() {
							return value;
						},
						set value($$value) {
							value = $$value;
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
			value
		});
	});
}
function Tabs_content($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			if (Tabs_content$1) {
				$$renderer3.push("<!--[-->");
				Tabs_content$1($$renderer3, spread_props([
					{
						"data-slot": "tabs-content",
						class: cn("text-sm flex-1 outline-none", className)
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
const tabsListVariants = tv({
	base: "rounded-lg p-[3px] group-data-horizontal/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col",
	variants: { variant: {
		default: "cn-tabs-list-variant-default bg-muted",
		line: "cn-tabs-list-variant-line gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function Tabs_list($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, variant = "default", class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			if (Tabs_list$1) {
				$$renderer3.push("<!--[-->");
				Tabs_list$1($$renderer3, spread_props([
					{
						"data-slot": "tabs-list",
						"data-variant": variant,
						class: cn(tabsListVariants({ variant }), className)
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
function Tabs_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			if (Tabs_trigger$1) {
				$$renderer3.push("<!--[-->");
				Tabs_trigger$1($$renderer3, spread_props([
					{
						"data-slot": "tabs-trigger",
						class: cn("gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent", "data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground", "after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", className)
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
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer2) => {
		let currentView = "menu";
		let playerName = "";
		let roomId = "";
		let isHost = false;
		let round = 1;
		let maxRounds = 5;
		let targetColorsList = [];
		let targetColor = {
			h: 0,
			s: 0,
			l: 0
		};
		let guessH = 180;
		let guessS = 50;
		let guessL = 50;
		let score = 0;
		let roundScore = 0;
		let showTarget = true;
		let countdown = 5;
		let timerInterval;
		let client = null;
		let players = [];
		const generateRandomColor = () => ({
			h: Math.floor(Math.random() * 360),
			s: Math.floor(Math.random() * 60) + 20,
			l: Math.floor(Math.random() * 60) + 20
		});
		const calculateScore = () => {
			const hDiff = Math.min(Math.abs(targetColor.h - guessH), 360 - Math.abs(targetColor.h - guessH)) / 180 * 100;
			const sDiff = Math.abs(targetColor.s - guessS);
			const lDiff = Math.abs(targetColor.l - guessL);
			let rawScore = 10 - (hDiff + sDiff + lDiff) / 3 / 10;
			rawScore = Math.max(0, rawScore);
			return Math.round(rawScore * 100) / 100;
		};
		const connectMQTT = (room) => {
			client = mqtt.connect("wss://broker.emqx.io:8084/mqtt", { clientId: `ozan_game_${Math.random().toString(16).slice(3)}` });
			client.on("connect", () => {
				client?.subscribe(`ozan/colorgame/${room}`);
				client?.publish(`ozan/colorgame/${room}`, JSON.stringify({
					type: "join",
					name: playerName
				}));
			});
			client.on("message", (topic, message) => {
				const data = JSON.parse(message.toString());
				if (data.type === "join") {
					if (!players.find((p) => p.name === data.name)) players = [...players, {
						name: data.name,
						score: 0,
						currentRound: 0,
						isFinished: false
					}];
					if (isHost) client?.publish(`ozan/colorgame/${roomId}`, JSON.stringify({
						type: "sync_players",
						players
					}));
				} else if (data.type === "sync_players" && !isHost) players = data.players;
				else if (data.type === "start_game") {
					targetColorsList = data.targetColors;
					players = players.map((p) => ({
						...p,
						score: 0,
						currentRound: 1,
						isFinished: false
					}));
					score = 0;
					round = 1;
					startLocalRound();
				} else if (data.type === "update_progress") players = players.map((p) => p.name === data.name ? {
					...p,
					score: data.totalScore,
					currentRound: data.round,
					isFinished: data.isFinished
				} : p);
			});
		};
		const startSolo = () => {
			if (!playerName) return;
			targetColorsList = Array.from({ length: maxRounds }, generateRandomColor);
			players = [{
				name: playerName,
				score: 0,
				currentRound: 1,
				isFinished: false
			}];
			score = 0;
			round = 1;
			startLocalRound();
		};
		const createRoom = () => {
			if (!playerName) return;
			isHost = true;
			roomId = Math.random().toString(36).substring(2, 6).toUpperCase();
			players = [{
				name: playerName,
				score: 0,
				currentRound: 0,
				isFinished: false
			}];
			connectMQTT(roomId);
			currentView = "lobby";
		};
		const joinRoom = () => {
			if (!playerName || !roomId) return;
			isHost = false;
			players = [{
				name: playerName,
				score: 0,
				currentRound: 0,
				isFinished: false
			}];
			connectMQTT(roomId);
			currentView = "lobby";
		};
		const startMultiplayerGame = () => {
			if (!isHost) return;
			const newTargets = Array.from({ length: maxRounds }, generateRandomColor);
			client?.publish(`ozan/colorgame/${roomId}`, JSON.stringify({
				type: "start_game",
				targetColors: newTargets
			}));
		};
		const startLocalRound = () => {
			currentView = "playing";
			showTarget = true;
			guessH = 180;
			guessS = 50;
			guessL = 50;
			countdown = 5;
			targetColor = targetColorsList[round - 1];
			if (timerInterval) clearInterval(timerInterval);
			timerInterval = setInterval(() => {
				countdown -= 1;
				if (countdown <= 0) {
					clearInterval(timerInterval);
					showTarget = false;
				}
			}, 1e3);
		};
		const submitGuess = () => {
			if (timerInterval) clearInterval(timerInterval);
			roundScore = calculateScore();
			score += roundScore;
			players = players.map((p) => p.name === playerName ? {
				...p,
				score,
				currentRound: round,
				isFinished: false
			} : p);
			if (client) client.publish(`ozan/colorgame/${roomId}`, JSON.stringify({
				type: "update_progress",
				name: playerName,
				totalScore: score,
				round,
				isFinished: false
			}));
			currentView = "result";
		};
		const nextRound = () => {
			if (round >= maxRounds) {
				players = players.map((p) => p.name === playerName ? {
					...p,
					isFinished: true
				} : p);
				if (client) client.publish(`ozan/colorgame/${roomId}`, JSON.stringify({
					type: "update_progress",
					name: playerName,
					totalScore: score,
					round,
					isFinished: true
				}));
				currentView = "final_result";
				return;
			}
			round++;
			players = players.map((p) => p.name === playerName ? {
				...p,
				currentRound: round
			} : p);
			if (client) client.publish(`ozan/colorgame/${roomId}`, JSON.stringify({
				type: "update_progress",
				name: playerName,
				totalScore: score,
				round,
				isFinished: false
			}));
			startLocalRound();
		};
		const playAgain = () => {
			if (client && isHost) startMultiplayerGame();
			else if (!client) startSolo();
		};
		onDestroy(() => {
			if (client) client.end();
			if (timerInterval) clearInterval(timerInterval);
		});
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer3) {
			head("w20xr6", $$renderer3, ($$renderer4) => {
				$$renderer4.title(($$renderer5) => {
					$$renderer5.push(`<title>Color Match | Portfolio Game</title>`);
				});
			});
			$$renderer3.push(`<div class="relative w-full h-full min-h-[70vh] flex flex-col items-center justify-center p-4"><div class="grid grid-cols-1 grid-rows-1 w-full max-w-md">`);
			if (currentView === "menu") {
				$$renderer3.push("<!--[0-->");
				$$renderer3.push(`<div class="col-start-1 row-start-1 w-full">`);
				Card($$renderer3, {
					class: "w-full text-center",
					children: ($$renderer4) => {
						Card_header($$renderer4, {
							children: ($$renderer5) => {
								Card_title($$renderer5, {
									class: "text-3xl font-black",
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Color Match`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!----> `);
								Card_description($$renderer5, {
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Uji seberapa akurat matamu mengenali warna`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!---->`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----> `);
						Card_content($$renderer4, {
							class: "flex flex-col gap-4",
							children: ($$renderer5) => {
								Button($$renderer5, {
									size: "lg",
									onclick: () => currentView = "solo_setup",
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Main Solo`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!----> `);
								Button($$renderer5, {
									size: "lg",
									variant: "secondary",
									onclick: () => currentView = "multi_setup",
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Multiplayer (Online)`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!---->`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----></div>`);
			} else $$renderer3.push("<!--[-1-->");
			$$renderer3.push(`<!--]--> `);
			if (currentView === "solo_setup") {
				$$renderer3.push("<!--[0-->");
				$$renderer3.push(`<div class="col-start-1 row-start-1 w-full">`);
				Card($$renderer3, {
					class: "w-full",
					children: ($$renderer4) => {
						Card_header($$renderer4, {
							children: ($$renderer5) => {
								Card_title($$renderer5, {
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Setup Solo`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!----> `);
								Card_description($$renderer5, {
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Masukkan namamu untuk mulai bermain`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!---->`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----> `);
						Card_content($$renderer4, {
							children: ($$renderer5) => {
								$$renderer5.push(`<div class="flex flex-col gap-3">`);
								Label($$renderer5, {
									for: "name",
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Nama Pemain`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!----> `);
								Input($$renderer5, {
									id: "name",
									placeholder: "Contoh: Ozan",
									get value() {
										return playerName;
									},
									set value($$value) {
										playerName = $$value;
										$$settled = false;
									}
								});
								$$renderer5.push(`<!----></div>`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----> `);
						Card_footer($$renderer4, {
							class: "flex justify-between",
							children: ($$renderer5) => {
								Button($$renderer5, {
									variant: "ghost",
									onclick: () => currentView = "menu",
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Kembali`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!----> `);
								Button($$renderer5, {
									onclick: startSolo,
									disabled: !playerName,
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Mulai Game`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!---->`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----></div>`);
			} else $$renderer3.push("<!--[-1-->");
			$$renderer3.push(`<!--]--> `);
			if (currentView === "multi_setup") {
				$$renderer3.push("<!--[0-->");
				$$renderer3.push(`<div class="col-start-1 row-start-1 w-full">`);
				Card($$renderer3, {
					class: "w-full",
					children: ($$renderer4) => {
						Card_header($$renderer4, {
							children: ($$renderer5) => {
								Card_title($$renderer5, {
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Multiplayer`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!----> `);
								Card_description($$renderer5, {
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Bermain bersama teman via Room Code`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!---->`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----> `);
						Card_content($$renderer4, {
							children: ($$renderer5) => {
								$$renderer5.push(`<div class="flex flex-col gap-4 mb-6">`);
								Label($$renderer5, {
									for: "m-name",
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Nama Pemain`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!----> `);
								Input($$renderer5, {
									id: "m-name",
									placeholder: "Contoh: Ozan",
									get value() {
										return playerName;
									},
									set value($$value) {
										playerName = $$value;
										$$settled = false;
									}
								});
								$$renderer5.push(`<!----></div> `);
								Tabs($$renderer5, {
									value: "join",
									class: "w-full",
									children: ($$renderer6) => {
										Tabs_list($$renderer6, {
											class: "grid w-full grid-cols-2",
											children: ($$renderer7) => {
												Tabs_trigger($$renderer7, {
													value: "join",
													children: ($$renderer8) => {
														$$renderer8.push(`<!---->Join Room`);
													},
													$$slots: { default: true }
												});
												$$renderer7.push(`<!----> `);
												Tabs_trigger($$renderer7, {
													value: "create",
													children: ($$renderer8) => {
														$$renderer8.push(`<!---->Create Room`);
													},
													$$slots: { default: true }
												});
												$$renderer7.push(`<!---->`);
											},
											$$slots: { default: true }
										});
										$$renderer6.push(`<!----> `);
										Tabs_content($$renderer6, {
											value: "join",
											class: "space-y-4 mt-4",
											children: ($$renderer7) => {
												$$renderer7.push(`<div class="space-y-2">`);
												Label($$renderer7, {
													for: "roomcode",
													children: ($$renderer8) => {
														$$renderer8.push(`<!---->Kode Room`);
													},
													$$slots: { default: true }
												});
												$$renderer7.push(`<!----> `);
												Input($$renderer7, {
													id: "roomcode",
													placeholder: "Masukkan 4 digit kode",
													class: "uppercase",
													get value() {
														return roomId;
													},
													set value($$value) {
														roomId = $$value;
														$$settled = false;
													}
												});
												$$renderer7.push(`<!----></div> `);
												Button($$renderer7, {
													class: "w-full",
													onclick: joinRoom,
													disabled: !playerName || !roomId,
													children: ($$renderer8) => {
														$$renderer8.push(`<!---->Join Game`);
													},
													$$slots: { default: true }
												});
												$$renderer7.push(`<!---->`);
											},
											$$slots: { default: true }
										});
										$$renderer6.push(`<!----> `);
										Tabs_content($$renderer6, {
											value: "create",
											class: "mt-4",
											children: ($$renderer7) => {
												Button($$renderer7, {
													class: "w-full",
													variant: "secondary",
													onclick: createRoom,
													disabled: !playerName,
													children: ($$renderer8) => {
														$$renderer8.push(`<!---->Buat Room Baru`);
													},
													$$slots: { default: true }
												});
											},
											$$slots: { default: true }
										});
										$$renderer6.push(`<!---->`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!---->`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----> `);
						Card_footer($$renderer4, {
							children: ($$renderer5) => {
								Button($$renderer5, {
									variant: "ghost",
									class: "w-full",
									onclick: () => currentView = "menu",
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Kembali ke Menu`);
									},
									$$slots: { default: true }
								});
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----></div>`);
			} else $$renderer3.push("<!--[-1-->");
			$$renderer3.push(`<!--]--> `);
			if (currentView === "lobby") {
				$$renderer3.push("<!--[0-->");
				$$renderer3.push(`<div class="col-start-1 row-start-1 w-full">`);
				Card($$renderer3, {
					class: "w-full text-center",
					children: ($$renderer4) => {
						Card_header($$renderer4, {
							children: ($$renderer5) => {
								Card_title($$renderer5, {
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Room Code: <span class="text-primary font-mono bg-muted px-2 py-1 rounded">${escape_html(roomId)}</span>`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!----> `);
								Card_description($$renderer5, {
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Menunggu pemain lain bergabung...`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!---->`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----> `);
						Card_content($$renderer4, {
							children: ($$renderer5) => {
								$$renderer5.push(`<div class="flex flex-col gap-2 text-left mb-6">`);
								Label($$renderer5, {
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Pemain (${escape_html(players.length)}):`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!----> <div class="bg-muted/50 p-3 rounded-lg flex flex-col gap-2 min-h-16"><!--[-->`);
								const each_array = ensure_array_like(players);
								for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
									let player = each_array[$$index];
									$$renderer5.push(`<div class="flex items-center gap-2">`);
									Badge($$renderer5, {
										variant: "outline",
										children: ($$renderer6) => {
											$$renderer6.push(`<!---->${escape_html(player.name)}`);
										},
										$$slots: { default: true }
									});
									$$renderer5.push(`<!----></div>`);
								}
								$$renderer5.push(`<!--]--></div></div> `);
								if (isHost) {
									$$renderer5.push("<!--[0-->");
									Button($$renderer5, {
										class: "w-full",
										size: "lg",
										onclick: startMultiplayerGame,
										children: ($$renderer6) => {
											$$renderer6.push(`<!---->Mulai Permainan`);
										},
										$$slots: { default: true }
									});
								} else {
									$$renderer5.push("<!--[-1-->");
									$$renderer5.push(`<p class="text-sm text-muted-foreground animate-pulse">Menunggu Host memulai permainan...</p>`);
								}
								$$renderer5.push(`<!--]-->`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----></div>`);
			} else $$renderer3.push("<!--[-1-->");
			$$renderer3.push(`<!--]--> `);
			if (currentView === "playing") {
				$$renderer3.push("<!--[0-->");
				$$renderer3.push(`<div class="col-start-1 row-start-1 w-full flex flex-col gap-6"><div class="flex justify-between items-center">`);
				Badge($$renderer3, {
					variant: "secondary",
					class: "scale-110",
					children: ($$renderer4) => {
						$$renderer4.push(`<!---->Ronde ${escape_html(round)} / 5`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> <span class="font-bold text-lg">Skor: <span class="text-primary">${escape_html(score.toFixed(2))}</span></span></div> `);
				if (client) {
					$$renderer3.push("<!--[0-->");
					$$renderer3.push(`<div class="bg-muted/30 p-3 rounded-lg border flex flex-col gap-2">`);
					Label($$renderer3, {
						class: "text-xs text-muted-foreground uppercase tracking-wider",
						children: ($$renderer4) => {
							$$renderer4.push(`<!---->Status Pemain Lain`);
						},
						$$slots: { default: true }
					});
					$$renderer3.push(`<!----> <div class="flex flex-col gap-1.5"><!--[-->`);
					const each_array_1 = ensure_array_like(players);
					for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
						let p = each_array_1[$$index_1];
						$$renderer3.push(`<div class="flex justify-between items-center text-sm"><span class="font-medium">${escape_html(p.name)} ${escape_html(p.name === playerName ? "(Kamu)" : "")}</span> `);
						if (p.isFinished) {
							$$renderer3.push("<!--[0-->");
							Badge($$renderer3, {
								variant: "secondary",
								class: "text-[10px]",
								children: ($$renderer4) => {
									$$renderer4.push(`<!---->Selesai Game`);
								},
								$$slots: { default: true }
							});
						} else {
							$$renderer3.push("<!--[-1-->");
							$$renderer3.push(`<span class="text-xs text-muted-foreground">Ronde ${escape_html(p.currentRound)} | ${escape_html(p.score.toFixed(2))} Pts</span>`);
						}
						$$renderer3.push(`<!--]--></div>`);
					}
					$$renderer3.push(`<!--]--></div></div>`);
				} else $$renderer3.push("<!--[-1-->");
				$$renderer3.push(`<!--]--> <div class="flex flex-col items-center gap-2"><p class="text-sm font-semibold text-muted-foreground">Ingat &amp; Tebak Warna Ini!</p> <div class="w-full h-48 rounded-xl shadow-inner transition-opacity duration-500 flex items-center justify-center relative"${attr_style(`background-color: hsl(${stringify(targetColor.h)}, ${stringify(targetColor.s)}%, ${stringify(targetColor.l)}%); opacity: ${stringify(showTarget ? "1" : "0")};`)}>`);
				if (showTarget) {
					$$renderer3.push("<!--[0-->");
					$$renderer3.push(`<div class="absolute top-3 right-3 font-mono text-lg font-bold text-white bg-black/30 px-3 py-1 rounded-lg backdrop-blur-md shadow-sm border border-white/10">${escape_html(countdown)}s</div>`);
				} else $$renderer3.push("<!--[-1-->");
				$$renderer3.push(`<!--]--> `);
				if (!showTarget) {
					$$renderer3.push("<!--[0-->");
					$$renderer3.push(`<span class="absolute inset-0 flex items-center justify-center text-muted-foreground font-mono">Warna Disembunyikan</span>`);
				} else $$renderer3.push("<!--[-1-->");
				$$renderer3.push(`<!--]--></div></div> `);
				Separator($$renderer3, {});
				$$renderer3.push(`<!----> <div class="flex flex-col gap-6"><div class="space-y-2"><div class="flex justify-between">`);
				Label($$renderer3, {
					children: ($$renderer4) => {
						$$renderer4.push(`<!---->Hue (Warna)`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> <span class="text-xs text-muted-foreground">${escape_html(guessH)}°</span></div> <div class="relative flex items-center w-full h-12"><div class="absolute inset-0 w-full h-full rounded-md pointer-events-none shadow-inner" style="background: linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);"></div> `);
				Slider($$renderer3, {
					class: "color-slider-track absolute inset-0 w-full h-full",
					type: "single",
					max: 360,
					step: 1,
					get value() {
						return guessH;
					},
					set value($$value) {
						guessH = $$value;
						$$settled = false;
					}
				});
				$$renderer3.push(`<!----></div></div> <div class="space-y-2"><div class="flex justify-between">`);
				Label($$renderer3, {
					children: ($$renderer4) => {
						$$renderer4.push(`<!---->Saturation (Intensitas)`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> <span class="text-xs text-muted-foreground">${escape_html(guessS)}%</span></div> <div class="relative flex items-center w-full h-12"><div class="absolute inset-0 w-full h-full rounded-md pointer-events-none shadow-inner"${attr_style(`background: linear-gradient(to right, hsl(${stringify(guessH)}, 0%, ${stringify(guessL)}%), hsl(${stringify(guessH)}, 100%, ${stringify(guessL)}%));`)}></div> `);
				Slider($$renderer3, {
					class: "color-slider-track absolute inset-0 w-full h-full",
					type: "single",
					max: 100,
					step: 1,
					get value() {
						return guessS;
					},
					set value($$value) {
						guessS = $$value;
						$$settled = false;
					}
				});
				$$renderer3.push(`<!----></div></div> <div class="space-y-2"><div class="flex justify-between">`);
				Label($$renderer3, {
					children: ($$renderer4) => {
						$$renderer4.push(`<!---->Lightness (Kecerahan)`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----> <span class="text-xs text-muted-foreground">${escape_html(guessL)}%</span></div> <div class="relative flex items-center w-full h-12"><div class="absolute inset-0 w-full h-full rounded-md pointer-events-none shadow-inner"${attr_style(`background: linear-gradient(to right, #000000, hsl(${stringify(guessH)}, ${stringify(guessS)}%, 50%), #ffffff);`)}></div> `);
				Slider($$renderer3, {
					class: "color-slider-track absolute inset-0 w-full h-full",
					type: "single",
					max: 100,
					step: 1,
					get value() {
						return guessL;
					},
					set value($$value) {
						guessL = $$value;
						$$settled = false;
					}
				});
				$$renderer3.push(`<!----></div></div></div> <div class="w-full h-24 rounded-lg shadow-md border transition-colors"${attr_style(`background-color: hsl(${stringify(guessH)}, ${stringify(guessS)}%, ${stringify(guessL)}%);`)}></div> `);
				Button($$renderer3, {
					size: "lg",
					class: "w-full mt-2",
					onclick: submitGuess,
					children: ($$renderer4) => {
						$$renderer4.push(`<!---->Kunci Jawaban`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----></div>`);
			} else $$renderer3.push("<!--[-1-->");
			$$renderer3.push(`<!--]--> `);
			if (currentView === "result") {
				$$renderer3.push("<!--[0-->");
				$$renderer3.push(`<div class="col-start-1 row-start-1 w-full">`);
				Card($$renderer3, {
					class: "w-full text-center",
					children: ($$renderer4) => {
						Card_header($$renderer4, {
							children: ($$renderer5) => {
								Card_title($$renderer5, {
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Hasil Ronde ${escape_html(round)}`);
									},
									$$slots: { default: true }
								});
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----> `);
						Card_content($$renderer4, {
							class: "flex flex-col gap-6",
							children: ($$renderer5) => {
								$$renderer5.push(`<div class="flex gap-4 h-24"><div class="flex-1 rounded-lg border flex items-end justify-center pb-2 text-white/80 text-xs font-bold drop-shadow-md"${attr_style(`background-color: hsl(${stringify(targetColor.h)}, ${stringify(targetColor.s)}%, ${stringify(targetColor.l)}%);`)}>Target</div> <div class="flex-1 rounded-lg border flex items-end justify-center pb-2 text-white/80 text-xs font-bold drop-shadow-md"${attr_style(`background-color: hsl(${stringify(guessH)}, ${stringify(guessS)}%, ${stringify(guessL)}%);`)}>Tebakanmu</div></div> <div><p class="text-5xl font-black text-primary mb-2">+${escape_html(roundScore.toFixed(2))}</p> <p class="text-sm text-muted-foreground">Akurasi Tebakan</p></div> `);
								if (client) {
									$$renderer5.push("<!--[0-->");
									$$renderer5.push(`<div class="bg-muted p-4 rounded-lg text-left border">`);
									Label($$renderer5, {
										class: "mb-3 block text-center uppercase tracking-wider",
										children: ($$renderer6) => {
											$$renderer6.push(`<!---->Progress Sementara`);
										},
										$$slots: { default: true }
									});
									$$renderer5.push(`<!----> <!--[-->`);
									const each_array_2 = ensure_array_like([...players].sort((a, b) => b.score - a.score));
									for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
										let player = each_array_2[i];
										$$renderer5.push(`<div class="flex justify-between items-center text-sm py-1.5 border-b border-border/50 last:border-0"><span>Peringkat ${escape_html(i + 1)}: ${escape_html(player.name)} <span class="text-xs text-muted-foreground ml-2">(Ronde ${escape_html(player.currentRound)})</span></span> <span class="font-bold">${escape_html(player.score.toFixed(2))} Pts</span></div>`);
									}
									$$renderer5.push(`<!--]--></div>`);
								} else $$renderer5.push("<!--[-1-->");
								$$renderer5.push(`<!--]--> `);
								Button($$renderer5, {
									onclick: nextRound,
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->${escape_html(round >= maxRounds ? "Lihat Klasemen Akhir" : "Ronde Selanjutnya")}`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!---->`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----></div>`);
			} else $$renderer3.push("<!--[-1-->");
			$$renderer3.push(`<!--]--> `);
			if (currentView === "final_result") {
				$$renderer3.push("<!--[0-->");
				$$renderer3.push(`<div class="col-start-1 row-start-1 w-full">`);
				Card($$renderer3, {
					class: "w-full text-center border-primary shadow-lg",
					children: ($$renderer4) => {
						Card_header($$renderer4, {
							children: ($$renderer5) => {
								Card_title($$renderer5, {
									class: "text-3xl font-black",
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Game Selesai!`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!----> `);
								if (!client) {
									$$renderer5.push("<!--[0-->");
									Card_description($$renderer5, {
										children: ($$renderer6) => {
											$$renderer6.push(`<!---->Skor Akhir Kamu: <span class="font-bold text-foreground">${escape_html(score.toFixed(2))} Pts</span>`);
										},
										$$slots: { default: true }
									});
								} else $$renderer5.push("<!--[-1-->");
								$$renderer5.push(`<!--]-->`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!----> `);
						Card_content($$renderer4, {
							class: "flex flex-col gap-6",
							children: ($$renderer5) => {
								if (client) {
									$$renderer5.push("<!--[0-->");
									$$renderer5.push(`<div class="bg-muted p-4 rounded-xl text-left border shadow-inner">`);
									Label($$renderer5, {
										class: "mb-4 block text-center font-bold text-lg uppercase tracking-wider text-primary",
										children: ($$renderer6) => {
											$$renderer6.push(`<!---->Final Leaderboard`);
										},
										$$slots: { default: true }
									});
									$$renderer5.push(`<!----> <!--[-->`);
									const each_array_3 = ensure_array_like([...players].sort((a, b) => b.score - a.score));
									for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
										let player = each_array_3[i];
										$$renderer5.push(`<div class="flex justify-between items-center text-sm py-2.5 border-b last:border-0 border-border/50"><span class="font-medium flex items-center gap-2">`);
										Badge($$renderer5, {
											variant: i === 0 ? "default" : "outline",
											children: ($$renderer6) => {
												$$renderer6.push(`<!---->Rank ${escape_html(i + 1)}`);
											},
											$$slots: { default: true }
										});
										$$renderer5.push(`<!----> ${escape_html(player.name)} `);
										if (!player.isFinished) {
											$$renderer5.push("<!--[0-->");
											$$renderer5.push(`<span class="text-xs text-muted-foreground">(Masih Main)</span>`);
										} else $$renderer5.push("<!--[-1-->");
										$$renderer5.push(`<!--]--></span> <span class="font-bold text-primary">${escape_html(player.score.toFixed(2))} Pts</span></div>`);
									}
									$$renderer5.push(`<!--]--></div>`);
								} else $$renderer5.push("<!--[-1-->");
								$$renderer5.push(`<!--]--> <div class="flex flex-col gap-3 mt-4">`);
								if (!client || isHost) {
									$$renderer5.push("<!--[0-->");
									Button($$renderer5, {
										size: "lg",
										onclick: playAgain,
										children: ($$renderer6) => {
											$$renderer6.push(`<!---->Main Lagi (Rematch)`);
										},
										$$slots: { default: true }
									});
								} else {
									$$renderer5.push("<!--[-1-->");
									$$renderer5.push(`<p class="text-sm text-muted-foreground bg-muted p-3 rounded-lg border animate-pulse">Menunggu Host untuk memulai Rematch...</p>`);
								}
								$$renderer5.push(`<!--]--> `);
								Button($$renderer5, {
									variant: "ghost",
									onclick: () => {
										if (client) client.end();
										currentView = "menu";
									},
									children: ($$renderer6) => {
										$$renderer6.push(`<!---->Kembali ke Menu Utama`);
									},
									$$slots: { default: true }
								});
								$$renderer5.push(`<!----></div>`);
							},
							$$slots: { default: true }
						});
						$$renderer4.push(`<!---->`);
					},
					$$slots: { default: true }
				});
				$$renderer3.push(`<!----></div>`);
			} else $$renderer3.push("<!--[-1-->");
			$$renderer3.push(`<!--]--></div></div>`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer2.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer2.subsume($$inner_renderer);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-5yRr9L4J.js.map