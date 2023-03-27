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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M20 8.04A803.533 803.533 0 0 0 16 12m-2 2c-1.085 1.085-3.125 3.14-6.122 6.164a2.857 2.857 0 0 1-4.041-4.04A4930.72 4930.72 0 0 0 10 10m2-2c.872-.872 2.191-2.205 3.959-4M7 13h6m6 2 1.5 1.6m-.74 3.173a2 2 0 0 1-2.612-2.608M15 3l6 6M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
