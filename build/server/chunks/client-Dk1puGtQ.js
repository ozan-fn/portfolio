import './state.svelte-5-IPF-90.js';
import './root-BnY0kdZ5.js';
import { w as writable } from './index4-D8chzdeh.js';

function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
function goto(url, opts = {}) {
  {
    throw new Error("Cannot call goto(...) on the server");
  }
}
({
  check: stores.updated.check
});

export { goto as g };
//# sourceMappingURL=client-Dk1puGtQ.js.map
