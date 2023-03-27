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
  )}><path d="${"m11.5 7-4 4-4-4H6V1h3v6zm-4 4H0v4h15v-4H7.5zm6.5 2h-2v-1h2v1z"}"></path></svg>`;
});
export {
  Component as default
};
