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
  )}><circle cx="${"24"}" cy="${"24"}" r="${"20"}" fill="${"#00ACC1"}"></circle><circle cx="${"24"}" cy="${"24"}" r="${"16"}" fill="${"#eee"}"></circle><path d="${"M23 11h2v13h-2z"}"></path><path d="${"M31.285 29.654 29.66 31.28l-6.504-6.504 1.626-1.627z"}"></path><circle cx="${"24"}" cy="${"24"}" r="${"2"}"></circle><circle cx="${"24"}" cy="${"24"}" r="${"1"}" fill="${"#00ACC1"}"></circle></svg>`;
});
export {
  Component as default
};
