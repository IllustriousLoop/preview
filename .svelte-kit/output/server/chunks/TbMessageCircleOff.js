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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m3 3 18 18M8.585 4.581c3.225-1.181 7.032-.616 9.66 1.626 2.983 2.543 3.602 6.525 1.634 9.662m-1.908 2.108C15.185 20.167 11.081 20.642 7.7 19L3 20l1.3-3.9C2.063 12.792 2.811 8.56 6.014 6.016"}"></path></svg>`;
});
export {
  Component as default
};
