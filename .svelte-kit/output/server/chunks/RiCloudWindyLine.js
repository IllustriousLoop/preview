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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M14 18v-2h3.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-12 0v.007H1V10a8 8 0 0 1 15.458-2.901A5.5 5.5 0 1 1 17.5 18H14zm-8 2h10v2H6v-2zm0-8h8v2H6v-2zm-4 4h10v2H2v-2z"}"></path></svg>`;
});
export {
  Component as default
};
