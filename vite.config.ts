import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import lucidePreprocess from "vite-plugin-lucide-preprocess";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [lucidePreprocess(), tailwindcss(), sveltekit()], //
});
