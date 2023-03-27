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
  )}><path d="${"m15.781 12.953-4.712-4.712a.752.752 0 0 0-1.061 0l-.354.354L6.779 5.72 11.499 1h-5l-2.22 2.22-.22-.22H2.998v1.061l.22.22-3.22 3.22 2.5 2.5 3.22-3.22 2.875 2.875-.354.354a.752.752 0 0 0 0 1.061l4.712 4.712a.752.752 0 0 0 1.061 0l1.768-1.768a.752.752 0 0 0 0-1.061z"}"></path></svg>`;
});
export {
  Component as default
};
