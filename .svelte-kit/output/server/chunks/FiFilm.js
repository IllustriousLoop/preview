import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { stroke: "currentColor" },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" },
      { "stroke-width": "2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><rect x="${"2"}" y="${"2"}" rx="${"2.18"}" ry="${"2.18"}"></rect><path d="${"M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5m10 0h5M17 7h5"}"></path></svg>`;
});
export {
  Component as default
};
