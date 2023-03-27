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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M7.934 3.97A8.993 8.993 0 0 1 12 3c4.97 0 9 3.582 9 8 0 1.06-.474 2.078-1.318 2.828a4.515 4.515 0 0 1-1.118.726M15 15h-1a2 2 0 0 0-1 3.75A1.3 1.3 0 0 1 12 21 9 9 0 0 1 5.628 5.644"}"></path><circle cx="${"7.5"}" cy="${"10.5"}" r="${"1"}"></circle><circle cx="${"12"}" cy="${"7.5"}" r="${"1"}"></circle><circle cx="${"16.5"}" cy="${"10.5"}" r="${"1"}"></circle><path d="${"m3 3 18 18"}"></path></svg>`;
});
export {
  Component as default
};
