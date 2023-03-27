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
  )}><path d="${"m13 4 3-3-1-1-3 3H5V0H3v3H0v2h3v8h8v3h2v-3h3v-2h-3V4zM5 5h5l-5 5V5zm1 6 5-5v5H6z"}"></path></svg>`;
});
export {
  Component as default
};
