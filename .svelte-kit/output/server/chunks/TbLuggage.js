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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><rect x="${"6"}" y="${"6"}" rx="${"2"}"></rect><path d="${"M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1m-9 4h12M6 16h12m-9 4v1m6-1v1"}"></path></svg>`;
});
export {
  Component as default
};
