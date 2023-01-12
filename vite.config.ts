import { defineConfig } from "vite"

import path from "node:path"
import dts from "vite-plugin-dts"
import svgr from "vite-plugin-svgr"
import react from "@vitejs/plugin-react-swc"

import postcss from "./postcss.config"

export default defineConfig({
  plugins: [react(), svgr(), dts()],
  css: {
    postcss,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: process.env.npm_package_name,
      formats: ["es"],
      fileName: (format) => `lndrui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
})
