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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"5"}" cy="${"17"}" r="${"2"}"></circle><circle cx="${"17"}" cy="${"17"}" r="${"2"}"></circle><path d="${"M7 18h8m4 0h2v-6a5 5 0 0 0-5-5h-1l1.5 5H21m-9 6V7h3M3 17v-5h9M3 9l18-6M6 12V8"}"></path></svg>`;
});
export {
  Component as default
};
