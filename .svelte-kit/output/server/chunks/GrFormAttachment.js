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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"m6 13.293 6.36-6.36c2.828-2.828 7.069 1.413 4.242 4.24l-6.361 6.36c-1.414 1.414-3.534-.706-2.12-2.12l6.36-6.36"}"></path></svg>`;
});
export {
  Component as default
};
