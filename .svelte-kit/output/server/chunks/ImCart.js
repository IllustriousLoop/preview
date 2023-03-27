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
  )}><path d="${"M6 14.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 6 14.5zm10 0a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 16 14.5zM16 8V2H4a1 1 0 0 0-1-1H0v1h2l.751 6.438A2 2 0 0 0 4 12h12v-1H4a1 1 0 0 1-1-1v-.01L16 8z"}"></path></svg>`;
});
export {
  Component as default
};
