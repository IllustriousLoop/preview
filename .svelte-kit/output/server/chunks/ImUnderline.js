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
  )}><path d="${"M11 1h2v6.5c0 2.485-2.239 4.5-5 4.5S3 9.985 3 7.5V1h2v6.5c0 .628.285 1.23.802 1.695C6.379 9.714 7.159 10 8 10s1.621-.286 2.198-.805C10.715 8.729 11 8.127 11 7.5V1zM3 13h10v2H3z"}"></path></svg>`;
});
export {
  Component as default
};
