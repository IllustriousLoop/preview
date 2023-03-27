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
  )}><path d="${"M3 4h12v4H3V4Zm18 4h-4V4h4v4ZM3 10h18v4H3v-4Zm8 6H3v4h8v-4Zm2 0v4h8v-4h-8Z"}"></path></svg>`;
});
export {
  Component as default
};
