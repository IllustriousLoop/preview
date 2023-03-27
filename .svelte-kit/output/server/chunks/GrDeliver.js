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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M3 18H1V3h13v14m0 1H9m-3 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm11 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14 8h5l4 5v5h-3"}"></path></svg>`;
});
export {
  Component as default
};
