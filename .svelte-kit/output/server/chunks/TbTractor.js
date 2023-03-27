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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"7"}" cy="${"15"}" r="${"4"}"></circle><path d="${"M7 15v.01"}"></path><circle cx="${"19"}" cy="${"17"}" r="${"2"}"></circle><path d="${"M10.5 17H17m3-1.8V11a1 1 0 0 0-1-1h-6l-2-5H5v6.5"}"></path><path d="${"M18 5h-1a1 1 0 0 0-1 1v4"}"></path></svg>`;
});
export {
  Component as default
};
