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
  )}><path d="${"M14 5H0V3h14v2zM0 6v1h17V6H0zm14 4H0v2h14v-2zM0 14h17v-1H0v1z"}"></path></svg>`;
});
export {
  Component as default
};
