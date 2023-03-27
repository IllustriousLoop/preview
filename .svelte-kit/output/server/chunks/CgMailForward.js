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
  )}><path d="${"m13.638 15.529 1.414 1.414 4.95-4.95-4.95-4.95-1.414 1.415 2.498 2.498H7.998a4 4 0 0 0-4 4v2h2v-2a2 2 0 0 1 2-2h8.212l-2.572 2.573Z"}"></path></svg>`;
});
export {
  Component as default
};
