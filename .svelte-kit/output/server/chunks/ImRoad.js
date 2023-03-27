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
  )}><path d="${"M11 16h5L12 0H9l.5 4h-3L7 0H4L0 16h5l.5-4h5l.5 4zm-5.25-6 .5-4h3.5l.5 4h-4.5z"}"></path></svg>`;
});
export {
  Component as default
};
