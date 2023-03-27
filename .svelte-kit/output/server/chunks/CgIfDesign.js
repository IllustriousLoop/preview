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
  )}><path d="${"M10 5h4v14h-4V5ZM5 19v-9h4v9H5ZM7 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0h4v4h-4V5Zm4 5h-4v4h4v-4Z"}"></path></svg>`;
});
export {
  Component as default
};
