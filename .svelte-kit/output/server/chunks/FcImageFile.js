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
  )}><path fill="${"#90CAF9"}" d="${"M40 45H8V3h22l10 10z"}"></path><path fill="${"#E1F5FE"}" d="${"M38.5 14H29V4.5z"}"></path><path fill="${"#1565C0"}" d="${"m21 23-7 10h14z"}"></path><path fill="${"#1976D2"}" d="${"M28 26.4 23 33h10z"}"></path><circle cx="${"31.5"}" cy="${"24.5"}" r="${"1.5"}" fill="${"#1976D2"}"></circle></svg>`;
});
export {
  Component as default
};
