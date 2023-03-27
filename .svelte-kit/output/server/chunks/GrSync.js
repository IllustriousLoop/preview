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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M5 19h11a7 7 0 0 0 7-7V9M8 15l-4 4 4 4M19 5H8a7 7 0 0 0-7 7v3M16 1l4 4-4 4"}"></path></svg>`;
});
export {
  Component as default
};
