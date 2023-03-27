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
  )}><path fill="${"#455A64"}" d="${"M36.5 44h-25c-1.1 0-1.8-1.2-1.3-2.2L13 37h22l2.7 4.8c.6 1-.1 2.2-1.2 2.2z"}"></path><circle cx="${"24"}" cy="${"23"}" r="${"18"}" fill="${"#78909C"}"></circle><path fill="${"#455A64"}" d="${"M24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"}"></path><circle cx="${"24"}" cy="${"23"}" r="${"9"}" fill="${"#42A5F5"}"></circle><path fill="${"#90CAF9"}" d="${"M28.8 20c-1.2-1.4-3-2.2-4.8-2.2s-3.6.8-4.8 2.2c-.5.5-.4 1.3.1 1.8s1.3.4 1.8-.1c1.5-1.7 4.3-1.7 5.8 0 .3.3.6.4 1 .4.3 0 .6-.1.9-.3.4-.4.5-1.3 0-1.8z"}"></path></svg>`;
});
export {
  Component as default
};
