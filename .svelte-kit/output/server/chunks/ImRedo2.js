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
  )}><path d="${"M9 3.881V0l6 6-6 6V8.034C2.02 7.87 2.319 12.781 4.096 16-.29 11.259.641 3.663 9 3.881z"}"></path></svg>`;
});
export {
  Component as default
};
