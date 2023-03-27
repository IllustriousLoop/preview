import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"m15.99 25.903-4.018-1.96.005-.002h-.001l-4.269 2.082 8.286 4.041 8.299-4.032-4.284-2.122zm-8.272.133v-4.165l4.108-2.004 4.225 2.084zm12.831-17.14v6.585l-4.593 2.239 4.224 2.103 4.112-2.003V6.557zm3.744 17.137v-4.165l-12.831-6.39V8.893L7.719 6.554v11.263zM11.45 8.886v-.001l4.543-2.216 4.544 2.216 3.738-2.336-8.285-4.041-8.283 4.043 3.739 2.337z"}"></path></svg>`;
});
export {
  Component as default
};
