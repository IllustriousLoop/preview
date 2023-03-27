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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><rect x="${"3"}" y="${"3"}" rx="${"4"}"></rect><path d="${"M12 7c1.956 0 3.724.802 4.994 2.095l-2.956 2.904A3 3 0 0 0 12 11.2a3 3 0 0 0-2.038.798L7.006 9.095A6.979 6.979 0 0 1 12 7z"}"></path></svg>`;
});
export {
  Component as default
};
