import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "app6",
      filename: "remoteEntry.js",
      exposes: {
        "./Widget": {
          name: "Widget",
          import: "./src/Widget.vue",
        },
      },
      shared: ["vue"],
    }),
  ],
  server: {
    port: 3006,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        format: "esm",
        entryFileNames: "assets/[name].js",
        minifyInternalExports: false,
      },
    },
  },
});
