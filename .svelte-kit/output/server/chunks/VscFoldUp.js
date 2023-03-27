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
  )}><path d="${"m1 7.4.7.7 6-6 6 6 .7-.7L8.1 1h-.7L1 7.4zm0 6 .7.7 6-6 6 6 .7-.7L8.1 7h-.7L1 13.4z"}"></path></svg>`;
});
export {
  Component as default
};
