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
  )}><path d="${"M0 1v14h16V1H0zm15 13H1V2h14v12zM14 3H2v10h12V3zM7 8H6v1H5v1H4V9h1V8h1V7H5V6H4V5h1v1h1v1h1v1zm4 2H8V9h3v1z"}"></path></svg>`;
});
export {
  Component as default
};
