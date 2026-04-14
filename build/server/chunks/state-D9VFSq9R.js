import { j as getContext } from "./dev-D04rZKKe.js";
import "./index-server-mysgTDXB.js";
import { i as stores, n as navigating } from "./client-k0AgAWur.js";
//#region .svelte-kit/adapter-bun/chunks/state.js
Object.defineProperty({
	get from() {
		return navigating.current ? navigating.current.from : null;
	},
	get to() {
		return navigating.current ? navigating.current.to : null;
	},
	get type() {
		return navigating.current ? navigating.current.type : null;
	},
	get willUnload() {
		return navigating.current ? navigating.current.willUnload : null;
	},
	get delta() {
		return navigating.current ? navigating.current.delta : null;
	},
	get complete() {
		return navigating.current ? navigating.current.complete : null;
	}
}, "current", { get() {
	throw new Error("Replace navigating.current.<prop> with navigating.<prop>");
} });
stores.updated.check;
function context() {
	return getContext("__request__");
}
/**
* A read-only reactive object with information about the current page, serving several use cases:
* - retrieving the combined `data` of all pages/layouts anywhere in your component tree (also see [loading data](https://svelte.dev/docs/kit/load))
* - retrieving the current value of the `form` prop anywhere in your component tree (also see [form actions](https://svelte.dev/docs/kit/form-actions))
* - retrieving the page state that was set through `goto`, `pushState` or `replaceState` (also see [goto](https://svelte.dev/docs/kit/$app-navigation#goto) and [shallow routing](https://svelte.dev/docs/kit/shallow-routing))
* - retrieving metadata such as the URL you're on, the current route and its parameters, and whether or not there was an error
*
* ```svelte
* <!--- file: +layout.svelte --->
* <script>
* 	import { page } from '$app/state';
* <\/script>
*
* <p>Currently at {page.url.pathname}</p>
*
* {#if page.error}
* 	<span class="red">Problem detected</span>
* {:else}
* 	<span class="small">All systems operational</span>
* {/if}
* ```
*
* Changes to `page` are available exclusively with runes. (The legacy reactivity syntax will not reflect any changes)
*
* ```svelte
* <!--- file: +page.svelte --->
* <script>
* 	import { page } from '$app/state';
* 	const id = $derived(page.params.id); // This will correctly update id for usage on this page
* 	$: badId = page.params.id; // Do not use; will never update after initial load
* <\/script>
* ```
*
* On the server, values can only be read during rendering (in other words _not_ in e.g. `load` functions). In the browser, the values can be read at any time.
*
* @type {import('@sveltejs/kit').Page}
*/
var page = {
	get data() {
		return context().page.data;
	},
	get error() {
		return context().page.error;
	},
	get form() {
		return context().page.form;
	},
	get params() {
		return context().page.params;
	},
	get route() {
		return context().page.route;
	},
	get state() {
		return context().page.state;
	},
	get status() {
		return context().page.status;
	},
	get url() {
		return context().page.url;
	}
};
//#endregion
export { page as t };

//# sourceMappingURL=state-D9VFSq9R.js.map