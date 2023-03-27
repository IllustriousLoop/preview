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
  )}><path fill="${"#90CAF9"}" d="${"M33 9H11v4h22c1.1 0 2 .9 2 2v20H23v4h16V15c0-3.3-2.7-6-6-6z"}"></path><path fill="${"#D81B60"}" d="${"M6 6h10v10H6z"}"></path><g fill="${"#2196F3"}"><path d="${"M32 17h10v10H32zM16 32h10v10H16z"}"></path><circle cx="${"26"}" cy="${"11"}" r="${"5"}"></circle><circle cx="${"37"}" cy="${"37"}" r="${"5"}"></circle></g></svg>`;
});
export {
  Component as default
};
