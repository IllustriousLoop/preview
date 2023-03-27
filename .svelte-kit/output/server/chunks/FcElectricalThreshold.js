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
  )}><path fill="${"#80DEEA"}" d="${"M3 12h42v24H3z"}"></path><path fill="${"#03A9F4"}" d="${"M3 23h42v2H3z"}"></path><path fill="${"none"}" stroke="${"#3F51B5"}" stroke-miterlimit="${"10"}" stroke-width="${"4"}" d="${"m4 18 4.5-1.5c.9-.3 1.9.1 2.3.9l8.7 14.3c.7 1.2 2.4 1.3 3.2.2l2.3-2.8c.5-.6 1.4-.9 2.2-.6l3 1c1 .3 2.1-.2 2.5-1.1L37 18.3c.5-1.1 1.9-1.6 2.9-.9l4 2.7"}"></path></svg>`;
});
export {
  Component as default
};
