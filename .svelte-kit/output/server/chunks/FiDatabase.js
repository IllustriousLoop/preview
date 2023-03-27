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
  )}><ellipse cx="${"12"}" cy="${"5"}" rx="${"9"}" ry="${"3"}"></ellipse><path d="${"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}"></path><path d="${"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}"></path></svg>`;
});
export {
  Component as default
};
