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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M16 4c3.364 1.43 6 4.99 6 9 0 5.6-4.473 10-10 10S2 18.6 2 13c0-4.01 2.636-7.57 6-9m4-3v10"}"></path></svg>`;
});
export {
  Component as default
};
