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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M17 8c2 0 2-1.5.5-1.5 0-3-2-5.5-5.5-5.5S6.5 3.5 6.5 6.5C5 6.5 5 8 7 8m0 0h10l-5 13L7 8Z"}"></path></svg>`;
});
export {
  Component as default
};
