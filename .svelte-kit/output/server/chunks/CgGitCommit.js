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
  )}><path fill-rule="${"evenodd"}" d="${"M11 4a1 1 0 1 1 2 0v5.17a3.001 3.001 0 0 1 0 5.66V20a1 1 0 1 1-2 0v-5.17a3.001 3.001 0 0 1 0-5.66V4Zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
