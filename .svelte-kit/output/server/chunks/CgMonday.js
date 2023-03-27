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
  )}><path d="${"M6.779 6.14a3 3 0 0 1 4.915 3.44l-5.736 8.192a3 3 0 0 1-4.915-3.441l5.736-8.192Zm8.489.088a3 3 0 0 1 4.915 3.442l-5.736 8.191a3 3 0 0 1-4.915-3.441l5.736-8.192ZM20.5 18.86a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}"></path></svg>`;
});
export {
  Component as default
};
