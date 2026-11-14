import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

const path = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      $lib: path("./src/lib"),
      // SvelteKit virtual modules are not available in plain Vitest.
      "$env/dynamic/private": path("./src/testing/env-private.ts"),
    },
  },
  test: {
    include: ["src/**/*.test.ts"],
    environment: "node",
  },
});
