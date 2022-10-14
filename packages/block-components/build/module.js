import { rollup } from "rollup";
import resolve from "@rollup/plugin-node-resolve"; //解决引入外部资源
import postcss from "rollup-plugin-postcss"; //css
import autoprefixer from "autoprefixer"; //css 加前缀
import strip from "@rollup/plugin-strip"; //删除 debugger 语句和函数
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs"; //rollup默认是不支持CommonJS模块的,
import vue from "rollup-plugin-vue";
import replace from "rollup-plugin-replace";
import image from "@rollup/plugin-image";
import sass from "node-sass";
const config = {
  input: "src/components/main.js",
  plugins: [
    vue(),
    postcss({
      plugins:[]
  }),
    resolve(),
    commonjs({
      sourceMap: false,
    }),
    babel({
      exclude: "node_modules/**", // 指定哪些文件夹时不进行babel编译的
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      "process.env.Vue_ENV": JSON.stringify("browser"),
    }),
    
  ],
  external: ['vue']
};
const outConfig = {
  file: "out/bundle.js",
  format: "esm",
};

async function build() {
  const bundle = await rollup(config);

  // generate code and a sourcemap
  // const { code, map } = await bundle.generate(outputOptions);

  // or write the bundle to disk
  await bundle.write(outConfig);
}

build();
