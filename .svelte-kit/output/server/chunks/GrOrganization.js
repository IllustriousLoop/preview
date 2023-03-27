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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M20 3v20H4V3h16ZM8.042 9h2V7h-2v2ZM14 9h2V7h-2v2Zm-5.958 6h2v-2h-2v2Zm2 8h4v-4h-4v4ZM14 15h2v-2h-2v2ZM2 3h20V1H2v2Z"}"></path></svg>`;
});
export {
  Component as default
};
