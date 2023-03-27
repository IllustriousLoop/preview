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
  )}><path d="${"m10.362 15.529-1.414 1.414-4.95-4.95 4.95-4.95 1.414 1.415-2.498 2.498h8.138a4 4 0 0 1 4 4v2h-2v-2a2 2 0 0 0-2-2H7.79l2.572 2.573Z"}"></path></svg>`;
});
export {
  Component as default
};
