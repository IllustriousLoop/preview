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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m3 3 18 18m-3-3H7c-2.598 0-4.705-2.015-4.705-4.5S4.402 9 7 9c.112-.5.305-.973.568-1.408m2.094-1.948c.329-.174.68-.319 1.05-.43 1.9-.576 3.997-.194 5.5 1C17.715 7.406 18.397 9.231 18 11h1a3.5 3.5 0 0 1 2.212 6.212"}"></path></svg>`;
});
export {
  Component as default
};
