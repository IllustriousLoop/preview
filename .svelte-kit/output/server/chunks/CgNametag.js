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
  )}><path d="${"M4 14v6h6v-2H6v-4H4Z"}"></path><path fill-rule="${"evenodd"}" d="${"M9 9v6h6V9H9Zm4 2h-2v2h2v-2Z"}" clip-rule="${"evenodd"}"></path><path d="${"M4 10V4h6v2H6v4H4Zm16 0V4h-6v2h4v4h2Zm0 4v6h-6v-2h4v-4h2Z"}"></path></svg>`;
});
export {
  Component as default
};
