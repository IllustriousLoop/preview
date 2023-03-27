import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m1.971 1.966 5.288 14.101 1.212-7.601 7.601-1.212L1.971 1.966zm5.627 5.626-.731 4.582L3.68 3.675l8.499 3.187-4.581.73z"}"></path></svg>`;
});
export {
  Component as default
};
