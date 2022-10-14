import { openBlock, createElementBlock, createElementVNode } from 'vue';

var _hoisted_1 = {
  class: "box"
};
var script = {
  __name: 'HelloWorld',
  setup: function setup(__props) {
    var handleClick = function handleClick() {
      console.log("[ 111111 ] >", 111111);
    };
    return function (_ctx, _cache) {
      return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", {
        onClick: handleClick
      }, "sfasdfasdfasdfadsf")]);
    };
  }
};

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.box[data-v-469af010] {\n  background: red;\n  color: aqua;\n}\n";
styleInject(css_248z);

script.__scopeId = "data-v-469af010";
script.__file = "src/components/HelloWorld.vue";

var DemoUI = {
  // install 方法 接收参数app
  install: function install(app) {
    app.component('hello', script);
  }
};

export { script as HelloWorld, DemoUI as default };
