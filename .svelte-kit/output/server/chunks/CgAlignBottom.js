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
  )}><path fill-opacity="${".5"}" d="${"M13 10h4v6h-4v-6Z"}"></path><path d="${"M11 4H7v12h4V4Zm7 14H6v2h12v-2Z"}"></path></svg>`;
});
export {
  Component as default
};
