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
  )}><path d="${"M20.328 11v2H7.5l3.243 3.243-1.415 1.414L3.672 12l5.656-5.657 1.415 1.414L7.5 11h12.828Z"}"></path></svg>`;
});
export {
  Component as default
};
