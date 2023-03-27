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
  )}><path d="${"M5 12V0H3v12H.5L4 15.5 7.5 12H5z"}"></path><path d="${"M7 9h9v2H7V9zm0-3h7v2H7V6zm0-3h5v2H7V3zm0-3h3v2H7V0z"}"></path></svg>`;
});
export {
  Component as default
};
