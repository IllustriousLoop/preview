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
  )}><path fill-rule="${"evenodd"}" d="${"M17 10a5.002 5.002 0 0 1-4 4.9V17h2v2H9v-2h2v-2.1A5.002 5.002 0 0 1 7 10V5h10v5Zm-2-3H9v3a3 3 0 1 0 6 0V7Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
