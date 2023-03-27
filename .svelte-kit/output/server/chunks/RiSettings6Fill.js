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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M17.5 2.474 23 12l-5.5 9.526h-11L1 12l5.5-9.526h11zM8.634 8.17l5 8.66 1.732-1-5-8.66-1.732 1z"}"></path></svg>`;
});
export {
  Component as default
};
