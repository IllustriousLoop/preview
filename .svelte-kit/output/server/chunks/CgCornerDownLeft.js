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
  )}><path d="${"M17.15 13.4a2 2 0 0 0 2-2v-8h2v8a4 4 0 0 1-4 4H6.844l3.785 3.785L9.214 20.6 2.85 14.235l6.364-6.364 1.415 1.415L6.514 13.4H17.15Z"}"></path></svg>`;
});
export {
  Component as default
};
