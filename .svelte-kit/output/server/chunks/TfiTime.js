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
  )}><path d="${"M8.666 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5c0-4.687-3.813-8.5-8.5-8.5zm0 16c-4.136 0-7.5-3.364-7.5-7.5S4.53 1 8.666 1s7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5zM14 9v1H8V5h1v4h5z"}"></path></svg>`;
});
export {
  Component as default
};
