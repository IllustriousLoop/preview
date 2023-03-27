import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m5.032 13 .9-3h4.137l.9 3h1.775l-3-10H6.256l-3 10h1.776zm2.4-8h1.137l.9 3H6.532l.9-3z"}"></path></svg>`;
});
export {
  Component as default
};
