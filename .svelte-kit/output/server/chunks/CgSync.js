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
  )}><path d="${"M4.56 10.642 6.355 3.95l1.9 1.9a9.004 9.004 0 0 1 11.156 1.256l-1.414 1.415a7.003 7.003 0 0 0-8.28-1.21l1.537 1.538-6.692 1.793Zm14.88 2.716-1.794 6.692-1.9-1.9A9.003 9.003 0 0 1 4.59 16.894l1.414-1.415a7.003 7.003 0 0 0 8.28 1.21l-1.537-1.538 6.692-1.793Z"}"></path></svg>`;
});
export {
  Component as default
};
