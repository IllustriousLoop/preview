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
  )}><path d="${"M7 2V1H0v3.997h1V2h5v3h11V2H7zm0 1h4v1H7V3zm5 1V3h4v1h-4z"}"></path></svg>`;
});
export {
  Component as default
};
