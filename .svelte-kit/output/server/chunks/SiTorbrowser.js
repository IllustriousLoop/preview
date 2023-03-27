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
  )}><path d="${"M12 21.82v-1.46A8.36 8.36 0 0 0 20.36 12 8.36 8.36 0 0 0 12 3.64V2.18A9.83 9.83 0 0 1 21.82 12 9.83 9.83 0 0 1 12 21.82zm0-5.09A4.74 4.74 0 0 0 16.73 12 4.74 4.74 0 0 0 12 7.27V5.82A6.17 6.17 0 0 1 18.18 12 6.17 6.17 0 0 1 12 18.18zm0-7.27A2.54 2.54 0 0 1 14.55 12 2.54 2.54 0 0 1 12 14.54zM0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0 12 12 0 0 0 0 12z"}"></path></svg>`;
});
export {
  Component as default
};
