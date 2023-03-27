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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M8 4h1a1 1 0 0 1 1 1v1m-.29 3.704A.997.997 0 0 1 9 10H5a1 1 0 0 1-1-1V5c0-.276.111-.525.292-.706M18 14h1a1 1 0 0 1 1 1v1m-.29 3.704A.997.997 0 0 1 19 20h-4a1 1 0 0 1-1-1v-4c0-.276.111-.525.292-.706"}"></path><rect x="${"4"}" y="${"14"}" rx="${"1"}"></rect><path d="${"M14 7h6m-3-3v6M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
