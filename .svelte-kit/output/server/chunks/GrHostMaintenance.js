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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"m14 23 6-6m1-3a2 2 0 1 0 2 2M17 4h1v1h-1V4Zm-7 19H3V1h18v10M3 13h14M3 18h10M3 8h18"}"></path></svg>`;
});
export {
  Component as default
};
