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
  )}><path fill="${"#00BCD4"}" d="${"M19 22h10v20H19zM32 8h10v34H32zM6 30h10v12H6z"}"></path><g fill="${"#3F51B5"}"><path d="${"m11 8 10 10V8z"}"></path><path d="${"m9.394 22.437-2.828-2.828 9.969-9.969 2.828 2.828z"}"></path></g></svg>`;
});
export {
  Component as default
};
