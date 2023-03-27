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
  )}><path d="${"M5 9V7h2v2H5Zm4 0h10V7H9v2Zm-4 6v2h2v-2H5Zm14 2H9v-2h10v2Z"}"></path><path fill-rule="${"evenodd"}" d="${"M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6Zm3-1h16a1 1 0 0 1 1 1v5H3V6a1 1 0 0 1 1-1Zm-1 8v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5H3Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
