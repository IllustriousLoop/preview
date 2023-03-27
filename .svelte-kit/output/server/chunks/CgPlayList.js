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
  )}><path d="${"M16 5H4v2h12V5Zm0 4H4v2h12V9ZM4 13h8v2H4v-2Zm16 3-6-3v6l6-3Z"}"></path></svg>`;
});
export {
  Component as default
};
