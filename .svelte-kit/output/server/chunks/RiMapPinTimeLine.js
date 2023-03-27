import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M16.95 15.95a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95zM12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM13 11h4v2h-6V6h2v5z"}"></path></svg>`;
});
export {
  Component as default
};
