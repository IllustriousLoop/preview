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
  )}><path d="${"M7 4h1v2H7V5H5v8h1v1H3v-1h1V5H2v1H1V4h6zm8 0H9v2h1V5h2v8h-1v1h3v-1h-1V5h2v1h1V4h-1z"}"></path></svg>`;
});
export {
  Component as default
};
