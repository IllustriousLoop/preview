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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"12"}" cy="${"12"}" r="${"3"}"></circle><path d="${"M12 21v.01M3 9v.01M21 9v.01M8 20.1A9 9 0 0 1 3 13m13 7.1a9 9 0 0 0 5-7.1M6.2 5a9 9 0 0 1 11.4 0"}"></path></svg>`;
});
export {
  Component as default
};
