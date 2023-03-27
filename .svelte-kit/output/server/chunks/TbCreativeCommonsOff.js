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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M5.638 5.634a9 9 0 1 0 12.723 12.733m1.686-2.332A9 9 0 0 0 7.954 3.958"}"></path><path d="${"M10.5 10.5a2.187 2.187 0 0 0-2.914.116 1.928 1.928 0 0 0 0 2.768 2.188 2.188 0 0 0 2.914.116m6-3a2.194 2.194 0 0 0-2.309-.302M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
