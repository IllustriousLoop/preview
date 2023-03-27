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
  )}><path fill-opacity="${".5"}" d="${"M12 21V9H6v6l6 6Z"}"></path><path d="${"M18 9V3H6l6 6H6v6h12l-6-6h6Z"}"></path></svg>`;
});
export {
  Component as default
};
