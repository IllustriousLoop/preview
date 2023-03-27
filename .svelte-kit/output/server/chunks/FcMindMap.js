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
  )}><path fill="${"#CFD8DC"}" d="${"m39.4 23-.8-4L26 21.6V8h-4v12.3l-13.9-9-2.2 3.4 15.2 9.8L9.4 39.8l3.2 2.4 11.3-14.8 8.4 12.7 3.4-2.2-8.4-12.5z"}"></path><circle cx="${"24"}" cy="${"24"}" r="${"7"}" fill="${"#3F51B5"}"></circle><g fill="${"#00BCD4"}"><circle cx="${"24"}" cy="${"8"}" r="${"5"}"></circle><circle cx="${"39"}" cy="${"21"}" r="${"5"}"></circle><circle cx="${"7"}" cy="${"13"}" r="${"5"}"></circle><circle cx="${"11"}" cy="${"41"}" r="${"5"}"></circle><circle cx="${"34"}" cy="${"39"}" r="${"5"}"></circle></g></svg>`;
});
export {
  Component as default
};
