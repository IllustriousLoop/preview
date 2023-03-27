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
  )}><path d="${"M8.5 0 7 1.5 8.5 3 5 7H1.5l2.75 2.75L0 15.385V16h.615l5.635-4.25L9 14.5V11l4-3.5L14.5 9 16 7.5 8.5 0zM7 8.5l-1-1L9.5 4l1 1L7 8.5z"}"></path></svg>`;
});
export {
  Component as default
};
