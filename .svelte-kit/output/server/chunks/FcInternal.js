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
  )}><circle cx="${"24"}" cy="${"30"}" r="${"15"}" fill="${"#B3E5FC"}"></circle><g fill="${"#1565C0"}"><path d="${"M24 38.7 15 28h18z"}"></path><path d="${"M21 5h6v26h-6z"}"></path></g></svg>`;
});
export {
  Component as default
};
