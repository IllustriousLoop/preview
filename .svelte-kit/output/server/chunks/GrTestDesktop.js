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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M18.218 1H23v18H1V1h5m11 9c-4-3-6 3-10 0M5 23h14H5Zm5-22v4.773l-5 7.182V15h14v-2.045l-5-7.182V1M8 1h8-8Zm0 22h8v-4H8v4Z"}"></path></svg>`;
});
export {
  Component as default
};
