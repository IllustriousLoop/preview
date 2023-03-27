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
  )}><circle cx="${"24"}" cy="${"24"}" r="${"21"}" fill="${"#2196F3"}"></circle><path fill="${"#fff"}" d="${"M22 22h4v11h-4z"}"></path><circle cx="${"24"}" cy="${"16.5"}" r="${"2.5"}" fill="${"#fff"}"></circle></svg>`;
});
export {
  Component as default
};
