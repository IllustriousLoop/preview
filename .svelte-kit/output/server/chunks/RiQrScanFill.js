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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M21 15v5.007a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 20.007V15h18zM2 11h20v2H2v-2zm19-2H3V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993V9z"}"></path></svg>`;
});
export {
  Component as default
};
