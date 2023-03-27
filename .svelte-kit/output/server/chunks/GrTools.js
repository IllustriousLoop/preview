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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"m11 2 11 11-4.5 4.5-11-11L11 2Zm5 4 1-1 2 2-1 1m-5 5-9 9-2-2 9-9m-6 7 1 1"}"></path></svg>`;
});
export {
  Component as default
};
