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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m10 15 5.586-5.585A2 2 0 1 1 19 8a2 2 0 1 1-1.413 3.414L14 15"}"></path><path d="${"M12 13 8.414 9.415A2 2 0 1 0 5 8a2 2 0 1 0 1.413 3.414L10 15m-7 5h18c-.175-1.671-.046-3.345-2-5H5c-1.333 1-2 2.667-2 5z"}"></path></svg>`;
});
export {
  Component as default
};
