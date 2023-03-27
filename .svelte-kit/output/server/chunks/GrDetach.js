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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"m4 4 16 16m2-8-5.28 5.28M15 19l-2 2c-6 6-15-3-9-9l2-2m2-2 5-5c4-4 10 2 6 6l-5 5m-2 2-2 2c-2 2-5-1-3-3l2-2m2-2 5-5"}"></path></svg>`;
});
export {
  Component as default
};
