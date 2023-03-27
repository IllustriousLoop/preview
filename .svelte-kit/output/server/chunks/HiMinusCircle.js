import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 20 20" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM7 9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H7z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
