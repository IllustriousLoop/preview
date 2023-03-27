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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M8 1h6-6Zm11.188 18.472L16 22l-3.5-4.5-3 3.5L7 7l13 6.5-4.5 1.5 3.688 4.472ZM19 4V1h-3M6 1H3v3m0 10v3h3M19 6v4-4ZM3 12V6v6Z"}"></path></svg>`;
});
export {
  Component as default
};
