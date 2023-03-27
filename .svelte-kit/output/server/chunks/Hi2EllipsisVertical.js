import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { "aria-hidden": "true" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
