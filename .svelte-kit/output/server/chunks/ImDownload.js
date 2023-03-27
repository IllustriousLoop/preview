import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m8 9 4-4H9V1H7v4H4zm3.636-1.636-1.121 1.121L14.579 10 8 12.453 1.421 10l4.064-1.515-1.121-1.121L0 9v4l8 3 8-3V9z"}"></path></svg>`;
});
export {
  Component as default
};
