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
  )}><circle cx="${"24"}" cy="${"31"}" r="${"14"}" fill="${"#B2DFDB"}"></circle><g fill="${"#009688"}"><path d="${"M24 3.3 33 14H15z"}"></path><path d="${"M21 11h6v23h-6z"}"></path></g></svg>`;
});
export {
  Component as default
};
