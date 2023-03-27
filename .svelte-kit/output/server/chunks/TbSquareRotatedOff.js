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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m16.964 16.952-3.462 3.461c-.782.783-2.222.783-3.004 0l-6.911-6.91c-.783-.783-.783-2.223 0-3.005l3.455-3.456m2.003-2.003 1.453-1.452c.782-.783 2.222-.783 3.004 0l6.911 6.91c.783.783.783 2.223 0 3.005l-1.448 1.45M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
