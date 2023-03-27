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
  )}><path fill="${"#444"}" d="${"M4.673 12.51v1.888h3.776v7.551h3.776v-7.551h3.776v7.551h11.327v-3.776h-7.551v-3.776h7.551v-3.776h-7.551v3.776h-3.776v-3.776H4.674v1.888z"}"></path></svg>`;
});
export {
  Component as default
};
