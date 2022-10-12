import { rollup } from "rollup";
import resolve from "@rollup/plugin-node-resolve"; //解决引入外部资源
import postcss from "rollup-plugin-postcss";  //css
import autoprefixer from "autoprefixer";  //css 加前缀
import strip from "@rollup/plugin-strip"; //删除 debugger 语句和函数
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs' //rollup默认是不支持CommonJS模块的,
import vue from 'rollup-plugin-vue'
import replace from 'rollup-plugin-replace'
import cssnano from 'cssnano'
const config = {
  input: "src/components/main.js",
  plugins: [
    babel(),
    commonjs(),
    resolve(),
    vue({
      css: true,
      compileTemplate: true
    }),
    replace({
        'process.env.NODE_ENV':JSON.stringify('production'),
        'process.env.Vue_ENV':JSON.stringify('browser')
    })
  ]
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
