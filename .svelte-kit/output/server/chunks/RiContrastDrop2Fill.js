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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M5.636 6.636 12 .272l6.364 6.364a9 9 0 1 1-12.728 0zM12 3.101 7.05 8.05A6.978 6.978 0 0 0 5 13h14a6.978 6.978 0 0 0-2.05-4.95L12 3.1z"}"></path></svg>`;
});
export {
  Component as default
};
