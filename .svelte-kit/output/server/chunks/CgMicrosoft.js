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
  )}><path d="${"M3 3h8v8H3V3Zm0 10h8v8H3v-8ZM13 3h8v8h-8V3Zm0 10h8v8h-8v-8Z"}"></path></svg>`;
});
export {
  Component as default
};
