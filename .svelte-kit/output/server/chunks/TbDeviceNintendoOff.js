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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M4.713 4.718A3.995 3.995 0 0 0 3 8v8a4 4 0 0 0 4 4h3V10m0-4V4H8m6 6V4h3a4 4 0 0 1 4 4v8c0 .308-.035.608-.1.896m-1.62 2.39A3.982 3.982 0 0 1 17 20h-3v-6"}"></path><circle cx="${"6.5"}" cy="${"8.5"}" r="${"1"}"></circle><path d="${"m3 3 18 18"}"></path></svg>`;
});
export {
  Component as default
};
