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
  )}><path d="${"M418.3 80H307.8c-7.5 0-13.7 6.1-13.7 13.7v.2c0 7.5 6.1 13.7 13.7 13.7h76.5L107.6 384.3v-76.5c0-7.5-6.1-13.7-13.7-13.7h-.2c-7.5 0-13.7 6.1-13.7 13.7v110.5c0 7.5 6.1 13.7 13.7 13.7h110.5c7.5 0 13.7-6.1 13.7-13.7v-.2c0-7.5-6.1-13.7-13.7-13.7h-76.5l276.7-276.7v76.5c0 7.5 6.1 13.7 13.7 13.7h.2c7.5 0 13.7-6.1 13.7-13.7V93.7c0-7.6-6.1-13.7-13.7-13.7z"}"></path></svg>`;
});
export {
  Component as default
};
