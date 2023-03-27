import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M0 14h16v1H0zm16-2v1H0v-1l2-4h4v2h4V8h4zM3.5 5 8 .5 12.5 5H9v4H7V5z"}"></path></svg>`;
});
export {
  Component as default
};
