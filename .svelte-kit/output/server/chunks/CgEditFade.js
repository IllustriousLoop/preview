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
  )}><path stroke="${"currentColor"}" stroke-opacity="${".3"}" stroke-width="${"4"}" d="${"M8 12c0-1.48.804-2.773 2-3.465v6.93A3.998 3.998 0 0 1 8 12Z"}"></path><path stroke="${"currentColor"}" stroke-opacity="${".6"}" stroke-width="${"4"}" d="${"M14 15.465v-6.93c1.196.692 2 1.984 2 3.465 0 1.48-.804 2.773-2 3.465Z"}"></path><path stroke="${"currentColor"}" stroke-width="${"2"}" d="${"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"}"></path></svg>`;
});
export {
  Component as default
};
