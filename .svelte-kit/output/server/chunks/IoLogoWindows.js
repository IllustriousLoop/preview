import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M480 265H232v179l248 36V265zm-264 0H32v150l184 26.7V265zM480 32 232 67.4V249h248V32zM216 69.7 32 96v153h184V69.7z"}"></path></svg>`;
});
export {
  Component as default
};
