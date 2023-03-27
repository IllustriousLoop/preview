import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M16 15v-1h-1V8h1V7h-3v1h1v6h-3V8h1V7H9v1h1v6H7V8h1V7H5v1h1v6H3V8h1V7H1v1h1v6H1v1H0v1h17v-1h-1zM8 0h1l8 5v1H0V5l8-5z"}"></path></svg>`;
});
export {
  Component as default
};
