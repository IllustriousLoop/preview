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
  )}><g fill="${"none"}" stroke="${"#444"}" stroke-width="${"2"}"><path stroke-linejoin="${"round"}" d="${"M3 2v20l18-10z"}"></path><path d="${"m3 2 11 14M3 22 14 8"}"></path></g></svg>`;
});
export {
  Component as default
};
