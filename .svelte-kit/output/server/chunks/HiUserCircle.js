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
  )}><path fill-rule="${"evenodd"}" d="${"M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-6-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-2 4a5 5 0 0 0-4.546 2.916A5.986 5.986 0 0 0 10 16a5.986 5.986 0 0 0 4.546-2.084A5 5 0 0 0 10 11z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
