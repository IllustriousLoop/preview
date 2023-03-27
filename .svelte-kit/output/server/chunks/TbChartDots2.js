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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M3 3v18h18"}"></path><circle cx="${"9"}" cy="${"15"}" r="${"2"}"></circle><circle cx="${"13"}" cy="${"5"}" r="${"2"}"></circle><circle cx="${"18"}" cy="${"12"}" r="${"2"}"></circle><path d="${"m21 3-6 1.5m-.887 2.15 2.771 3.695M16 12.5l-5 2"}"></path></svg>`;
});
export {
  Component as default
};
