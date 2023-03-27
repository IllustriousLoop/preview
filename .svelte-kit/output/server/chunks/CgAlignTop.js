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
  )}><path fill-opacity="${".5"}" fill-rule="${"evenodd"}" d="${"m13.035 7.988.002 6 4-.002-.002-6-4 .002Z"}" clip-rule="${"evenodd"}"></path><path fill-rule="${"evenodd"}" d="${"M18 4.012 6 4.018v2l12-.006v-2Zm-6.963 15.974-.005-12-4 .002.005 12 4-.002Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
