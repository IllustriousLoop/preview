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
  )}><path d="${"M2 5h12v2H2V5Zm0 4h12v2H2V9Zm8 4H2v2h8v-2Z"}"></path><path d="${"M16 9h2v4h4v2h-4v4h-2v-4h-4v-2h4V9Z"}"></path></svg>`;
});
export {
  Component as default
};
