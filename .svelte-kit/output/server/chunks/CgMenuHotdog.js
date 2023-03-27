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
  )}><path d="${"M7 6a3 3 0 0 0-3 3h16a3 3 0 0 0-3-3H7Zm0 12a3 3 0 0 1-3-3h16a3 3 0 0 1-3 3H7Zm-4-7a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"}"></path></svg>`;
});
export {
  Component as default
};
