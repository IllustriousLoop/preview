import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 320 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M311.9 260.8 160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4 8 290.6 160 512l152-221.4-152 92.8z"}"></path></svg>`;
});
export {
  Component as default
};
