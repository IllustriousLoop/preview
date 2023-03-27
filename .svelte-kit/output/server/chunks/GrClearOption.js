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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M10 4a2 2 0 1 1 4 0v6h6v4H4v-4h6V4ZM4 14h16v8H4v-8Zm12 8v-5.635M8 22v-5.635M12 22v-5.635"}"></path></svg>`;
});
export {
  Component as default
};
