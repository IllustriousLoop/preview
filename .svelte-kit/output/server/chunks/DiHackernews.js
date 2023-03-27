import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"M25.339 6.166v18.802H6.537V6.166h18.802zm1.88-1.88H4.656v22.563h22.563V4.286zm-8.89 5.582h2.662l-3.755 7.051v4.23h-2.344v-4.23l-3.89-7.051h2.767l2.333 4.912 2.227-4.912z"}"></path></svg>`;
});
export {
  Component as default
};
