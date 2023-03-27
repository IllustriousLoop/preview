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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M14.274 10.291a4 4 0 1 0-5.554-5.58m-.548 3.453a4.01 4.01 0 0 0 2.62 2.65M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 1.147.167m2.685 2.681A4 4 0 0 1 18 19v2M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
