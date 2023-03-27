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
  )}><path d="${"M5.468 12.804a5.145 5.145 0 1 0-.644 10.27 5.145 5.145 0 0 0 .644-10.27zm17.841 2.562L16.45 3.484a5.146 5.146 0 0 0-8.912 5.15l6.86 11.878a5.148 5.148 0 0 0 7.031 1.885 5.146 5.146 0 0 0 1.881-7.031z"}"></path></svg>`;
});
export {
  Component as default
};
