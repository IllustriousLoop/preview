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
  )}><path d="${"M3.562 1v15.459l4.686-3.27L13 16.449V1H3.562zM12 14.551l-3.756-2.578-3.681 2.568V2H12v12.551z"}"></path></svg>`;
});
export {
  Component as default
};
