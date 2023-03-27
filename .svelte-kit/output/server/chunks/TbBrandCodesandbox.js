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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M20 7.5v9l-4 2.25L12 21l-4-2.25-4-2.25v-9l4-2.25L12 3l4 2.25zM12 12l4-2.25 4-2.25M12 12v9m0-9L8 9.75 4 7.5"}"></path><path d="${"m20 12-4 2v4.75M4 12l4 2v4.75m0-13.5 4 2.25 4-2.25"}"></path></svg>`;
});
export {
  Component as default
};
