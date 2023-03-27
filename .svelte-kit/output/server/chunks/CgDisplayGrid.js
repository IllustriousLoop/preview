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
  )}><path d="${"M7 7v4h4V7H7Zm6 0h4v4h-4V7Zm0 6v4h4v-4h-4Zm-6 0h4v4H7v-4Z"}"></path><path fill-rule="${"evenodd"}" d="${"M3 3h18v18H3V3Zm2 2v14h14V5H5Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
