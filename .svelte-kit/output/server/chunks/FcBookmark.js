import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#F44336"}" d="${"m37 43-13-6-13 6V9c0-2.2 1.8-4 4-4h18c2.2 0 4 1.8 4 4v34z"}"></path></svg>`;
});
export {
  Component as default
};
