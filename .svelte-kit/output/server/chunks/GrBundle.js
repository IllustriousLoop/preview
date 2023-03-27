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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M17 14H7h10Zm0-11h6v10h-6M1 13v4h6m10 0h6v-4M1 17v4h6m16-4v4h-6M7 22h10V2H7v20Zm0-9H1V3h6"}"></path></svg>`;
});
export {
  Component as default
};
