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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M5 5a2 2 0 0 0 2 2m2-2a2 2 0 0 0-2-2M5 22v-5l-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4l-1 1v5"}"></path><circle cx="${"17"}" cy="${"5"}" r="${"2"}"></circle><path d="${"M15 22v-4h-2l1.254-3.763m1.036-2.942A.997.997 0 0 1 16 11h2a1 1 0 0 1 1 1l1.503 4.508M19 19v3M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
