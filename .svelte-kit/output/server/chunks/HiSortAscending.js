import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 20 20" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M3 3a1 1 0 0 0 0 2h11a1 1 0 1 0 0-2H3zm0 4a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H3zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H3zm10 5a1 1 0 1 0 2 0v-5.586l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L13 10.414V16z"}"></path></svg>`;
});
export {
  Component as default
};
