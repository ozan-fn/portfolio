import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

const path = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      $lib: path("./src/lib"),
      // Integration test memakai env asli dari .env, bukan stub.
      "$env/dynamic/private": path("./tests/integration/env-private.ts"),
    },
  },
  test: {
    include: ["tests/integration/**/*.test.ts"],
    environment: "node",
    testTimeout: 30_000,
    hookTimeout: 30_000,
    sequence: { concurrent: false },
    // File dijalankan berurutan: test file lain membandingkan jumlah row sebelum/sesudah.
    fileParallelism: false,
  },
});
