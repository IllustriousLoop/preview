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
  )}><path d="${"M16.146 0v24l6.134-4.886V3.334zm-2.853 18.758-4.939 2.157V2.086l4.939 1.462zm-11.572-.553 3.78-.999V5.188l-3.762-.606z"}"></path></svg>`;
});
export {
  Component as default
};
