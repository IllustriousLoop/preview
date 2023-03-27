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
  )}><path d="${"M0 0v3h17V0H0zm16 2H1V1h15v1zM0 13h17V4H0v9zm1-8h15v7H1V5zM0 17h17v-3H0v3zm1-2h15v1H1v-1z"}"></path></svg>`;
});
export {
  Component as default
};
