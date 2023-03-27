import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"none"}" stroke="${"#444"}" stroke-width="${"2"}" d="${"m12 1.5-9 5v11l9 5 9-5v-11l-9-5Zm0 21v-11m9-5-9 5m0 0-9-5m18 11V12l-4.5 2.5V20l4.5-2.5Zm-18 0V12l4.5 2.5V20L3 17.5Zm9-16L7.5 4 12 6.5 16.5 4 12 1.5Z"}"></path></svg>`;
});
export {
  Component as default
};
