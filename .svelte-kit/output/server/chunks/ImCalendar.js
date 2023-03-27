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
  )}><path d="${"M5 6h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zm-9 6h2v2H2zm3 0h2v2H5zm3 0h2v2H8zM5 9h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zM2 9h2v2H2zm11-9v1h-2V0H4v1H2V0H0v16h15V0h-2zm1 15H1V4h13v11z"}"></path></svg>`;
});
export {
  Component as default
};
