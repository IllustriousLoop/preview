import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m196 16 60 60 60-60H196zm-30 90 90 90 90-90H166zm-30 120 120 120 120-120H136zm121.75 150.03A60 60 0 0 0 196 436a60 60 0 0 0 120 0 60 60 0 0 0-58.25-59.97z"}"></path></svg>`;
});
export {
  Component as default
};
