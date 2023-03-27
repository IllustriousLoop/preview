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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M1 23V2h22v21M1 8h22H1Zm0 6h22H1Zm0 6h22H1ZM4 5h12H4Zm14 0h2-2Zm0 6h2-2Zm0 6h2-2ZM4 11h12H4Zm0 6h12H4Z"}"></path></svg>`;
});
export {
  Component as default
};
