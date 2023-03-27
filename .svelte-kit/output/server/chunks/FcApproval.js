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
  )}><path fill="${"#8BC34A"}" d="${"m24 3 4.7 3.6 5.8-.8 2.2 5.5 5.5 2.2-.8 5.8L45 24l-3.6 4.7.8 5.8-5.5 2.2-2.2 5.5-5.8-.8L24 45l-4.7-3.6-5.8.8-2.2-5.5-5.5-2.2.8-5.8L3 24l3.6-4.7-.8-5.8 5.5-2.2 2.2-5.5 5.8.8z"}"></path><path fill="${"#CCFF90"}" d="${"M34.6 14.6 21 28.2l-5.6-5.6-2.8 2.8 8.4 8.4 16.4-16.4z"}"></path></svg>`;
});
export {
  Component as default
};
