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
  )}><path d="${"M23.836 4.27a.915.915 0 0 0-1.273-.226L.163 19.73c.167.235.437.39.747.39h22.18c.503 0 .91-.41.91-.914V4.78a.951.951 0 0 0-.164-.51zm-22.4-.226A.91.91 0 0 0 0 4.78v14.45l10.664-8.736-9.227-6.45v-.002z"}"></path></svg>`;
});
export {
  Component as default
};
