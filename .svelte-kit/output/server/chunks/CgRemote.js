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
  )}><path d="${"m17.051 4.322 1.415 1.414-4.243 4.243 4.243 4.242-1.415 1.415-5.656-5.657 5.656-5.657ZM6.949 19.678l-1.415-1.414 4.243-4.242-4.243-4.243L6.95 8.365l5.656 5.657-5.656 5.656Z"}"></path></svg>`;
});
export {
  Component as default
};
