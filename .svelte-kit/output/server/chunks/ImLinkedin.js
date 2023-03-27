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
  )}><path d="${"M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5zM6 13H4V6h2v7zM5 5a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm8 8h-2V9a1 1 0 1 0-2 0v4H7V6h2v1.241C9.412 6.675 10.044 6 10.75 6 11.994 6 13 7.119 13 8.5V13z"}"></path></svg>`;
});
export {
  Component as default
};
