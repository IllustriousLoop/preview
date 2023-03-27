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
  )}><path d="${"M4 22.93a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm19.464-6.001-8-13.857a4 4 0 0 0-6.93 4l8.001 13.857a4.001 4.001 0 0 0 6.93-4zM7.514 4.844l-5.95 10.304A4.5 4.5 0 0 1 4 14.43c2.56-.008 4.625 2.158 4.494 4.715l3.217-5.573-3.61-6.25a4.463 4.463 0 0 1-.587-2.478z"}"></path></svg>`;
});
export {
  Component as default
};
