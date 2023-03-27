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
  )}><path fill="${"#00BCD4"}" d="${"M37 18h6v24h-6zm-8 8h6v16h-6zm-8-4h6v20h-6zm-8 10h6v10h-6zm-8-4h6v14H5z"}"></path><g fill="${"#3F51B5"}"><circle cx="${"8"}" cy="${"16"}" r="${"3"}"></circle><circle cx="${"16"}" cy="${"18"}" r="${"3"}"></circle><circle cx="${"24"}" cy="${"11"}" r="${"3"}"></circle><circle cx="${"32"}" cy="${"13"}" r="${"3"}"></circle><circle cx="${"40"}" cy="${"9"}" r="${"3"}"></circle><path d="${"m39.1 7.2-7.3 3.7-8.3-2.1-8 7-7-1.7-1 3.8 9 2.3 8-7 7.7 1.9 8.7-4.3z"}"></path></g></svg>`;
});
export {
  Component as default
};
