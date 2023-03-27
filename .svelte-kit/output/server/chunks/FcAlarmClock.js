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
  )}><path fill="${"#37474F"}" d="${"m38.5 44.6-4-4 2.1-2.1 4 4c.6.6.6 1.5 0 2.1-.5.5-1.5.5-2.1 0zm-29 0 4-4-2.1-2.1-4 4c-.6.6-.6 1.5 0 2.1.5.5 1.5.5 2.1 0z"}"></path><circle cx="${"24"}" cy="${"24"}" r="${"20"}" fill="${"#C62828"}"></circle><circle cx="${"24"}" cy="${"24"}" r="${"16"}" fill="${"#eee"}"></circle><path fill="${"#E53935"}" d="${"m15.096 33.48-.566-.566 9.191-9.191.566.565z"}"></path><path d="${"M23 11h2v13h-2z"}"></path><path d="${"M31.285 29.654 29.66 31.28l-6.504-6.504 1.626-1.627z"}"></path><circle cx="${"24"}" cy="${"24"}" r="${"2"}"></circle><circle cx="${"24"}" cy="${"24"}" r="${"1"}" fill="${"#C62828"}"></circle><path fill="${"#37474F"}" d="${"M22 1h4v3h-4zm22.4 15.2c2.5-3.5 2.1-8.4-1-11.5-3.1-3.1-8-3.5-11.5-1l12.5 12.5zm-40.8 0c-2.5-3.5-2.1-8.4 1-11.5 3.1-3.1 8-3.5 11.5-1L3.6 16.2z"}"></path></svg>`;
});
export {
  Component as default
};
