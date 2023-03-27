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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"9"}" cy="${"15"}" r="${"6"}"></circle><circle cx="${"9"}" cy="${"15"}" r="${"2"}"></circle><circle cx="${"19"}" cy="${"5"}" r="${"2"}"></circle><path d="${"m14.218 17.975 6.619-12.174M6.079 9.756l12.217-6.631"}"></path><circle cx="${"9"}" cy="${"15"}" r="${"2"}"></circle></svg>`;
});
export {
  Component as default
};
