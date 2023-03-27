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
  )}><path d="${"M16.82 4 15.4 5.44 17.94 8H8.23a6 6 0 0 0 0 12h2v-2h-2a4 4 0 0 1 0-8h9.71l-2.54 2.51 1.41 1.41L21.77 9Z"}"></path></svg>`;
});
export {
  Component as default
};
