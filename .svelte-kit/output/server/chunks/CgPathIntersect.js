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
  )}><path fill-rule="${"evenodd"}" d="${"M15 5H5v10h4v4h10V9h-4V5Zm-2 2H7v6h2V9h4V7Zm4 10h-6v-2h4v-4h2v6Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
