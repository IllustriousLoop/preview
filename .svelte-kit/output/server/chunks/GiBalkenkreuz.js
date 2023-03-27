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
  )}><path d="${"M486 203.066v105.879H308.934V486H203.066V308.934H26V203.066h177.066V26h105.879v177.066H486zm0-83.405h-93.638V26.023h-22.564v116.235H486v-22.563zM142.258 26.023h-22.563v93.638H26.056v22.563h116.202V26zm0 343.742H26v22.563h93.638v93.638h22.563V369.742zm250.081 22.563h93.638v-22.563H369.742V486h22.563v-93.638z"}"></path></svg>`;
});
export {
  Component as default
};
