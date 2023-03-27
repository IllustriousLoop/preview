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
  )}><path d="${"M15 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}"></path></svg>`;
});
export {
  Component as default
};
