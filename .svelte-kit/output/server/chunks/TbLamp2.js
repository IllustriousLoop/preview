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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M5 21h9m-4 0-7-8 8.5-5.5"}"></path><path d="${"M13 14c-2.148-2.148-2.148-5.852 0-8 2.088-2.088 5.842-1.972 8 0l-8 8z"}"></path><path d="${"m11.742 7.574-1.156-1.156a2 2 0 0 1 2.828-2.829l1.144 1.144m.942 7.262.208.274a2.527 2.527 0 0 0 3.556 0c.939-.933.98-2.42.122-3.4L19.02 8.5"}"></path></svg>`;
});
export {
  Component as default
};
