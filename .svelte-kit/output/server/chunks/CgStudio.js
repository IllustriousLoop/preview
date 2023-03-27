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
  )}><path d="${"M17 13h-4v4h4v-4Z"}"></path><path fill-rule="${"evenodd"}" d="${"M3 3h18v18H3V3Zm2 2h14v14H5V5Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
