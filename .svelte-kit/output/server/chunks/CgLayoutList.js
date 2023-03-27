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
  )}><path d="${"M9 7H7v2h2V7Zm-2 6v-2h2v2H7Zm0 2v2h2v-2H7Zm4 0v2h6v-2h-6Zm6-2v-2h-6v2h6Zm0-6v2h-6V7h6Z"}"></path></svg>`;
});
export {
  Component as default
};
