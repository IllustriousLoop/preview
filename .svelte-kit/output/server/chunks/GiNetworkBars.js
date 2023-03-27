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
  )}><path d="${"M428.4 27.8v456.4h60.9V27.8h-60.9zM327 168.2v316h60.8v-316H327zM225.4 273.6v210.6h61V273.6h-61zM124 343.8v140.4h60.9V343.8H124zM22.67 394.9v89.3h60.84v-89.3H22.67z"}"></path></svg>`;
});
export {
  Component as default
};
