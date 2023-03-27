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
  )}><path d="${"M11.37 9.593 8.779 7 1 14.778l2.593 2.593 7.778-7.778ZM15.222 7 23 14.778l-2.576 2.576-5.202-5.202-5.202 5.202-2.576-2.576L15.222 7Z"}"></path></svg>`;
});
export {
  Component as default
};
