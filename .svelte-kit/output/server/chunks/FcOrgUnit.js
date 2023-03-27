import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#90CAF9"}" d="${"M10 10v28h28V10H10zm24 24H14V14h20v20z"}"></path><path fill="${"#D81B60"}" d="${"M6 6h12v12H6z"}"></path><path fill="${"#2196F3"}" d="${"M30 6h12v12H30zM6 30h12v12H6zm24 0h12v12H30z"}"></path></svg>`;
});
export {
  Component as default
};
