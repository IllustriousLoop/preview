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
  )}><path d="${"m19.458 0-5.311 2.024 1.989.534-4.847 16.085-4.867-16.25H1.48L8.974 24h4.645l7.043-20.226 1.858.499Z"}"></path></svg>`;
});
export {
  Component as default
};
