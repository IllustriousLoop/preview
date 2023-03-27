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
  )}><path d="${"m16.216 9.25 1.415-1.414-4.243-4.242-4.243 4.242L10.56 9.25l2.828-2.828 2.828 2.828Z"}"></path><path d="${"M10.56 13.493 9.145 12.08l4.243-4.243 4.243 4.243-1.415 1.414-1.847-1.847v4.76a4 4 0 0 1-4 4h-4v-2h4a2 2 0 0 0 2-2v-4.723l-1.81 1.81Z"}"></path></svg>`;
});
export {
  Component as default
};
