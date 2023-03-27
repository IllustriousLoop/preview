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
  )}><path d="${"m16.243 5.243-1.414 1.414L13 4.828v4.415h4v2H7v-2h4V4.828L9.172 6.657 7.757 5.243 12 1l4.243 4.243ZM7 15.253v-2h10v2h-4v4.414l1.828-1.829 1.415 1.415L12 23.495l-4.243-4.242 1.415-1.415L11 19.668v-4.414H7Z"}"></path></svg>`;
});
export {
  Component as default
};
