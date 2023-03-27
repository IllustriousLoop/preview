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
  )}><path d="${"M256 33.78C205.2 119.6 154.2 177 103.7 228.7c101.3-39.2 203.3-39.2 304.6 0C357.8 177 306.8 119.6 256 33.78zm0 183.02c-10.4 0-20.8.5-31.3 1.4 6.5 104.2-48.4 216.9-158.29 268.8H445.6c-109.9-51.9-164.8-164.6-158.3-268.8-10.5-.9-20.9-1.4-31.3-1.4z"}"></path></svg>`;
});
export {
  Component as default
};
