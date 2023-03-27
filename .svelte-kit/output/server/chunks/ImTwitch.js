import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M1.5 0 0 2.5V14h4v2h2l2-2h2.5L15 9.5V0H1.5zM13 8.5 10.5 11H8l-2 2v-2H3V2h10v6.5z"}"></path><path d="${"M9.5 4H11v4H9.5V4zm-3 0H8v4H6.5V4z"}"></path></svg>`;
});
export {
  Component as default
};
