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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M1 1h3v3H1V1Zm19 0h3v3h-3V1ZM4 2h16M4 22h16M1 20h3v3H1v-3Zm19 0h3v3h-3v-3ZM2 4v16M22 4v16M7 7h7v6H7V7Zm10 3v7h-7v-2"}"></path></svg>`;
});
export {
  Component as default
};
