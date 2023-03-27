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
  )}><path d="${"M5.208 7.757.97 12.003l4.246 4.24 1.413-1.416-1.819-1.815 16.214.018-.004 2 2 .004.012-6-2-.004-.006 2.989.001-.99-16.24-.018 1.838-1.84-1.416-1.414Z"}"></path></svg>`;
});
export {
  Component as default
};
