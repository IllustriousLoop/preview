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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M6 4H5a2 2 0 0 0-2 2v3.5h0a5.5 5.5 0 0 0 11 0V6a2 2 0 0 0-2-2h-1"}"></path><path d="${"M8 15a6 6 0 1 0 12 0v-3m-9-9v2M6 3v2"}"></path><circle cx="${"20"}" cy="${"10"}" r="${"2"}"></circle></svg>`;
});
export {
  Component as default
};
