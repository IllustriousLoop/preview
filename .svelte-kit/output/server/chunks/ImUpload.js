import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M7 9h2V5h3L8 1 4 5h3zm3-2.25v1.542L14.579 10 8 12.453 1.421 10 6 8.292V6.75L0 9v4l8 3 8-3V9z"}"></path></svg>`;
});
export {
  Component as default
};
