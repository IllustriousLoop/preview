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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5M9.75 12v6.5H9.5l-5-6.5H4v7h.25v-6.5h.25l5 6.5h.5v-7h-.25Z"}"></path></svg>`;
});
export {
  Component as default
};
