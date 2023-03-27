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
  )}><path d="${"M7.5 11A2.5 2.5 0 0 0 10 8.5v-6a2.5 2.5 0 1 0-5 0v6A2.5 2.5 0 0 0 7.5 11zM11 7v1.5a3.5 3.5 0 1 1-7 0V7H3v1.5a4.5 4.5 0 0 0 4 4.472V15H5v1h5v-1H8v-2.028A4.5 4.5 0 0 0 12 8.5V7h-1z"}"></path></svg>`;
});
export {
  Component as default
};
