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
  )}><path d="${"M17 18a5 5 0 0 0-10 0m5-16v7m-7.78 1.22 1.42 1.42M1 18h2m18 0h2m-4.64-6.36 1.42-1.42M23 22H1M8 6l4-4 4 4"}"></path></svg>`;
});
export {
  Component as default
};
