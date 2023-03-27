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
  )}><path fill="${"#90CAF9"}" d="${"m36.9 13.8-1.8-3.6L7.5 24l27.6 13.8 1.8-3.6L16.5 24z"}"></path><path fill="${"#D81B60"}" d="${"M6 18h12v12H6z"}"></path><path fill="${"#2196F3"}" d="${"M30 6h12v12H30zm0 24h12v12H30z"}"></path></svg>`;
});
export {
  Component as default
};
