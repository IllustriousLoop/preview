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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><g transform="${"rotate(30 -2.778 22.523)"}"><circle cx="${"4.759"}" cy="${"6.021"}" r="${"4"}"></circle><path d="${"M8.758 6.02v-6m-8 12v-6"}"></path></g><path d="${"M12 12h.01M9 9 3 3m2.5 5.5 3-3M21 21l-6-6m2 5 3-3M3 7V3h4"}"></path></svg>`;
});
export {
  Component as default
};
