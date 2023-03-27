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
  )}><path fill-rule="${"evenodd"}" d="${"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM5 12a7 7 0 0 0 7 7v-7h7a7 7 0 0 0-7-7v7H5Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
