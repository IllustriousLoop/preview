import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M18 11h-7.244l1.586-1.586a2 2 0 1 0-2.828-2.828L3.1 13l6.414 6.414c.39.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 0 0 0-2.828L10.756 15H18a2 2 0 0 0 0-4z"}"></path></svg>`;
});
export {
  Component as default
};
