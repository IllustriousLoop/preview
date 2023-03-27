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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"m17 11 5-5-5-5m5 5h-4a6 6 0 0 0-6 6v12M7 6l-5 5 5 5m-5-5h4a6 6 0 0 1 6 6v7"}"></path></svg>`;
});
export {
  Component as default
};
