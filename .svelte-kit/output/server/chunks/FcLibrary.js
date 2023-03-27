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
  )}><path fill="${"#FF9800"}" d="${"M1 38h46v2H1zm24-20h4v16h-4zm6 0h4v16h-4zm6 0h4v16h-4zm-18 0h4v16h-4zm-6 0h4v16h-4zm-6 0h4v16H7zm36-2H5v-3l19-9 19 9zM5 34h38v2H5z"}"></path><g fill="${"#EF6C00"}"><path d="${"M25 16h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zm-18 0h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2H7zM3 36h42v2H3z"}"></path><circle cx="${"24"}" cy="${"11"}" r="${"2"}"></circle></g></svg>`;
});
export {
  Component as default
};
