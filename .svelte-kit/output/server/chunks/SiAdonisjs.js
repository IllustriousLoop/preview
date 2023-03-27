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
  )}><path d="${"m13.333 1.333-.596 1.193-2.404 4.807L8 2.667l-8 16h4.667l-2 4H24zm0 2.982 8.51 17.018H4.823l1.334-2.666H16l-4.922-9.843Z"}"></path></svg>`;
});
export {
  Component as default
};
