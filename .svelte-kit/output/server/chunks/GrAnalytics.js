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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M20 7c1.25 1.67 2 3.75 2 6 0 5.52-4.48 10-10 10S2 18.52 2 13 6.48 3 12 3m0-2v12l9.6-7.2C19.41 2.89 15.92 1 12 1Z"}"></path></svg>`;
});
export {
  Component as default
};
