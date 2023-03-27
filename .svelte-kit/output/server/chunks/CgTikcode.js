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
  )}><path fill-rule="${"evenodd"}" d="${"M9 5H5v4h4V5ZM3 3v8h8V3H3Zm16 2h-4v4h4V5Zm-6-2v8h8V3h-8ZM9 15H5v4h4v-4Zm-6-2v8h8v-8H3Z"}" clip-rule="${"evenodd"}"></path><path d="${"M13 13h2v8h-2v-8Zm3 0h2v8h-2v-8Zm3 0h2v8h-2v-8Z"}"></path></svg>`;
});
export {
  Component as default
};
