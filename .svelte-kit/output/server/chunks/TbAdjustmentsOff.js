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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"6"}" cy="${"10"}" r="${"2"}"></circle><path d="${"M6 6v2m0 4v8"}"></path><circle cx="${"12"}" cy="${"16"}" r="${"2"}"></circle><path d="${"M12 4v4m0 4v2m0 4v2"}"></path><circle cx="${"18"}" cy="${"7"}" r="${"2"}"></circle><path d="${"M18 4v1m0 4v5m0 4v2M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
