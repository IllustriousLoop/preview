import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M1.85 7.5a5.65 5.65 0 1 1 11.3 0 5.65 5.65 0 0 1-11.3 0ZM7.5.85a6.65 6.65 0 1 0 0 13.3 6.65 6.65 0 0 0 0-13.3ZM7 8V3.128A4.4 4.4 0 0 1 11.872 8H7Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
