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
  )}><path d="${"M1.714 0A1.71 1.71 0 0 0 0 1.714v20.572C0 23.236.765 24 1.714 24h20.572A1.71 1.71 0 0 0 24 22.286V1.714A1.71 1.71 0 0 0 22.286 0zM12 3l9 5.143v10.286l-3 1.714-3-1.714V15l3-1.714V9.857L12 6.43 6 9.857v3.429L9 15v3.429l-3 1.714-3-1.714V8.143Z"}"></path></svg>`;
});
export {
  Component as default
};
