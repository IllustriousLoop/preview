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
  )}><path d="${"M7 7h2v2H7V7Zm4 0h2v2h-2V7Zm6 0h-2v2h2V7ZM7 11h2v2H7v-2Zm6 0h-2v2h2v-2Zm2 0h2v2h-2v-2Zm-6 4H7v2h2v-2Zm2 0h2v2h-2v-2Zm6 0h-2v2h2v-2Z"}"></path></svg>`;
});
export {
  Component as default
};
