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
  )}><path fill-rule="${"evenodd"}" d="${"M8 3a2 2 0 0 1 2 2v3h6a2 2 0 1 1 0 4h-6v2a3 3 0 0 0 3 3h3a2 2 0 1 1 0 4h-3a7 7 0 0 1-7-7V5a2 2 0 0 1 2-2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
