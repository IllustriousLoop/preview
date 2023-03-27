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
  )}><path d="${"m15.207 8.5-3.354 3.354-.707-.707L13.793 8.5l-2.646-2.646.707-.707L15.207 8.5zM7 17h1V0H7v17z"}"></path></svg>`;
});
export {
  Component as default
};
