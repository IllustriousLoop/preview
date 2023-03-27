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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"12"}" cy="${"9"}" r="${"6"}"></circle><path d="${"M12 3c1.333.333 2 2.333 2 6s-.667 5.667-2 6m0-12c-1.333.333-2 2.333-2 6s.667 5.667 2 6M6 9h12M3 19h7m4 0h7"}"></path><circle cx="${"12"}" cy="${"19"}" r="${"2"}"></circle><path d="${"M12 15v2"}"></path></svg>`;
});
export {
  Component as default
};
