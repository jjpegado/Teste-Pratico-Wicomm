import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
    base: command === "serve"
        ? "/"
        : "/Teste-Pratico-Wicomm/",

    build: {
        outDir: "docs",
        emptyOutDir: true,
    },
}));