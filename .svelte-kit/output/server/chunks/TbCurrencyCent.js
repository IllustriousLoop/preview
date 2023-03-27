import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "none" },
      { stroke: "currentColor" },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" },
      { "stroke-width": "2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M16.007 7.54A5.965 5.965 0 0 0 11.999 6a5.996 5.996 0 0 0-5.992 6c0 3.314 2.682 6 5.992 6a5.965 5.965 0 0 0 4.004-1.536M12 20v-2m0-12V4"}"></path></svg>`;
});
export {
  Component as default
};
