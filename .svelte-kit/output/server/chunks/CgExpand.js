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
  )}><path d="${"m12.306 16.593-.035 2-6.999-.122.123-7 2 .036-.063 3.585 7.894-7.624-3.532-.061.035-2 6.999.122-.123 7-2-.036.064-3.638-7.948 7.676 3.585.062Z"}"></path></svg>`;
});
export {
  Component as default
};
