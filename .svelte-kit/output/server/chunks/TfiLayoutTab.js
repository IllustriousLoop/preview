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
  )}><path d="${"M7 3V2H0v14h17V3H7zm4 1v1H7V4h4zm5 11H1V3h5v3h10v9zM12 5V4h4v1h-4z"}"></path></svg>`;
});
export {
  Component as default
};
