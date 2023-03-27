import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"m8.054 6.045-.76 3.799h15.462l-.483 2.454H6.801l-.749 3.799h15.462l-.862 4.333-6.232 2.064-5.4-2.064.37-1.879H5.591l-.904 4.558 8.932 3.419 10.297-3.419 1.366-6.858.277-1.376 1.756-8.829H8.055z"}"></path></svg>`;
});
export {
  Component as default
};
