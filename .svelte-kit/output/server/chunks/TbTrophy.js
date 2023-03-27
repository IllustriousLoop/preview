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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M8 21h8m-4-4v4M7 4h10m0 0v8a5 5 0 0 1-10 0V4"}"></path><circle cx="${"5"}" cy="${"9"}" r="${"2"}"></circle><circle cx="${"19"}" cy="${"9"}" r="${"2"}"></circle></svg>`;
});
export {
  Component as default
};
