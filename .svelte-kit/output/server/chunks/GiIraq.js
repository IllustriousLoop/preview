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
  )}><path d="${"m17.03 246.5 25.73 60.7 265.44 143 82.2 6.9 38.1-47.1 66.5 4.1-33.5-52.1-5.2-38-116.5-107.9 39-53.8-72.3-100.65-95.4-6.77-69.5 49.82-16.4 97.2z"}"></path></svg>`;
});
export {
  Component as default
};
