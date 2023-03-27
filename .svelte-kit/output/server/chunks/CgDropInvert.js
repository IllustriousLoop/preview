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
  )}><path fill-rule="${"evenodd"}" d="${"M12 1.136 5.636 7.5a9 9 0 0 0 7.227 15.323A9 9 0 0 0 18.364 7.5L12 1.136ZM7.05 8.914 12 3.964v16.9a7 7 0 0 1-4.95-11.95Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
