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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M4.998 7V1H19.5L23 4.5V23h-6m1-22v5h5M9 23a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-12V9c0-1 0-2 2-2s2 1 2 2 0 2 2 2h2m-9 0h2v2H8v-2Z"}"></path></svg>`;
});
export {
  Component as default
};
