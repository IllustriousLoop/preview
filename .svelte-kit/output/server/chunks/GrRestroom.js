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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-linecap="${"round"}" stroke-width="${"2"}" d="${"M6 11h12M6 3h12m-6 13a5 5 0 0 0 5-5H7a5 5 0 0 0 5 5ZM7 3h10v8H7V3Zm0 3h2.5m5 9.5 1.5 6H8l1.5-6"}"></path></svg>`;
});
export {
  Component as default
};
