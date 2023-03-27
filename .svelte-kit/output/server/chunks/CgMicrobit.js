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
  )}><path d="${"M7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"}"></path><path fill-rule="${"evenodd"}" d="${"M7 5a7 7 0 0 0 0 14h10a7 7 0 1 0 0-14H7Zm10 3H7a4 4 0 1 0 0 8h10a4 4 0 0 0 0-8Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
