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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"6"}" cy="${"12"}" r="${"3"}"></circle><circle cx="${"18"}" cy="${"6"}" r="${"3"}"></circle><path d="${"M15.861 15.896a3 3 0 0 0 4.265 4.22m.578-3.417a3.012 3.012 0 0 0-1.507-1.45M8.7 10.7l1.336-.688M12.66 8.66 15.3 7.3m-6.6 6 6.6 3.4M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
