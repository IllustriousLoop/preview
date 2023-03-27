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
  )}><path fill="${"#444"}" d="${"M25.716 6.696H6.42c-.888 0-1.608.72-1.608 1.608v16.08c0 .888.72 1.608 1.608 1.608h19.296c.888 0 1.608-.72 1.608-1.608V8.304c0-.888-.72-1.608-1.608-1.608zM8.028 17.952l3.216-3.216-3.216-3.216 1.608-1.608 4.824 4.824-4.824 4.824-1.608-1.608zm12.864 1.608H14.46v-1.608h6.432v1.608z"}"></path></svg>`;
});
export {
  Component as default
};
