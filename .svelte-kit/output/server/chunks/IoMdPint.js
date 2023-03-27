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
  )}><path d="${"m64 48 42.9 379.2c2.6 20.8 20.5 36.8 42.5 36.8h213.3c22 0 39.9-16 42.5-36.8L448 48H64zm327 124.8H121l-9.4-83.2h288.6l-9.2 83.2z"}"></path></svg>`;
});
export {
  Component as default
};
