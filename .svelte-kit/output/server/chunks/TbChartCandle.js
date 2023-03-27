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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><rect x="${"4"}" y="${"6"}" rx="${"1"}"></rect><path d="${"M6 4v2m0 5v9"}"></path><rect x="${"10"}" y="${"14"}" rx="${"1"}"></rect><path d="${"M12 4v10m0 5v1"}"></path><rect x="${"16"}" y="${"5"}" rx="${"1"}"></rect><path d="${"M18 4v1m0 6v9"}"></path></svg>`;
});
export {
  Component as default
};
