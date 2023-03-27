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
  )}><path fill-rule="${"evenodd"}" d="${"M14.243 5.757a6 6 0 1 0-.986 9.284 1 1 0 1 1 1.087 1.678A8 8 0 1 1 18 10a3 3 0 0 1-4.8 2.401A4 4 0 1 1 14 10a1 1 0 1 0 2 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
