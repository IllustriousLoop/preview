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
  )}><path d="${"M5 3a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2H5Zm4 12a1 1 0 1 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9Z"}"></path><path fill-rule="${"evenodd"}" d="${"M4 14a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm8-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
