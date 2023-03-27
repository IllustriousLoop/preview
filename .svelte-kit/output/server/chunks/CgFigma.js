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
  )}><path d="${"M8.5 2a3 3 0 0 0 0 6h7a3 3 0 1 0 0-6h-7Zm7 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-10 3a3 3 0 0 1 3-3h3v6h-3a3 3 0 0 1-3-3Zm3 4a3 3 0 1 0 3 3v-3h-3Z"}"></path></svg>`;
});
export {
  Component as default
};
