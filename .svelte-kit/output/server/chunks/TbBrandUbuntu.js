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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"12"}" cy="${"5"}" r="${"2"}"></circle><path d="${"M17.723 7.41a7.992 7.992 0 0 0-3.74-2.162m-3.971 0a7.993 7.993 0 0 0-3.789 2.216m-1.881 3.215A8 8 0 0 0 4 12.999c0 .738.1 1.453.287 2.132m1.96 3.428a7.993 7.993 0 0 0 3.759 2.19m3.998-.003a7.993 7.993 0 0 0 3.747-2.186m1.962-3.43A8.008 8.008 0 0 0 20 12.999c0-.764-.107-1.503-.307-2.203"}"></path><circle cx="${"5"}" cy="${"17"}" r="${"2"}"></circle><circle cx="${"19"}" cy="${"17"}" r="${"2"}"></circle></svg>`;
});
export {
  Component as default
};
