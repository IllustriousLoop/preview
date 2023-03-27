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
  )}><path d="${"m15.305 12 2.825-2.825-1.414-1.414-2.825 2.825-.004-.004-1.414 1.414.004.004-.004.004 1.414 1.414.004-.004 2.825 2.825 1.414-1.414L15.305 12Zm-5.195-1.414.003-.004 1.414 1.414-.004.004.004.004-1.414 1.414-.004-.004-2.825 2.825-1.414-1.414L8.695 12 5.87 9.175l1.414-1.414 2.825 2.825Z"}"></path></svg>`;
});
export {
  Component as default
};
