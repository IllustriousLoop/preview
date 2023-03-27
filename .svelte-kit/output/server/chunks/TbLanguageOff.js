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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M4 5h1m4 0h2M9 3v2m-.508 3.517C7.678 11.172 5.972 13 4 13"}"></path><path d="${"M5 9c-.003 2.144 2.952 3.908 6.7 4m.3 7 2.463-5.541m1.228-2.764L16 11l.8 1.8M18 18h-5.1M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
