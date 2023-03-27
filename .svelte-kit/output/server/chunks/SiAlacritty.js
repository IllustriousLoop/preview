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
  )}><path d="${"m10.065 0-8.57 21.269H5.09L12 5.025l6.91 16.244h3.594L13.934 0zM12 9.935 9.702 15.5c1.475 4.54 1.475 4.54 2.298 8.5.823-3.96.823-3.96 2.297-8.5L12 9.935z"}"></path></svg>`;
});
export {
  Component as default
};
