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
  )}><path d="${"M19.071 17v-2h-8v2h8Zm0-8V7h-8v2h8Z"}"></path><path d="${"M19.071 13v-2h-10V7.965l-4.071 4 4.071 4V13h10Z"}"></path></svg>`;
});
export {
  Component as default
};
