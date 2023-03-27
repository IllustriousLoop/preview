import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#90CAF9"}" d="${"M40 45H8V3h22l10 10z"}"></path><path fill="${"#E1F5FE"}" d="${"M38.5 14H29V4.5z"}"></path><path fill="${"#1976D2"}" d="${"M16 21h17v2H16zm0 4h13v2H16zm0 4h17v2H16zm0 4h13v2H16z"}"></path></svg>`;
});
export {
  Component as default
};
