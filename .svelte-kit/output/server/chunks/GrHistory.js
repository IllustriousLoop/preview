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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1C7.563 1 4 4 2 7.5M1 1v7h7m8 9-4-4V6"}"></path></svg>`;
});
export {
  Component as default
};
