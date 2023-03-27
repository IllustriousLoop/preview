import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "none" },
      { stroke: "currentColor" },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" },
      { "stroke-width": "2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M22 17c0-5.523-4.477-10-10-10-.308 0-.613.014-.914.041m-3.208.845A10.002 10.002 0 0 0 2 17m9.088-5.931A6.001 6.001 0 0 0 6 17m8 0a2 2 0 1 0-4 0M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
