import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    watch: false,
    globals: true,
    setupFiles: ["./tests/vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/**/*.tsx", "src/**/*.ts"],
      exclude: [
        "node_modules/",
        "next.config.ts",
        "postcss.config.mjs",
        "tailwind.config.ts",
        "public/",
        "dist/",
        ".next/",
        "vitest.config.ts",
      ],
    },
  },
});
