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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M5.5 12H4V7H2V5h6v2H6v2.795l9.813-2.629L15.233 5H12V3h3.978a1 1 0 0 1 .988.741l1.553 5.796-1.932.517-.256-.956L5.5 12zM5 21a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm13 3a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}"></path></svg>`;
});
export {
  Component as default
};
