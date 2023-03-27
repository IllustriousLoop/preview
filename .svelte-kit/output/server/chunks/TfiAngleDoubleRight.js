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
  )}><path d="${"M9.644 8.5 2.79 15.354l-.707-.707L8.229 8.5 2.083 2.354l.707-.708L9.644 8.5zm-2.01-6.854-.707.708L13.073 8.5l-6.146 6.146.707.707L14.487 8.5 7.634 1.646z"}"></path></svg>`;
});
export {
  Component as default
};
