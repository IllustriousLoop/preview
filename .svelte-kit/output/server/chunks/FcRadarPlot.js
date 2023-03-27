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
  )}><path fill="${"#CFD8DC"}" d="${"M38.4 13 24.1 6.4 4.6 12.1l8.8 13.2-2.2 15.1h22.7l6.6-13.3L38.4 13zm-6.3 24.5H14.7l1.8-12.9-7.1-10.7 14.5-4.3L35.6 15l1.8 11.7-5.3 10.8z"}"></path><g fill="${"#00BCD4"}"><circle cx="${"24"}" cy="${"8"}" r="${"4"}"></circle><circle cx="${"37"}" cy="${"14"}" r="${"4"}"></circle><circle cx="${"39"}" cy="${"27"}" r="${"4"}"></circle><circle cx="${"7"}" cy="${"13"}" r="${"4"}"></circle><circle cx="${"13"}" cy="${"39"}" r="${"4"}"></circle><circle cx="${"15"}" cy="${"25"}" r="${"4"}"></circle><circle cx="${"33"}" cy="${"39"}" r="${"4"}"></circle></g></svg>`;
});
export {
  Component as default
};
