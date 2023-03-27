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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-linecap="${"round"}" stroke-width="${"2"}" d="${"M9 6h12M9 12h12M9 18h8M4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"}"></path></svg>`;
});
export {
  Component as default
};
