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
  )}><path d="${"M18.964 7h-8v2h8V7ZM6 8.829v6.342L9.964 12 6 8.829ZM18.964 11h-8v2h8v-2Zm-8 4h8v2h-8v-2Z"}"></path></svg>`;
});
export {
  Component as default
};
