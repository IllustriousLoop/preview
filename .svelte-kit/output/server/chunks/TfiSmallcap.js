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
  )}><path d="${"M6 5.925h1v2H6v-1H4v8h1v1H2v-1h1v-8H1v1H0v-2h6zM16 2H6v2.577h1V3h4v12h-1v1h3v-1h-1V3h4v1.577h1V2h-1z"}"></path></svg>`;
});
export {
  Component as default
};
