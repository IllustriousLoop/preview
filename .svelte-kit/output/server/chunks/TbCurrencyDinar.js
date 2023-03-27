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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M14 20.01V20m-8-7 2.386-.9a1 1 0 0 0-.095-1.902l-1.514-.404a1 1 0 0 1-.102-1.9L9 7"}"></path><path d="${"M3 14v1a3 3 0 0 0 3 3h4.161a3 3 0 0 0 2.983-3.32L12 4m4 13 1 1h2.004a2 2 0 0 0 1.649-3.131L18 11"}"></path></svg>`;
});
export {
  Component as default
};
