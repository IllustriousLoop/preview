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
  )}><path d="${"M17 16v1H0v-1h17zM5.203 7.976l4.204 3.026L15 4.751v2.284h1V3h-4.036v1h2.366L9.26 9.665 5.131 6.691.759 10.647l.671.741 3.773-3.412z"}"></path></svg>`;
});
export {
  Component as default
};
