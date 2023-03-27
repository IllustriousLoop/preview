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
  )}><g fill="${"none"}" fill-rule="${"evenodd"}" transform="${"translate(4)"}"><circle cx="${"12"}" cy="${"12"}" r="${"4"}" fill="${"#19BCFE"}"></circle><path fill="${"#09CF83"}" d="${"M4 24a4 4 0 0 0 4-4v-4H4a4 4 0 1 0 0 8Z"}"></path><path fill="${"#A259FF"}" d="${"M4 16h4V8H4a4 4 0 1 0 0 8Z"}"></path><path fill="${"#F24E1E"}" d="${"M4 8h4V0H4a4 4 0 1 0 0 8Z"}"></path><path fill="${"#FF7262"}" d="${"M12 8H8V0h4a4 4 0 1 1 0 8Z"}"></path></g></svg>`;
});
export {
  Component as default
};
