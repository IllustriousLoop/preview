import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M7.854 1.49a.5.5 0 0 0-.707 0L1.49 7.146a.5.5 0 0 0 0 .708l5.657 5.656a.5.5 0 0 0 .707 0l5.657-5.656a.5.5 0 0 0 0-.708L7.854 1.49ZM7.5 2.55 2.55 7.5l4.95 4.95v-9.9Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
