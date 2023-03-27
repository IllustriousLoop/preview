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
  )}><path fill-rule="${"evenodd"}" d="${"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM7 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-.464 5.535a1 1 0 1 0-1.415-1.414 3 3 0 0 1-4.242 0 1 1 0 0 0-1.415 1.414 5 5 0 0 0 7.072 0z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
