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
  )}><path fill="${"#3F51B5"}" d="${"M42 37H6V25l10-15 14 7L42 6z"}"></path><path fill="${"#00BCD4"}" d="${"M42 42H6V32l10-8 14 2 12-9z"}"></path></svg>`;
});
export {
  Component as default
};
