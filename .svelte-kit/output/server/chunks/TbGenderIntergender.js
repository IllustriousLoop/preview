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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M13.5 11.5 20 18v-4m-8.5-.5L18 20"}"></path><circle cx="${"9"}" cy="${"9"}" r="${"5"}" transform="${"matrix(1 0 0 -1 0 18)"}"></circle><path d="${"m14 20 2-2"}"></path></svg>`;
});
export {
  Component as default
};
