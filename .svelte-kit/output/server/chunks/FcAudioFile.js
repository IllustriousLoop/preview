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
  )}><path fill="${"none"}" d="${"M204 0h48v48h-48z"}"></path><path fill="${"#90CAF9"}" d="${"M244 45h-32V3h22l10 10z"}"></path><path fill="${"#E1F5FE"}" d="${"M242.5 14H233V4.5z"}"></path><g fill="${"#1976D2"}"><circle cx="${"227"}" cy="${"30"}" r="${"4"}"></circle><path d="${"m234 21-5-2v11h2v-7.1l3 1.1z"}"></path></g><path fill="${"#90CAF9"}" d="${"M40 45H8V3h22l10 10z"}"></path><path fill="${"#E1F5FE"}" d="${"M38.5 14H29V4.5z"}"></path><g fill="${"#1976D2"}"><circle cx="${"23"}" cy="${"30"}" r="${"4"}"></circle><path d="${"m30 21-5-2v11h2v-7.1l3 1.1z"}"></path></g></svg>`;
});
export {
  Component as default
};
