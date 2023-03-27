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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M11 17a2.5 2.5 0 0 0 2 0"}"></path><path d="${"M12 3C7.336 3 4.604 5.331 4.138 8.595a11.816 11.816 0 0 0 2 8.592 10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199-3.064 11.89 11.89 0 0 0 2-8.592C19.4 5.33 16.668 3 12.004 3zm-4 8 2 2m6-2-2 2"}"></path></svg>`;
});
export {
  Component as default
};
