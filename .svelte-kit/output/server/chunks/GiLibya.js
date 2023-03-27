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
  )}><path d="${"m477.6 99.68 8.5 363.72L454 465 211.7 351.9l-48.1 28.2-137.68-94 14.52-133L98.59 46.98 199.4 77.54l13.1 25.96 97 39.7 34.4-13.8-19.1-45.75 82.5-22.92z"}"></path></svg>`;
});
export {
  Component as default
};
