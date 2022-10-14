import HelloWorld from "./HelloWorld.vue";
const DemoUI = {
  // install 方法 接收参数app
  install(app) {
    app.component('hello', HelloWorld);
  },
};
export {HelloWorld}
export default DemoUI;

