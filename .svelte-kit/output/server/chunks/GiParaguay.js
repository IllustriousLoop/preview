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
  )}><path d="${"M30.6 191.3 74.85 34.64C143.1 9.374 223.8 16.21 284.1 36.89l3 143.21 114 11.2 25.5 100.5 54.8-5.2-27 154.5-81.8 56.2-125.2-18 57.7-110.2C192.5 316.9 84.23 263.2 30.6 191.3z"}"></path></svg>`;
});
export {
  Component as default
};
