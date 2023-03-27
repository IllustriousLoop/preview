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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M8 9h8V1H8v8ZM1 23h8v-8H1v8Zm14 0h8v-8h-8v8ZM5 15l3-6-3 6Zm5 4h4-4Zm6-10 3 6-3-6Z"}"></path></svg>`;
});
export {
  Component as default
};
