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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M4.998 7V1H19.5L23 4.5V23h-6m1-22v5h5M4 15h10v8H4v-8Zm2 0v-2a3 3 0 0 1 6 0v2m-4 4h2"}"></path></svg>`;
});
export {
  Component as default
};
