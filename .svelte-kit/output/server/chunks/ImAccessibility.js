import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M6.5 1.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 1.5z"}"></path><path d="${"m10 5 5.15-2.221-.371-.929L8.5 4h-1L1.221 1.85l-.371.929L6 5v4l-2.051 6.634.935.355L7.786 9.5h.429l2.902 6.489.935-.355L10.001 9z"}"></path></svg>`;
});
export {
  Component as default
};
