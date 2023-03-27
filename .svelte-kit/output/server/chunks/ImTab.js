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
  )}><path d="${"M15 0h1v8h-1V0zM0 8h1v8H0V8zm5 3h11v2H5v2.5L1.5 12 5 8.5V11zm6-6H0V3h11V.5L14.5 4 11 7.5z"}"></path></svg>`;
});
export {
  Component as default
};
