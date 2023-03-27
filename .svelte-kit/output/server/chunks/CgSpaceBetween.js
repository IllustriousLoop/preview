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
  )}><path d="${"M19 5h-4v14h4v-2h-2V7h2V5ZM5 5h4v14H5v-2h2V7H5V5Zm8 2v10h-2V7h2Z"}"></path></svg>`;
});
export {
  Component as default
};
