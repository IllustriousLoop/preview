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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"12"}" cy="${"12"}" r="${"9"}"></circle><path d="${"m5.65 5.65 12.7 12.7m-12.7 0 12.7-12.7M12 3a9 9 0 0 0 9 9M3 12a9 9 0 0 1 9 9"}"></path></svg>`;
});
export {
  Component as default
};
