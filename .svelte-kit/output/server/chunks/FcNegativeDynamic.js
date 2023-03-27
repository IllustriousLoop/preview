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
  )}><path fill="${"#00BCD4"}" d="${"M19 22h10v20H19zM6 8h10v34H6zm26 22h10v12H32z"}"></path><g fill="${"#3F51B5"}"><path d="${"M42 12 32 22h10z"}"></path><path d="${"m27.561 10.396 2.828-2.828 9.969 9.969-2.828 2.828z"}"></path></g></svg>`;
});
export {
  Component as default
};
