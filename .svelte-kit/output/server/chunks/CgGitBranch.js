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
  )}><path d="${"M9 3a2 2 0 0 0-1 3.732v10.536A2 2 0 1 0 10.732 20h1.227a4 4 0 0 0 4-4v-1.268a2 2 0 0 0-1-3.732 2 2 0 0 0-1 3.732V16a2 2 0 0 1-2 2h-1.227a2.01 2.01 0 0 0-.732-.732V6.732A2 2 0 0 0 9 3Z"}"></path></svg>`;
});
export {
  Component as default
};
