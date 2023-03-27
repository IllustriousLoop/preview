import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 384 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M158.4 0 7 292h89.2l62.2-116.1L220.1 292h88.5zm150.2 292-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220z"}"></path></svg>`;
});
export {
  Component as default
};
