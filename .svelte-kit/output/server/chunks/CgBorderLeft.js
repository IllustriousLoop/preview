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
  )}><path fill-opacity="${".3"}" d="${"M16 8v8H9v3h10V5H9v3h7Z"}"></path><path d="${"M7 5v14H4V5h3Z"}"></path></svg>`;
});
export {
  Component as default
};
