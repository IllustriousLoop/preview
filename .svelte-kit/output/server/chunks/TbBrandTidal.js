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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 7 9.5 9.5 12 12l2.5-2.5zm0 7-2.5 2.5L12 19l2.5-2.5zm7-7-2.5 2.5L19 12l2.5-2.5zM5 7 2.5 9.5 5 12l2.5-2.5z"}"></path></svg>`;
});
export {
  Component as default
};
