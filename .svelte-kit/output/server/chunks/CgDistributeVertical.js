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
  )}><path stroke="${"currentColor"}" stroke-opacity="${".5"}" stroke-width="${"2"}" d="${"M9 11h6v2H9v-2Z"}"></path><path d="${"M19 7H5V5h14v2Zm0 12H5v-2h14v2Z"}"></path></svg>`;
});
export {
  Component as default
};
