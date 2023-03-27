import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 20 20" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm9 4a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V7zm-3 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V9zm-3 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
