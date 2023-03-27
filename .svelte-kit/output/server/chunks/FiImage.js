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
  )}><rect x="${"3"}" y="${"3"}" rx="${"2"}" ry="${"2"}"></rect><circle cx="${"8.5"}" cy="${"8.5"}" r="${"1.5"}"></circle><path d="${"m21 15-5-5L5 21"}"></path></svg>`;
});
export {
  Component as default
};
