import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M10.8 14.276v1H6.2v-1H8V6.845H6.25v-1H9v8.431h1.8zM7.988 4.045A1.533 1.533 0 1 0 7.987.978a1.533 1.533 0 0 0 .001 3.067z"}"></path></svg>`;
});
export {
  Component as default
};
