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
  )}><path d="${"m20.073 2 1.415 1.414-5.85 5.85h2.544v2h-6v-6h2v2.627L20.073 2Zm-8.891 10.264v6h-2v-2.422L3.414 21.61 2 20.196l5.932-5.932h-2.75v-2h6Z"}"></path></svg>`;
});
export {
  Component as default
};
