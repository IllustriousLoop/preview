import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M30.875 36.063 88.25 300.625 202.406 400.97l24.688-76.814L30.874 36.062zm102 42.343L333.72 198.344l96.374 2.375-46.78-68.345-250.44-53.97zm3.5 42.28 202 284.595 149.5 78.626L440.78 365.78 136.376 120.69z"}"></path></svg>`;
});
export {
  Component as default
};
