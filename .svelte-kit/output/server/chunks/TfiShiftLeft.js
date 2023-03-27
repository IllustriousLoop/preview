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
  )}><path d="${"M17 9.001H5.708l3.646 3.646-.707.707L3.793 8.5l4.854-4.854.707.707-3.648 3.648H17v1zM0 17h1V0H0v17z"}"></path></svg>`;
});
export {
  Component as default
};
