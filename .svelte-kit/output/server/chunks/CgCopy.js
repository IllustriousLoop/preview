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
  )}><path d="${"M13 7H7V5h6v2Zm0 4H7V9h6v2Zm-6 4h6v-2H7v2Z"}"></path><path fill-rule="${"evenodd"}" d="${"M3 19V1h14v4h4v18H7v-4H3Zm12-2V3H5v14h10Zm2-10v12H9v2h10V7h-2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
