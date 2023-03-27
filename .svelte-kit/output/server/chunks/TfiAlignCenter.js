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
  )}><path d="${"M17 2v1H0V2h17zM1.5 6v1h14V6h-14zM0 11h17v-1H0v1zm3.5 4h10v-1h-10v1z"}"></path></svg>`;
});
export {
  Component as default
};
