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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M4 3.71v16.58a.7.7 0 0 0 1.05.606l14.622-8.42a.55.55 0 0 0 0-.953L5.05 3.104A.7.7 0 0 0 4 3.711zM15 9 4.5 20.5m0-17L15 15"}"></path></svg>`;
});
export {
  Component as default
};
