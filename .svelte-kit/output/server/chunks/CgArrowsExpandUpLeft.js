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
  )}><path d="${"M5 11H3V3h8v2H6.414l5.364 5.364a1 1 0 0 1-1.414 1.414L5 6.414V11Z"}"></path><path fill-rule="${"evenodd"}" d="${"M19 13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4Zm0 2v4h-4v-4h4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
