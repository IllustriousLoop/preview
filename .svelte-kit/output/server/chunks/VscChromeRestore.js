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
  )}><path d="${"M3 5v9h9V5H3zm8 8H4V6h7v7z"}"></path><path fill-rule="${"evenodd"}" d="${"M5 5h1V4h7v7h-1v1h2V3H5v2z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
