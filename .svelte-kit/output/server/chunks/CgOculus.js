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
  )}><path fill-rule="${"evenodd"}" d="${"M16 10H8a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4ZM8 6a6 6 0 1 0 0 12h8a6 6 0 0 0 0-12H8Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
