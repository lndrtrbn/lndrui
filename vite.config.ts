import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import react from "@vitejs/plugin-react-swc"
import path from "node:path"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: process.env.npm_package_name,
      formats: ["es", "umd"],
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
