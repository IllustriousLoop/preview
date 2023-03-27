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
  )}><path fill-opacity="${".3"}" d="${"M8 16V8h7V5H5v14h10v-3H8Z"}"></path><path d="${"M17 19V5h3v14h-3Z"}"></path></svg>`;
});
export {
  Component as default
};
