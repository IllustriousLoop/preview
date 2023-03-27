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
  )}><path d="${"M0 1v15h17V1H0zm16 1v3H1V2h15zM1 15V6h15v9H1zM7 4H6V3h1v1zM5 4H4V3h1v1zM3 4H2V3h1v1z"}"></path></svg>`;
});
export {
  Component as default
};
