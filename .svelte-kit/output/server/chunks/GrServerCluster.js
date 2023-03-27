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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M1 8h22V1H1v7Zm10-3h1V4h-1v1Zm8 0h1V4h-1v1Zm-4 0h1V4h-1v1Zm-4 7h1v-1h-1v1Zm8 0h1v-1h-1v1Zm-4 0h1v-1h-1v1Zm-4 7h1v-1h-1v1Zm8 0h1v-1h-1v1Zm-4 0h1v-1h-1v1ZM1 15h22V8H1v7Zm0 7h22v-7H1v7Zm20 1H3"}"></path></svg>`;
});
export {
  Component as default
};
