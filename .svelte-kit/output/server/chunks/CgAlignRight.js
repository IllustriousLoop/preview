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
  )}><path fill-opacity="${".5"}" fill-rule="${"evenodd"}" d="${"m16 13.004-6-.013-.01 4 6 .013.01-4Z"}" clip-rule="${"evenodd"}"></path><path fill-rule="${"evenodd"}" d="${"m19.978 18.002.026-12-2-.004-.026 12 2 .004ZM3.996 10.985l12 .026.009-4-12-.026-.009 4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
