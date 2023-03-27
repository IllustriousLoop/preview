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
  )}><path d="${"M9.667 0H2v17h13V5.308L9.667 0zM10 1.742 13.273 5H10V1.742zM3 16V1h6v5h5v10H3z"}"></path></svg>`;
});
export {
  Component as default
};
