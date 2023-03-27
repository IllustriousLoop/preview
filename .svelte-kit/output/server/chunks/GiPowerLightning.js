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
  )}><path d="${"M29.805 29.777 242.14 209.55H118.712l112.54 86.784H95.995l225.656 174.012-81.537-116.05 66.487.143 179.185 138.175-171.96-244.746h84.568L248.082 29.776H29.805z"}"></path></svg>`;
});
export {
  Component as default
};
