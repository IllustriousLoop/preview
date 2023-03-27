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
  )}><path d="${"M20.99 284.7C64.73 325.3 79.94 391.5 158.3 401c65.1-24.1 131.3-47.5 223.9-51L468 182.4c90.6-51.1-102.4-91.48-136.1-52.5-26 30-70.5 37.1-115.9 42.7l-11.2 26.6c-91.6 8.4-82.5-17.3-102.8-33-39.26 20-70.5 77.8-81.01 118.5z"}"></path></svg>`;
});
export {
  Component as default
};
