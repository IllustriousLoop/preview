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
  )}><path d="${"M0 3v11h16V3H0zm6 7V8h4v2H6zm4 1v2H6v-2h4zm0-6v2H6V5h4zM5 5v2H1V5h4zM1 8h4v2H1V8zm10 0h4v2h-4V8zm0-1V5h4v2h-4zM1 11h4v2H1v-2zm10 2v-2h4v2h-4z"}"></path></svg>`;
});
export {
  Component as default
};
