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
  )}><path d="${"M12.01 15.6a3.6 3.6 0 1 0-3.6-3.6 3.6 3.6 0 0 0 3.6 3.6zm0-15.598a11.998 11.998 0 0 0-3.6.552V7.2a6 6 0 1 1-2.4 4.8V1.603a11.998 11.998 0 1 0 6-1.601z"}"></path></svg>`;
});
export {
  Component as default
};
