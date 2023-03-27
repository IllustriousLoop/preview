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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M10 5h4V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2z"}"></path><path d="${"M14 3.5c0 1.626.507 3.212 1.45 4.537l.05.07a8.093 8.093 0 0 1 1.5 4.694V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6.2c0-1.682.524-3.322 1.5-4.693l.05-.07A7.823 7.823 0 0 0 10 3.5"}"></path><path d="${"M7.003 14.803A2.4 2.4 0 0 0 8 14a2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 1-.805"}"></path></svg>`;
});
export {
  Component as default
};
