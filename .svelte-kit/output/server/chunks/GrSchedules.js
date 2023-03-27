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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M17 7h6v16H7v-4m16-8h-6M13 0v3M1 7h16M1 3h16v16H1V3Zm4-3v3m-1 8h2m2 0h6M4 15h2m2 0h6"}"></path></svg>`;
});
export {
  Component as default
};
