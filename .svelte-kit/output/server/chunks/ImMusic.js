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
  )}><path d="${"M15 0h1v11.5c0 1.381-1.567 2.5-3.5 2.5S9 12.881 9 11.5 10.567 9 12.5 9c.979 0 1.865.287 2.5.751V4L7 5.778V13.5C7 14.881 5.433 16 3.5 16S0 14.881 0 13.5 1.567 11 3.5 11c.979 0 1.865.287 2.5.751V2l9-2z"}"></path></svg>`;
});
export {
  Component as default
};
