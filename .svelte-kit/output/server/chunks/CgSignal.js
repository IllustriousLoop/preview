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
  )}><path d="${"M15 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0V7Zm-8 8a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Zm5-5a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1Z"}"></path></svg>`;
});
export {
  Component as default
};
