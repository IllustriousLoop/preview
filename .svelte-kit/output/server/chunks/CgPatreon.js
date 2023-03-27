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
  )}><path d="${"M21 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"}" opacity="${".5"}"></path><path d="${"M3 4h4v16H3V4Z"}"></path></svg>`;
});
export {
  Component as default
};
