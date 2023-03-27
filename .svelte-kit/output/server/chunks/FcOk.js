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
  )}><circle cx="${"24"}" cy="${"24"}" r="${"21"}" fill="${"#4CAF50"}"></circle><path fill="${"#CCFF90"}" d="${"M34.6 14.6 21 28.2l-5.6-5.6-2.8 2.8 8.4 8.4 16.4-16.4z"}"></path></svg>`;
});
export {
  Component as default
};
