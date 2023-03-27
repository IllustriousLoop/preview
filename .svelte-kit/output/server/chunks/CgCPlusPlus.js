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
  )}><path d="${"M12.207 16.278a6 6 0 1 1 .071-8.485l1.414-1.414a8 8 0 1 0-.071 11.314l-1.414-1.415Z"}"></path><path d="${"M15 9h-2v2h-2v2h2v2h2v-2h2v-2h-2V9Zm5 0h2v2h2v2h-2v2h-2v-2h-2v-2h2V9Z"}"></path></svg>`;
});
export {
  Component as default
};
