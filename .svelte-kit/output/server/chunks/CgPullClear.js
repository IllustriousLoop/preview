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
  )}><path d="${"M4 6H2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6h-2v10H4V6Z"}"></path><path d="${"M6 12h12v2H6v-2Zm12-4H6v2h12V8Z"}"></path></svg>`;
});
export {
  Component as default
};
