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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"4"}" cy="${"17"}" r="${"2"}"></circle><circle cx="${"13"}" cy="${"17"}" r="${"2"}"></circle><path d="${"M18 13v6h3m-8 0H4m0-4h9m-5-3V7h2a3 3 0 0 1 3 3v5"}"></path><path d="${"M5 15v-2a1 1 0 0 1 1-1h7m5 5h-3"}"></path></svg>`;
});
export {
  Component as default
};
