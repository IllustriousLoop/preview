import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 20 20" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M8 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm7 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}"></path><path d="${"M3 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.05a2.5 2.5 0 0 1 4.9 0H10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3zm11 3a1 1 0 0 0-1 1v6.05A2.5 2.5 0 0 1 15.95 16H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-.293-.707l-2-2A1 1 0 0 0 15 7h-1z"}"></path></svg>`;
});
export {
  Component as default
};
