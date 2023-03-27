import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m5.7 3.4-.6 3.2h12.3L17 8.7H4.7l-.6 3.2h12.3l-.7 3.6-5 1.7-4.3-1.7.3-1.6h-3L3 17.7l7.1 2.9 8.2-2.9 1.1-5.8.2-1.2L21 3.4H5.7z"}"></path></svg>`;
});
export {
  Component as default
};
