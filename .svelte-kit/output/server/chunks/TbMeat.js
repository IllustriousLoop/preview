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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m13.62 8.382 1.966-1.967A2 2 0 1 1 19 5a2 2 0 1 1-1.413 3.414l-1.82 1.821"}"></path><ellipse cx="${"8.025"}" cy="${"16.475"}" rx="${"7"}" ry="${"3"}" transform="${"rotate(45 8.025 16.475)"}"></ellipse><path d="${"m7.5 16 1 1m4.475 4.425c3.905-3.906 4.855-9.288 2.121-12.021-2.733-2.734-8.115-1.784-12.02 2.121"}"></path></svg>`;
});
export {
  Component as default
};
