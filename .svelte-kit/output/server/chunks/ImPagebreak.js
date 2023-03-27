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
  )}><path d="${"M4 6V0h12v6h-1V1H5v5zm12 3v7H4V9h1v6h10V9zM8 7h2v1H8zM5 7h2v1H5zm6 0h2v1h-2zm3 0h2v1h-2zM0 4.5l3 3-3 3z"}"></path></svg>`;
});
export {
  Component as default
};
