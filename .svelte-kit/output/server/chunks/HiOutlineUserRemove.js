import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { stroke: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-4 7a6 6 0 0 0-6 6v1h12v-1a6 6 0 0 0-6-6zm12-2h-6"}"></path></svg>`;
});
export {
  Component as default
};
