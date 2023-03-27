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
  )}><path d="${"M3 21V3h2v18H3Z"}"></path><path fill-rule="${"evenodd"}" d="${"M7 3h10v18H7V3Zm2 2v14h6V5H9Z"}" clip-rule="${"evenodd"}"></path><path d="${"M19 3v18h2V3h-2Z"}"></path></svg>`;
});
export {
  Component as default
};
