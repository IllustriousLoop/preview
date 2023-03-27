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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M20 11A8.1 8.1 0 0 0 8.729 4.695m-2.41 1.624A8.083 8.083 0 0 0 4.5 9M4 5v4h4m-4 4a8.1 8.1 0 0 0 13.671 4.691M20 16v-1h-1M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
