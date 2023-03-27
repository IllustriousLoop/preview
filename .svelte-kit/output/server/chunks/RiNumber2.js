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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M16 7.5a4 4 0 1 0-8 0H6a6 6 0 1 1 10.663 3.776l-7.32 8.723L18 20v2H6v-1.127l9.064-10.802A3.982 3.982 0 0 0 16 7.5z"}"></path></svg>`;
});
export {
  Component as default
};
