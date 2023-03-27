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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M4 4h16v16H4V4Zm2 2h12v12H6V6Zm2 2h8v8H8V8Zm2 2h4v4h-4v-4Zm1 1h2v2h-2v-2Z"}"></path></svg>`;
});
export {
  Component as default
};
