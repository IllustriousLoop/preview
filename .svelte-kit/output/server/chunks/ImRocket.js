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
  )}><path d="${"M11 1 6 6H3l-3 4s3.178-.885 5.032-.47L0 16l6.592-5.127C7.511 12.977 6 16 6 16l4-3v-3l5-5 1-5-5 1z"}"></path></svg>`;
});
export {
  Component as default
};
