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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M17.184 17.173 17 18c-.193 1.183-1.034 2.024-2 2H9c-.966.024-1.807-.817-2-2L5 9h4m4 0h6l-1.089 4.9M7 9c0-.596.104-1.167.295-1.697M9 5a5 5 0 0 1 8 4M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
