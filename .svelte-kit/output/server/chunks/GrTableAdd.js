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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M8 5v18m8-18v6M1 11h16M1 5h22M1 17h10m6 6H1V1h22v16m-6 6a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-9v6m0-6v6m-3-3h6"}"></path></svg>`;
});
export {
  Component as default
};
