import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 为工程文件目录设置别名
    alias: {
      "src": fileURLToPath(new URL("./src", import.meta.url)),
      "vui-design": fileURLToPath(new URL("./vui-design", import.meta.url))
    },
    // 忽略模块后缀名
    extensions: [".js", ".ts", ".jsx", ".tsx", ".mjs", ".json", ".vue"]
  },
  plugins: [
    vue(),
    vueJsx()
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: 80,
    open: true
  }
});