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
  )}><path fill="${"#B0BEC5"}" d="${"M41 12H7l-1 4 5 3-2-3h30l-2 3 5-3z"}"></path><path fill="${"#78909C"}" d="${"M9 16h30l-4 12H13z"}"></path><circle cx="${"24"}" cy="${"28"}" r="${"4"}" fill="${"#FFB74D"}"></circle><circle cx="${"36"}" cy="${"28"}" r="${"4"}" fill="${"#FFB74D"}"></circle><circle cx="${"12"}" cy="${"28"}" r="${"4"}" fill="${"#FFB74D"}"></circle><circle cx="${"18"}" cy="${"37"}" r="${"5"}" fill="${"#FFB74D"}"></circle><circle cx="${"30"}" cy="${"37"}" r="${"5"}" fill="${"#FFB74D"}"></circle></svg>`;
});
export {
  Component as default
};
