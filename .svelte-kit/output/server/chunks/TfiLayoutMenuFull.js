import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M0 7v3h17V7H0zm9 1h3v1H9V8zM8 9H5V8h3v1zM1 8h3v1H1V8zm15 1h-3V8h3v1z"}"></path></svg>`;
});
export {
  Component as default
};
