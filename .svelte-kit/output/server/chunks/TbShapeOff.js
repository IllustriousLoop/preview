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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M3.575 3.597a2 2 0 0 0 2.849 2.808"}"></path><circle cx="${"19"}" cy="${"5"}" r="${"2"}"></circle><circle cx="${"5"}" cy="${"19"}" r="${"2"}"></circle><path d="${"M17.574 17.598a2 2 0 0 0 2.826 2.83M5 7v10M9 5h8M7 19h10m2-12v8M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
