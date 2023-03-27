import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M337 100v137.8L108.1 98.1C102.7 95 96 98.8 96 105v302c0 6.2 6.7 10 12.1 6.9L337 274.2V412c0 2.2 1.8 4 4 4h71c2.2 0 4-1.8 4-4V100c0-2.2-1.8-4-4-4h-71c-2.2 0-4 1.8-4 4z"}"></path></svg>`;
});
export {
  Component as default
};
