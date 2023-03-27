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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M14 0v3M1 7h18M6 0v3m-2 8h2m2 0h8M4 15h2m2 0h6m-2 4H1V3h18v10m0 2v9m-4-7 8 5m0-5-8 5"}"></path></svg>`;
});
export {
  Component as default
};
