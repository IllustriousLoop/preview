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
  )}><path d="${"M7.5 1a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15zm0 13.5a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"}"></path><path d="${"M9.5 9a.5.5 0 0 0 0-1H8.434l1.482-2.223a.5.5 0 1 0-.832-.554L7.5 7.599 5.916 5.223a.5.5 0 1 0-.832.554L6.566 8H5.5a.5.5 0 0 0 0 1H7v1H5.5a.5.5 0 0 0 0 1H7v1.5a.5.5 0 0 0 1 0V11h1.5a.5.5 0 0 0 0-1H8V9h1.5z"}"></path></svg>`;
});
export {
  Component as default
};
