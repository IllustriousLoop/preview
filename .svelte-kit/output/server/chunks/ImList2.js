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
  )}><path d="${"M6 1h10v2H6V1zm0 6h10v2H6V7zm0 6h10v2H6v-2zM0 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 0 2zm0 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 0 8zm0 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 0 14z"}"></path></svg>`;
});
export {
  Component as default
};
