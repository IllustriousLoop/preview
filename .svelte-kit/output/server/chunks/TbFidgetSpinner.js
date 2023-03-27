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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M10 17a3 3 0 1 1-1.543-2.623l2.087-3.754A3 3 0 0 1 12 5a3 3 0 0 1 1.457 5.623l2.087 3.754a3 3 0 1 1-1.538 2.8L14 17h-4zm7 0v.01M7 17v.01M12 8v.01"}"></path></svg>`;
});
export {
  Component as default
};
