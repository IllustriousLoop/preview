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
  )}><path d="${"M5 1.5h2v13H5v-13Zm4 3h2v18H9v-18Zm6 0h-2v18h2v-18Zm2 0h2v10h-2v-10Z"}"></path></svg>`;
});
export {
  Component as default
};
