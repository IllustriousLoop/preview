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
  )}><path fill="${"#CFD8DC"}" d="${"M9 39V6H7v35h35v-2z"}"></path><g fill="${"#00BCD4"}"><circle cx="${"14"}" cy="${"11"}" r="${"2"}"></circle><circle cx="${"32"}" cy="${"11"}" r="${"2"}"></circle><circle cx="${"39"}" cy="${"11"}" r="${"2"}"></circle><circle cx="${"23"}" cy="${"11"}" r="${"4"}"></circle><circle cx="${"14"}" cy="${"33"}" r="${"2"}"></circle><circle cx="${"30"}" cy="${"33"}" r="${"2"}"></circle><circle cx="${"22"}" cy="${"33"}" r="${"3"}"></circle><circle cx="${"38"}" cy="${"33"}" r="${"4"}"></circle><circle cx="${"14"}" cy="${"22"}" r="${"2"}"></circle><circle cx="${"39"}" cy="${"22"}" r="${"2"}"></circle><circle cx="${"32"}" cy="${"22"}" r="${"3"}"></circle></g></svg>`;
});
export {
  Component as default
};
