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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M3 21h6V3H3v18Zm1-2h4V5H4v14Zm1-2h2V7H5v10Zm10 4h6V3h-6v18Zm1-2h4V5h-4v14Zm1-2h2V7h-2v10Z"}"></path></svg>`;
});
export {
  Component as default
};
