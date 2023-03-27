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
  )}><path d="${"M5 12V0H3v12H.5L4 15.5 7.5 12H5zm8.5-5a.5.5 0 0 1-.5-.5V1h-.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5zm1 2h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H14v2h-2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5zM12 10h2v2h-2v-2z"}"></path></svg>`;
});
export {
  Component as default
};
