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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"10"}" cy="${"17"}" r="${"2"}"></circle><path d="${"m7 6 4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H3m0-6h8m-6 0V6m2 0H3m11 2V6m5 6h2m-3.5 3.5L19 17m-1.5-8.5L19 7"}"></path></svg>`;
});
export {
  Component as default
};
