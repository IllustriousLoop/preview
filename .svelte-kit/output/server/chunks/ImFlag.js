import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M0 0h2v16H0V0zm13 10.047c1.291 0 2.415-.312 3-.773v-8c-.585.461-1.709.773-3 .773s-2.415-.312-3-.773v8c.585.461 1.709.773 3 .773zM9.5.508C8.767.196 7.695 0 6.5 0 4.994 0 3.682.312 3 .773v8C3.682 8.312 4.994 8 6.5 8c1.195 0 2.267.197 3 .508v-8z"}"></path></svg>`;
});
export {
  Component as default
};
