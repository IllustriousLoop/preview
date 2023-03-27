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
  )}><path d="${"m21.208 51.973 7.023 407.352 398.925.702 63.636-60.515L326.02 133.443l8.428-9.833c26.455 31.79 72.101 106.86 79.364 93.41 15.243-28.226 13.407-53.944 19.665-80.768l-35.819-72.34-65.317 13.345-77.959-22.475-76.965 24.687z"}"></path></svg>`;
});
export {
  Component as default
};
