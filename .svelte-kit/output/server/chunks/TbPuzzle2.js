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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><rect x="${"4"}" y="${"4"}" rx="${"2"}"></rect><path d="${"M12 4v2.5a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5V12m0 0v1.5a.5.5 0 0 0 .5.5 1.5 1.5 0 0 1 0 3 .5.5 0 0 0-.5.5V20m8-8h-2.5a.5.5 0 0 1-.5-.5 1.5 1.5 0 0 0-3 0 .5.5 0 0 1-.5.5H12m0 0h-1.5a.5.5 0 0 0-.5.5 1.5 1.5 0 0 1-3 0 .5.5 0 0 0-.5-.5H4"}"></path></svg>`;
});
export {
  Component as default
};
