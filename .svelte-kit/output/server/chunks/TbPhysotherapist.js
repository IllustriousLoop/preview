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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m9 15-1-3 4-2 4 1h3.5"}"></path><circle cx="${"4"}" cy="${"19"}" r="${"1"}"></circle><circle cx="${"12"}" cy="${"6"}" r="${"1"}"></circle><path d="${"M12 17v-7M8 20h7l1-4 4-2m-2 6h3"}"></path></svg>`;
});
export {
  Component as default
};
