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
  )}><path d="${"M13.799 0v19.86A4.2 4.2 0 0 0 18 24h4.2V4.141A4.2 4.2 0 0 0 18 0h-4.202zm-7.5 15.001a4.5 4.5 0 0 0-4.5 4.391v.222a4.5 4.5 0 0 0 9 0V19.4A4.5 4.5 0 0 0 6.298 15z"}"></path></svg>`;
});
export {
  Component as default
};
