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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m7.707 3.707 5.586 5.586M12 12l-1.293 1.293a1 1 0 0 1-1.414 0L3.707 7.707a1 1 0 0 1 0-1.414L5 5m1 5-3 3 3 3 3-3m1-7 3-3 3 3-3 3m-1 3 1.5 1.5m1 3.5c.69 0 1.316-.28 1.769-.733M15 21c1.654 0 3.151-.67 4.237-1.752m1.507-2.507A6 6 0 0 0 21 15M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
