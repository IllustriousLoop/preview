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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M12 6V2m0 4c2.498.044 4.006 0 5 0 2 0 4 .5 5 4s1 5.5 1 8-2 3-4 3-3.054-4-7-4-5 4-7 4-4-.5-4-3 0-4.5 1-8 3-4 5-4c.994 0 2.502.044 5 0Zm6 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4 12h6M7 9v6"}"></path></svg>`;
});
export {
  Component as default
};
