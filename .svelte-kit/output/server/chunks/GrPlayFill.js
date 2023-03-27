import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"m3 22 18-10L3 2v20Zm2-3 12.6-7L5 5v14Zm2-3 7.2-4L7 8v8Zm2-3 1.8-1L9 11v2Z"}"></path></svg>`;
});
export {
  Component as default
};
