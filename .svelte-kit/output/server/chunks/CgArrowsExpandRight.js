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
  )}><path d="${"M13.9 4.1v-2h8v8h-2V5.516l-5.779 5.778-1.414-1.414 5.778-5.78H13.9Zm-9.8 9.8h-2v8h8v-2H5.516l5.778-5.779-1.414-1.414-5.78 5.778V13.9Z"}"></path></svg>`;
});
export {
  Component as default
};
