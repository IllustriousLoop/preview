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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><rect x="${"4"}" y="${"4"}" rx="${"2"}"></rect><circle cx="${"8.5"}" cy="${"8.5"}" r="${".5"}" fill="${"currentColor"}"></circle><circle cx="${"15.5"}" cy="${"8.5"}" r="${".5"}" fill="${"currentColor"}"></circle><circle cx="${"15.5"}" cy="${"15.5"}" r="${".5"}" fill="${"currentColor"}"></circle><circle cx="${"8.5"}" cy="${"15.5"}" r="${".5"}" fill="${"currentColor"}"></circle><circle cx="${"12"}" cy="${"12"}" r="${".5"}" fill="${"currentColor"}"></circle></svg>`;
});
export {
  Component as default
};
