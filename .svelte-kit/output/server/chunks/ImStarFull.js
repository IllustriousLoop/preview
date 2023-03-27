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
  )}><path d="${"m16 6.204-5.528-.803L8 .392 5.528 5.401 0 6.204l4 3.899-.944 5.505L8 13.009l4.944 2.599L12 10.103l4-3.899z"}"></path></svg>`;
});
export {
  Component as default
};
