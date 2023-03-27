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
  )}><path d="${"m10.5 3-5-2L0 3v12l5.5-2 5 2 5.5-2V1l-5.5 2zM6 2.277l4 1.6v9.846l-4-1.6V2.277zM1 3.7l4-1.455v9.872l-4 1.454V3.699zm14 8.6-4 1.455V3.883l4-1.455V12.3z"}"></path></svg>`;
});
export {
  Component as default
};
