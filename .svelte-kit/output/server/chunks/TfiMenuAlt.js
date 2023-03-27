import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M16 2v2H5V2h11zM5 9h11V7H5v2zm0 5h11v-2H5v2zM2 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"}"></path></svg>`;
});
export {
  Component as default
};
