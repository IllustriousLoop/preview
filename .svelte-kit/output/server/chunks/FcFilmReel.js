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
  )}><path fill="${"#3F51B5"}" d="${"M43 39V24h-4v15c0 5 4 9 9 9v-4c-2.8 0-5-2.2-5-5z"}"></path><circle cx="${"24"}" cy="${"24"}" r="${"19"}" fill="${"#90A4AE"}"></circle><circle cx="${"24"}" cy="${"24"}" r="${"2"}" fill="${"#37474F"}"></circle><g fill="${"#253278"}"><circle cx="${"24"}" cy="${"14"}" r="${"5"}"></circle><circle cx="${"24"}" cy="${"34"}" r="${"5"}"></circle><circle cx="${"34"}" cy="${"24"}" r="${"5"}"></circle><circle cx="${"14"}" cy="${"24"}" r="${"5"}"></circle></g></svg>`;
});
export {
  Component as default
};
