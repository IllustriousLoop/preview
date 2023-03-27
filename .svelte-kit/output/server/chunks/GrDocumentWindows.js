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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5m-8.75 5.5-6 7m0-7 6 7M20.5 12h-4v6h4m-1-3h-3M7 12H3v6h4m-1-3H3"}"></path></svg>`;
});
export {
  Component as default
};
