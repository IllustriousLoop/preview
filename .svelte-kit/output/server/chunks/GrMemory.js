import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path stroke="${"#000"}" stroke-width="${"2"}" d="${"M10 18h4m-4-4h4m-4-4h4m-4-4h4m6 12h3m-3-4h3m-3-4h3m-3-4h3M1 18h3m-3-4h3m-3-4h3M1 6h3m11 14h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zM5 20h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1z"}"></path></svg>`;
});
export {
  Component as default
};
