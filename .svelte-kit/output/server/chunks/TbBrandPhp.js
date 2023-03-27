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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><ellipse cx="${"12"}" cy="${"12"}" rx="${"10"}" ry="${"9"}"></ellipse><path d="${"m5.5 15 .395-1.974L6.5 10h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1-.986.836H6m9.5 2 .395-1.974L16.5 10h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1-.986.836H16m-4-5.5L11 13m.6-3H14l-.5 3"}"></path></svg>`;
});
export {
  Component as default
};
