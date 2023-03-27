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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"12"}" cy="${"19"}" r="${"2"}"></circle><path d="${"M12 17V5.5M7 10v3l5 3m0-1.5 5-2V10m-1 0h2V8h-2z"}"></path><circle cx="${"7"}" cy="${"9"}" r="${"1"}"></circle><path d="${"M10 5.5h4L12 3z"}"></path></svg>`;
});
export {
  Component as default
};
