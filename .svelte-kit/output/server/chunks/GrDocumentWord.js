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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M4.998 9V1H19.5L23 4.5V23H4M18 1v5h5m-9 6-1.5 6.75h-.25L9.5 12H9l-2.75 6.75H6L4.5 12H4l2 7h.5L9 12.5h.5L12 19h.5l2-7H14Z"}"></path></svg>`;
});
export {
  Component as default
};
