import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path"; // 主要用于alias文件路径别名

export default defineConfig({
  plugins: [vue()],
  // 打包配置
  build: {
    lib: {
      input: "src/components/main.js", // 设置入口文件
      name: "nf-tool", // 起个名字，安装、引入用
      fileName: (format) => `nf-tool.${format}.js`, // 打包后的文件名
    },
    sourcemap: false, // 输出.map文件
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
