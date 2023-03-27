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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M4.998 7V1H19.5L23 4.5V23h-3M18 1v5h5M3 11h13v12H3V11Zm4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2 7 2-3 2 2 4-6 3 4"}"></path></svg>`;
});
export {
  Component as default
};
