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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M8 21h8m-4-6v6m5-18 1 7c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-7h10z"}"></path><path d="${"M6 10a5 5 0 0 1 6 0 5 5 0 0 0 6 0"}"></path></svg>`;
});
export {
  Component as default
};
