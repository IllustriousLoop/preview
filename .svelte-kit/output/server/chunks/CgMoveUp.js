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
  )}><path d="${"M17 19.071h-2v-8h2v8Zm-8 0H7v-8h2v8Z"}"></path><path d="${"M13 19.071h-2v-10H7.965l4-4.071 4 4.071H13v10Z"}"></path></svg>`;
});
export {
  Component as default
};
