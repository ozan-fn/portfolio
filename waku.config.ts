import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "waku/config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    adapter: "waku/adapters/cloudflare",
    vite: {
        plugins: [
            tailwindcss(),
            react({
                babel: {
                    plugins: ["babel-plugin-react-compiler"],
                },
            }),
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        build: {
            rollupOptions: {
                external: ["@prisma/client"],
            },
        },
    },
});
