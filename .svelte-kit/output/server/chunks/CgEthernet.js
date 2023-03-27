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
  )}><path fill-rule="${"evenodd"}" d="${"M4 .5v20h7v3h2v-3h7V.5H4Zm14 2H6v6h4v6h4v-6h4v-6Zm-12 16v-8h2v6h8v-6h2v8H6Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
