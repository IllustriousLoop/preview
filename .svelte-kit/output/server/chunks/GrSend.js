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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M22 3 2 11l18.5 8L22 3ZM10 20.5l3-4.5m2.5-6.5L9 14l.859 6.012c.078.546.216.537.306-.003L11 15l4.5-5.5Z"}"></path></svg>`;
});
export {
  Component as default
};
