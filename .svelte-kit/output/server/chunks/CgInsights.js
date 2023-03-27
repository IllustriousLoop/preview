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
  )}><path fill-rule="${"evenodd"}" d="${"M15 8h4v12H5V10h4V4h6v4Zm-2-2h-2v12h2V6Zm2 4v8h2v-8h-2Zm-6 2v6H7v-6h2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
