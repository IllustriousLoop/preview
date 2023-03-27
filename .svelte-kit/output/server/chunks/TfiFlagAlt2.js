import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M15 0v17h-1V0h1zM4.984 1h8v8H8v2H1V3h3.984V1zM7 9H5V4H2v6h5V9zM5.984 2v1H6v5h5.984V2h-6z"}"></path></svg>`;
});
export {
  Component as default
};
