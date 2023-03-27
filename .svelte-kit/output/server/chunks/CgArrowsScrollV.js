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
  )}><path d="${"m13.414 10.11.004.003-1.414 1.414-.004-.004-.004.004-1.414-1.414.004-.004L7.76 7.284 9.175 5.87 12 8.695l2.825-2.825 1.414 1.414-2.825 2.825ZM12 15.305l2.825 2.825 1.414-1.414-2.825-2.825.004-.004-1.414-1.414-.004.004-.004-.004-1.414 1.414.004.004-2.825 2.825 1.414 1.414L12 15.305Z"}"></path></svg>`;
});
export {
  Component as default
};
