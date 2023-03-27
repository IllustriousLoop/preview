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
  )}><path d="${"M18.78 12.653a5.22 5.22 0 1 0 0 10.44 5.22 5.22 0 0 0 0-10.44zm-13.56 0a5.22 5.22 0 1 0 .001 10.439 5.22 5.22 0 0 0-.001-10.439zm12-6.525a5.22 5.22 0 1 1-10.44 0 5.22 5.22 0 0 1 10.44 0z"}"></path></svg>`;
});
export {
  Component as default
};
