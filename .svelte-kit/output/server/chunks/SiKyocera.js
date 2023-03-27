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
  )}><path d="${"M9.677 4.645 2.323 12V4.645h7.354zm-7.354 14.71h7.355L2.323 12v7.355zm7.354 0L17.032 12 9.677 4.645v14.71zM21.677 0h-7.355L9.677 4.645h7.355V12l4.645-4.645V0zm-12 19.355L14.323 24h7.355v-7.355L17.032 12v7.355H9.677z"}"></path></svg>`;
});
export {
  Component as default
};
