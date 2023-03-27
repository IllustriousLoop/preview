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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"12"}" cy="${"12"}" r="${"9"}"></circle><path d="${"M10.5 10.5a2.187 2.187 0 0 0-2.914.116 1.928 1.928 0 0 0 0 2.768 2.188 2.188 0 0 0 2.914.116m6-3a2.187 2.187 0 0 0-2.914.116 1.928 1.928 0 0 0 0 2.768 2.188 2.188 0 0 0 2.914.116M6 6l1.5 1.5m9 9L18 18"}"></path></svg>`;
});
export {
  Component as default
};
