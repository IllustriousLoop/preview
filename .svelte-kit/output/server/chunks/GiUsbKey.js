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
  )}><path d="${"m394.8 30.88-65 65.03 86.3 86.29 65.1-65-86.4-86.32zm-6.3 36.04 17 17-12.8 12.72-17-17 12.8-12.72zm-82.8 30.4-11.3 11.28 109 108.9 11.3-11.2-109-108.98zM263.3 103 23.4 342.9v60.5l85.2 85.2h60.5l240-239.9L263.3 103zm164.9 3.6 16.9 17-12.8 12.6-16.9-17 12.8-12.6z"}"></path></svg>`;
});
export {
  Component as default
};
