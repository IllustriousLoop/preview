import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { stroke: "currentColor" },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" },
      { "stroke-width": "2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M1 3h15v13H1zm15 5h4l3 3v5h-7V8z"}"></path><circle cx="${"5.5"}" cy="${"18.5"}" r="${"2.5"}"></circle><circle cx="${"18.5"}" cy="${"18.5"}" r="${"2.5"}"></circle></svg>`;
});
export {
  Component as default
};
