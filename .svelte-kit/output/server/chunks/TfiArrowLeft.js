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
  )}><path d="${"M16 8.972H3.207l6.146 6.146-.707.707-7.353-7.353 7.354-7.354.707.707-6.147 6.147H16v1z"}"></path></svg>`;
});
export {
  Component as default
};
