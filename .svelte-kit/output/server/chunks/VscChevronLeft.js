import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"m5.928 7.976 4.357 4.357-.618.62L5 8.284v-.618L9.667 3l.618.619-4.357 4.357z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
