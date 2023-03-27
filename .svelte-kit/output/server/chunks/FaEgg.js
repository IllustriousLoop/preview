import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 384 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M192 0C86 0 0 214 0 320s86 192 192 192 192-86 192-192S298 0 192 0z"}"></path></svg>`;
});
export {
  Component as default
};
