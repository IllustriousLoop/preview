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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M19 5h2V3h-2v2Zm-8 0h2V3h-2v2ZM3 5h2V3H3v2Zm16 8h2v-2h-2v2Zm-8 0h2v-2h-2v2Zm-8 0h2v-2H3v2Zm16 8h2v-2h-2v2Zm-8 0h2v-2h-2v2Zm-8 0h2v-2H3v2Z"}"></path></svg>`;
});
export {
  Component as default
};
