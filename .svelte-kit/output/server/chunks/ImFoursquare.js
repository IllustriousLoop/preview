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
  )}><path d="${"M13.306 1.408A1.001 1.001 0 0 0 12.5 1H3a1 1 0 0 0-1 1v12a1.002 1.002 0 0 0 .999 1 1 1 0 0 0 .707-.293L7.413 11h2.586a.999.999 0 0 0 .954-.702l2.5-8a.999.999 0 0 0-.149-.891zM10.515 5H7a1 1 0 0 0 0 2h2.89l-.625 2H7a.997.997 0 0 0-.707.293L4 11.586V3h7.14l-.625 2z"}"></path></svg>`;
});
export {
  Component as default
};
