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
  )}><path stroke="${"currentColor"}" stroke-opacity="${".5"}" stroke-width="${"2"}" d="${"M11 9h2v6h-2V9Z"}"></path><path d="${"M5 5v14h2V5H5Zm12 0v14h2V5h-2Z"}"></path></svg>`;
});
export {
  Component as default
};
