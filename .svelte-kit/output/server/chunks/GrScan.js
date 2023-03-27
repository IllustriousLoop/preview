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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M20 10V3H4v7m-3 2h22H1Zm3 1v3-3Zm16 3v-3 3ZM7 21H4v-3m16 0v3h-3m-8 0h6-6Z"}"></path></svg>`;
});
export {
  Component as default
};
