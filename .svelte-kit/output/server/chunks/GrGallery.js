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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M1 1h18v18H1V1Zm4 18v4h18V5.97h-4M6 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 18l5-6 3 3 4-5 5 6"}"></path></svg>`;
});
export {
  Component as default
};
