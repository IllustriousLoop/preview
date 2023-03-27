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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M3 3v18h18"}"></path><circle cx="${"9"}" cy="${"9"}" r="${"2"}"></circle><circle cx="${"19"}" cy="${"7"}" r="${"2"}"></circle><circle cx="${"14"}" cy="${"15"}" r="${"2"}"></circle><path d="${"m10.16 10.62 2.34 2.88m2.588-.172 2.837-4.586"}"></path></svg>`;
});
export {
  Component as default
};
