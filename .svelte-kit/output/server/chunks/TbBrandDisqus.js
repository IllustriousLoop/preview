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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M11.847 21c-2.259 0-4.323-.667-5.919-2H2l1.708-3.266C3.163 14.56 2.949 13.288 2.95 12c0-4.97 3.84-9 8.898-9C16.9 3 21 7.03 21 12c0 4.972-4.098 9-9.153 9z"}"></path><path d="${"M11.485 15H10V9h1.485C13.597 9 15 9.823 15 11.981v.035C15 14.196 13.597 15 11.485 15z"}"></path></svg>`;
});
export {
  Component as default
};
