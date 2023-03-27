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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"m7 6 3-3 7 3v2l-3 3M9 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-5 5 3-2 6m2-17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-6 6 4-4m-6 4 4-4"}"></path></svg>`;
});
export {
  Component as default
};
