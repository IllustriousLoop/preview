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
  )}><path d="${"M7 5h2v8H7V5Zm8 0h2v8h-2V5Z"}"></path><path d="${"M11 5h2v10h3.035l-4 4.071-4-4.071H11V5Z"}"></path></svg>`;
});
export {
  Component as default
};
