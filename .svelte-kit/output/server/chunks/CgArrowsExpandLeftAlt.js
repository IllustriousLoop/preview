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
  )}><path d="${"M10.1 2.1v2H5.516l5.778 5.779-1.414 1.414L4.1 5.515V10.1h-2v-8h8Zm11.8 11.8h-2v4.585l-5.779-5.778-1.414 1.414 5.778 5.778H13.9v2h8v-8Zm-5.657-4.728-1.415-1.415-7.07 7.072 1.414 1.414 7.07-7.071Z"}"></path></svg>`;
});
export {
  Component as default
};
