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
  )}><path d="${"M2 14h14v2H0V0h2zm2.5-1a1.5 1.5 0 1 1 .131-2.994l1.612-2.687a1.5 1.5 0 1 1 2.514 0l1.612 2.687a1.42 1.42 0 0 1 .23-.002l2.662-4.658a1.5 1.5 0 1 1 1.14.651l-2.662 4.658a1.5 1.5 0 1 1-2.496.026L7.631 7.994a1.42 1.42 0 0 1-.262 0l-1.612 2.687A1.5 1.5 0 0 1 4.5 13z"}"></path></svg>`;
});
export {
  Component as default
};
